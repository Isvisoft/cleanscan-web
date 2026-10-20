import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import PrintTemplateButton from "@/components/print-template-button";

export const metadata: Metadata = {
  title: "Commercial Cleaning Checklist (Free Printable)",
  description:
    "Free commercial cleaning checklist template for shared facilities, entrances, restrooms, floors and break rooms. Print the checklist or save it as a PDF.",
  alternates: { canonical: "/templates/commercial-cleaning-checklist/" },
};

const checklistRows = [
  ["Entrances & reception", "Clean door handles, entry glass, counters and frequently touched surfaces", "Daily / as needed", "Cleaning team"],
  ["Corridors & stairs", "Remove litter and clean floors, rails and touchpoints", "Daily / by traffic", "Cleaning team"],
  ["Elevators", "Check buttons, handrails, mirrors and floor condition", "Daily / by traffic", "Cleaning team"],
  ["Public restrooms", "Clean fixtures, sinks, floors, dispensers and high-touch points", "Each scheduled check", "Assigned cleaner"],
  ["Public restrooms", "Restock supplies, empty waste and report damage or leaks", "Each scheduled check", "Assigned cleaner"],
  ["Shared break area", "Clean counters, tables, sinks and shared appliance exteriors", "Daily / after heavy use", "Facilities team"],
  ["Meeting or waiting areas", "Wipe common tables, seating touchpoints and accessible surfaces", "Daily / between uses", "Assigned cleaner"],
  ["Waste stations", "Empty bins, replace liners and clean surrounding areas", "Daily / when needed", "Cleaning team"],
  ["Shared equipment", "Clean approved high-touch handles, switches and shared devices", "Daily / by traffic", "Assigned cleaner"],
  ["Floors & mats", "Remove visible debris and complete floor care appropriate to each surface", "Daily / as needed", "Cleaning team"],
  ["Storage & service areas", "Inspect spill-prone zones, shelving edges and supply organization", "Weekly", "Facilities team"],
  ["Detail cleaning", "Rotate skirting, corners, fixtures and other low-frequency areas", "Weekly / monthly", "Assigned cleaner"],
  ["Manager review", "Record unfinished tasks, exceptions and corrective action", "Every shift / daily", "Site supervisor"],
];

const dailyChecks = [
  "Confirm the busiest entrances, restrooms and shared touchpoints are on the day's task list.",
  "Assign each area to a named person or shift rather than a general team.",
  "Check that consumables, waste points and floor hazards have been addressed.",
  "Record problems that cannot be resolved immediately and who will follow up.",
];
const weeklyChecks = [
  "Rotate detailed cleaning of edges, fixtures, storage areas and less frequently used rooms.",
  "Review repeated misses or supply shortages and adjust tasks or ownership.",
  "Check whether high-traffic areas need a more frequent daily schedule.",
];
const faqs = [
  {
    question: "What is included in a commercial cleaning checklist?",
    answer: "Include the location or zone, cleaning task, suggested frequency, responsible role, completion record and exception notes. Entrances, shared areas, restrooms, floors and waste points are common starting areas.",
  },
  {
    question: "How often should a commercial building be cleaned?",
    answer: "There is no single frequency for every building. Base the schedule on foot traffic, how each area is used, surface and equipment instructions, and applicable local requirements. Review it when occupancy or use changes.",
  },
  {
    question: "Can I print this commercial cleaning checklist?",
    answer: "Yes. Use the print button to print the checklist table or choose Save as PDF in your browser's print dialog. No account is required.",
  },
  {
    question: "Is this the same as an office cleaning checklist?",
    answer: "Not exactly. This checklist covers shared commercial facilities generally. The office cleaning checklist focuses on workstations, meeting rooms, office kitchens and shared office equipment.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap seo-template-page">
        <p className="article-kicker">Free Facilities Template</p>
        <h1>Commercial Cleaning Checklist (Free Printable Template)</h1>
        <p className="article-lead">
          Use this commercial cleaning checklist to plan and record routine cleaning across
          shared facilities, public areas, entrances and restrooms. It is designed for site
          managers and cleaning teams who need clear tasks, owners and checks, not a house-cleaning list.
        </p>
        <div className="hero-actions article-actions">
          <PrintTemplateButton label="Print Checklist / Save as PDF" />
          <a className="outline-cta" href="#commercial-cleaning-checklist">View the Checklist</a>
          <Link className="outline-cta" href="/templates/office-cleaning-checklist/">
            Office-Specific Checklist
          </Link>
        </div>
        <p>Free to use. Adjust the examples to your building and local procedures before assigning them.</p>

        <section id="commercial-cleaning-checklist" className="template-print-area">
          <h2>Printable commercial cleaning checklist by area</h2>
          <p>
            Copy this table into your cleaning plan or print it for a shift. Frequencies are
            examples, not mandatory standards: adjust them to occupancy, risk and local requirements.
          </p>
          <p className="print-only">Site: ____________________ Date / shift: ____________________ Supervisor: ____________________</p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Cleaning task</th>
                  <th scope="col">Example frequency</th>
                  <th scope="col">Responsible role</th>
                  <th scope="col">Done</th>
                </tr>
              </thead>
              <tbody>
                {checklistRows.map(([area, task, frequency, role]) => (
                  <tr key={area + task}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{frequency}</td>
                    <td>{role}</td>
                    <td aria-label="Unchecked">□</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="print-only">Exceptions / corrective action: ___________________________________________________________</p>
          <p className="print-only">Checked by: ____________________ Manager sign-off: ____________________</p>
        </section>

        <section>
          <h2>Daily commercial cleaning checklist</h2>
          <p>
            The daily routine should prioritize busy shared spaces and any issue affecting people
            using the building. An effective checklist makes ownership and follow-up visible.
          </p>
          <ul>{dailyChecks.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section>
          <h2>Weekly and monthly commercial cleaning tasks</h2>
          <p>
            Lower-frequency tasks still need a responsible person and a planned date.
            Avoid putting every deep-cleaning activity on the daily list, where it may be ignored.
          </p>
          <ul>{weeklyChecks.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>
            A monthly supervisor review can help identify which zones repeatedly need extra
            attention, whether the cleaning schedule matches actual use and which tasks need clearer instructions.
          </p>
        </section>

        <section>
          <h2>How to adapt the checklist to your facility</h2>
          <ol>
            <li>List the areas that visitors, staff or customers use, including shared restrooms and service areas.</li>
            <li>Define a specific cleaning task for each area rather than writing only "clean room".</li>
            <li>Set frequency based on occupancy, traffic and the surface or equipment involved.</li>
            <li>Assign a shift or person and include a simple completion or exception record.</li>
            <li>Review missed work, recurring issues and any changes to the building layout.</li>
          </ol>
          <p>
            For offices with desks, meeting rooms and shared work equipment, use the dedicated{" "}
            <Link href="/templates/office-cleaning-checklist/">office cleaning checklist</Link>.
            For restaurants, the{" "}
            <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link>{" "}
            covers kitchen, dining and service-specific tasks instead.
          </p>
        </section>

        <section>
          <h2>Commercial cleaning checklist versus a cleaning schedule</h2>
          <p>
            A checklist tells staff what to clean and what to verify. A schedule defines the
            shift, day or recurring interval when the work should happen. Keep both together,
            particularly when several people or contractors share an area.
          </p>
          <p>
            If you want to manage recurring tasks and completion digitally, see{" "}
            <Link href="/cleaning-management-software/">cleaning management software</Link>{" "}
            or the <Link href="/cleaning-checklist-app/">cleaning checklist app</Link>.
          </p>
        </section>

        <section>
          <h2>Commercial cleaning checklist FAQs</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="article-cta-box">
          <h2>Use this checklist across multiple spaces</h2>
          <p>
            CleanScan supports recurring cleaning checklists, task assignments, completion
            history and manager visibility across different monitored areas.
          </p>
          <Link className="hero-cta" href="/cleaning-management-software/">Explore Cleaning Management Software</Link>
        </section>
      </article>
    </main>
  );
}
