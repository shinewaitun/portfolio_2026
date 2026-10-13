// Original projects: https://shine-wai-tun-portfolio.vercel.app/.
// Employment details supplied by Shine Wai Tun; project dates are contribution periods.
export const profile = {
  name: "Shine Wai Tun",
  role: "Software Engineer",
  email: "shinewaitun28@gmail.com",
  github: "https://github.com/shinewaitun",
  linkedin: "https://www.linkedin.com/in/shine-wai-tun",
  resume: "/shine-wai-tun-resume.pdf",
};

type Experience = {
  company: string;
  role: string;
  period: string;
  periodLabel?: string;
  location?: string;
  current: boolean;
  summary: string;
  highlight: { value: string; label: string };
  contributions: string[];
  tools: string[];
};

type Project = {
  title: string;
  company: string;
  period: string;
  periodLabel?: string;
  role: string;
  summary: string;
  contributions: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "MegaCeon",
    role: "Frontend Developer",
    period: "January 2026 – Present",
    location: "Myanmar · Remote",
    current: true,
    summary: "Building modern ERP interfaces and product showcase websites with an agile team of 14 developers.",
    highlight: { value: "5 companies", label: "ERP scope spanning up to five commercial companies" },
    contributions: [
      "Develop Vue interfaces for internal ERP systems serving up to five commercial companies, integrating with a Laravel backend.",
      "Build product showcase websites, including a site for a gems and jewellery company based in Thailand.",
      "Translate Figma designs and customer user stories into modern interfaces using shadcn, Tailwind CSS, and Lucide icons.",
      "Collaborate with a 14-developer team in an agile workflow to meet requirements before delivering to clients.",
    ],
    tools: ["Vue", "Laravel API integration", "shadcn", "Tailwind CSS", "Lucide", "Figma", "Agile"],
  },
  {
    company: "Macrobiotic World",
    role: "Software Engineer",
    period: "June 2025 – January 2026",
    location: "Thailand · On-site",
    current: false,
    summary: "Connected customer ordering, loyalty, e-commerce, and digital marketing to improve the retail experience.",
    highlight: { value: "Up to 40%", label: "Increase in monthly sales supported by website and marketing improvements" },
    contributions: [
      "Developed software for a medical vending machine and configured a self-service kiosk to accept customer orders and print invoices, helping process incoming orders faster.",
      "Implemented an AI-powered loyalty flow that requests customer permission before scanning their face to apply loyalty discounts.",
      "Maintained and upgraded an outdated Shopify website with a modern design and refreshed product catalogs.",
      "Worked in a team of three software engineers with colleagues from Greece and Canada.",
      "Developed marketing plans and optimized SEO and SEM using SEMrush, contributing to an increase in monthly sales of up to 40%.",
    ],
    tools: ["Shopify", "Kiosk systems", "AI-powered loyalty", "SEMrush", "SEO", "SEM"],
  },
  {
    company: "ACE Data Systems",
    role: "Frontend, backend & C# project roles",
    period: "February 2024 – January 2025",
    periodLabel: "Project timeline",
    current: false,
    summary: "Contributed to insurance application development and cloud data migration across three projects, working with frontend, backend, and testing teams.",
    highlight: { value: "3 projects", label: "Insurance UI, cloud migration, and insurance dashboard APIs" },
    contributions: [
      "AXURENZE Insurance App (February–May 2024): fixed bugs, optimized performance, and implemented Figma UI updates using Next.js, React, and TypeScript in a team of 7 frontend developers, 5 backend developers, and 3 testers.",
      "Cloud Database Migration (May–August 2024): developed C# solutions in a team of three to migrate data from Dropbox to SharePoint, adapt database structures, resolve version conflicts, and improve performance through parallel programming.",
      "AXR Insurance Dashboard API (August 2024–January 2025): built RESTful APIs, authentication, authorization, and error handling in a backend team of seven using Express.js, Sequelize, and PostgreSQL.",
      "Applied Clean Architecture and Inversify.js dependency injection to the insurance API, and managed database migrations and seeders.",
    ],
    tools: ["Next.js", "React", "TypeScript", "C#", "Dropbox API", "SharePoint", "Express.js", "Sequelize", "PostgreSQL", "Inversify.js", "Clean Architecture"],
  },
];

export const projects: Project[] = [
  {
    title: "Multi-company ERP Interfaces", company: "MegaCeon",
    period: "January 2026 – Present", periodLabel: "Role period",
    role: "Frontend developer · Team of 14 developers",
    summary: "Modern internal ERP interfaces for up to five commercial companies, built with Vue and integrated with a Laravel backend.",
    contributions: [
      "Implement Figma designs and customer user stories as modern ERP interfaces.",
      "Build the frontend with Vue, shadcn, Tailwind CSS, and Lucide icons, integrating with Laravel backend services.",
      "Work within an agile team of 14 developers to meet client requirements before delivery.",
    ],
    stack: ["Vue", "Laravel API integration", "shadcn", "Tailwind CSS", "Lucide", "Figma", "Agile"],
  },
  {
    title: "Shopify Redesign & Digital Growth", company: "Macrobiotic World",
    period: "June 2025 – January 2026", periodLabel: "Role period",
    role: "Software engineer · Team of 3",
    summary: "An upgraded Shopify storefront with refreshed product catalogs, modern design, and coordinated SEO and SEM improvements.",
    contributions: [
      "Maintained and upgraded the outdated Shopify website with a new design and refreshed product catalogs.",
      "Developed marketing plans and optimized SEO and SEM using SEMrush.",
      "Contributed to an increase in monthly sales of up to 40% through website and marketing improvements.",
      "Collaborated with software engineering colleagues from Greece and Canada.",
    ],
    stack: ["Shopify", "SEMrush", "SEO", "SEM", "Product catalogs"],
  },
  {
    title: "Gems & Jewellery Showcase", company: "MegaCeon",
    period: "January 2026 – Present", periodLabel: "Role period",
    role: "Frontend developer · Team of 14 developers",
    summary: "A product showcase website for a gems and jewellery company based in Thailand.",
    contributions: [
      "Build product-facing interfaces based on Figma designs and customer user stories.",
      "Use Vue, shadcn, Tailwind CSS, and Lucide icons to implement a modern presentation of the company's products.",
      "Coordinate with the development team to meet client requirements before delivery.",
    ],
    stack: ["Vue", "shadcn", "Tailwind CSS", "Lucide", "Figma"],
  },
  {
    title: "Medical Vending & Ordering Kiosk", company: "Macrobiotic World",
    period: "June 2025 – January 2026", periodLabel: "Role period",
    role: "Software engineer · Team of 3",
    summary: "Vending machine software and a self-service ordering kiosk designed to speed up incoming order processing.",
    contributions: [
      "Developed the program for a medical vending machine.",
      "Configured the kiosk to take customer orders and print invoices for subsequent order processing.",
      "Worked with a three-person software engineering team with colleagues from Greece and Canada.",
    ],
    stack: ["Vending machine software", "Kiosk setup", "Order processing", "Invoice printing"],
  },
  {
    title: "AI-powered Loyalty Discounts", company: "Macrobiotic World",
    period: "June 2025 – January 2026", periodLabel: "Role period",
    role: "Software engineer · Team of 3",
    summary: "A customer loyalty flow using AI-powered facial scanning to apply discounts after requesting customer permission.",
    contributions: [
      "Implemented a permission step before scanning a customer's face.",
      "Used AI-powered facial scanning within the loyalty discount flow.",
      "Collaborated with the software engineering team on the customer-facing experience.",
    ],
    stack: ["AI-powered facial scanning", "Customer permission", "Loyalty discounts"],
  },
  {
    title: "ERP System", company: "PIXEL PULSE TECH",
    period: "June 2024 – April 2025", role: "Full-stack developer · Team of 4",
    summary: "Accounting, inventory, and user management in one business platform.",
    contributions: [
      "Built backend logic for automated journal entries, ledgers, profit and loss calculations, and PDF generation.",
      "Developed reusable React and Next.js components, dashboard task management, and filtering features.",
      "Participated in code reviews and team task management.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express.js", "MySQL", "Inversify.js"],
  },
  {
    title: "AXR Insurance Dashboard API", company: "ACE DATA SYSTEMS",
    period: "August 2024 – January 2025", role: "Backend developer · Team of 7",
    summary: "RESTful APIs and core business logic for an insurance system.",
    contributions: [
      "Implemented authentication, authorization, and robust endpoint error handling.",
      "Applied Clean Architecture with an Inversify.js IoC container.",
      "Managed PostgreSQL migrations and seeders using Sequelize.",
    ],
    stack: ["Express.js", "Sequelize", "PostgreSQL", "Inversify.js", "Clean Architecture"],
  },
  {
    title: "TOWARDS21", company: "TOWARDS21",
    period: "April 2024 – August 2024", role: "Full-stack developer · Team of 3",
    summary: "A learning center and job agency application with a secure admin dashboard.",
    contributions: [
      "Designed the responsive dashboard in Figma and built reusable tables with search, filtering, sorting, and pagination.",
      "Handled authentication and authorization; collaborated on API structure and business logic.",
      "Implemented Myanmar, English, and Japanese localization.",
    ],
    stack: ["Next.js 13", "React Query", "Zustand", "React Hook Form", "Zod", "Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "WebSocket", "Figma", "i18n"],
  },
  {
    title: "BAYON App", company: "BIGSOFT",
    period: "October 2023 – January 2024", role: "Frontend developer · Frontend team of 2",
    summary: "A responsive digital real estate marketplace built with a Cambodia-based API team.",
    contributions: [
      "Worked directly with the company owner to refine requirements and implement a Figma redesign.",
      "Built property listings, property details, profiles, Firebase phone authentication, and cloud image uploads.",
      "Implemented Myanmar, English, and Cambodian localization with reusable components.",
    ],
    stack: ["Nuxt.js 3", "TypeScript", "Pinia", "Tailwind CSS", "Firebase Authentication", "Firestore", "Google Maps API", "i18n", "Figma"],
  },
  {
    title: "Cloud Database Migration", company: "ACE DATA SYSTEMS",
    period: "May 2024 – August 2024", role: "C# developer · Team of 3",
    summary: "Data migration from Dropbox to Microsoft SharePoint.",
    contributions: [
      "Adapted database structures and resolved conflicts between user data and Dropbox versions.",
      "Used parallel programming to improve migration performance.",
    ],
    stack: ["C#", "Dropbox API", "Microsoft SharePoint", "Parallel Programming", "Database Migration"],
  },
  {
    title: "AXURENZE Insurance App", company: "ACE DATA SYSTEMS",
    period: "February 2024 – May 2024", role: "Frontend developer · Cross-functional team of 15",
    summary: "Maintenance and UI enhancements for an existing insurance web application.",
    contributions: [
      "Fixed bugs, optimized performance, and implemented UI updates from the design team's Figma files.",
      "Built maintainable components alongside 7 frontend developers, 5 backend developers, and 3 testers.",
    ],
    stack: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Job Recruitment & Offering System", company: "ACE INSPIRATION",
    period: "May 2023 – July 2023", role: "Full-stack developer · Team of 8",
    summary: "Job vacancies, staff, applicants, and notifications managed through a full-stack web application.",
    contributions: [
      "Built dashboard UI, job listings, application handling, and vacancy opening, closing, and update actions.",
      "Implemented a custom JavaScript text editor and real-time applicant notifications using WebSockets.",
      "Contributed authentication, backend data flow, file exports, and searchable, sortable, paginated CRUD features.",
    ],
    stack: ["Spring Boot", "Spring Security", "Hibernate", "JPA", "MySQL", "JavaScript", "jQuery", "STOMP", "SockJS", "Izitoast.js", "Bootstrap", "Thymeleaf", "Jasper Studio", "JUnit"],
  },
  {
    title: "Hotel Reservation Systems", company: "ACE INSPIRATION",
    period: "March 2023 – April 2023", role: "Full-stack developer · Team of 3",
    summary: "Room reservations, service selection, and blog management in a full-stack application.",
    contributions: [
      "Helped build room details, service selection, and booking flows.",
      "Contributed to the admin dashboard for managing rooms, services, photos, and blog content.",
    ],
    stack: ["Spring MVC", "Hibernate", "MySQL", "JavaScript", "jQuery", "Bootstrap", "JSTL"],
  },
];

export const skillGroups = [
  { title: "Frontend & UI", tools: ["React", "Next.js", "Vue", "Nuxt.js", "TypeScript", "JavaScript", "shadcn", "Tailwind CSS", "Lucide", "Figma"] },
  { title: "Backend & Architecture", tools: ["Node.js", "Express.js", "Java SE", "Spring Boot", "Spring MVC", "C#", ".NET", "RESTful APIs", "WebSockets", "Clean Architecture", "Inversify.js"] },
  { title: "Data & Integrations", tools: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize", "Mongoose", "Hibernate", "Firebase", "Google Maps API", "Dropbox API", "SharePoint"] },
  { title: "Commerce & Growth", tools: ["Shopify", "SEMrush", "SEO", "SEM"] },
];

// Original self-assessments, kept distinct from certifications.
export const languages = [
  { name: "Burmese", rating: 10 }, { name: "English", rating: 8 },
  { name: "Japanese", rating: 6.5 }, { name: "Chinese", rating: 3 },
];
