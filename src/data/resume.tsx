import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Prajwal",
  initials: "L",
  location: "India",
  description: "Engineering elegant solutions to complex problems",
  summary:
    "I'm a Computer Science student with a passion for building scalable tech solutions. My expertise spans full-stack development. Through hands-on projects and hackathons, I've developed proficiency in building robust applications.",
  avatarUrl: "/praj.jfif",
  avatarEmbedSrc: "",
  avatarVideoSrc: "",
  avatarPosterUrl: "/praj.jfif",

  skills: [
    "C/C++",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "MySQL",
    "Git & Github",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "prajwallokesh012345@gmail.com",
    tel: "9901792261",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Prajwalokesh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prajwal-l-b0b5a9258/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prajwalokesh",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  // ✅ FIXED — added logoUrl, href, badges so Vercel compiles
  work: [
    {
      company: "Student Developer",
      title: "Full-Stack Developer",
      start: "2022",
      end: "Present",
      description:
        "Building personal projects, participating in hackathons, and learning full-stack development.",
      logoUrl: "/work.png", // you can change this
      href: "",
      badges: [],
    },
  ],

  education: [
    {
      school: "Sri Jayachamarajendra College of Engineering , Mysuru",
      href: "https://www.jssstuniv.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "https://jssstuniv.in/assets/img/logo/jssstulogo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Gopalswamy independent PU college (SANKALPA) , Mysuru",
      href: "",
      degree: "Pre-university college",
      logoUrl: "Gopal.webp",
      start: "2020",
      end: "2022",
    },
    {
      school: "Excel Public School , Mysuru",
      href: "",
      degree: "High School",
      logoUrl: "EPS-logo.png",
      start: "2011",
      end: "2020",
    },
  ],

  projects: [
  {
    title: "Personalized-Food-Recommendation",
    href: "https://github.com/Prajwalokesh/Personalized-Food-Recommendation",
    dates: "June, 2025",
    active: true,
    description:
      "Individuals with dietary restrictions often struggle to make safe food choices. This project uses CNN for image recognition and LLM for reasoning to provide real-time personalized food recommendations.",
    image: "/WhatsApp Image 2025-11-20 at 8.50.12 PM.jpeg",
    video: "/",
    technologies: ["Python", "TensorFlow", "CNN", "LLM", "Flask"],
    links: [],
  },
  {
    title: "Mentor-Connect",
    href: "https://github.com/Prajwalokesh/Mentor-Connect",
    dates: "July, 2025",
    active: true,
    description:
      "MentorConnect is a platform that simplifies academic tracking and mentoring with automated alerts, dashboards, and parent integration.",
    image: "/mentor.jpeg",
    video: "/",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    links: [],
  },
  {
    title: "Krishi-Mitra",
    href: "https://github.com/Prajwalokesh/Krishi-Mitra",
    dates: "July 2025",
    active: true,
    description:
      "Kisan Mitra is a unified platform leveraging technology to bridge the gap between farmers, buyers, experts, and service providers.",
    image: "krishi.png",
    video: "/",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    links: [],
  },
],


  milestones: [
    {
      title: "Shaastra's Industri AI Hackathon 2025",
      dates: "Jan, 2025",
      description:
        "Participated in the IndustriAI Hackathon at IIT Madras, among 700+ teams.",
      location: "IIT Madras, Chennai",
      image: "",
      links: [],
    },
    {
      title: "Idea Forge by SJCE-Step",
      dates: "June, 2025",
      description:
        "Secured Top 10 out of 80 teams in Idea Forge event conducted by SJCE-STEP.",
      location: "SJCE, Mysuru",
      image: "",
      links: [],
    },
  ],
} as const;
