import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-violet-300/25 py-12 bg-[#1a1325] text-violet-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight">MoDora</span>
            <p className="text-sm text-violet-200/90 max-w-xs">
              Multimodal Document Analysis Assistant.
              Organizing chaos into structured knowledge.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-violet-200/90">
              <li>
                <Link href="https://github.com/weAIDB/MoDora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-violet-200">
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-violet-300/25 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-violet-300/80">
          <p>&copy; {new Date().getFullYear()} MoDora. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-violet-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-violet-200">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
