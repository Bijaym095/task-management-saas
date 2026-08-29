import type { ElementType, ReactNode } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "small"
  | "muted";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
  as?: ElementType;
}

const styles: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold tracking-tight md:text-5xl",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold",
  p: "text-base leading-7",
  lead: "text-xl text-muted-foreground",
  small: "text-sm font-medium",
  muted: "text-sm text-muted-foreground",
};

const elements: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  small: "small",
  muted: "p",
};

export function Typography({
  children,
  variant = "p",
  className = "",
  as,
}: TypographyProps) {
  const Component = as ?? elements[variant];

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
}