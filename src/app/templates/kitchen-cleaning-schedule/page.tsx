import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import PrintTemplateButton from "@/components/print-template-button";

export const metadata: Metadata = {
  title: "Kitchen Cleaning Schedule Template (Daily & Weekly)",
  description: "Free kitchen cleaning schedule template for restaurant BOH teams. Organize tasks by shift, daily, weekly and monthly frequency, role and verification.",
  alternates: { canonical: "/templates/kitchen-cleaning-schedule/" },
};

const rows = [
  ["Before prep", "Review prep-area cleanliness and approved sanitizer readiness", "Opening shift", "Prep team"],
  ["During service", "Check spills, workstation touchpoints and floor hazards", "During service", "Line team"],
  ["After prep blocks", "Clean and sanitize food-contact surfaces following site procedures", "After use", "Prep team"],
  ["Closing", "Complete cookline exterior, utensil and dish-area cleaning", "Each close", "Closing BOH"],
  ["Closing", "Clean floors, waste points and frequently touched handles", "Each close", "Closing BOH"],
  ["Storage", "Clean accessible shelving and address spills", "Weekly / as needed", "Assigned BOH"],
  ["Detail rotation", "Clean equipment sides, floor edges and other approved hard-to-reach areas", "Weekly", "Assigned BOH"],
  ["Scheduled maintenance cleaning", "Complete manufacturer-approved deeper equipment cleaning", "Scheduled / as specified", "Trained staff"],
  ["Routine audit", "Check missed tasks, recurring issues and recorded corrective actions", "Weekly", "Kitchen manager"],
  ["Schedule update", "Review frequencies, owners and changes to equipment or service volume", "Monthly / when needed", "Kitchen manager"],
];
const steps = [
  { title: "Group tasks by service moment", description: "Separate opening checks, during-service responses, after-use cleaning and end-of-day responsibilities." },
  { title: "Set realistic recurring intervals", description: "Decide which tasks repeat after use, every shift, weekly or according to manufacturer instructions." },
  { title: "Assign owners and record checks", description: "Give each task an accountable role and document missed work or issues requiring correction." },
  { title: "Review the schedule regularly", description: "Adjust duties when food volume, equipment, layout or staffing changes." },
];
const faq = [
  { question: "What belongs in a kitchen cleaning schedule?", answer: "Each entry should specify area, task, frequency, responsible role, and a method to record completion or corrective action." },
  { question: "How often should a commercial kitchen be cleaned?", answer: "Some activities happen after each use or shift while others are scheduled weekly or according to equipment instructions. Follow your food-safety procedures and applicable regulations." },
  { question: "Can I print this kitchen cleaning schedule?", answer: "Yes. Use Print / Save as PDF to retain a copy of the schedule, then adjust roles and frequencies for your kitchen." },
  { question: "How is this different from a kitchen closing checklist?", answer: "A kitchen closing checklist covers the tasks needed at the end of service. A kitchen schedule covers recurring cleaning across opening, service, closing, weekly and other intervals." },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap seo-template-page">
        <p className="article-kicker">Free Restaurant Kitchen Template</p>
        <h1>Kitchen Cleaning Schedule Template (Free Printable)</h1>
        <p className="article-lead">Build a restaurant kitchen cleaning schedule with clear owners and intervals. This template organizes recurring BOH cleaning across prep, cookline, dish, floors, drains and storage, rather than listing only what to clean.</p>
        <div className="hero-actions article-actions">
          <PrintTemplateButton label="Print Schedule / Save as PDF" />
          <a className="outline-cta" href="#printable-kitchen-template">View Template</a>
          <Link className="outline-cta" href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist</Link>
        </div>
        <p>Example intervals only: apply your kitchen's food-safety plan, equipment guidance and local requirements.</p>
        <section id="printable-kitchen-template" className="template-print-area">
          <h2>Printable kitchen cleaning schedule</h2>
          <p>
            Use this table as a practical starting point. Adapt tasks and responsibility
            to the layout, equipment, cleaning procedures and shift structure of your kitchen.
          </p>
          <p className="print-only">Kitchen: ____________________ Date / shift: ____________________ Manager: ____________________</p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th scope="col">Moment / area</th><th scope="col">Cleaning task</th><th scope="col">Frequency</th><th scope="col">Owner</th><th scope="col">Done</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0] + row[1]}>
                    {row.map((cell, index) => <td key={index}>{cell}</td>)}
                    <td aria-label="Unchecked">□</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="print-only">Unfinished items / corrective action: __________________________________________________</p>
          <p className="print-only">Completed by: ____________________ Verified by: ____________________</p>
        </section>
        <section>
          <h2>How to build a kitchen cleaning schedule</h2>
          <div className="checklist-groups">
            {steps.map((step) => (
              <section className="checklist-group" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </section>
            ))}
          </div>
        </section>
        <section>
          <h2>Kitchen cleaning schedule vs kitchen cleaning checklist</h2>
          <p>The schedule defines when work happens and who owns it. The checklist defines each task to complete. Use both, or the restaurant-wide schedule for dining, bar and restrooms as well. See the <Link href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist</Link>.</p>
          <p>For digital recurring cleaning with assignments and completion records, see <Link href="/cleaning-schedule-app/">CleanScan cleaning schedule app</Link>.</p>
        </section>
        <section>
          <h2>Related kitchen and restaurant templates</h2>
          <ul>
            <li><Link href="/templates/kitchen-cleaning-checklist/">Kitchen cleaning checklist by area</Link></li>
            <li><Link href="/templates/kitchen-closing-checklist/">Kitchen closing checklist</Link></li>
            <li><Link href="/templates/restaurant-cleaning-schedule-template/">Restaurant cleaning schedule template</Link></li>
          </ul>
        </section>
        <section>
          <h2>Kitchen cleaning schedule FAQs</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
            ))}
          </div>
        </section>
        <section className="article-cta-box">
          <h2>Keep kitchen cleaning tasks on schedule</h2>
          <p>CleanScan helps managers assign recurring cleaning tasks, check completion and keep records across kitchen spaces and shifts.</p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
        </section>
      </article>
    </main>
  );
}
