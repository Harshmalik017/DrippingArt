type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p
          className={`mb-3 font-body text-sm ${
            light ? "text-gold-light" : "text-terracotta dark:text-coral"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`font-display text-4xl leading-tight text-balance sm:text-5xl ${
          light ? "text-cream" : "text-ink dark:text-cream"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base leading-relaxed ${
            light ? "text-cream/75" : "text-ink/70 dark:text-night-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
