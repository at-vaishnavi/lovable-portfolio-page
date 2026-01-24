import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Website",
    objective: "Build a full-featured frontend web application with modern React patterns",
    techStack: ["React", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/at-vaishnavi",
  },
  {
    title: "CRUD Operations System",
    objective: "Demonstrate database operations and CRUD functionality with Python",
    techStack: ["Python", "SQLite"],
    github: "https://github.com/at-vaishnavi/crud-operations",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass-panel-hover p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.objective}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="heroOutline"
                size="sm"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
