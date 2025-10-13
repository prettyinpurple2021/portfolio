import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({ href, children, variant = "primary", className = "", target, rel }: ButtonProps) {
  const classes = variant === "primary" ? "btn-primary" : "btn-secondary";
  const content = <span className={classes + " " + className}>{children}</span>;
  
  if (href) {
    // Use regular anchor tag for external links with target
    if (target) {
      return (
        <a href={href} target={target} rel={rel || "noopener noreferrer"}>
          {content}
        </a>
      );
    }
    // Use Next.js Link for internal links
    return <Link href={href}>{content}</Link>;
  }
  
  return content;
}


