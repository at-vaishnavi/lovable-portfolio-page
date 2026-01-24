import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      degree: "MCA",
      institution: "RV Institute of Technology & Management, VTU",
      year: "2025 - 2027",
      status: "Ongoing",
    },
    {
      degree: "BSc Computer Science",
      institution: "Surana College Autonomous, Bangalore University",
      year: "2022 - 2025",
      grade: "93% (Overall 2nd Rank)",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a dedicated software developer with a strong foundation in computer science. 
            My focus is on creating seamless, efficient web applications that solve real-world problems. 
            A BSc Computer Science graduate currently pursuing MCA, I bring skills in programming, 
            frontend technologies, and application development while striving to contribute to efficient project delivery.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-panel-hover p-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <span className="text-sm text-primary font-medium">{edu.year}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                {edu.grade && (
                  <p className="text-primary text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {edu.grade}
                  </p>
                )}
                {edu.status && (
                  <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {edu.status}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Research & Conference Presentations
          </h3>
          <div className="glass-panel p-6">
            <ul className="space-y-3">
              {[
                "Vishwa Gita Sammelana: Viswa-Hithaya Bhagavad-Gita",
                "Erudite – Conference Proceedings: Translatory Embedded literature from varied perspectives",
                "National Level Multi Language Conference on Language & Identity – Concept of Women Empowerment",
                "Rebuilding Bharat through indigenous & innovative practices – Historical Approach of Governance",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
