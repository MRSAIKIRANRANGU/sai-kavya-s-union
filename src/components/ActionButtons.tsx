import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE = "8978553778";
const WHATSAPP_MSG = encodeURIComponent("Hi Sai, please share live location.");
const MAPS_URL =
  "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc";

const actions = [
  {
    label: "Call Us",
    icon: Phone,
    href: `tel:${PHONE}`,
    gradient: "linear-gradient(135deg, hsl(42 85% 44%), hsl(38 80% 30%))",
    glow: "hsl(42 85% 42% / 0.55)",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/91${PHONE}?text=${WHATSAPP_MSG}`,
    gradient: "linear-gradient(135deg, hsl(142 65% 40%), hsl(142 60% 28%))",
    glow: "hsl(142 65% 40% / 0.5)",
  },
  {
    label: "Get Directions",
    icon: MapPin,
    href: MAPS_URL,
    gradient: "linear-gradient(135deg, hsl(215 80% 52%), hsl(215 75% 36%))",
    glow: "hsl(215 80% 52% / 0.5)",
  },
];

/* ─── Desktop Section ─── */
const ActionSection = () => (
  <section
    className="hidden md:block relative py-28 px-5 overflow-hidden"
    style={{ background: "linear-gradient(180deg, hsl(40 60% 97%) 0%, hsl(38 48% 91%) 100%)" }}
  >
    <div className="max-w-3xl mx-auto text-center">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mb-16"
      >
        <div className="divider-gold w-28 mx-auto mb-6" />
        <p
          className="mb-3"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "hsl(var(--primary))",
          }}
        >
          Reach Out to Us
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
          }}
        >
          <span className="text-gold-gradient">We'd love to hear from you</span>
        </h2>
        <div className="divider-gold w-28 mx-auto mt-6" />
      </motion.div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {actions.map((action, i) => (
          <motion.a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.06, boxShadow: `0 10px 36px ${action.glow}` }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-9 py-4 rounded-full uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              background: action.gradient,
              color: "hsl(40,60%,97%)",
              boxShadow: `0 4px 20px ${action.glow}`,
            }}
          >
            <action.icon className="w-5 h-5" />
            {action.label}
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Mobile Sticky Bottom Bar ─── */
const StickyMobileBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
    <div
      className="flex items-stretch"
      style={{
        background: "rgba(250,247,240,0.97)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid hsl(42 85% 42% / 0.25)",
        boxShadow: "0 -4px 30px rgba(0,0,0,0.12)",
      }}
    >
      {actions.map((action) => (
        <motion.a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          whileTap={{ scale: 0.93 }}
          className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3.5 px-2 transition-all duration-200"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: action.gradient,
            color: "hsl(40,60%,97%)",
          }}
        >
          <action.icon className="w-5 h-5" />
          <span>{action.label}</span>
        </motion.a>
      ))}
    </div>
    <div style={{ background: "rgba(250,247,240,0.97)", paddingBottom: "env(safe-area-inset-bottom)" }} />
  </div>
);

const ActionButtons = () => (
  <>
    <ActionSection />
    <StickyMobileBar />
  </>
);

export default ActionButtons;
