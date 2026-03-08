import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Network, Quote, Library } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Multimodal Understanding",
    description: "Seamlessly processes text, tables, and figures from complex documents (PDFs, Papers, Reports).",
  },
  {
    icon: Network,
    title: "Tree-Structured Reasoning",
    description: "Organizes document content into a hierarchical tree to preserve context and structural relationships.",
  },
  {
    icon: Quote,
    title: "Grounded Citation",
    description: "Every answer is backed by precise citations pointing to the specific source node in the document tree.",
  },
  {
    icon: Library,
    title: "Knowledge Base Integration",
    description: "Build a comprehensive knowledge base from your document collection for cross-document reasoning.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for depth and accuracy. MoDora goes beyond simple text matching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none shadow-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
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
