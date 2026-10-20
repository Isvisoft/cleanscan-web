import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import PrintTemplateButton from "@/components/print-template-button";

export const metadata: Metadata = {
  title: "Kitchen Closing Checklist (Free Printable Template)",
  description: "Free kitchen closing checklist for restaurant BOH teams. See end-of-shift cleaning by station, handoff notes and manager sign-off. Print or save as PDF.",
  alternates: { canonical: "/templates/kitchen-closing-checklist/" },
};

const rows = [
  ["Cookline", "Remove food debris; clean approved cooking surfaces and equipment exteriors", "Line cook"],
  ["Prep stations", "Clean and sanitize food-contact surfaces using the approved procedure", "Prep team"],
  ["Small tools", "Clean and store reusable tools and approved removable parts", "Kitchen team"],
  ["Sinks and dish area", "Clean sinks, drainboards and nearby splash zones", "Dish team"],
  ["Floors", "Remove debris and clean floors, edges and safe access areas", "Closing BOH"],
  ["Waste", "Remove food waste and replace liners; clean bin contact points", "Closing BOH"],
  ["Cold storage", "Check spills and door handles; report temperature or equipment issues separately", "Assigned BOH"],
  ["Dry storage", "Remove debris and flag spills, pests or supply issues", "Assigned BOH"],
  ["Supplies", "Restock approved cleaning materials for opening staff", "Closing BOH"],
  ["Manager handoff", "Review incomplete work, equipment issues and corrective actions", "Kitchen manager"],
];
const steps = [
  { title: "Cookline and equipment", description: "Allow equipment to cool where required, follow the manufacturer's approved cleaning method and confirm shutdown procedures belong to the responsible staff." },
  { title: "Prep and food-contact zones", description: "Clear remaining ingredients appropriately, clean and sanitize worktops and tools according to the site's food-safety plan." },
  { title: "Dish, drains and floors", description: "Complete dish-area cleaning, clear floor debris, address spills and flag drainage or maintenance issues." },
  { title: "Handoff and sign-off", description: "Record anything unfinished, assign follow-up and have the responsible manager verify the close." },
];
const faq = [
  { question: "What should a kitchen closing checklist include?", answer: "Include cooking stations, food-contact surfaces, dish areas, floors, waste, approved storage checks and manager handoff, with a responsible role for each task." },
  { question: "Is this the same as a restaurant closing checklist?", answer: "No. The kitchen closing checklist covers only back-of-house cleaning. The restaurant closing checklist also includes dining, restrooms, bar and guest-facing areas." },
  { question: "Can I print the kitchen closing checklist?", answer: "Yes. Print the checklist or use your browser's Save as PDF option without creating an account." },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap seo-template-page">
        <p className="article-kicker">Free Restaurant Kitchen Template</p>
        <h1>Kitchen Closing Checklist for Restaurant Teams</h1>
        <p className="article-lead">Use this free kitchen closing checklist to reset the back of house after service. It focuses only on cookline, prep, dish, storage and kitchen handoff—not the restaurant-wide closing procedure.</p>
        <div className="hero-actions article-actions">
          <PrintTemplateButton label="Print Checklist / Save as PDF" />
          <a className="outline-cta" href="#printable-kitchen-template">View Template</a>
          <Link className="outline-cta" href="/templates/restaurant-closing-cleaning-checklist/">restaurant closing checklist</Link>
        </div>
        <p>Every closing shift; adapt individual items to equipment and local food-safety procedures.</p>
        <section id="printable-kitchen-template" className="template-print-area">
          <h2>Printable kitchen closing checklist</h2>
          <p>
            Use this table as a practical starting point. Adapt tasks and responsibility
            to the layout, equipment, cleaning procedures and shift structure of your kitchen.
          </p>
          <p className="print-only">Kitchen: ____________________ Date / shift: ____________________ Manager: ____________________</p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th scope="col">Kitchen area</th><th scope="col">Closing task</th><th scope="col">Responsible role</th><th scope="col">Done</th></tr></thead>
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
          <h2>How to close a restaurant kitchen by station</h2>
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
          <h2>Kitchen closing checklist vs restaurant closing checklist</h2>
          <p>This page covers BOH cleaning after service. For guest areas, bar, restrooms and the full close, use the restaurant-wide closing checklist. See the <Link href="/templates/restaurant-closing-cleaning-checklist/">restaurant closing checklist</Link>.</p>
          <p>For digital recurring cleaning with assignments and completion records, see <Link href="/cleaning-schedule-app/">CleanScan cleaning schedule app</Link>.</p>
        </section>
        <section>
          <h2>Related kitchen and restaurant templates</h2>
          <ul>
            <li><Link href="/templates/kitchen-cleaning-checklist/">Kitchen cleaning checklist for all shifts</Link></li>
            <li><Link href="/templates/kitchen-cleaning-schedule/">Kitchen cleaning schedule by frequency</Link></li>
            <li><Link href="/templates/restaurant-closing-cleaning-checklist/">Whole-restaurant closing checklist</Link></li>
          </ul>
        </section>
        <section>
          <h2>Kitchen closing checklist FAQs</h2>
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
