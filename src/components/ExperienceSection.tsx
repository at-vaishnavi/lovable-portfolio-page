import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Card */}
          <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-auto md:right-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:translate-x-1/2 wine-glow" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel-hover p-8"
            >
              <div className="flex items-center gap-2 text-primary mb-2">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-medium">Internship</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Front-End Web Developer Intern
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Dyashin Techno Soft
                </span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Developed responsive web pages using HTML, CSS, JavaScript, and React
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Implemented UI components and improved user experience
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["HTML", "CSS", "JavaScript", "React"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
