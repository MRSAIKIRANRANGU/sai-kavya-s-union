import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer
      className="relative py-16 px-5 text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(38 48% 91%) 0%, hsl(30 30% 18%) 100%)",
      }}
    >
      <div className="divider-gold w-full mb-12 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center gap-5"
      >
        {/* Star ornament */}
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="mb-2">
          <path
            d="M26 4 L29.5 17.5 L43 21 L29.5 24.5 L26 38 L22.5 24.5 L9 21 L22.5 17.5 Z"
            fill="hsl(42,85%,42%)"
            opacity="0.75"
          />
        </svg>

        {/* Couple names */}
        <h3
          className="text-gold-gradient tracking-widest"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Saipavan &amp; Kavya
        </h3>

        {/* Script date */}
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
            color: "hsl(48,88%,72%)",
          }}
        >
          25th February 2026
        </p>

        <div className="divider-gold w-28 opacity-50" />

        {/* Thank you */}
        <p
          style={{
            fontFamily: "var(--font-oldstyle)",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "hsl(40,60%,80%)",
            opacity: 0.65,
          }}
        >
          Thank you for joining our celebration
        </p>

        {/* Heart */}
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "2.2rem",
            color: "hsl(var(--gold-light))",
            lineHeight: 1,
          }}
        >
          ♥
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
