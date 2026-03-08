import fs from "node:fs/promises";
import path from "node:path";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/layout/Container";

type CaseItem = {
  questionId: number;
  question: string;
  answer: string;
  pdf_id: string;
  tag: string;
};

function sanitizeCaseJson(raw: string): string {
  return raw
    .split("\n")
    .map((line) => line.replace(/<[-\sA-Za-z!]+/g, "").trimEnd())
    .join("\n");
}

async function loadCases(): Promise<CaseItem[]> {
  const file = path.join(process.cwd(), "case.json");
  const raw = await fs.readFile(file, "utf8");
  const sanitized = sanitizeCaseJson(raw);
  const data = JSON.parse(sanitized) as CaseItem[];
  return data.filter((item) => item && item.questionId && item.question && item.answer);
}

export default async function CasesPage() {
  const cases = await loadCases();
  const featuredIds = new Set([354, 446]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                MoDora Case Showcase
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Curated examples from real MoDora question-answer results.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {cases.map((item) => (
                <article
                  key={item.questionId}
                  className={`rounded-xl border bg-white/85 p-5 shadow-sm dark:bg-slate-900/70 ${
                    featuredIds.has(item.questionId)
                      ? "border-violet-300/70 shadow-[0_12px_40px_-24px_rgba(124,58,237,0.7)]"
                      : "border-border"
                  }`}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                      Q#{item.questionId}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      PDF {item.pdf_id}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Tag {item.tag}
                    </span>
                    {featuredIds.has(item.questionId) && (
                      <span className="rounded-full bg-violet-200/80 px-2.5 py-1 text-violet-800 dark:bg-violet-800/50 dark:text-violet-200">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-base font-semibold leading-6 md:text-lg">{item.question}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
                    <span className="font-medium text-foreground">Answer: </span>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
