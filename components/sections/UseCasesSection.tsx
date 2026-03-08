import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope, TrendingUp, Code, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: Microscope,
    title: "Scientific Papers",
    description: "Analyze complex research papers with heavy chart and formula usage.",
  },
  {
    icon: TrendingUp,
    title: "Financial Reports",
    description: "Extract insights from annual reports containing dense tables and financial statements.",
  },
  {
    icon: Code,
    title: "Technical Docs",
    description: "Navigate through API documentation, architecture diagrams, and code snippets.",
  },
  {
    icon: BookOpen,
    title: "Research Literature",
    description: "Synthesize information across multiple academic sources for literature reviews.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Use Cases
            </h2>
            <p className="text-lg text-muted-foreground">
              MoDora is designed for information-dense environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <useCase.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
