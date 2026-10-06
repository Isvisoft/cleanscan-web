import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bar Cleaning Checklist: Free Restaurant Bar Template",
  description:
    "Free bar cleaning checklist for restaurants and bars. Covers opening, shift, closing, weekly, equipment, surfaces, floors, waste, and manager verification.",
  alternates: { canonical: "/templates/bar-cleaning-checklist/" },
};

const rows = [
  ["Opening", "Check bar top, sinks, glassware area, mats, and service stations", "Every opening shift", "Bar staff"],
  ["Bar top", "Clean and sanitize counters and guest-contact surfaces", "Every shift", "Bar staff"],
  ["Equipment", "Wipe taps, handles, controls, POS devices, and small equipment exteriors", "Every shift", "Bar staff"],
  ["Sinks", "Clean sinks, faucets, drainboards, and surrounding splash zones", "Daily", "Bar staff"],
  ["Glassware area", "Clear debris and clean racks, shelves, and surrounding surfaces", "Daily", "Closing team"],
  ["Floors", "Sweep and mop behind and around the bar", "Closing", "Closing team"],
  ["Waste", "Empty bins, replace liners, and clean waste-contact areas", "Closing", "Closing team"],
  ["Storage", "Wipe shelves and check spills, labels, and organization", "Weekly", "Assigned staff"],
  ["Deep clean", "Rotate under-equipment, edges, walls, drains, and hard-to-reach zones", "Weekly", "Assigned staff"],
  ["Manager review", "Review missed tasks, issues, and corrective action", "Weekly", "Manager"],
];

const faq = [
  {
    question: "What should be on a bar cleaning checklist?",
    answer:
      "Include bar tops, taps and handles, sinks, glassware areas, service stations, floors, waste, storage, equipment exteriors, recurring deep-clean tasks, ownership, and verification.",
  },
  {
    question: "How often should a restaurant bar be cleaned?",
    answer:
      "High-touch and food-or-drink-contact areas usually need attention every shift, while floors and waste are commonly handled at closing and deeper zones can be assigned weekly according to the operation.",
  },
  {
    question: "Can this checklist be used in a restaurant bar?",
    answer:
      "Yes. The template is designed for restaurant bar operations and can be adapted to the equipment, service model, staffing, and cleaning standards of each location.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Bar Template</p>
        <h1>Bar Cleaning Checklist for Restaurants & Bars</h1>
        <p className="article-lead">
          Use this free bar cleaning checklist to organize opening, shift, closing, and weekly
          cleaning across counters, taps, sinks, glassware areas, floors, storage, and equipment.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-checklist/">View Restaurant Checklist</Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Use It Digitally</Link>
        </div>

        <section>
          <h2>Restaurant bar cleaning checklist template</h2>
          <p>
            A bar has its own cleaning rhythm. Guest-contact surfaces and service equipment need
            repeated attention during shifts, while floors, waste, storage, and harder-to-reach
            areas are easier to control through closing and weekly routines.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr><th>Area / moment</th><th>Task</th><th>Frequency</th><th>Responsible role</th></tr>
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
          <h2>Opening bar cleaning checks</h2>
          <p>
            Before service, verify that the bar top, sinks, glassware area, service stations, mats,
            and surrounding floor are clean and ready. Opening checks should focus on readiness
            rather than replacing the deeper work assigned to closing.
          </p>
        </section>

        <section>
          <h2>Closing bar cleaning checklist</h2>
          <ul>
            <li>Clean and sanitize the bar top and guest-contact surfaces.</li>
            <li>Wipe taps, handles, controls, POS devices, and equipment exteriors.</li>
            <li>Clean sinks, drainboards, splash zones, and glassware work areas.</li>
            <li>Empty waste and clean surrounding contact points.</li>
            <li>Sweep and mop behind and around the bar.</li>
            <li>Record issues that need maintenance or manager follow-up.</li>
          </ul>
        </section>

        <section>
          <h2>Weekly bar deep-cleaning tasks</h2>
          <p>
            Use a weekly rotation for areas that are easy to miss during service: shelf edges,
            under-equipment zones, drains, wall edges, lower panels, storage areas, and other
            hard-to-reach surfaces. Assign each recurring task to a specific role instead of leaving
            deep cleaning as a general team responsibility.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Turn the bar checklist into recurring digital tasks</h2>
          <p>
            CleanScan lets restaurant managers assign bar cleaning by shift, frequency, and role,
            then track completion alongside kitchen, dining room, restroom, opening, and closing work.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            <li><Link href="/templates/restaurant-cleaning-checklist/">Restaurant cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-closing-cleaning-checklist/">Restaurant closing cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-dining-room-cleaning-checklist/">Dining room cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-deep-cleaning-checklist/">Restaurant deep cleaning checklist</Link></li>
          </ul>
        </section>

        <section>
          <h2>Bar cleaning checklist FAQs</h2>
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
