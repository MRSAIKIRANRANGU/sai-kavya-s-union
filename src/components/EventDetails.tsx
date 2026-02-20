import { motion } from "framer-motion";
import { Calendar, Clock, UtensilsCrossed, Sparkles } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Date",
    value: "25th February 2026",
    sub: "Wednesday — An Auspicious Day",
  },
  {
    icon: Clock,
    label: "Time",
    value: "9:00 AM – 2:00 PM",
    sub: "Indian Standard Time",
  },
  {
    icon: UtensilsCrossed,
    label: "Lunch",
    value: "Lunch to Follow",
    sub: "All guests are warmly welcome",
  },
];

const EventDetails = () => {
  return (
    <section
      className="relative py-28 px-5 overflow-hidden"
      style={{ background: "var(--gradient-section)" }}
    >
      {/* Soft radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, hsl(42 85% 60% / 0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, hsl(340 40% 80% / 0.07) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-gold flex-1 max-w-24" />
            <Sparkles className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            <div className="divider-gold flex-1 max-w-24" />
          </div>

          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              color: "hsl(var(--primary))",
            }}
          >
            Event Details
          </p>

          <h2
            className="tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
              fontStyle: "italic",
            }}
          >
            <span className="text-gold-gradient">Engagement Ceremony</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-elegant)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              color: "hsl(var(--muted-foreground))",
              lineHeight: 1.8,
            }}
          >
            We joyfully invite you to celebrate this sacred union with us
          </p>
        </motion.div>

        {/* ── Glass Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="glass-card rounded-3xl p-10 md:p-14"
        >
          {/* Ornament top */}
          <div className="flex justify-center mb-10">
            <svg width="220" height="28" viewBox="0 0 220 28" fill="none">
              <line x1="0" y1="14" x2="88" y2="14" stroke="hsl(42,85%,42%)" strokeWidth="0.8" opacity="0.5"/>
              <circle cx="96" cy="14" r="2.5" fill="hsl(48,95%,68%)" opacity="0.7"/>
              <circle cx="110" cy="14" r="5" fill="hsl(42,85%,42%)" opacity="0.8"/>
              <circle cx="110" cy="14" r="2.5" fill="hsl(48,95%,68%)" />
              <circle cx="124" cy="14" r="2.5" fill="hsl(48,95%,68%)" opacity="0.7"/>
              <line x1="132" y1="14" x2="220" y2="14" stroke="hsl(42,85%,42%)" strokeWidth="0.8" opacity="0.5"/>
            </svg>
          </div>

          {/* Details list */}
          <div className="flex flex-col gap-10">
            {details.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.18 + 0.3, ease: "easeOut" }}
                className="flex items-start gap-6"
              >
                {/* Gold icon circle */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-gold mt-1"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <item.icon className="w-7 h-7" style={{ color: "hsl(40,60%,97%)" }} />
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <p
                    className="mb-1 uppercase tracking-[0.25em]"
                    style={{
                      fontFamily: "var(--font-elegant)",
                      fontSize: "0.75rem",
                      color: "hsl(var(--muted-foreground))",
                      letterSpacing: "0.25em",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="mb-1 text-foreground"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 600,
                      fontSize: "clamp(1.25rem, 4vw, 1.7rem)",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-elegant)",
                      fontStyle: "italic",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      color: "hsl(var(--primary))",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-12">
            <div className="divider-gold w-36" />
          </div>

          {/* Blessing note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="text-center mt-8"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
              color: "hsl(var(--primary))",
              lineHeight: 1.6,
            }}
          >
            Your presence is our greatest blessing 🙏
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
