import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full mt-auto py-8 px-6 sm:px-10 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-t border-white/40 dark:border-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-background-dark/70 dark:text-background-light/70 text-center md:text-left">
          © {year} Enchanted Nightmare. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/home" className="text-sm font-medium text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}


