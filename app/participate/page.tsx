import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ClipboardList, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/lib/site";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Participate in the AlgoLens study",
  description:
    "Join a short, anonymous study evaluating AlgoLens for learning data structures and algorithms (IEEE PuneCon 2026).",
};

const steps = [
  "Read and accept the online consent form.",
  "Fill in a short demographics form (no name or email — just a participant code).",
  "Take a quick pre-test on data-structure concepts.",
  "Use AlgoLens to work through a few guided algorithm tasks.",
  "Take the post-test, then a brief usability survey (SUS) and workload survey (NASA-TLX).",
];

export default function Participate() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-50">
          Participate in the AlgoLens study
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
          AlgoLens is being evaluated for a research paper at{" "}
          <span className="text-zinc-200">IEEE PuneCon 2026</span>. We&apos;re
          measuring how visualizing real code helps students learn data
          structures and algorithms. Your participation is anonymous and
          voluntary.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <InfoCard icon={Clock} title="~60 minutes" text="One short session." />
          <InfoCard
            icon={ShieldCheck}
            title="Anonymous"
            text="No name or email — only a code."
          />
          <InfoCard
            icon={ClipboardList}
            title="5 short steps"
            text="Consent, tests & surveys."
          />
        </div>

        <h2 className="mt-12 text-lg font-semibold text-zinc-100">
          What you&apos;ll do
        </h2>
        <ol className="mt-4 space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] text-sky-400">
                {i + 1}
              </span>
              <span className="text-[14px] leading-relaxed text-zinc-400">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl border border-white/10 bg-[#0c0d10] p-6">
          <h3 className="text-sm font-semibold text-zinc-100">Ready to start?</h3>
          <p className="mt-2 text-[13px] text-zinc-400">
            Begin with the consent form. You can stop at any time.
          </p>
          <a
            href={site.studyForm}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-400"
          >
            Start the study
          </a>
        </div>

        <p className="mt-6 text-[12px] text-zinc-500">
          Questions? Contact{" "}
          <a href={`mailto:${site.email}`} className="text-zinc-400 underline">
            {site.email}
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c0d10] p-4">
      <Icon className="size-5 text-sky-400" />
      <p className="mt-2 text-[14px] font-medium text-zinc-100">{title}</p>
      <p className="text-[12px] text-zinc-500">{text}</p>
    </div>
  );
}
