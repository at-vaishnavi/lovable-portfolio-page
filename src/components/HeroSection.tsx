import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

interface HeroSectionProps {
  onDownloadResume: () => void;
}

const HeroSection = ({ onDownloadResume }: HeroSectionProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient">
            Vaishnavi V
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
           MCA Student | Aspiring Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            I enjoy solving real-world problems through software development, with experience in web applications and a strong foundation in core programming concepts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("#projects")}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={onDownloadResume}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="glass"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
