import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import ActionButtons from "@/components/ActionButtons";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Event Details */}
      <EventDetails />

      {/* 3. Location */}
      <LocationSection />

      {/* 4. Action Buttons — desktop section + mobile sticky bar */}
      <ActionButtons />

      {/* 5. Footer */}
      <FooterSection />

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </main>
  );
};

export default Index;
