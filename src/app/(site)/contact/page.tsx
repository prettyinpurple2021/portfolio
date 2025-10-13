import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <div className="py-10">
      <SectionHeader
        title="Contact"
        subtitle="Let’s collaborate. Reach out via socials or email."
      />
      <GlassCard>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SocialLinks />
          <a className="btn-primary" href="mailto:hello@solosuccess.ai">
            hello@solosuccess.ai
          </a>
        </div>
      </GlassCard>
    </div>
  );
}


