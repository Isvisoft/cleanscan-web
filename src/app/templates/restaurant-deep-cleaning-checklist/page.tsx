import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Deep Cleaning Checklist: Free Template",
  description:
    "Free restaurant deep cleaning checklist for kitchens, dining areas, bars, restrooms, storage, equipment, floors, walls, drains, and manager review.",
  alternates: { canonical: "/templates/restaurant-deep-cleaning-checklist/" },
};

const rows = [
  ["Kitchen equipment", "Clean equipment sides, lower panels, wheels, and hard-to-reach exterior areas", "Weekly rotation", "BOH staff"],
  ["Cookline", "Detail splash zones, edges, wall contact areas, and under-equipment zones", "Weekly rotation", "Kitchen staff"],
  ["Drains", "Clean and inspect drain areas and surrounding floor edges", "Weekly", "Assigned staff"],
  ["Storage", "Empty selected shelves, wipe surfaces, and reset organization", "Weekly / monthly", "BOH staff"],
  ["Dining room", "Detail chair legs, table bases, edges, fixtures, and low-contact surfaces", "Weekly", "FOH staff"],
  ["Bar", "Detail shelves, lower panels, under-equipment areas, and storage zones", "Weekly", "Bar staff"],
  ["Restrooms", "Detail edges, partitions, vents, fixtures, and hard-to-reach surfaces", "Weekly", "Assigned staff"],
  ["Floors", "Deep clean corners, edges, mats, transitions, and difficult floor zones", "Weekly", "Closing team"],
  ["Walls and doors", "Clean buildup on doors, frames, walls, and touch-adjacent areas", "Monthly", "Assigned staff"],
  ["Manager review", "Verify rotation completion and reschedule missed deep-clean tasks", "Weekly", "Manager"],
];

const faq = [
  {
    question: "What is included in a restaurant deep cleaning checklist?",
    answer:
      "A deep cleaning checklist covers areas that routine shift cleaning can miss, including equipment sides, lower panels, under-equipment zones, drains, storage shelves, floor edges, walls, doors, fixtures, and detailed restroom or bar areas.",
  },
  {
    question: "How often should a restaurant be deep cleaned?",
    answer:
      "Instead of treating deep cleaning as one large occasional event, restaurants can rotate tasks weekly and monthly according to traffic, equipment use, buildup, and operational requirements.",
  },
  {
    question: "Is deep cleaning different from a daily restaurant checklist?",
    answer:
      "Yes. Daily checklists focus on routine readiness and sanitation work. Deep cleaning focuses on lower-frequency areas and buildup that are not practical to address during every shift.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Deep Cleaning Template</p>
        <h1>Restaurant Deep Cleaning Checklist</h1>
        <p className="article-lead">
          Use this restaurant deep cleaning checklist to rotate lower-frequency cleaning across the
          kitchen, dining room, bar, restrooms, storage, equipment, floors, walls, and drains.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-checklist/">View Daily Restaurant Checklist</Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Schedule It Digitally</Link>
        </div>

        <section>
          <h2>Free restaurant deep cleaning checklist template</h2>
          <p>
            Deep cleaning works better as a scheduled rotation than as an undefined task to complete
            "when there is time." Assign the areas below to clear owners and spread them across
            weekly and monthly routines so lower-frequency work remains visible.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr><th>Area</th><th>Deep-clean task</th><th>Frequency</th><th>Responsible role</th></tr>
              </thead>
              <tbody>
                {rows.map(([area, task, frequency, role]) => (
                  <tr key={`${area}-${task}`}><td>{area}</td><td>{task}</td><td>{frequency}</td><td>{role}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Weekly restaurant deep cleaning</h2>
          <p>
            Build a rotation that distributes deep-clean work across the week. For example, one day
            can focus on equipment exteriors and under-equipment zones, another on storage and
            shelving, and another on drains, floor edges, bar areas, or detailed restroom work.
          </p>
        </section>

        <section>
          <h2>Monthly deep-cleaning review</h2>
          <p>
            Monthly reviews are useful for identifying recurring buildup, tasks that are repeatedly
            missed, areas that need a different frequency, and equipment or maintenance issues
            discovered during cleaning. The manager should update the rotation rather than simply
            adding more tasks to the daily checklist.
          </p>
        </section>

        <section>
          <h2>Deep cleaning vs daily cleaning</h2>
          <p>
            Keep routine and deep cleaning separate. The
            {" "}<Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link>{" "}
            covers recurring operational work, while this template is for lower-frequency detail
            cleaning. Use the
            {" "}<Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule</Link>{" "}
            to assign both by frequency and owner.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Keep deep-cleaning rotations from being forgotten</h2>
          <p>
            CleanScan turns weekly and monthly deep-clean tasks into recurring assignments and keeps
            missed or overdue work visible to managers.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See Restaurant Cleaning Management</Link>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            <li><Link href="/templates/restaurant-cleaning-checklist/">Restaurant cleaning checklist</Link></li>
            <li><Link href="/templates/kitchen-cleaning-checklist/">Kitchen cleaning checklist</Link></li>
            <li><Link href="/templates/bar-cleaning-checklist/">Bar cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-dining-room-cleaning-checklist/">Dining room cleaning checklist</Link></li>
          </ul>
        </section>

        <section>
          <h2>Restaurant deep cleaning FAQs</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
