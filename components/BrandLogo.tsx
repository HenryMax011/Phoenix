import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Só o ícone da fênix */
  iconOnly?: boolean;
  /** Tamanho do ícone em px */
  iconSize?: number;
  /** Mostrar texto PhoenixBor ao lado */
  showWordmark?: boolean;
  href?: string | null;
  onClick?: () => void;
};

export function BrandLogo({
  className,
  iconOnly = false,
  iconSize = 36,
  showWordmark = true,
  href = "/",
  onClick,
}: BrandLogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity duration-150 hover:opacity-85",
        className,
      )}
    >
      <Image
        src="/images/brand/phoenix-icon.png"
        alt="PhoenixBor"
        width={iconSize}
        height={iconSize}
        className="h-auto w-auto object-contain"
        style={{ width: iconSize, height: iconSize }}
        priority
      />
      {!iconOnly && showWordmark ? (
        <span className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-[0.16em] text-white sm:text-xl">
          PhoenixBor
        </span>
      ) : null}
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} onClick={onClick} aria-label="PhoenixBor — início">
      {content}
    </Link>
  );
}
