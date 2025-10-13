import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16">
      <div className="container-section">
        <div className="glass-frosted rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/20">
          <p className="text-sm text-gray-600">
            © {year} SoloSuccess AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-purple-400 transition-colors">
              Terms
            </Link>
            <Link 
              href="/admin" 
              className="text-xs px-3 py-1 rounded-pill bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


