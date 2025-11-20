import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prajwal",
  initials: "L",
  location: "India",
  description: "Engineering elegant solutions to complex problems",
  summary:
    "I'm a Computer Science student with  a passion for building scalable tech solutions. My expertise spans full-stack development, Through hands-on projects and hackathons, I've developed proficiency in building robust applications.",
  avatarUrl:
    "/praj.jfif",
  avatarEmbedSrc:
    "",
  avatarVideoSrc:
    "",
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
        "Individuals with dietary restrictions, such as diabetes, hypertension, or severe allergies, often struggle to make safe and healthy food choices. Our project leverages Artificial Intelligence (AI)—using Convolutional Neural Networks (CNN) for food image recognition and Large Language Models (LLM) for reasoning—to provide real-time, personalized food recommendations. By simply scanning a meal, users can receive tailored suggestions, ensuring safer and healthier eating habits.",
      image: "/WhatsApp Image 2025-11-20 at 8.50.12 PM.jpeg",
      video: "/",
    },
    {
      title: "Mentor-Connect",
      href: "https://github.com/Prajwalokesh/Mentor-Connect",
      dates: "July, 2025",
      active: true,
      description:
        "MentorConnect is a digital platform that simplifies academic tracking, mentoring, and communication between students, faculty, and parents. It replaces manual processes with a centralized system for submitting academic details, monitoring progress, and triggering timely interventions. With features like automated alerts, dashboards, and parent integration, MentorConnect makes mentoring more transparent, efficient, and effective.",
      image: "/mentor.jpeg",
      video: "/",
    },
      
     {
      title: "Krishi-Mitra",
      href: "https://github.com/Prajwalokesh/Krishi-Mitra",
      dates: "July 2025",
      active: true,
      description:
        "Kisan Mitra aims to solve these problems through a unified platform that leverages technology to bridge the gap between farmers, buyers, agricultural experts, and service providers.",
      image: "krishi.png",
      video: "/",
    },
  Milestones: [
    {
      title: "Shaastra's Industri AI Hackathon 2025",
      dates: "Jan ,2025",
      description:
        " Participated in the IndustriAI Hackathon at IIT Madras, out of 700 participating teams.",
      location: "IIT Madras , Chennai",
      image: "",
      links: [
        
      ],
    },
    {
      title: "Idea Forge by SJCE-Step",
      dates: "June, 2025",
      description: " Participated in Idea Forge event conducted by SJCE-STEP, where we secured a Top 10 spot out of 80 teams.",
      location: "SJCE , Mysuru",
      image: " ",
      links: [
        
      ],
    },

  ],
} as const;
