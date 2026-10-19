import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Digital Restroom Cleaning Log & QR Status | CleanScan",
  description:
    "Replace paper restroom logs with scheduled digital checks, completion history, issue tracking, and a public QR page showing the last cleaning time.",
  alternates: { canonical: "/solutions/restroom-quality-control/" },
};

const workflowSteps = [
  "Create restroom check routines.",
  "Schedule checks by service block.",
  "Assign each check to a role or shift.",
  "Record issues, supplies, and corrective actions.",
  "Let managers review completion in real time.",
  "Display the latest cleaning status through a public QR page.",
];

const trackingItems = [
  "Cleanliness check",
  "Toilet and sink condition",
  "Floor condition",
  "Odor issues",
  "Soap, paper, and supplies",
  "Trash level",
  "Incident notes",
  "Manager verification",
];

const comparisonRows = [
  ["Timely checks", "Easy to backfill after the fact", "Requires manual updates", "Scheduled by service block with visible completion"],
  ["Responsibilities", "Often unclear during busy periods", "Listed, but not enforced", "Assigned by role, area, or shift"],
  ["Incident notes", "Limited space and hard to review", "Can be captured manually", "Stored with the restroom check record"],
  ["Manager visibility", "Requires checking the clipboard", "Requires opening and reviewing files", "Shows pending, completed, and overdue checks"],
  ["History", "Paper sheets can be lost or incomplete", "Version history is fragmented", "Digital records are easier to review"],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Solution</p>
        <h1>Digital Restroom Cleaning Logs for Restaurants</h1>
        <p className="article-lead">
          Replace the restroom cleaning sheet with scheduled digital checks. Staff record completed
          work and issues; managers see what is pending, and a public QR page can show when the
          restroom was last cleaned.
        </p>
        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">
            Digitize Restroom Log
          </Link>
          <Link className="outline-cta" href="/templates/restroom-cleaning-log/">
            View Restroom Log Template
          </Link>
        </div>

        <section>
          <h2>The problem with paper restroom logs</h2>
          <p>
            Restrooms are visible to guests, checked repeatedly, and easy to neglect during rush
            periods. Paper restroom logs are often filled out late, missed for hours, or completed
            without enough detail for managers to understand what happened.
          </p>
          <p>
            A clipboard can show that a box was checked, but it does not clearly show unresolved
            issues, supply shortages, corrective actions, or whether checks are being completed on
            time across every shift.
          </p>
        </section>

        <section>
          <h2>How CleanScan helps restaurants control restroom checks</h2>
          <ol>
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>QR restroom cleaning status: how it works</h2>
          <p>
            Cleaning staff complete their assigned restroom checks in CleanScan. The digital log
            keeps a record for managers, including when work was completed and any issues reported.
          </p>
          <p>
            A printable QR code can be placed near the restroom. When someone scans it, the public
            status page shows when the space was last cleaned. The QR page is for visibility; it does
            not replace the team's digital completion records.
          </p>
        </section>

        <section>
          <h2>When to use a digital restroom cleaning log</h2>
          <p>
            A simple printable <Link href="/templates/restroom-cleaning-log/">restroom cleaning log</Link>{" "}
            may be enough for one low-traffic area. A digital log is useful when multiple shifts
            share responsibility, staff miss checks during busy periods, or managers need to review
            cleaning without collecting paper sheets.
          </p>
        </section>

        <section>
          <h2>What to track in a restroom quality workflow</h2>
          <div className="commercial-list-grid">
            {trackingItems.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Paper restroom log vs CleanScan</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Paper log</th>
                  <th>Spreadsheet</th>
                  <th>CleanScan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([need, paper, spreadsheet, cleanscan]) => (
                  <tr key={need}>
                    <td>{need}</td>
                    <td>{paper}</td>
                    <td>{spreadsheet}</td>
                    <td>{cleanscan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Related template</h2>
          <p>
            Start with the <Link href="/templates/restroom-cleaning-log/">Restroom Cleaning Log Template</Link>,
            then run the routine digitally in CleanScan when your team is ready to track checks by
            shift and time block.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Digitize your restroom cleaning log</h2>
          <p>
            CleanScan helps restaurants replace paper restroom logs with assigned checks, incident
            notes, completion history, manager visibility during service, and a public QR status page
            showing the most recent cleaning time.
          </p>
          <Link className="hero-cta" href="/contact/">
            Request a Demo
          </Link>
        </section>
      </article>
    </main>
  );
}
