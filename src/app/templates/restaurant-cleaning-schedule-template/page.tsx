import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Restaurant Cleaning Schedule Template | Daily & Weekly",
  description:
    "Free restaurant cleaning schedule template for daily, weekly, opening, and closing tasks. Assign frequency, owner, and manager verification.",
  alternates: { canonical: "/templates/restaurant-cleaning-schedule-template/" },
};

const scheduleRows = [
  ["Opening", "Check dining room, restrooms, entry, and service stations", "Every opening shift", "Opening team"],
  ["Kitchen", "Clean and sanitize prep surfaces and food-contact areas", "Daily / after use", "BOH staff"],
  ["Restrooms", "Clean fixtures, restock supplies, and record condition", "Every service block", "Assigned staff"],
  ["Dining room", "Wipe tables, chairs, menus, and high-touch surfaces", "Every shift", "FOH staff"],
  ["Cookline", "Clean equipment fronts, handles, and surrounding surfaces", "Every closing shift", "Kitchen staff"],
  ["Floors", "Sweep and mop kitchen, dining, and service areas", "Daily", "Closing team"],
  ["Waste", "Empty bins, replace liners, and clean surrounding areas", "Daily / closing", "Closing team"],
  ["Storage", "Wipe shelves and check spill-prone areas", "Weekly", "BOH staff"],
  ["Deep cleaning", "Rotate drains, edges, walls, and hard-to-reach zones", "Weekly", "Assigned team"],
  ["Manager review", "Review missed tasks, issues, and corrective actions", "Weekly", "Manager"],
  ["Schedule review", "Update frequencies, ownership, and recurring tasks", "Monthly", "Manager"],
];

const faq = [
  {
    question: "What should a restaurant cleaning schedule template include?",
    answer:
      "It should include each task, area, frequency, responsible role, and a way to verify completion. Opening, service, closing, daily, weekly, and monthly work should be separated clearly.",
  },
  {
    question: "How often should a restaurant cleaning schedule be updated?",
    answer:
      "Review it at least monthly and whenever staffing, equipment, layout, service volume, or inspection requirements change.",
  },
  {
    question: "Can I use this as a printable restaurant cleaning schedule?",
    answer:
      "Yes. Use the schedule below as a printable starting point, then adapt tasks and frequencies to your operation.",
  },
  {
    question: "What is the difference between a cleaning checklist and a cleaning schedule?",
    answer:
      "A checklist defines what needs to be cleaned. A schedule defines when it happens, how often it repeats, and who owns each task.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Schedule</p>
        <h1>Free Restaurant Cleaning Schedule Template</h1>
        <p className="article-lead">
          Use this cleaning schedule template for a restaurant to organize opening, service,
          closing, daily, weekly, and monthly cleaning by frequency and responsible role.
        </p>

        <div className="article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Printable Cleaning Log
          </a>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-checklist/">
            View Master Cleaning Checklist
          </Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Run the Schedule Digitally
          </Link>
        </div>

        <section>
          <h2>Free restaurant cleaning schedule template</h2>
          <p>
            A cleaning schedule answers four practical questions: what needs to be cleaned, when it
            should happen, how often it repeats, and who owns the task. Use this structure as a
            printable cleaning schedule for a restaurant, then adapt it to your layout, service
            volume, staffing, and local requirements.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area / moment</th>
                  <th>Example task</th>
                  <th>Frequency</th>
                  <th>Responsible role</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map(([area, task, frequency, role]) => (
                  <tr key={`${area}-${task}`}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{frequency}</td>
                    <td>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Weekly restaurant cleaning schedule template</h2>
          <p>
            Use a weekly restaurant cleaning schedule for work that should not be repeated every
            shift but still needs a fixed owner and verification. Typical weekly tasks include
            storage shelves, equipment exteriors, drains, hard-to-reach edges, walls, and a manager
            review of missed or overdue cleaning.
          </p>
          <ul>
            <li>Assign each weekly task to a specific role.</li>
            <li>Set a fixed day or service window instead of leaving the task open-ended.</li>
            <li>Record completion and any corrective action required.</li>
            <li>Review recurring misses during the weekly manager check.</li>
          </ul>
        </section>

        <section>
          <h2>How to organize a restaurant cleaning schedule</h2>
          <h3>Opening tasks</h3>
          <p>Schedule readiness checks before service for guest areas, restrooms, service stations, supplies, floors, and kitchen prep areas.</p>
          <h3>During-service tasks</h3>
          <p>Use service blocks for restroom checks, spill response, high-touch surfaces, waste, and other work that cannot wait until closing.</p>
          <h3>Closing tasks</h3>
          <p>Assign end-of-day cleaning by area and role, including waste, floors, cookline surfaces, service areas, restrooms, and manager sign-off.</p>
          <h3>Weekly and monthly tasks</h3>
          <p>Use weekly rotations for deep-cleaning zones and monthly reviews for recurring misses, task ownership, supplies, and schedule updates.</p>
        </section>

        <section>
          <h2>How to use this printable restaurant cleaning schedule</h2>
          <p>
            Print the table for a paper-based routine or copy it into your existing operations
            process. Keep frequency and ownership visible, leave space for completion checks, and
            update the schedule whenever staffing, equipment, or service patterns change.
          </p>
        </section>

        <section>
          <h2>Restaurant cleaning schedule vs checklist</h2>
          <p>
            A checklist defines the work. A schedule adds timing, frequency, and ownership. Start
            with the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link> if you still need to define the tasks, then use this page to schedule them.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Turn the schedule into recurring digital tasks</h2>
          <p>
            CleanScan helps restaurant managers move from a static schedule to recurring tasks with
            assignees, due times, completion history, overdue visibility, and manager follow-up.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
            See Restaurant Cleaning Management
          </Link>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            <li><Link href="/templates/restaurant-cleaning-checklist/">Restaurant cleaning checklist</Link></li>
            <li><Link href="/templates/kitchen-cleaning-checklist/">Kitchen cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-deep-cleaning-checklist/">Restaurant deep cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-opening-checklist/">Restaurant opening checklist</Link></li>
            <li><Link href="/templates/restaurant-closing-cleaning-checklist/">Restaurant closing cleaning checklist</Link></li>
            <li><Link href="/templates/restroom-cleaning-log/">Restroom cleaning log</Link></li>
          </ul>
        </section>

        <section>
          <h2>Restaurant cleaning schedule FAQs</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
