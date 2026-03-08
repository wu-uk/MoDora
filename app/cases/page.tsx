import fs from "node:fs/promises";
import path from "node:path";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/layout/Container";

type ResultItem = {
  questionId: number;
  question: string;
  answer: string[] | string;
  prediction: string;
  judge: "T" | "F";
  pdf_id: string;
  tag: string;
};

type ComparisonItem = {
  questionId: number;
  question: string;
  groundTruth: string;
  modoraPrediction: string;
  gpt5Prediction: string;
  pdf_id: string;
  tag: string;
};

function formatTag(tag: string): string {
  const [countCode, typeCode] = String(tag ?? "").split("-");
  const countLabelMap: Record<string, string> = {
    "1": "One clue",
    "2": "Two clues",
  };
  const typeLabelMap: Record<string, string> = {
    "1": "Text clue",
    "2": "Image clue",
    "3": "Title clue",
    "4": "Location clue",
    "5": "Metadata clue",
  };
  const countLabel = countLabelMap[countCode] ?? `${countCode} clues`;
  const typeLabel = typeLabelMap[typeCode] ?? `Type ${typeCode}`;
  return `${countLabel} · ${typeLabel}`;
}

function normalizeAnswer(answer: string[] | string): string {
  if (Array.isArray(answer)) return answer.join("; ");
  return String(answer ?? "");
}

async function loadJsonl(filePath: string): Promise<ResultItem[]> {
  const raw = await fs.readFile(filePath, "utf8");
  return raw
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => JSON.parse(line) as ResultItem);
}

async function loadComparisons(): Promise<ComparisonItem[]> {
  const base = path.join(process.cwd(), "Results");
  const [modora, gpt5] = await Promise.all([
    loadJsonl(path.join(base, "resmodora.jsonl")),
    loadJsonl(path.join(base, "resgpt5.jsonl")),
  ]);

  const gpt5ById = new Map<number, ResultItem>();
  for (const row of gpt5) gpt5ById.set(row.questionId, row);

  const filtered: ComparisonItem[] = [];
  for (const m of modora) {
    const g = gpt5ById.get(m.questionId);
    if (!g) continue;
    if (m.judge === "T" && g.judge === "F") {
      filtered.push({
        questionId: m.questionId,
        question: m.question,
        groundTruth: normalizeAnswer(m.answer),
        modoraPrediction: m.prediction,
        gpt5Prediction: g.prediction,
        pdf_id: m.pdf_id,
        tag: m.tag,
      });
    }
  }
  return filtered;
}

export default async function CasesPage() {
  const cases = await loadComparisons();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Use Cases: MoDora vs GPT-5
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Filtered set where MoDora is correct and GPT-5 is incorrect.
              </p>
              <p className="text-sm text-violet-700 dark:text-violet-300">
                Total matched cases: {cases.length}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {cases.map((item) => (
                <article
                  key={item.questionId}
                  className="rounded-xl border border-violet-200/60 bg-white/85 p-5 shadow-sm dark:border-violet-700/50 dark:bg-slate-900/70"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                      Q#{item.questionId}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      PDF {item.pdf_id}
                    </span>
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                      {formatTag(item.tag)}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Raw tag {item.tag}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold leading-6 md:text-lg">{item.question}</h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="rounded-md border border-emerald-200 bg-emerald-50/70 p-3 text-sm dark:border-emerald-900/60 dark:bg-emerald-900/20">
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">Ground Truth</p>
                      <p className="mt-1 text-foreground">{item.groundTruth}</p>
                    </div>
                    <div className="rounded-md border border-violet-200 bg-violet-50/70 p-3 text-sm dark:border-violet-900/60 dark:bg-violet-900/20">
                      <p className="font-semibold text-violet-700 dark:text-violet-300">MoDora</p>
                      <p className="mt-1 text-foreground">{item.modoraPrediction}</p>
                    </div>
                    <div className="rounded-md border border-rose-200 bg-rose-50/70 p-3 text-sm dark:border-rose-900/60 dark:bg-rose-900/20">
                      <p className="font-semibold text-rose-700 dark:text-rose-300">GPT-5</p>
                      <p className="mt-1 text-foreground">{item.gpt5Prediction}</p>
                    </div>
                  </div>
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
