import { motion } from "framer-motion";
import socials from "@/content/socials";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}>
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-pill bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm sm:text-base font-medium text-gray-700 hover:text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 15px rgba(192, 132, 252, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {social.label}
        </motion.a>
      ))}
    </div>
  );
}


