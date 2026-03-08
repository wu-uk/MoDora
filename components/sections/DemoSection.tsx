"use client";

import { Container } from "@/components/layout/Container";
import { Badge } from "lucide-react"; // Import Badge icon just in case, but usually Badge is a component. Wait, I don't have Badge component. I'll just use span.
import Image from "next/image";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-secondary/30">
      <Container>
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See MoDora in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              From raw documents to grounded answers. MoDora parses, structures, and reasons over your data.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border bg-background">
             <Image 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20modern%20software%20interface%20screenshot%20showing%20a%20document%20analysis%20dashboard%20with%20a%20PDF%20on%20the%20left%20and%20a%20structured%20tree%20visualization%20on%20the%20right%2C%20clean%20UI%2C%20white%20background%2C%20blue%20accents%2C%20high%20resolution&image_size=landscape_16_9"
                alt="MoDora Dashboard Interface"
                fill
                className="object-cover"
             />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl pt-8">
            {["Upload", "Parse", "Tree Build", "Retrieval", "Answer"].map((step, i) => (
              <div key={step} className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
