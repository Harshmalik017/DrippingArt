"use client";

import { useState } from "react";
import Image from "next/image";
import { accentStyles, AccentKey } from "@/lib/accent-styles";

type ProductImageProps = {
  src: string;
  alt: string;
  accent: AccentKey;
};

export default function ProductImage({ src, alt, accent }: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const chip = accentStyles[accent].chip;

  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${chip} bg-cream-deep dark:bg-night-elevated`}>
        <span className="rounded-full bg-white/70 px-4 py-1.5 font-body text-xs tracking-wide text-ink/60 dark:bg-black/30 dark:text-cream/70">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}
