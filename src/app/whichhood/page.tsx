import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const APP_STORE_URL = "https://apps.apple.com/app/id6761684567";
const PRIVACY_URL = "https://mitchellbuehler.github.io/whichhood-privacy/";
const SUPPORT_URL =
  "https://mitchellbuehler.github.io/whichhood-privacy/support.html";

export const metadata: Metadata = {
  metadataBase: new URL("https://buehler.sh"),
  title: "Which Hood — Chicago Neighborhood Finder for iPhone",
  description:
    "Which Hood instantly tells you which Chicago neighborhood you're standing in. All 98 neighborhoods, 77 community areas, and the full 13-county Chicagoland MSA. On-device, private, iPhone.",
  openGraph: {
    title: "Which Hood — Chicago Neighborhood Finder for iPhone",
    description:
      "Open the app and instantly know which Chicago neighborhood you're in. Now with full Chicagoland suburb detection.",
    type: "website",
    url: "https://buehler.sh/whichhood",
    images: ["/whichhood/wrigley.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Hood — Chicago Neighborhood Finder",
    description:
      "Open the app and instantly know which Chicago neighborhood you're in.",
  },
};

const features = [
  {
    title: "Instant answer",
    body: "No searching, no typing, no menus. Open the app and your neighborhood name is already on screen within a second or two.",
  },
  {
    title: "Complete coverage",
    body: "All 98 colloquial neighborhoods and all 77 official community areas — from Wrigleyville and Wicker Park to Austin and Beverly.",
  },
  {
    title: "Chicagoland too",
    body: "Outside the city? Which Hood identifies your suburb across the full 13-county metro — Illinois, Indiana, and Wisconsin.",
  },
  {
    title: "Live map",
    body: "See your current neighborhood boundary highlighted, with neighboring areas labeled around you. Tap refresh after you move.",
  },
  {
    title: "Distance from zero",
    body: "In the suburbs, Which Hood tells you how far you are from State & Madison — the origin point of Chicago's famous street grid.",
  },
  {
    title: "On-device, always",
    body: "Boundary data is bundled in the app. No internet required for neighborhood lookups, and your coordinates never leave your phone.",
  },
];

const screenshots = [
  { src: "/whichhood/wrigley.png", alt: "Which Hood showing Wrigleyville", caption: "Wrigleyville" },
  { src: "/whichhood/bean.png", alt: "Which Hood at Cloud Gate", caption: "The Loop" },
  { src: "/whichhood/suburb.png", alt: "Which Hood showing a Chicagoland suburb", caption: "Suburbs" },
  { src: "/whichhood/outside.png", alt: "Which Hood outside the covered area", caption: "Out of bounds" },
];

export default function WhichHoodPage() {
  return (
    <>
      <PageHeader />

      <main className="relative z-10">
        {/* HERO */}
        <section className="section-container pt-28 md:pt-32 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-base-border shadow-card shrink-0">
                  <Image
                    src="/whichhood/icon.png"
                    alt="Which Hood app icon"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">iOS · Chicago</p>
                  <p className="text-sm text-text-muted mt-1">
                    Free · In-app purchase to remove ads
                  </p>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-text-primary tracking-tight">
                Which Hood am{" "}
                <em className="text-clay not-italic font-display">I in?</em>
              </h1>
              <span className="accent-line" />

              <p className="text-text-body text-lg md:text-xl leading-[1.65] max-w-xl">
                Open the app and instantly know which Chicago neighborhood
                you&apos;re standing in. No searching, no typing — just an
                answer.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <AppStoreButton href={APP_STORE_URL} />
                <Link href={PRIVACY_URL} className="btn-ghost">
                  Privacy policy
                </Link>
              </div>

              <p className="text-text-muted text-sm mt-5">
                Requires iPhone · iOS 17 or later · Location permission
              </p>
            </div>

            {/* HERO SCREENSHOT */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[320px] lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[48px] bg-accent/10 blur-3xl"
                />
                <div className="relative rounded-[40px] overflow-hidden border border-base-border shadow-card bg-base-raised">
                  <Image
                    src="/whichhood/wrigley.png"
                    alt="Which Hood showing the Wrigleyville neighborhood in Chicago"
                    width={1290}
                    height={2796}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section-container border-t border-base-border/60">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow">What it does</p>
            <h2 className="section-heading mt-3">
              Small app,{" "}
              <em className="text-clay not-italic font-display">
                one job done well.
              </em>
            </h2>
            <span className="accent-line" />
            <p className="text-text-body text-[17px] leading-[1.7]">
              Which Hood is the answer to a question every Chicagoan and
              visitor asks at some point. It does that one thing, and it does
              it fast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card flex flex-col">
                <h3 className="font-display text-2xl text-text-primary mb-2 leading-tight">
                  {f.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SCREENSHOTS STRIP */}
        <section className="section-container border-t border-base-border/60">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">Screens</p>
            <h2 className="section-heading mt-3">
              Four states,{" "}
              <em className="text-clay not-italic font-display">
                one answer.
              </em>
            </h2>
            <span className="accent-line" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="group relative rounded-2xl overflow-hidden border border-base-border bg-base-raised shadow-card transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
              >
                <div className="relative aspect-[9/19.5]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs font-medium">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* PRIVACY */}
        <section className="section-container border-t border-base-border/60">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <p className="eyebrow">Privacy</p>
              <h2 className="section-heading mt-3">
                Your location{" "}
                <em className="text-clay not-italic font-display">
                  stays yours.
                </em>
              </h2>
              <span className="accent-line" />
            </div>

            <div className="lg:col-span-3 space-y-5 text-text-body text-[17px] leading-[1.75]">
              <p>
                Every neighborhood lookup happens entirely on your device,
                checked against GeoJSON boundary data bundled inside the app.
                No server round trips, no coordinate uploads, no account.
              </p>
              <p>
                Which Hood does not request the iOS Advertising Identifier and
                does not present an App Tracking Transparency prompt. Ads are
                non-personalized and capped at a G content rating to match the
                app&apos;s 4+ age rating.
              </p>
              <p>
                Don&apos;t want to see ads at all? A one-time $0.99 in-app
                purchase removes them.
              </p>
              <p>
                Read the full{" "}
                <Link
                  href={PRIVACY_URL}
                  className="text-accent hover:text-accent-dim underline underline-offset-4"
                >
                  privacy policy
                </Link>
                {" "}or get in touch on the{" "}
                <Link
                  href={SUPPORT_URL}
                  className="text-accent hover:text-accent-dim underline underline-offset-4"
                >
                  support page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container border-t border-base-border/60">
          <div className="card text-center py-14 px-6 md:py-20">
            <p className="eyebrow">Download</p>
            <h2 className="section-heading mt-3 max-w-2xl mx-auto">
              Find out{" "}
              <em className="text-clay not-italic font-display">which hood</em>
              {" "}you&apos;re in.
            </h2>
            <div className="flex justify-center mt-8">
              <AppStoreButton href={APP_STORE_URL} />
            </div>
            <p className="text-text-muted text-sm mt-5">
              Free · iPhone · iOS 17+
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// --------------------------------------------------------------------------
// Sub-page header: minimal wordmark + back link. The main site header uses
// hash anchors that only resolve on the home page, so we use a dedicated
// lightweight header here.
// --------------------------------------------------------------------------
function PageHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-base/85 backdrop-blur-xl border-b border-base-border">
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl text-text-primary tracking-tight"
        >
          Mitchell<span className="text-clay">.</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-text-body hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>
      </nav>
    </header>
  );
}

// --------------------------------------------------------------------------
// Apple "Download on the App Store" style button. Uses a black pill with
// the Apple logo and two-line label, which is the recognizable convention
// for iOS app marketing pages.
// --------------------------------------------------------------------------
function AppStoreButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#1f1d17] text-white rounded-xl px-5 py-3 hover:bg-black transition-colors duration-200 shadow-card"
      aria-label="Download Which Hood on the App Store"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider opacity-80">
          Download on the
        </span>
        <span className="text-lg font-semibold -mt-0.5">App Store</span>
      </span>
    </a>
  );
}
