import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE = "8978553778";
const WHATSAPP_MSG = encodeURIComponent("Hi Sai, please share live location.");
const MAPS_URL =
  "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc";

const actions = [
  {
    label: "Call",
    icon: Phone,
    href: `tel:${PHONE}`,
    style: {
      background: "var(--gradient-gold)",
      color: "hsl(40,60%,97%)",
    },
    hoverGlow: "hsl(42 85% 42% / 0.5)",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/91${PHONE}?text=${WHATSAPP_MSG}`,
    style: {
      background: "linear-gradient(135deg, hsl(142 70% 40%), hsl(142 65% 30%))",
      color: "hsl(40,60%,97%)",
    },
    hoverGlow: "hsl(142 70% 40% / 0.5)",
  },
  {
    label: "Maps",
    icon: MapPin,
    href: MAPS_URL,
    style: {
      background: "linear-gradient(135deg, hsl(210 80% 50%), hsl(210 75% 38%))",
      color: "hsl(40,60%,97%)",
    },
    hoverGlow: "hsl(210 80% 50% / 0.5)",
  },
];

/* ─── Desktop inline section ─── */
const ActionSection = () => (
  <section
    className="hidden md:block relative py-20 px-4 overflow-hidden"
    style={{
      background: "linear-gradient(180deg, hsl(40 60% 97%) 0%, hsl(38 50% 92%) 100%)",
    }}
  >
    <div className="max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="divider-gold w-24 mx-auto mb-6" />
        <h2
          className="font-serif-display font-semibold text-gold-gradient tracking-widest mb-3"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
        >
          Get in Touch
        </h2>
        <p className="font-script text-muted-foreground text-lg">
          We'd love to hear from you
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        {actions.map((action, i) => (
          <motion.a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              boxShadow: `0 8px 30px ${action.hoverGlow}`,
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-serif-display font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-button"
            style={action.style}
          >
            <action.icon className="w-5 h-5" />
            {action.label}
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Mobile sticky bottom bar ─── */
const StickyMobileBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
    <div
      className="flex items-stretch shadow-[0_-4px_30px_rgba(0,0,0,0.15)]"
      style={{
        background: "rgba(250,247,240,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid hsl(42 85% 42% / 0.2)",
      }}
    >
      {actions.map((action, i) => (
        <motion.a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          whileTap={{ scale: 0.93 }}
          className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3.5 px-2 font-serif-display text-xs tracking-wider uppercase transition-all duration-200"
          style={action.style}
        >
          <action.icon className="w-5 h-5" />
          <span>{action.label}</span>
        </motion.a>
      ))}
    </div>
    {/* Safe area spacer */}
    <div
      className="h-safe-bottom"
      style={{ background: "rgba(250,247,240,0.97)", paddingBottom: "env(safe-area-inset-bottom)" }}
    />
  </div>
);

const ActionButtons = () => (
  <>
    <ActionSection />
    <StickyMobileBar />
  </>
);

export default ActionButtons;
