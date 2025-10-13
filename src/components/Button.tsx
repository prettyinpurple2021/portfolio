import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classes = variant === "primary" ? "btn-primary" : "btn-secondary";
  const content = <span className={classes + " " + className}>{children}</span>;
  if (href) return <Link href={href}>{content}</Link>;
  return content;
}


