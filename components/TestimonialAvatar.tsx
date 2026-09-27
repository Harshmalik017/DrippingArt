import Image from "next/image";

type TestimonialAvatarProps = {
  name: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export default function TestimonialAvatar({
  name,
  imageSrc,
  imageAlt,
  className = "",
}: TestimonialAvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-cream/60 bg-cream-deep shadow-[var(--clay-shadow-sm)] dark:border-white/10 dark:bg-night-surface ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? name}
          fill
          sizes="96px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-coral/25 via-gold/20 to-blush/25 font-display text-lg text-terracotta-dark dark:text-coral">
          {initials}
        </div>
      )}
    </div>
  );
}
