import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-steel-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-steel-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CtaButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-600 focus-visible:outline-blue-700",
    secondary:
      "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
    ghost:
      "border border-steel-300 bg-white text-steel-900 hover:border-steel-400 hover:bg-steel-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
