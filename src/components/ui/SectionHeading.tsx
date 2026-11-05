import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  description,
  className,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-3xl min-w-0",
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            "mb-3 text-sm font-medium",
            inverted ? "text-paper/90" : "text-muted",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-section leading-none",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "lead mt-4",
            inverted ? "text-paper/95" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
