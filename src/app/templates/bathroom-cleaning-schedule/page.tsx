import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bathroom Cleaning Schedule Template for Workplaces & Businesses",
  description:
    "Free bathroom cleaning schedule template for workplaces, public restrooms, and commercial facilities. Plan checks by time block, shift, daily, and weekly frequency.",
  alternates: { canonical: "/templates/bathroom-cleaning-schedule/" },
};

const rows = [
  ["Opening", "Inspect fixtures, floor, odor, trash, and supplies", "Before opening", "Opening staff"],
  ["Service block 1", "Clean high-touch points and refill supplies", "Mid-morning", "Assigned staff"],
  ["Service block 2", "Check toilets, sinks, floor, trash, and odor", "Midday", "Assigned staff"],
  ["Service block 3", "Repeat condition and supply check", "Afternoon", "Assigned staff"],
  ["Closing", "Full clean, restock, mop floor, record issues", "End of day", "Closing staff"],
  ["Deep clean", "Detail grout, partitions, vents, edges, and fixtures", "Weekly", "Cleaning team"],
  ["Manager review", "Review missed checks and recurring issues", "Weekly", "Manager"],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Schedule Template</p>
        <h1>Bathroom Cleaning Schedule Template for Workplaces & Businesses</h1>
        <p className="article-lead">
          Build a restroom cleaning schedule around traffic and operating hours instead of relying on one end-of-day clean.
          Use time blocks, shifts, daily tasks, and weekly deep cleaning.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/cleaning-schedule-app/">Run the Schedule Digitally</Link>
          <Link className="outline-cta" href="/templates/bathroom-cleaning-checklist/">View Bathroom Checklist</Link>
          <Link className="outline-cta" href="/templates/restroom-cleaning-log/">View Restroom Log</Link>
        </div>

        <section>
          <h2>Printable bathroom cleaning schedule</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Moment</th><th>Task block</th><th>Frequency</th><th>Owner</th></tr></thead>
              <tbody>
                {rows.map(([moment,task,frequency,owner]) => (
                  <tr key={moment}><td>{moment}</td><td>{task}</td><td>{frequency}</td><td>{owner}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How often should bathrooms be checked?</h2>
          <p>
            High-traffic bathrooms may need checks multiple times per day. Lower-traffic spaces may use wider intervals.
            The schedule should reflect actual traffic, service hours, complaint history, and internal standards.
          </p>
        </section>

        <section>
          <h2>Bathroom cleaning schedule vs checklist</h2>
          <p>
            The checklist defines what staff should inspect and clean. The schedule defines when those checks happen.
            Pair this schedule with the <Link href="/templates/bathroom-cleaning-checklist/">bathroom cleaning checklist</Link> and the
            <Link href="/templates/restroom-cleaning-log/"> restroom cleaning log</Link>.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Stop rebuilding bathroom schedules on paper</h2>
          <p>
            CleanScan turns each time block into a recurring task, tracks missed checks, and keeps a digital history for every monitored restroom.
          </p>
          <Link className="hero-cta" href="/cleaning-schedule-app/">See Cleaning Schedule App</Link>
        </section>
      </article>
    </main>
  );
}
