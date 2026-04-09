import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Which Hood — Support",
  description:
    "Support for the Which Hood iOS app. Contact, troubleshooting, and frequently asked questions.",
  robots: { index: true, follow: true },
};

export default function WhichHoodSupportPage() {
  return (
    <main className="relative z-10">
      <article className="section-container max-w-3xl pt-28 md:pt-32">
        <p className="eyebrow">Which Hood</p>
        <h1 className="section-heading mt-3">
          Support &{" "}
          <em className="text-clay not-italic font-display">FAQ</em>
        </h1>
        <span className="accent-line" />

        <div className="prose-legal">
          <p>
            Thanks for using Which Hood! If you have questions, feedback, or
            need help, please reach out.
          </p>

          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:mitch@buehler.sh">mitch@buehler.sh</a>
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>The app says I&apos;m not in Chicago, but I am.</h3>
          <p>
            Make sure location services are enabled for Which Hood in Settings
            &gt; Privacy &amp; Security &gt; Location Services. If your GPS
            signal is weak (indoors, underground), the app may not be able to
            determine your precise location. Try moving to an area with a
            clearer view of the sky and tap Refresh.
          </p>

          <h3>
            I&apos;m in a Chicago suburb but the app doesn&apos;t recognize
            it.
          </h3>
          <p>
            Which Hood covers the 13-county Chicago-Naperville-Elgin
            Metropolitan Statistical Area. If you are outside this area, the
            app will show the &quot;not in Chicago&quot; screen. The covered
            counties are Cook, DeKalb, DuPage, Grundy, Kane, Kankakee, Kendall,
            Lake, McHenry, and Will in Illinois; Lake and Porter in Indiana;
            and Kenosha in Wisconsin.
          </p>

          <h3>How do I remove ads?</h3>
          <p>
            Tap &quot;Remove Ads&quot; at the bottom of the main screen to
            purchase the ad-free upgrade for $0.99. If you&apos;ve already
            purchased it, tap &quot;Restore&quot; to restore your purchase.
          </p>

          <h3>Does the app track my location?</h3>
          <p>
            No. All location processing happens on your device. Your
            coordinates are never stored or sent to any server. See the{" "}
            <Link
              href="/whichhood/privacy"
              className="text-accent hover:text-accent-dim underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-base-border/60 text-sm text-text-muted">
          <Link
            href="/whichhood"
            className="text-accent hover:text-accent-dim underline underline-offset-4"
          >
            ← Back to Which Hood
          </Link>
        </div>
      </article>
    </main>
  );
}
