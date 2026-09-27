import { Category } from "@/lib/site-config";
import { accentStyles } from "@/lib/accent-styles";
import {
  ClockIcon,
  KeychainIcon,
  FrameIcon,
  NameplateIcon,
  CoasterIcon,
  TrayIcon,
} from "./CategoryIcon";

export const categoryIconMap: Record<string, (props: { className?: string }) => JSX.Element> = {
  "wall-clocks": ClockIcon,
  keychains: KeychainIcon,
  "photo-frames": FrameIcon,
  nameplates: NameplateIcon,
  coasters: CoasterIcon,
  "jewellery-trays": TrayIcon,
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = categoryIconMap[category.slug];
  const accent = accentStyles[category.accent];

  return (
    <div className="clay clay-interactive group relative h-full overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1.5">
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent.chip} ${accent.icon}`}>
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <h3 className="mt-5 font-display text-2xl text-ink dark:text-cream">{category.name}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink/70 dark:text-night-soft">
        {category.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-2.5 py-1 font-body text-[11px] font-medium tracking-wide shadow-sm ${accent.badge}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
