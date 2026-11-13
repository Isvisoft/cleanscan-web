import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public", "downloads");
fs.mkdirSync(outDir, { recursive: true });

const C = {
  heading: [0.063, 0.133, 0.208],
  text: [0.204, 0.314, 0.416],
  muted: [0.31, 0.416, 0.514],
  teal: [0.106, 0.749, 0.702],
  purple: [0.251, 0.078, 0.961],
  line: [0.863, 0.906, 0.941],
  pale: [0.957, 0.984, 0.984],
};

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function rgb(c) {
  return `${c[0]} ${c[1]} ${c[2]}`;
}

function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

class PageCanvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ops = [];
  }

  line(x1, y1, x2, y2, w = 0.6, color = C.line) {
    this.ops.push(`${rgb(color)} RG ${w} w ${x1} ${y1} m ${x2} ${y2} l S`);
  }

  rect(x, y, w, h, { stroke = C.line, fill = null, lineWidth = 0.6 } = {}) {
    if (fill) this.ops.push(`${rgb(fill)} rg ${x} ${y} ${w} ${h} re f`);
    if (stroke) this.ops.push(`${rgb(stroke)} RG ${lineWidth} w ${x} ${y} ${w} ${h} re S`);
  }

  text(x, y, text, size = 9, font = "F1", color = C.text) {
    this.ops.push(`BT ${rgb(color)} rg /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${esc(text)}) Tj ET`);
  }

  wrappedText(x, y, text, maxChars, size = 8, font = "F1", color = C.text, leading = size + 2) {
    const lines = wrap(text, maxChars);
    lines.forEach((line, i) => this.text(x, y - i * leading, line, size, font, color));
    return lines.length;
  }

  header() {
    this.text(34, this.height - 24, "CleanScan", 10, "F2", C.heading);
    this.rect(83, this.height - 21, 5, 5, { stroke: null, fill: C.teal });
    this.text(this.width - 170, this.height - 24, "Free printable cleaning template", 7, "F1", C.muted);
    this.line(34, this.height - 32, this.width - 34, this.height - 32, 0.5, C.line);
    this.line(34, 27, this.width - 34, 27, 0.5, C.line);
    this.text(34, 16, "cleanscan.site", 7, "F1", C.muted);
    this.text(this.width - 60, 16, "Page 1", 7, "F1", C.muted);
  }

  title(kicker, title, subtitle) {
    this.text(34, this.height - 52, kicker.toUpperCase(), 8, "F2", C.purple);
    this.text(34, this.height - 78, title, 20, "F2", C.heading);
    this.wrappedText(34, this.height - 96, subtitle, 105, 8.5, "F1", C.muted, 11);
  }

  field(y, label, x2 = 160) {
    this.text(34, y, label, 7.5, "F2", C.heading);
    this.line(x2, y - 1, this.width - 34, y - 1, 0.5, C.line);
  }

  sectionTitle(y, title) {
    this.text(34, y, title, 12, "F2", C.heading);
  }

  table({ x = 34, y, headers, rows, widths, font = 6.7, rowMin = 18, headerH = 21 }) {
    const total = widths.reduce((a, b) => a + b, 0);
    this.rect(x, y - headerH, total, headerH, { stroke: C.line, fill: C.pale });

    let xx = x;
    headers.forEach((header, i) => {
      this.text(xx + 4, y - 14, header, font, "F2", C.purple);
      xx += widths[i];
    });

    this.line(x, y - headerH, x + total, y - headerH, 0.6, C.line);
    xx = x;
    for (const width of widths) {
      this.line(xx, y, xx, y - headerH, 0.5, C.line);
      xx += width;
    }
    this.line(x + total, y, x + total, y - headerH, 0.5, C.line);
    this.line(x, y, x + total, y, 0.5, C.line);

    let cy = y - headerH;

    for (const row of rows) {
      const wraps = row.map((cell, i) =>
        wrap(cell, Math.max(6, Math.floor(widths[i] / (font * 0.52))))
      );
      const maxLines = Math.max(...wraps.map((lines) => lines.length));
      const rh = Math.max(rowMin, 8 + maxLines * (font + 1.7));

      this.rect(x, cy - rh, total, rh, { stroke: C.line, fill: null });

      let cx = x;
      row.forEach((cell, i) => {
        wraps[i].forEach((line, j) =>
          this.text(cx + 4, cy - 11 - j * (font + 1.7), line, font, "F1", C.text)
        );
        cx += widths[i];
      });

      cx = x;
      for (const width of widths) {
        this.line(cx, cy, cx, cy - rh, 0.5, C.line);
        cx += width;
      }
      this.line(x + total, cy, x + total, cy - rh, 0.5, C.line);
      cy -= rh;
    }

    return cy;
  }

  notes(y, label = "Notes / issues / corrective action", h = 38) {
    this.rect(34, y - h, this.width - 68, h, { stroke: C.line, fill: null });
    this.rect(34, y - 16, this.width - 68, 16, { stroke: C.line, fill: C.pale });
    this.text(39, y - 11, label, 7, "F2", C.heading);
    return y - h;
  }

  stream() {
    return this.ops.join("\n");
  }
}

function buildPdf(width, height, drawFn, fileName) {
  const page = new PageCanvas(width, height);
  page.header();
  drawFn(page);

  const stream = page.stream();
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xref = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  fs.writeFileSync(path.join(outDir, fileName), Buffer.from(pdf, "latin1"));
}

const landscape = [792, 612];
const portrait = [612, 792];

buildPdf(...landscape, (p) => {
  p.title(
    "Free printable template",
    "Restaurant Cleaning Checklist",
    "Daily, weekly and recurring cleaning tasks for kitchens, dining rooms, bars, restrooms, storage, waste areas and manager review."
  );
  p.field(487, "Restaurant / location");
  p.field(471, "Date");
  p.field(455, "Shift");
  p.field(439, "Manager");
  p.sectionTitle(414, "Master checklist");

  const rows = [
    ["Kitchen", "Clean and sanitize prep surfaces", "Daily", "Kitchen staff", ""],
    ["Kitchen", "Check sanitizer solution and cleaning supplies", "Every shift", "Kitchen staff", ""],
    ["Kitchen", "Clean sink areas and splash zones", "Daily", "BOH staff", ""],
    ["Cookline", "Wipe handles, controls and equipment fronts", "Every shift", "Kitchen staff", ""],
    ["Dining room", "Wipe tables, chairs and guest-contact surfaces", "Every shift", "FOH staff", ""],
    ["Dining room", "Check floors for spills and debris", "Every service block", "FOH staff", ""],
    ["Bar", "Wipe taps, counters, trays and POS touchpoints", "Every shift", "Bar staff", ""],
    ["Restrooms", "Clean fixtures and restock supplies", "Every service block", "Assigned staff", ""],
    ["Restrooms", "Check odor, floor condition and supplies", "Every service block", "Assigned staff", ""],
    ["Waste area", "Empty trash and replace liners", "Daily", "Closing team", ""],
    ["Storage", "Wipe shelves and inspect spill-prone areas", "Weekly", "BOH staff", ""],
    ["High-touch", "Clean handles, switches, kiosks and payment devices", "Every shift", "Assigned staff", ""],
    ["Manager review", "Review missed tasks and corrective actions", "Weekly", "Manager", ""],
  ];

  let y = p.table({
    y: 400,
    headers: ["Area", "Cleaning task", "Frequency", "Owner", "Done"],
    rows,
    widths: [78, 310, 92, 105, 55],
    font: 6.4,
    rowMin: 17,
  });

  y = p.notes(y - 8, "Notes / issues / corrective action", 34);
  p.field(y - 18, "Completed by", 110);
  p.field(y - 34, "Verified by", 110);
}, "restaurant-cleaning-checklist.pdf");

buildPdf(...portrait, (p) => {
  p.title(
    "Free printable template",
    "Restroom Cleaning Log",
    "Printable restroom / washroom / bathroom cleaning log for recurring public-area checks, supplies, issues and verification."
  );
  p.field(646, "Location / restroom", 138);
  p.field(630, "Date", 138);
  p.field(614, "Shift / opening hours", 138);
  p.field(598, "Supervisor", 138);
  p.sectionTitle(573, "Cleaning log");

  const times = ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
  const rows = times.map((time) => [
    time,
    "Fixtures / sinks / mirrors / floor / trash",
    "Soap / tissue / towels",
    "",
    "",
    "",
  ]);

  let y = p.table({
    y: 558,
    headers: ["Time", "Tasks checked", "Supplies", "Issue found", "Corrective action", "Initials"],
    rows,
    widths: [38, 150, 78, 82, 105, 53],
    font: 5.8,
    rowMin: 18,
  });

  p.sectionTitle(y - 21, "Quick restroom checklist");
  const quick = [
    "Toilets / urinals clean",
    "Sinks and counters clean",
    "Mirrors clean",
    "Soap refilled",
    "Paper supplies refilled",
    "Trash emptied",
    "Floor clean and dry",
    "Odor acceptable",
    "Maintenance issues recorded",
    "Manager verification completed",
  ].map((item) => ["", item]);

  y = p.table({
    y: y - 35,
    headers: ["Done", "Check"],
    rows: quick,
    widths: [52, 454],
    font: 6.5,
    rowMin: 16,
  });

  y = p.notes(y - 8, "Notes / issues / corrective action", 32);
  p.field(y - 18, "Manager sign-off", 120);
}, "restroom-cleaning-log.pdf");

buildPdf(...landscape, (p) => {
  p.title(
    "Free printable template",
    "Commercial Cleaning Checklist",
    "Printable checklist for shared commercial facilities, public areas, entrances, restrooms, floors, waste points and supervisor review."
  );
  p.field(487, "Site");
  p.field(471, "Date / shift");
  p.field(455, "Supervisor");
  p.sectionTitle(428, "Commercial facility checklist");

  const rows = [
    ["Entrances & reception", "Clean handles, entry glass, counters and visible touchpoints", "Daily / as needed", "Cleaning team", ""],
    ["Corridors & stairs", "Remove litter; clean floors, rails and touchpoints", "Daily / by traffic", "Cleaning team", ""],
    ["Elevators", "Check buttons, rails, mirrors and floor condition", "Daily / by traffic", "Cleaning team", ""],
    ["Public restrooms", "Clean fixtures, sinks, floors, dispensers and touchpoints", "Each scheduled check", "Assigned cleaner", ""],
    ["Public restrooms", "Restock supplies, empty waste and report leaks / damage", "Each scheduled check", "Assigned cleaner", ""],
    ["Break area", "Clean counters, tables, sinks and appliance exteriors", "Daily / after heavy use", "Facilities team", ""],
    ["Waiting areas", "Wipe tables, seating touchpoints and shared surfaces", "Daily / between uses", "Assigned cleaner", ""],
    ["Waste stations", "Empty bins, replace liners and clean surrounding area", "Daily / when needed", "Cleaning team", ""],
    ["Shared equipment", "Clean approved handles, switches and shared controls", "Daily / by traffic", "Assigned cleaner", ""],
    ["Floors & mats", "Remove debris and perform suitable floor care", "Daily / as needed", "Cleaning team", ""],
    ["Storage & service", "Inspect spills, shelf edges and supply organization", "Weekly", "Facilities team", ""],
    ["Detail cleaning", "Rotate edges, fixtures and low-frequency areas", "Weekly / monthly", "Assigned cleaner", ""],
    ["Manager review", "Record unfinished tasks, exceptions and corrective action", "Every shift / daily", "Supervisor", ""],
  ];

  let y = p.table({
    y: 414,
    headers: ["Area", "Cleaning task", "Frequency", "Responsible role", "Done"],
    rows,
    widths: [95, 300, 105, 110, 45],
    font: 6.2,
    rowMin: 17,
  });

  y = p.notes(y - 8, "Notes / issues / corrective action", 34);
  p.field(y - 18, "Checked by", 105);
  p.field(y - 34, "Manager sign-off", 105);
}, "commercial-cleaning-checklist.pdf");

buildPdf(...landscape, (p) => {
  p.title(
    "Free printable template",
    "Office Cleaning Checklist",
    "Printable daily and weekly checklist for reception, workstations, meeting rooms, office kitchens, restrooms, common areas, floors and waste."
  );
  p.field(487, "Office / floor");
  p.field(471, "Date");
  p.field(455, "Shift");
  p.field(439, "Site lead");
  p.sectionTitle(414, "Office checklist");

  const rows = [
    ["Reception", "Clean entry counters, handles and visitor touchpoints", "Daily / as needed", "Cleaning team", ""],
    ["Shared workstations", "Clean accessible desk surfaces according to site policy", "Daily / scheduled", "Assigned cleaner", ""],
    ["Shared devices", "Clean approved printer / device touchpoints", "Daily / by use", "Assigned cleaner", ""],
    ["Meeting rooms", "Wipe tables, chair touchpoints and controls; remove waste", "After use / daily", "Facilities team", ""],
    ["Office kitchen", "Clean counters, sinks, tables and appliance exteriors", "Daily / after use", "Cleaning team", ""],
    ["Restrooms", "Clean fixtures, mirrors, floors and touchpoints", "Scheduled checks", "Assigned cleaner", ""],
    ["Restrooms", "Check soap, paper supplies, bins and reported issues", "Scheduled checks", "Assigned cleaner", ""],
    ["Breakout spaces", "Clean shared surfaces, tables and high-touch points", "Daily / as needed", "Cleaning team", ""],
    ["Corridors & lift", "Clean rails, lift controls, doors and floors", "Daily / by traffic", "Cleaning team", ""],
    ["Floors", "Vacuum carpets and clean hard floors appropriately", "Daily / by traffic", "Cleaning team", ""],
    ["Waste & recycling", "Empty bins, replace liners and inspect sorting points", "Daily / as needed", "Cleaning team", ""],
    ["Storage & cabinets", "Wipe permitted shared surfaces and inspect spills", "Weekly", "Facilities team", ""],
    ["Detail cleaning", "Rotate skirting, fixture edges and low-use areas", "Weekly / monthly", "Assigned cleaner", ""],
    ["Supervisor review", "Record unresolved maintenance or supply issues", "Daily / each shift", "Site lead", ""],
  ];

  let y = p.table({
    y: 400,
    headers: ["Office area", "Cleaning task", "Frequency", "Assigned role", "Done"],
    rows,
    widths: [100, 300, 105, 110, 45],
    font: 6.1,
    rowMin: 16,
  });

  y = p.notes(y - 7, "Notes / issues / corrective action", 32);
  p.field(y - 17, "Completed by", 105);
  p.field(y - 33, "Verified by", 105);
}, "office-cleaning-checklist.pdf");

buildPdf(...portrait, (p) => {
  p.title(
    "Free printable template",
    "Hotel Housekeeping Checklist",
    "Guest-room turnover and public-area cleaning checklist covering bedroom, bathroom, amenities, waste, floors, maintenance issues and final inspection."
  );
  p.field(646, "Hotel / property", 130);
  p.field(630, "Room / area", 130);
  p.field(614, "Date", 130);
  p.field(598, "Housekeeper", 130);
  p.field(582, "Inspector", 130);
  p.sectionTitle(555, "Guest-room turnover checklist");

  const rows = [
    ["Entry / bedroom", "Inspect visible cleanliness, furniture, switches and handles", ""],
    ["Bed area", "Replace linen; inspect mattress area; reset pillows and bedding", ""],
    ["Bathroom", "Clean toilet, shower, sink, mirror, fixtures and floor", ""],
    ["Amenities", "Restock towels, toiletries, tissue, cups and guest supplies", ""],
    ["Waste", "Empty bins and replace liners", ""],
    ["Floor", "Vacuum, sweep or mop according to surface", ""],
    ["Maintenance", "Record damage, leaks, lighting, HVAC or fixture issues", ""],
    ["Final inspection", "Verify room condition and readiness before release", ""],
  ];

  let y = p.table({
    y: 540,
    headers: ["Area", "Housekeeping task", "Done"],
    rows,
    widths: [110, 350, 46],
    font: 6.5,
    rowMin: 19,
  });

  p.sectionTitle(y - 22, "Public-area checks");
  const publicRows = [
    "Lobby / entrance touchpoints",
    "Guest restrooms",
    "Elevator buttons / shared controls",
    "Corridors / high-traffic floors",
    "Breakfast / shared dining areas",
    "Gym / wellness areas",
    "Meeting / event spaces",
  ].map((item) => ["", item]);

  y = p.table({
    y: y - 36,
    headers: ["Done", "Public area"],
    rows: publicRows,
    widths: [52, 454],
    font: 6.5,
    rowMin: 17,
  });

  y = p.notes(y - 8, "Maintenance / missing supplies / follow-up", 32);
  p.field(y - 18, "Housekeeper sign-off", 135);
  p.field(y - 34, "Inspector sign-off", 135);
}, "hotel-housekeeping-checklist.pdf");

console.log("Generated 5 CleanScan template PDFs in public/downloads");
