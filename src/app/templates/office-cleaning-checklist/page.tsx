import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import PrintTemplateButton from "@/components/print-template-button";

export const metadata: Metadata = {
  title: "Office Cleaning Checklist: Free Printable Template",
  description:
    "Free office cleaning checklist for desks, meeting rooms, kitchens, restrooms and shared areas. See daily and weekly tasks, then print or save as PDF.",
  alternates: { canonical: "/templates/office-cleaning-checklist/" },
};

const officeRows = [
  ["Reception", "Clean entry counters, door handles and visitor touchpoints", "Daily / as needed", "Cleaning team"],
  ["Shared workstations", "Clean accessible desk surfaces with employee permission and site policy", "Daily / scheduled", "Assigned cleaner"],
  ["Shared devices", "Clean approved touchpoints on printers and shared devices following manufacturer guidance", "Daily / by use", "Assigned cleaner"],
  ["Meeting rooms", "Wipe tables, chair touchpoints and controls; remove waste", "After use / daily", "Facilities team"],
  ["Office kitchen", "Clean counters, sinks, shared tables and appliance exteriors", "Daily / after use", "Cleaning team"],
  ["Office kitchen", "Check food waste bins and restock cleaning consumables", "Daily", "Facilities team"],
  ["Restrooms", "Clean toilets, sinks, mirrors, floors and touchpoints", "Scheduled checks", "Assigned cleaner"],
  ["Restrooms", "Check paper supplies, soap, bin levels and reported issues", "Scheduled checks", "Assigned cleaner"],
  ["Breakout spaces", "Clean shared surfaces, tables, chair arms and high-touch points", "Daily / as needed", "Cleaning team"],
  ["Corridors & lift", "Clean accessible handrails, lift controls, doors and floors", "Daily / by traffic", "Cleaning team"],
  ["Floors", "Vacuum carpets and clean hard floors with the appropriate method", "Daily / by traffic", "Cleaning team"],
  ["Waste & recycling", "Empty shared bins, replace liners and inspect sorting points", "Daily / as needed", "Cleaning team"],
  ["Storage & cabinets", "Wipe permitted shared storage surfaces and inspect spills", "Weekly", "Facilities team"],
  ["Detail cleaning", "Rotate skirting, fixture edges and low-use common areas", "Weekly / monthly", "Assigned cleaner"],
  ["Supervisor review", "Confirm completion and record unresolved maintenance or supply issues", "Daily / each shift", "Site lead"],
];

const officeDaily = [
  ["Before people arrive", "Check reception, shared washrooms, office kitchen and any overnight spills."],
  ["Between meetings", "Reset shared meeting rooms and clean frequently touched communal items as required."],
  ["End of day", "Complete floors, shared waste points, common touchpoints and any tasks that cannot be done while rooms are in use."],
];
const officeWeekly = [
  "Detail frequently used conference rooms, fixtures and shared storage areas.",
  "Review meeting-room and restroom usage to adjust the frequency of checks.",
  "Schedule low-traffic areas separately so the daily checklist stays manageable.",
  "Review missed tasks, consumables and unresolved issues with the site lead.",
];
const faqs = [
  {
    question: "What should an office cleaning checklist include?",
    answer: "Include reception, shared workspaces, meeting rooms, kitchens, restrooms, common areas, floors and waste stations. Each task should have a responsible role, frequency and simple completion check.",
  },
  {
    question: "Should office desks be cleaned every day?",
    answer: "Shared workstations may need daily attention depending on how they are used. For personal desks, follow employee permissions and office policy; do not move private items or handle electronics without appropriate instructions.",
  },
  {
    question: "How can I print this office cleaning checklist?",
    answer: "Select Print Checklist, then print the table or save it as PDF in your browser. The page and printable checklist are free to use.",
  },
  {
    question: "Is an office checklist different from a commercial cleaning checklist?",
    answer: "Yes. The office version covers meetings, desks, shared devices and office kitchens. The commercial checklist is a broader starting point for entrances, public areas, building facilities and restrooms.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap seo-template-page">
        <p className="article-kicker">Free Office Template</p>
        <h1>Office Cleaning Checklist (Free Printable Template)</h1>
        <p className="article-lead">
          Organize daily and weekly office cleaning without relying on an unclear list of
          chores. This free office cleaning checklist covers reception, meeting rooms, shared
          desks, office kitchens, restrooms, floors and the spaces your team uses together.
        </p>
        <div className="hero-actions article-actions">
          <PrintTemplateButton label="Print Office Checklist / Save as PDF" />
          <a className="outline-cta" href="#office-cleaning-checklist">View Office Checklist</a>
          <Link className="outline-cta" href="/templates/commercial-cleaning-checklist/">
            Commercial Facility Checklist
          </Link>
          <Link className="outline-cta" href="/templates/office-cleaning-schedule/">
            Office Cleaning Schedule
          </Link>
        </div>
        <p>Example frequencies are adjustable. Follow your cleaning policies and the instructions for each surface or device.</p>

        <section id="office-cleaning-checklist" className="template-print-area">
          <h2>Printable office cleaning checklist by room and task</h2>
          <p>
            Use this table as a starting point for a small office, shared workplace or multi-room
            site. Identify which tasks are performed during business hours and which are better
            done before opening or after closing.
          </p>
          <p className="print-only">Office / floor: ____________________ Date: ____________________ Shift: ____________________</p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th scope="col">Office area</th>
                  <th scope="col">Cleaning checklist item</th>
                  <th scope="col">Suggested frequency</th>
                  <th scope="col">Assigned role</th>
                  <th scope="col">Done</th>
                </tr>
              </thead>
              <tbody>
                {officeRows.map(([area, task, frequency, role]) => (
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
          <p className="print-only">Issues / follow-up: __________________________________________________________________</p>
          <p className="print-only">Completed by: ____________________ Verified by: ____________________</p>
        </section>

        <section>
          <h2>Daily office cleaning checklist</h2>
          <p>
            Daily office cleaning is easier to manage when tasks are grouped around how people
            use the building, not just by a single end-of-day shift.
          </p>
          <div className="checklist-groups">
            {officeDaily.map(([moment, task]) => (
              <section className="checklist-group" key={moment}>
                <h3>{moment}</h3>
                <p>{task}</p>
              </section>
            ))}
          </div>
          <p>
            For desks and shared electronics, use suitable cleaning methods and respect workspace
            ownership. Do not spray liquids directly into devices or move personal belongings as
            part of a standard cleaning round.
          </p>
        </section>

        <section>
          <h2>Weekly office cleaning checklist</h2>
          <p>
            Weekly work is useful for details that do not need attention during every daily round.
            Keep these tasks separate and record when they were completed.
          </p>
          <ul>{officeWeekly.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section>
          <h2>How to assign office cleaning tasks</h2>
          <ol>
            <li>Map the office into cleaning zones: desks, meeting rooms, common areas and restrooms.</li>
            <li>Separate between-meeting tasks from after-hours cleaning.</li>
            <li>Set frequencies according to occupancy, footfall and the needs of each space.</li>
            <li>Assign a team or shift and provide a way to report shortages and maintenance issues.</li>
            <li>Review the checklist when the office layout, staffing or working pattern changes.</li>
          </ol>
        </section>

        <section>
          <h2>Office cleaning checklist vs commercial building checklist</h2>
          <p>
            This page focuses on office-specific routines: shared desks, meeting spaces, office
            kitchens and equipment. For wider facilities such as customer reception areas,
            public restrooms and mixed-use buildings, start with the{" "}
            <Link href="/templates/commercial-cleaning-checklist/">commercial cleaning checklist</Link>.
          </p>
          <p>
            If the team needs recurring assignments and completion history across several office
            areas, the <Link href="/cleaning-checklist-app/">cleaning checklist app</Link> can
            manage the same routine digitally. For timing and frequency, use the{" "}
            <Link href="/templates/office-cleaning-schedule/">office cleaning schedule template</Link>.
          </p>
        </section>

        <section>
          <h2>Office cleaning checklist FAQs</h2>
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
          <h2>Keep track of cleaning across office areas</h2>
          <p>
            When paper sheets are no longer enough, CleanScan helps teams schedule recurring
            work, assign owners and review completion by monitored space.
          </p>
          <Link className="hero-cta" href="/cleaning-management-software/">See Cleaning Management Software</Link>
        </section>
      </article>
    </main>
  );
}
