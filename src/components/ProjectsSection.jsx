import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Interview Coach",
    description:
      "AI-powered interview preparation platform that analyzes resumes and generates personalized technical, behavioral, and project-based interview questions using Groq LLM APIs.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "Prisma", "Groq AI"],
    demoUrl: "https://github.com/hadishah123/ai-interview-coach",
    githubUrl: "https://github.com/hadishah123/ai-interview-coach",
  },
  {
    id: 2,
    title: "SnackHub",
    description:
  "Production-ready MERN food delivery platform with Firebase authentication, Razorpay payment integration, JWT-based authorization, real-time order tracking with user and admin dashboards.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Razorpay"],
    demoUrl: "https://snackhub-nagpur.vercel.app/",
    githubUrl: "https://github.com/hadishah123/snackhub",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analysis tool that parses resumes, matches skills with job descriptions, and provides ATS-friendly improvement suggestions using NLP and LLMs.",
    image: "/projects/project3.png",
    tags: ["React", "FastAPI", "OpenAI", "NLP", "Python", "Machine Learning"],
    demoUrl: "https://github.com/hadishah123/resume-analyzer-ai",
    githubUrl: "https://github.com/hadishah123/resume-analyzer-ai",
  },
  // {
  //   id: 4,
  //   title: "FlashChat",
  //   description:
  //     "Real-time chat application where users can instantly connect using Room IDs without signup.",
  //   image: "/projects/project4.png",
  //   tags: ["React", "Express", "Socket.io"],
  //   demoUrl: "https://flashchat-tsjz.onrender.com/",
  //   githubUrl: "https://github.com/hadishah123/FlashChat",
  // },
  // {
  //   id: 5,
  //   title: "JustDiet E-commerce",
  //   description:
  //     "Platform for booking diet consultations, exploring plans, calculating BMI, and managing appointments.",
  //   image: "/projects/project5.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "https://justdiet.vercel.app/",
  //   githubUrl: "https://github.com/hadishah123/JustDiet",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hadishah123"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
