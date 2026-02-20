import { motion } from "framer-motion";
import { Calendar, Clock, UtensilsCrossed, Sparkles } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Date",
    value: "25th February 2026",
    sub: "Wednesday",
  },
  {
    icon: Clock,
    label: "Time",
    value: "9:00 AM – 2:00 PM",
    sub: "IST",
  },
  {
    icon: UtensilsCrossed,
    label: "Lunch",
    value: "Lunch to Follow",
    sub: "All are welcome",
  },
];

const EventDetails = () => {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "var(--gradient-section)" }}
    >
      {/* Background ornament */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, hsl(42 85% 42%) 0%, transparent 60%), radial-gradient(circle at 70% 50%, hsl(340 40% 88%) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold flex-1 max-w-20" />
            <Sparkles className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            <div className="divider-gold flex-1 max-w-20" />
          </div>
          <h2
            className="font-serif-display font-semibold text-gold-gradient tracking-widest mb-2"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
          >
            Event Details
          </h2>
          <p className="font-script text-muted-foreground text-lg">
            We joyfully invite you to celebrate with us
          </p>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          {/* Ornamental top inside card */}
          <div className="flex justify-center mb-8">
            <svg width="200" height="24" viewBox="0 0 200 24" fill="none">
              <path d="M0 12 Q50 4 100 12 Q150 20 200 12" stroke="hsl(42,85%,42%)" strokeWidth="1" fill="none" opacity="0.6"/>
              <circle cx="100" cy="12" r="3.5" fill="hsl(48,95%,68%)" />
              <circle cx="40" cy="10" r="2" fill="hsl(42,85%,42%)" opacity="0.5"/>
              <circle cx="160" cy="14" r="2" fill="hsl(42,85%,42%)" opacity="0.5"/>
              <circle cx="10" cy="12" r="1.5" fill="hsl(42,85%,42%)" opacity="0.3"/>
              <circle cx="190" cy="12" r="1.5" fill="hsl(42,85%,42%)" opacity="0.3"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {details.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3, ease: "easeOut" }}
                className="flex items-center gap-5"
              >
                {/* Icon container */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-gold"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "hsl(40,60%,97%)" }} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-serif-display text-xs tracking-[0.2em] uppercase mb-1 text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-elegant font-semibold text-xl md:text-2xl text-foreground">
                    {item.value}
                  </p>
                  <p className="font-script text-sm" style={{ color: "hsl(var(--primary))" }}>
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-8">
            <div className="divider-gold w-32" />
          </div>

          {/* Special note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center font-script text-xl mt-6"
            style={{ color: "hsl(var(--primary))" }}
          >
            Your presence is our greatest blessing 🙏
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
