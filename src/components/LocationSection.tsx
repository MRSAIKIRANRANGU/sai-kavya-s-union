import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc";

const LocationSection = () => {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(340 30% 95%) 0%, hsl(38 55% 94%) 60%, hsl(40 60% 97%) 100%)",
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-10 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, hsl(42 85% 42%), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, hsl(340 45% 85%), transparent 70%)" }}
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
            <MapPin className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            <div className="divider-gold flex-1 max-w-20" />
          </div>
          <h2
            className="font-serif-display font-semibold text-gold-gradient tracking-widest mb-2"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
          >
            Venue
          </h2>
          <p className="font-script text-muted-foreground text-lg">
            Find your way to celebrate with us
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="glass-card rounded-2xl p-8 md:p-10 text-center"
        >
          {/* Pin Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-gold"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Navigation className="w-7 h-7" style={{ color: "hsl(40,60%,97%)" }} />
            </div>
          </motion.div>

          {/* Venue Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="font-serif-display font-semibold text-2xl md:text-3xl mb-2 text-foreground"
          >
            Rambabu's Home 🏡
          </motion.h3>

          {/* Divider */}
          <div className="divider-gold w-24 mx-auto my-5" />

          {/* Address Lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="space-y-1 mb-8"
          >
            {[
              "2R8P+829",
              "Balvanthapuram Village",
              "Bhupathur Mallampally",
              "Mallampalle, Telangana — 506333",
            ].map((line, i) => (
              <p
                key={i}
                className="font-elegant text-base md:text-lg"
                style={{
                  color: i === 3 ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                  fontWeight: i === 3 ? 500 : 400,
                }}
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* Maps Button */}
          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px hsl(42 85% 42% / 0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif-display font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-button"
            style={{
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
