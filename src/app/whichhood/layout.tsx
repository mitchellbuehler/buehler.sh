import Link from "next/link";
import Footer from "@/components/Footer";

export default function WhichHoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      {children}
      <Footer />
    </>
  );
}

// --------------------------------------------------------------------------
// Sub-page header: minimal wordmark + back link. The main site header uses
// hash anchors that only resolve on the home page, so we use a dedicated
// lightweight header for everything under /whichhood.
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
