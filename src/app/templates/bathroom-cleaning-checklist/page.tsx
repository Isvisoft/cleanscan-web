import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bathroom Cleaning Checklist for Businesses (Free Printable)",
  description:
    "Free bathroom cleaning checklist for businesses, employees, public restrooms, and commercial facilities. Includes daily, weekly, supplies, inspection, and sign-off tasks.",
  alternates: { canonical: "/templates/bathroom-cleaning-checklist/" },
};

const dailyTasks = [
  "Clean and disinfect toilets, urinals, seats, handles, and flush controls.",
  "Clean sinks, faucets, counters, splash zones, and soap dispensers.",
  "Clean mirrors and remove visible marks from glass and metal surfaces.",
  "Refill soap, toilet paper, paper towels, and other guest supplies.",
  "Empty trash and sanitary waste bins before they overflow.",
  "Sweep and mop floors, paying attention to corners and high-traffic zones.",
  "Check odor, ventilation, leaks, blocked drains, and visible maintenance issues.",
  "Clean high-touch points such as door handles, locks, switches, and dispensers.",
];

const weeklyTasks = [
  "Detail grout, edges, partitions, wall splash zones, and difficult-to-reach areas.",
  "Inspect dispensers, fixtures, drains, seals, and hardware for damage or buildup.",
  "Deep clean floor edges, baseboards, vents, and behind accessible fixtures.",
  "Review repeated supply shortages, maintenance issues, and missed checks.",
];

const rows = [
  ["Toilets / urinals", "Clean and disinfect fixtures and touchpoints", "Every service block / daily", "Assigned staff", "Shift lead"],
  ["Sinks / counters", "Clean sinks, faucets, counters, and dispensers", "Every service block / daily", "Assigned staff", "Shift lead"],
  ["Supplies", "Refill soap, tissue, towels, and liners", "Every check", "Assigned staff", "Visual check"],
  ["Floors", "Remove debris, spills, and visible buildup", "Every check / daily", "Assigned staff", "Manager review"],
  ["Trash", "Empty bins and replace liners", "Every check / as needed", "Assigned staff", "Visual check"],
  ["Maintenance", "Record leaks, broken fixtures, odors, or blocked drains", "As found", "Assigned staff", "Manager follow-up"],
];

const faqs = [
  ["What should be included in a bathroom cleaning checklist?", "Include fixtures, sinks, mirrors, supplies, trash, floors, high-touch surfaces, odor, maintenance issues, and a verification step."],
  ["How often should a workplace bathroom be cleaned?", "Frequency should depend on traffic, opening hours, service standards, and local requirements. High-traffic bathrooms may need checks several times per day."],
  ["Can employees use this checklist?", "Yes. Assign each task or time block to a clear role and add manager verification for critical checks."],
  ["Can I use this checklist digitally?", "Yes. CleanScan can turn the checklist into recurring tasks with assignments, completion history, overdue visibility, and QR-based cleaning status."],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Bathroom Cleaning Checklist for Businesses</h1>
        <p className="article-lead">
          Use this bathroom cleaning checklist for workplace, commercial, and public restrooms.
          It covers recurring cleaning, supplies, maintenance issues, sign-off, and manager verification.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/templates/restroom-cleaning-log/">View Restroom Cleaning Log</Link>
          <Link className="outline-cta" href="/solutions/restroom-quality-control/">Run Checks Digitally</Link>
        </div>

        <section>
          <h2>Commercial bathroom cleaning checklist</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr><th>Area</th><th>Task</th><th>Frequency</th><th>Owner</th><th>Verification</th></tr>
              </thead>
              <tbody>
                {rows.map(([area, task, frequency, owner, verification]) => (
                  <tr key={area}><td>{area}</td><td>{task}</td><td>{frequency}</td><td>{owner}</td><td>{verification}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Daily bathroom cleaning checklist</h2>
          <ul>{dailyTasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section>
          <h2>Weekly bathroom deep-clean checklist</h2>
          <ul>{weeklyTasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section>
          <h2>Checklist vs restroom cleaning log</h2>
          <p>
            This checklist defines what should be cleaned. A restroom cleaning log records when each check happened,
            what was found, and who verified it. For recurring public restroom checks, use both together.
          </p>
          <Link href="/templates/restroom-cleaning-log/">Open the restroom cleaning log template</Link>
        </section>

        <section>
          <h2>Bathroom cleaning checklist for employees</h2>
          <p>
            Keep employee-facing checklists short and specific. Assign one owner per check, define the expected frequency,
            and record exceptions such as missing supplies, leaks, odors, or maintenance issues instead of relying only on a signature.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Replace the bathroom sign-off sheet with a live cleaning record</h2>
          <p>
            CleanScan schedules restroom checks, tracks completion, records issues, and can show visitors when the space was last cleaned through a QR code.
          </p>
          <Link className="hero-cta" href="/solutions/restroom-quality-control/">See Restroom Quality Control</Link>
        </section>

        <section>
          <h2>Bathroom cleaning checklist FAQs</h2>
          <div className="faq-list">
            {faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>
      </article>
    </main>
  );
}
