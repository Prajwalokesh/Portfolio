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
    "Tailwind CSS"
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
        "Individuals with dietary restrictions, such as diabetes, hypertension, or severe allergies, often struggle to make safe and healthy food choices. Our project leverages Artificial Intelligence (AI)—using Convolutional Neural Networks (CNN) for food image recognition and Large Language Models (LLM) for reasoning—to provide real-time, personalized food recommendations. By simply scanning a meal, users can receive tailored suggestions, ensuring safer and healthier eating habits."],
      image: "/moveit.png",
      video: "/",
    },
    {
      title: "Campus Admin",
      href: "https://github.com/Vaibhav-Kumar-K-R/CampusAdmin",
      dates: "April, 2025",
      active: true,
      description:
        "A comprehensive ERP system for educational institutions to manage student records, attendance, and academic performance with date-driven insights.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "MongoDB",
        "JavaScript",
        "Express.js",
        "Nodemailer",
        "Radix UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://erpcampusadmin.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/campus.png",
      video: "/",
    },
     {
      title: "Chat Rooms",
      href: "https://github.com/Vaibhav-Kumar-K-R/Live-Chat-app",
      dates: "July 2025",
      active: true,
      description:
        "A real-time chat application using Socket.IO and Node.js with multiple chat rooms that alows users to join different rooms and communicate seamlessly.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Socket.IO",
        "Node.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatroomslive.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chat.png",
      video: "/",
    },
    {
      title: "Saas Landing Page",
      href: "https://github.com/Vaibhav-Kumar-K-R/Saas-landing-page",
      dates: "October, 2024",
      active: true,
      description:
        "A high-converting landign page for a SaaS platform with responsive design and intuitive UI  designed to engage user experience. ",
      technologies: [
        "React.js",
        "TypeScript",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "http://reactsaas.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saas.png",
      video: "",
    },
    {
      title: "Algo Sorts",
      href: "https://github.com/Vaibhav-Kumar-K-R/sort-visualiser",
      dates: "July 2025",
      active: true,
      description:
        "A web-based sorting algorithm visualizer that demystifies how classic sorting methods like Bubble Sort,Merge Sort and other sorting algorithms work through real-time, dynamic visualizations.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://sort-visualiser12.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sort.png",
      video: "/",
    },
   
    {
      title: "My Wallet",
      href: "https://github.com/Vaibhav-Kumar-K-R/blockchain-wallet-app",
      dates: "July 2025",
      active: true,
      description:
        "A web-based interface for maning etherum and solana wallets where users can efficiently create,add,track and view wallet details",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Radix UI",
        "Solana-web3.js"
      ],
      links: [
        {
          type: "Website",
          href: "http://blockchain-wallet-app.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wallet.png",
      video: "/",
    },
    
    
    {
      title: "Gemini Text Extractor",
      href: "https://github.com/Vaibhav-Kumar-K-R/Gemini-Text-Extractor",
      dates: "July 2025",
      active: true,
      description:
        "An image-text extractor that can extract all text content from a given image if it exists.Just a wrapper on top of google generative ai 😜",
      technologies: [
        "Next.js",
        "Google Generative AI",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://image-text-extractor-bfu7.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/text.png",
      video: "/",
    },
  ],
  Milestones: [
    {
      title: "Infothon 3.0",
      dates: "July ,2024",
      description:
        "National level hackathon where our team secured a top 10 spot  by building a volunteer management service platform.",
      location: "VVCE,Mysuru",
      image: "",
      links: [
        
      ],
    },
    {
      title: "Hackfest DSU",
      dates: "June, 2025",
      description: "Developed a web based application for medical health tracking and doctor consultation based on the data obtained from smart watch via the Google fit API.",
      location: "DSU Main Campus,Bangalore",
      image: " ",
      links: [
        
      ],
    },

  ],
} as const;
