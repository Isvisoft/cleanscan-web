import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Dining Room Cleaning Checklist: Free Template",
  description:
    "Free restaurant dining room cleaning checklist for tables, chairs, floors, high-touch surfaces, service stations, opening, shift, closing, and weekly tasks.",
  alternates: { canonical: "/templates/restaurant-dining-room-cleaning-checklist/" },
};

const rows = [
  ["Opening", "Check tables, chairs, floors, service stations, and visible guest areas", "Every opening shift", "FOH staff"],
  ["Tables", "Clean and reset tabletops and guest-contact surfaces", "Between guests / as needed", "FOH staff"],
  ["Chairs", "Check seats, backs, arms, and visible debris", "Every service block", "FOH staff"],
  ["High-touch", "Clean handles, switches, kiosks, payment devices, and shared touchpoints", "Every shift", "Assigned staff"],
  ["Floors", "Respond to spills and visible debris", "During service", "FOH staff"],
  ["Service stations", "Clean counters, shelves, trays, and shared service surfaces", "Every shift", "FOH staff"],
  ["Closing", "Sweep and mop dining room and service-zone floors", "Every closing shift", "Closing team"],
  ["Detail cleaning", "Clean table bases, chair legs, edges, fixtures, and low-contact surfaces", "Weekly", "Assigned staff"],
  ["Manager review", "Check missed tasks, recurring issues, and guest-facing condition", "Daily / weekly", "Manager"],
];

const faq = [
  {
    question: "What should a restaurant dining room cleaning checklist include?",
    answer:
      "Include tables, chairs, floors, high-touch points, service stations, guest-facing fixtures, opening checks, during-service response, closing work, weekly detail cleaning, ownership, and verification.",
  },
  {
    question: "How often should dining room cleaning tasks be completed?",
    answer:
      "Guest-contact and visible areas may need attention between guests or throughout service, while floors, service stations, closing work, and detailed cleaning can be assigned by shift, daily, or weekly frequency.",
  },
  {
    question: "Should dining room cleaning be separate from the kitchen checklist?",
    answer:
      "Yes. Separating FOH dining room work from BOH kitchen work makes ownership and frequency clearer while the restaurant-wide checklist can still provide the master view.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Dining Room Template</p>
        <h1>Restaurant Dining Room Cleaning Checklist</h1>
        <p className="article-lead">
          Use this free restaurant dining room cleaning checklist for opening, service, closing, and
          weekly FOH cleaning across tables, chairs, floors, service stations, and high-touch areas.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-checklist/">View Master Restaurant Checklist</Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Use It Digitally</Link>
        </div>

        <section>
          <h2>Dining room cleaning checklist template</h2>
          <p>
            Dining room cleaning is guest-facing and often needs several frequencies at once:
            between guests, during service, at closing, and as part of a weekly detail-cleaning
            rotation. Keep those responsibilities separate so staff know what belongs to each shift.
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
          <h2>During-service dining room cleaning</h2>
          <p>
            During service, prioritize visible debris, spills, guest-contact surfaces, service
            stations, and shared high-touch points. These tasks should be short, clear, and assigned
            so they can be completed without disrupting service.
          </p>
        </section>

        <section>
          <h2>Restaurant dining room closing checklist</h2>
          <ul>
            <li>Clean and reset tables and chairs.</li>
            <li>Clean service stations and shared FOH surfaces.</li>
            <li>Remove visible debris and complete floor cleaning.</li>
            <li>Empty assigned waste points and replace liners.</li>
            <li>Record damage, maintenance, supply, or cleaning issues for the next shift.</li>
          </ul>
        </section>

        <section>
          <h2>Weekly dining room detail cleaning</h2>
          <p>
            Rotate lower-frequency work such as table bases, chair legs, edges, fixtures, wall
            contact areas, low-contact surfaces, and hard-to-reach floor zones. Keep those tasks out
            of the daily checklist unless they genuinely need daily attention.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Manage FOH cleaning with the rest of the restaurant</h2>
          <p>
            CleanScan lets managers schedule dining room, kitchen, bar, restroom, opening, closing,
            and deep-cleaning tasks in one operational view.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            <li><Link href="/templates/restaurant-cleaning-checklist/">Restaurant cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-opening-checklist/">Restaurant opening checklist</Link></li>
            <li><Link href="/templates/restaurant-closing-cleaning-checklist/">Restaurant closing cleaning checklist</Link></li>
            <li><Link href="/templates/bar-cleaning-checklist/">Bar cleaning checklist</Link></li>
          </ul>
        </section>

        <section>
          <h2>Dining room cleaning FAQs</h2>
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
