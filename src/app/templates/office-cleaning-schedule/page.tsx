import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Office Cleaning Schedule Template: Daily, Weekly & Monthly",
  description:
    "Free office cleaning schedule template with daily, weekly, and monthly cleaning by area. Plan reception, workspaces, kitchens, restrooms, floors, waste, and deep cleaning.",
  alternates: { canonical: "/templates/office-cleaning-schedule/" },
};

const rows = [
  ["Reception / entry", "Clean visible surfaces, glass, handles, mats, and floors", "Daily"],
  ["Workstations", "Clean shared desks and touchpoints", "Daily / scheduled"],
  ["Meeting rooms", "Reset and clean tables, chairs, screens, and touchpoints", "Daily / after use"],
  ["Kitchen / break room", "Clean counters, sinks, tables, appliances, and waste", "Daily"],
  ["Restrooms", "Clean fixtures, refill supplies, check floors and waste", "Multiple checks / daily"],
  ["Floors", "Vacuum, sweep, or mop by zone", "Daily"],
  ["Waste", "Empty bins and replace liners", "Daily"],
  ["Detail cleaning", "Edges, vents, baseboards, upholstery, low-use areas", "Weekly"],
  ["Manager review", "Review misses, complaints, incidents, and schedule changes", "Weekly"],
  ["Deep cleaning", "Rotate larger periodic cleaning tasks", "Monthly"],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Schedule Template</p>
        <h1>Office Cleaning Schedule Template</h1>
        <p className="article-lead">
          Organize office cleaning by area and frequency so daily work, weekly detail cleaning,
          restroom checks, and monthly tasks do not depend on memory or one generic list.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/cleaning-schedule-app/">Run the Schedule Digitally</Link>
          <Link className="outline-cta" href="/templates/office-cleaning-checklist/">View Office Cleaning Checklist</Link>
        </div>

        <section>
          <h2>Daily, weekly, and monthly office cleaning schedule</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Area</th><th>Task block</th><th>Frequency</th></tr></thead>
              <tbody>
                {rows.map(([area,task,frequency]) => (
                  <tr key={area}><td>{area}</td><td>{task}</td><td>{frequency}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How to build an office cleaning schedule</h2>
          <ol>
            <li>List every cleanable area in the workplace.</li>
            <li>Separate high-traffic spaces from low-traffic spaces.</li>
            <li>Assign a realistic cleaning frequency to each area.</li>
            <li>Give each task block a clear owner.</li>
            <li>Review missed work and adjust the schedule based on actual usage.</li>
          </ol>
        </section>

        <section>
          <h2>Office cleaning schedule vs checklist</h2>
          <p>
            The checklist defines what should be done. The schedule defines when and how often it happens.
            Use the <Link href="/templates/office-cleaning-checklist/">office cleaning checklist</Link> to define the work,
            then schedule it by day, week, month, shift, or time block.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Manage recurring office cleaning without spreadsheets</h2>
          <p>
            CleanScan turns the schedule into recurring tasks with completion history, overdue visibility, and cleaning metrics by space.
          </p>
          <Link className="hero-cta" href="/cleaning-schedule-app/">See Cleaning Schedule App</Link>
        </section>
      </article>
    </main>
  );
}
