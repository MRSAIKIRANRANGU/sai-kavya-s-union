import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc";

const addressLines = [
  { text: "Rambabu's Home 🏡", style: "venue" },
  { text: "2R8P+829", style: "normal" },
  { text: "Balvanthapuram Village", style: "normal" },
  { text: "Bhupathur Mallampally", style: "normal" },
  { text: "Mallampalle, Telangana — 506333", style: "highlight" },
];

const LocationSection = () => {
  return (
    <section
      className="relative py-28 px-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(340 28% 95%) 0%, hsl(38 52% 94%) 55%, hsl(40 60% 97%) 100%)",
      }}
    >
      {/* Decorative glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-10"
        style={{ background: "radial-gradient(circle, hsl(42 85% 42%), transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4 opacity-10"
        style={{ background: "radial-gradient(circle, hsl(340 45% 80%), transparent 65%)" }}
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
            <MapPin className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
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
            Venue &amp; Location
          </p>

          <h2
            className="tracking-widest"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            }}
          >
            <span className="text-gold-gradient">Find Your Way to Us</span>
          </h2>
        </motion.div>

        {/* ── Location Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="glass-card rounded-3xl p-10 md:p-14 text-center"
        >
          {/* Nav icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
            className="flex justify-center mb-8"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-gold"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Navigation className="w-9 h-9" style={{ color: "hsl(40,60%,97%)" }} />
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="space-y-3 mb-10"
          >
            {addressLines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily:
                    line.style === "venue"
                      ? "var(--font-serif)"
                      : line.style === "highlight"
                      ? "var(--font-oldstyle)"
                      : "var(--font-elegant)",
                  fontSize:
                    line.style === "venue"
                      ? "clamp(1.4rem, 4.5vw, 1.9rem)"
                      : line.style === "highlight"
                      ? "clamp(0.95rem, 3vw, 1.15rem)"
                      : "clamp(1rem, 3vw, 1.2rem)",
                  fontWeight: line.style === "venue" ? 700 : line.style === "highlight" ? 600 : 400,
                  fontStyle: line.style === "highlight" ? "italic" : "normal",
                  color:
                    line.style === "venue"
                      ? "hsl(var(--foreground))"
                      : line.style === "highlight"
                      ? "hsl(var(--primary))"
                      : "hsl(var(--foreground))",
                  lineHeight: 1.7,
                }}
              >
                {line.text}
              </p>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="divider-gold w-32 mx-auto mb-10" />

          {/* Maps button */}
          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px hsl(42 85% 42% / 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full uppercase transition-all duration-300 shadow-button"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              background: "var(--gradient-gold)",
              color: "hsl(40,60%,97%)",
            }}
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
