import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <HeroSection onDownloadResume={() => setIsResumeModalOpen(true)} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
};

export default Index;
