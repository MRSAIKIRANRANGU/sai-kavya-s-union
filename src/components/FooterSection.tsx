import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer
      className="relative py-12 px-4 text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(38 50% 92%) 0%, hsl(30 25% 20%) 100%)",
      }}
    >
      {/* Gold divider top */}
      <div className="divider-gold w-full mb-10 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* Star ornament */}
        <div className="flex justify-center mb-6">
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
            <path d="M40 4 L45 15 L58 16 L49 25 L52 38 L40 32 L28 38 L31 25 L22 16 L35 15 Z" fill="hsl(42,85%,42%)" opacity="0.7"/>
          </svg>
        </div>

        <h3
          className="font-serif-display font-bold text-gold-gradient tracking-widest"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)" }}
        >
          Saipavan &amp; Kavya
        </h3>

        <p className="font-script text-lg" style={{ color: "hsl(48,90%,78%)" }}>
          25th February 2026
        </p>

        <p
          className="font-elegant text-sm tracking-widest uppercase opacity-60 mt-6"
          style={{ color: "hsl(40,60%,85%)" }}
        >
          Thank you for joining our celebration
        </p>

        <p className="font-script text-2xl mt-2" style={{ color: "hsl(var(--gold-light))" }}>
          ♥
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
