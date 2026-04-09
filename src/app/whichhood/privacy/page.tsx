import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Which Hood — Privacy Policy",
  description:
    "Privacy policy for the Which Hood iOS app. Location data stays on-device. No tracking, no IDFA, no account.",
  robots: { index: true, follow: true },
};

export default function WhichHoodPrivacyPage() {
  return (
    <main className="relative z-10">
      <article className="section-container max-w-3xl pt-28 md:pt-32">
        <p className="eyebrow">Which Hood</p>
        <h1 className="section-heading mt-3">
          Privacy{" "}
          <em className="text-clay not-italic font-display">Policy</em>
        </h1>
        <span className="accent-line" />
        <p className="text-text-muted text-sm">Last updated: April 9, 2026</p>

        <div className="prose-legal">
          <p>
            Which Hood (&quot;the App&quot;) is developed by Mitchell Buehler.
            This privacy policy explains how the App handles your information.
          </p>

          <h2>Location Data</h2>
          <p>
            The App requests access to your device&apos;s location solely to
            determine which Chicago neighborhood or Chicagoland suburb you are
            currently in. Your location data is:
          </p>
          <ul>
            <li>
              <strong>Processed entirely on your device.</strong> Neighborhood
              and community area lookups are performed locally against
              boundary data bundled within the App.
            </li>
            <li>
              <strong>Never stored.</strong> The App does not save your
              location history or any record of where you have been.
            </li>
            <li>
              <strong>Never transmitted to our servers.</strong> We do not
              operate any servers that receive your location data.
            </li>
          </ul>
          <p>
            When you are in a Chicagoland suburb, the App uses Apple&apos;s
            built-in reverse geocoding service (CLGeocoder) to determine the
            name of the municipality you are in. This request is handled by
            Apple according to{" "}
            <a
              href="https://www.apple.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>

          <h2>Advertising</h2>
          <p>
            The App displays <strong>non-personalized ads</strong> provided by
            Google AdMob. Non-personalized means the ads are not targeted based
            on your prior activity or a behavioral profile. The App does not
            request access to the iOS Advertising Identifier (IDFA) and does
            not present an App Tracking Transparency prompt.
          </p>
          <p>
            To serve and measure non-personalized ads, Google AdMob may still
            receive a limited set of data, including:
          </p>
          <ul>
            <li>Coarse location derived from your IP address</li>
            <li>Device type, operating system version, and language</li>
            <li>General ad interaction data (impressions, clicks)</li>
          </ul>
          <p>
            This data collection is governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            . AdMob requests are sent with the <code>npa=1</code> flag, which
            Google honors as a non-personalized ad request.
          </p>
          <p>
            Ad creative is capped at a &quot;G&quot; (general audiences)
            maximum content rating to match the App&apos;s 4+ age rating.
          </p>
          <p>
            If you ever see an ad you believe is inappropriate or
            age-inappropriate, you can report it directly from the App by
            tapping &quot;Report inappropriate ad&quot; beneath the banner.
            Reports go to{" "}
            <a href="mailto:mitch@buehler.sh">mitch@buehler.sh</a>.
          </p>
          <p>
            You can remove all ads from the App by purchasing the ad-free
            upgrade ($0.99), after which no advertising data is collected.
          </p>

          <h2>In-App Purchases</h2>
          <p>
            The App offers an optional in-app purchase to remove ads. This
            transaction is processed entirely by Apple through the App Store.
            We do not receive or store any payment information.
          </p>

          <h2>Data We Do Not Collect</h2>
          <p>We do not collect, store, or transmit:</p>
          <ul>
            <li>Your name, email address, or any personal contact information</li>
            <li>Your location history or coordinates</li>
            <li>Analytics or usage tracking data</li>
            <li>Any account or login credentials</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>The App uses the following third-party services:</p>
          <ul>
            <li>
              <strong>Google AdMob</strong> — for displaying advertisements (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Apple CLGeocoder</strong> — for reverse geocoding suburb
              names (
              <a
                href="https://www.apple.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Apple StoreKit</strong> — for processing in-app purchases
              (
              <a
                href="https://www.apple.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The App is not directed at children under the age of 13 and does
            not knowingly collect any personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be reflected on this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this privacy policy, please
            contact:
          </p>
          <p>
            Mitchell Buehler
            <br />
            Email: <a href="mailto:mitch@buehler.sh">mitch@buehler.sh</a>
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
