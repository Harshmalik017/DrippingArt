import { ReactNode } from "react";

type ClayCardProps = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  as?: "div" | "article";
};

export default function ClayCard({
  children,
  className = "",
  strong = false,
  as = "div",
}: ClayCardProps) {
  const Tag = as;
  return <Tag className={`${strong ? "clay-strong" : "clay"} ${className}`}>{children}</Tag>;
}
