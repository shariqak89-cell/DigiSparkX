import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container grid place-items-center text-center">
        <div className="premium-card max-w-2xl p-10">
          <span className="eyebrow">404 Page</span>
          <h1 className="mt-5 text-5xl font-black">This page slipped into another universe.</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">The link may be wrong or the page has moved. Let’s bring you back to DigiSparkX.</p>
          <Link href="/" className="btn btn-primary mt-7">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
