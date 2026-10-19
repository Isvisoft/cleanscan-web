import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cleaning Checklist App for Restaurants & Teams | CleanScan",
  description:
    "Replace paper restaurant cleaning checklists with an app for kitchen, restroom, opening and closing tasks. Assign work, track completion, and show QR cleaning status.",
  alternates: { canonical: "/cleaning-checklist-app/" },
};

const capabilities = [
  "Create checklists by space",
  "Assign tasks by role or team",
  "Repeat tasks by shift, day, week, or month",
  "Track completed, pending, and overdue work",
  "Keep digital cleaning records",
  "Review cleaning metrics by space",
  "Publish a public QR cleaning status",
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Digital Cleaning Checklists</p>
        <h1>Cleaning Checklist App for Restaurants & Teams</h1>
        <p className="article-lead">
          Stop checking paper sheets to find out whether cleaning happened. CleanScan turns
          restaurant and facility checklists into assigned digital tasks, so staff know what to do
          and managers can review completed, pending, and overdue work by space.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
          <Link className="outline-cta" href="/templates/">Start With a Free Template</Link>
          <Link className="outline-cta" href="/cleaning-schedule-app/">See Cleaning Schedule App</Link>
        </div>

        <section>
          <h2>What is a cleaning checklist app?</h2>
          <p>
            A cleaning checklist app is a digital system for defining cleaning tasks, assigning
            responsibility, recording completion, and reviewing missed or overdue work without
            relying on paper sign-off sheets.
          </p>
        </section>

        <section>
          <h2>What a cleaning checklist app should include</h2>
          <ul>
            {capabilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section>
          <h2>From printable checklist to digital workflow</h2>
          <p>
            Printable templates are useful for defining the routine. Once the process is stable, a
            digital checklist makes execution easier to control because tasks can repeat
            automatically, ownership is explicit, and managers do not need to collect sheets.
          </p>
          <p>
            You can start with the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link>,
            the <Link href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist</Link>, or the
            <Link href="/templates/restroom-cleaning-log/"> restroom cleaning log</Link>.
          </p>
        </section>

        <section>
          <h2>Restaurant checklist app for kitchen, restrooms, and shifts</h2>
          <p>
            A restaurant checklist app is useful when opening, service, and closing checks involve
            different people. CleanScan keeps cleaning routines separate by area while managers
            review completion from one place instead of collecting sign-off sheets.
          </p>
          <ul>
            <li><strong>Kitchen:</strong> assign cleaning to prep areas, cooklines, sinks, and storage.</li>
            <li><strong>Restrooms:</strong> schedule checks and record supplies or issues during service.</li>
            <li><strong>Opening and closing:</strong> give each shift a repeatable list of cleaning tasks.</li>
            <li><strong>Manager review:</strong> see pending and overdue tasks before the next shift.</li>
          </ul>
          <p>
            For the full operation, see <Link href="/solutions/restaurant-cleaning-management/">restaurant cleaning management software</Link>.
            To try a paper-based routine first, browse the{" "}
            <Link href="/templates/">free restaurant cleaning templates</Link>.
          </p>
        </section>

        <section>
          <h2>Cleaning checklist app for multiple spaces</h2>
          <p>
            CleanScan can manage different routines for each monitored space. A restroom can have
            service-block checks, a kitchen can have shift-based sanitation tasks, and a storage
            area can have weekly cleaning—all inside the same system.
          </p>
        </section>

        <section>
          <h2>Show cleaning status with a QR code</h2>
          <p>
            Each space can have a public QR page showing when it was last cleaned. CleanScan also
            generates a printable PDF with the QR code so it can replace a public paper cleaning log.
          </p>
          <Link href="/blog/qr-code-cleaning-checklist-7-days/">See how QR cleaning checklists work</Link>
        </section>

        <section className="article-cta-box">
          <h2>Replace paper cleaning checklists with CleanScan</h2>
          <p>
            Schedule recurring tasks, track completion, keep cleaning records, and give managers a
            clear view of every monitored space.
          </p>
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
        </section>

        <section>
          <h2>Related cleaning software</h2>
          <ul>
            <li><Link href="/cleaning-management-software/">Cleaning management software</Link></li>
            <li><Link href="/cleaning-schedule-app/">Cleaning schedule app</Link></li>
            <li><Link href="/blog/restaurant-cleaning-checklist-app/">Restaurant cleaning checklist app guide</Link></li>
            <li><Link href="/solutions/restroom-quality-control/">Digital restroom cleaning logs</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
