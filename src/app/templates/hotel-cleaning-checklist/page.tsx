import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Hotel Cleaning & Housekeeping Checklist (Free Template)",
  description:
    "Free hotel cleaning and housekeeping checklist for guest rooms, bathrooms, public areas, turnover, supplies, inspections, and manager verification.",
  alternates: { canonical: "/templates/hotel-cleaning-checklist/" },
};

const roomRows = [
  ["Entry / bedroom", "Inspect visible cleanliness, surfaces, furniture, switches, and handles", "Every turnover"],
  ["Bed area", "Replace linen, inspect mattress area, reset pillows and bedding", "Every turnover"],
  ["Bathroom", "Clean and disinfect toilet, shower, sink, mirror, fixtures, and floor", "Every turnover"],
  ["Amenities", "Restock towels, toiletries, tissue, cups, and guest supplies", "Every turnover"],
  ["Waste", "Empty bins and replace liners", "Every turnover"],
  ["Floor", "Vacuum, sweep, or mop according to surface", "Every turnover"],
  ["Maintenance", "Report damage, leaks, lighting, HVAC, or fixture issues", "As found"],
  ["Final inspection", "Verify room condition and readiness before release", "Every turnover"],
];

const publicAreaTasks = [
  "Lobby and entrance touchpoints",
  "Guest restrooms",
  "Elevator buttons and shared controls",
  "Corridors and high-traffic floors",
  "Breakfast or shared dining areas",
  "Gym or wellness areas",
  "Meeting and event spaces",
];

const faqs = [
  ["What should be on a hotel housekeeping checklist?", "Include guest room reset, bathroom cleaning, linen, amenities, waste, floors, maintenance issues, and a final readiness inspection."],
  ["Is a hotel room cleaning checklist the same as a housekeeping checklist?", "They overlap heavily. A room checklist focuses on guest-room turnover, while a broader housekeeping checklist can also include public areas and recurring non-room work."],
  ["Should housekeeping record maintenance issues?", "Yes. Cleaning often reveals leaks, broken fixtures, lighting problems, damage, or missing equipment that should be escalated before the room is released."],
  ["Can hotel housekeeping checklists be digital?", "Yes. CleanScan can schedule cleaning by room or space, track completion, record issues, and give managers a live view of cleaning status."],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Hotel Template</p>
        <h1>Hotel Cleaning & Housekeeping Checklist</h1>
        <p className="article-lead">
          Use this hotel housekeeping checklist for guest-room turnover, bathrooms, amenities,
          maintenance issues, final inspection, and recurring cleaning in public areas.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/cleaning-checklist-app/">Use the Checklist Digitally</Link>
          <Link className="outline-cta" href="/cleaning-management-software/">See Cleaning Management Software</Link>
        </div>

        <section>
          <h2>Hotel room cleaning checklist</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Area</th><th>Housekeeping task</th><th>Frequency</th></tr></thead>
              <tbody>
                {roomRows.map(([area,task,frequency]) => (
                  <tr key={area}><td>{area}</td><td>{task}</td><td>{frequency}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Hotel housekeeping checklist for public areas</h2>
          <ul>{publicAreaTasks.map((task) => <li key={task}>{task}</li>)}</ul>
          <p>
            Public areas need their own recurring frequencies because they are not tied to room turnover.
            High-traffic guest restrooms, lobby touchpoints, elevators, and shared facilities may need multiple checks per day.
          </p>
        </section>

        <section>
          <h2>Housekeeping inspection before releasing a room</h2>
          <p>
            The final check should confirm cleanliness, supplies, visible defects, maintenance issues,
            and room readiness. Keep exceptions separate from completed cleaning so managers can follow up before the next guest arrives.
          </p>
        </section>

        <section>
          <h2>Hotel cleaning checklist vs room maintenance checklist</h2>
          <p>
            Cleaning verifies hygiene and presentation. Maintenance tracks technical condition and repairs.
            Housekeeping should still record issues it discovers so they can be escalated before the room is released.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Track housekeeping by room and shared space</h2>
          <p>
            CleanScan can manage recurring cleaning tasks, completion records, and issue follow-up by monitored space without relying on paper sheets.
          </p>
          <Link className="hero-cta" href="/cleaning-management-software/">See Cleaning Management Software</Link>
        </section>

        <section>
          <h2>Hotel cleaning checklist FAQs</h2>
          <div className="faq-list">
            {faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>
      </article>
    </main>
  );
}
