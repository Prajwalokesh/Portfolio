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
      logoUrl: "/mhs.png",
      start: "2008",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Freelance",
      title: "Full-Stack Developer",
      location: "Remote",
      type: "Freelance",
      start: "November 2024",
      end: "Present",
      href: "",
      logoUrl: "https://i.postimg.cc/TyCfQFPd/freelance.png",
      description:
        "Developing custom web applications and solutions for various clients. Building scalable full-stack applications using modern technologies like Next.js, React, Node.js, and cloud platforms. Collaborating directly with clients to understand requirements and deliver tailored solutions.",
      badges: [],
    },
    {
      company: "Developer Student Clubs (DSC)",
      title: "Web Development Lead",
      location: "Mysore,Self-employed",
      type: "Technical",
      start: "September 2024",
      end: "Present",
      href: "",
      logoUrl: "https://dscjssstuniv.in/logo-nav.png",
      description:
        "Led a team of 5-6 members to develop and deploy the club website,while also organizing and coducting mutliple bootcamps for juniors on diverse tech domains.",
      badges: [],
    },
     {
      company: "Hacktoberfest",
      title: "Open Source Contributor",
      location: "Remote",
      type: "Technical",
      start: "October 2024",
      end: "November 2024",
      href: "",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAclBMVEVQ2kwYNxcUKxMveS0paChR3U1N00kTKBNS4U5T5E80ijJN0UkTJhI3kTQXNBYvey0fSx05mDYQHhA+pTtDtD8RIRE8oDkbPxlKyUYhUyAmYCRW6lFIxEUrcClFu0EWMBUOGA4xgi9Crj4jWiMdRhwEAAax7uqqAAADd0lEQVR4nO2djXKiMBhFCSWAWILoFtBFY1v3/V9x7S8JhSyyCYR4z1jHKZF6eiPzBUP0PAAAAAAAAAAAAAAAAAAAAHegM6LbJZwVvS5x/jAjeaxVZnU4R7NxPq70ygQ+mQ3/wSGZCDKQgQxkIAMZyFghw6PHD6Lrg8/b16+aR/LGVjO5fXujz6aTec0MExA2mUxShWujVM+MTSYTah/9ydB11mRjXEbr3jugXuY7I+PR8PnrKLB8GS+mD5/vGwdk3rL5eN+4ION5VVJyZ2RomJTMFZnrEfotG0dkPFolhLki43lhQp6ckfG89NHsSUCVDI0l/v9vh8l8Mi8HgddCRxFXa9iHwA0yRRT532wTHTKaq9obZHZiwyg1XF6P4SYZBpnpgAxkJgAykJmAO5KRplMMlzE7DaMfpQytaoFcbKiSCatKOIW5Nu7wjVLmdyAWypuBMvSUHRsCLRXpMNQyxOf8vUi+3nM2VOZX+SiU1we9U0pUqGVKSWCwzEZ4Gg+WLsMdlfFdkkEyI0EydyuDbjaSO0qGRLxBVc6IVXJsZzKro1BnBnuFTH1qqIuL4G1NMuIQoFrn/eOZ6rjZN0jltTXJyCgGZ9XeZwJLl+GkB2u6mcw4GSQzEiRztzLoZiNBMkhmArSVM5yx6+39Z+nlTHYIGl6XLeOJE4i9l42NQwCZoR9pWDo4kxkqY+mwWWacDJIZCZK5Wxl0s5EgmbtNxhoZeaZFSybum4XR7maryeZrqGRonRcCmdiQH8VNO+lpcjL7XUOx0zz5d7hMXPiliNiQSFv2lfAfl2Xklpfc5JR2pUy+ZX2nkAkRNvCNSkbcRZnOJ/NEBsGUMmLDcsZknJLZuiSDZGyVQTK2yiAZW2XGJtM3sWNOmfTPdhBnUgt1Pn0h56duttFs5Qw95QMpxMnLtCrSnnZpfjLo8o/BWTwUeae0v+Fs45nFARlbgYytQMZWIGMrkLEVh2VYtrbw8svBtGQ2RgdPpmmvCXjJJ7yuUjft1Rr5xehY0Cw/lp5kJJ3uoy7N/FxHk5MJr3nVS8eioIylc7+qkXStcPpms8hwOpdrZeaXoDRC99qznCVLPEL3LKTLyqRaXjZ9qwLzMl1eT+td4niJPW112PrdRDyr5n51NxLnz0kv9dI6muLrVHR/owoAAAAAAAAAAAAAAAAAAABYCn8BAhqUGOA3sEcAAAAASUVORK5CYII=",
      description:
        "Contributed to various open-source projects by fixing bugs, adding features, and improving documentation. Engaged with the open-source community to collaborate on projects and promote open-source development.",
      badges: [],
    },
  ],
  projects: [
    {
      title: "Moveit Logistics",
      href: "https://github.com/Vaibhav-Kumar-K-R/MoveIt-DBMS-Project",
      dates: "January, 2025",
      active: true,
      description:
        "A transport and logistics platform built for agencies to manage shipments, track vehicles, and optimize routes in real-time.",
      technologies: ["TypeScript", "React.js",  "Tailwind CSS","MongoDB","Express.js","Node.js","Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://moveitlogistics.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
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
