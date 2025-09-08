import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaibhav Kumar",
  initials: "K R",
  location: "India",
  description: "Engineering elegant solutions to complex problems",
  summary:
    "I'm a Computer Science student with  a passion for building scalable tech solutions. My expertise spans full-stack development, system design, and cloud infrastructure. Through hands-on projects and hackathons, I've developed proficiency in building robust applications.",
  avatarUrl:
    "/dp.png",
  avatarEmbedSrc:
    "",
  avatarVideoSrc:
    "/dp.png",
  avatarPosterUrl: "/dp.png",
  skills: [
    "C/C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "Git & Github",
    "Cloudflare",
    "Prisma",

  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vaibhavcnr@gmail.com",
    tel: "9600377235",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vaibhav-Kumar-K-R",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaibhav-kumar-k-r-608643279",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Vaibhav_399",
        icon: Icons.x,
        navbar: true,
      },
      Leetcode:{
        name:"Leetcode",
        url:"https://leetcode.com/Vaibhav_127",
        icon:Icons.Leetcode,
        navbar:true
      }
    },
  },
  education: [
    {
      school: "Sri Jayachamarajendra College of Engineering",
      href: "https://www.jssstuniv.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "https://jssstuniv.in/assets/img/logo/jssstulogo.png",
      start: "2022",
      end: "2026",
    },
    
    {
      school: "BGS PU College,Kuvempunagar,Mysore,Karnataka",
      href: "",
      degree: "Pre-university college",
      logoUrl: "data:image/jpeg;base64,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",
      start: "2020",
      end: "2022",
    },
    {
      school: "Mountain Home School and Junior College,Nilgiris,TamilNadu",
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
        "National level hackathon where our team secured a top 10 spot among the top 15 by building a volunteer management service platform.",
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
