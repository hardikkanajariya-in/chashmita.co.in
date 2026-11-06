import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper py-16">
      <Container>
        <div className="mx-auto max-w-md border border-ink bg-paper-2 p-8 text-center shadow-lg">
          <div className="relative mx-auto flex h-12 w-12 items-center justify-center border border-ink bg-paper">
            <div className="h-6 w-6 border-2 border-accent border-t-transparent animate-spin" />
          </div>

          <p className="mt-6 font-outlier text-xs uppercase tracking-widest text-accent">
            CHASHMITA ENGINEERS // SYSTEM INITIALIZING
          </p>

          <h2 className="mt-2 font-display text-xl font-bold text-ink">
            Loading Engineering Specifications...
          </h2>

          <div className="mt-4 flex items-center justify-center gap-1.5 font-outlier text-xs text-muted">
            <span className="inline-block h-1.5 w-1.5 bg-accent animate-pulse" />
            <span>Retrieving verified blueprints & technical documentation</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

