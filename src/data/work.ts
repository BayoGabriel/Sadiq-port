import {
  Bravoo_App,
  Bravoo_Web,
  Currencys,
  Ecom,
  LodaWork,
  Maab,
  Npf,
  Npf1,
  Phone,
} from "../assets/images";

export type WorkCategory = "Mobile" | "Website" | "WebApp";

export type WorkItem = {
  id: string;
  image?: string;
  category: WorkCategory;
  title: string;
  description: string;
  client: string;
  date: string;
  industry: string;
  timeline: string;
  tags: string[];
  whatWeDidTitle: string;
  whatWeDid: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  resultsTag: string;
  resultsTitle: string;
};

export const workItems: WorkItem[] = [
  {
    id: "loda point",
    image: LodaWork,
    category: "Mobile",
    title:
      "Loda Point – A mobile-first productivity Fin-tech app with futuristic features.",
    description:
      "Bold is a mobile payment and financial services app designed to make everyday digital transactions easier and more versatile. It offers features like sending and receiving money, paying bills, buying airtime/data, and more without needing traditional bank transfers. It provides virtual cards (USD/Naira) for global online payments — helpful especially when traditional bank cards don’t work for international purchases. Users can also access high-yield savings options, currency swaps, and sometimes loans depending on eligibility. The app aims for a smooth experience with cashbacks on some transactions and minimal fees.",
    client: "BoldSwitch",
    date: "February 2024",
    industry: "C to C",
    timeline: "24 weeks",
    tags: [
      "Product Strategy",
      "UX/UI Design",
      "MVP Launch & Handoff",
      "Mobile Development",
    ],
    whatWeDidTitle:
      "We delivered full UX/UI design and cross-platform development",
    whatWeDid: [
      "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
      "Built a lightweight cross-platform app using React Native",
      "Integrated calendar sync, notifications, and offline mode",
      "Created a modular design system for future scale",
      "Helped define the product scope to avoid overbuilding",
    ],
    testimonial: {
      quote:
        "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
      name: "Lina M",
      role: "Head of Product at HiTech",
    },
    resultsTag: "RESULTS",
    resultsTitle:
      "HiTech’s MVP was fully designed, developed, and launched in under 8 weeks — hitting 1,000+ users within the first two weeks post-launch. With a 4.8 App Store rating and a scalable foundation, the product proved both its usability and market potential from day one.",
  },
  {
    id: "lodapoint",
    category: "Mobile",
    title:
      "LodaPoint – A mobile-first productivity app built for Truck, Ride, & Bike Hailing.",
    description:
      "A cross-platform app experience focused on reliability, speed, and delightful onboarding.",
    client: "LodaPoint",
    date: "March 2024",
    industry: "Mobility",
    timeline: "12 weeks",
    tags: ["UX/UI Design", "Mobile Development", "MVP Launch & Handoff"],
    whatWeDidTitle: "We delivered UX/UI + cross-platform build",
    whatWeDid: [
      "Designed onboarding and driver/rider flows",
      "Built the app with React Native",
      "Set up push notifications and location handling",
      "Created scalable design components",
      "Supported release preparation and QA",
    ],
    resultsTag: "RESULTS",
    resultsTitle:
      "A launch-ready MVP with smooth onboarding, clear UX, and a codebase prepared for iterative growth.",
  },
  {
    id: "Bravoo",
    image: Bravoo_Web,
    category: "Mobile",
    title:
      "Bravoo – A mobile-first productivity Fin-tech app with futuristic features.",
    description:
      "Bravoo is a mobile payment and financial services app designed to make everyday digital transactions easier and more versatile. It offers features like sending and receiving money, paying bills, buying airtime/data, and more without needing traditional bank transfers. It provides virtual cards (USD/Naira) for global online payments — helpful especially when traditional bank cards don’t work for international purchases. Users can also access high-yield savings options, currency swaps, and sometimes loans depending on eligibility. The app aims for a smooth experience with cashbacks on some transactions and minimal fees.",
    client: "BoldSwitch",
    date: "February 2024",
    industry: "C to C",
    timeline: "24 weeks",
    tags: [
      "Product Strategy",
      "UX/UI Design",
      "MVP Launch & Handoff",
      "Mobile Development",
    ],
    whatWeDidTitle:
      "We delivered full UX/UI design and cross-platform development",
    whatWeDid: [
      "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
      "Built a lightweight cross-platform app using React Native",
      "Integrated calendar sync, notifications, and offline mode",
      "Created a modular design system for future scale",
      "Helped define the product scope to avoid overbuilding",
    ],
    testimonial: {
      quote:
        "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
      name: "Lina M",
      role: "Head of Product at HiTech",
    },
    resultsTag: "RESULTS",
    resultsTitle:
      "HiTech’s MVP was fully designed, developed, and launched in under 8 weeks — hitting 1,000+ users within the first two weeks post-launch. With a 4.8 App Store rating and a scalable foundation, the product proved both its usability and market potential from day one.",
  },

  {
    id: "Bravoo",
    image: Bravoo_App,
    category: "Mobile",
    title:
      "Bravoo – A mobile-first productivity Fin-tech app with futuristic features.",
    description:
      "Bravoo is a mobile payment and financial services app designed to make everyday digital transactions easier and more versatile. It offers features like sending and receiving money, paying bills, buying airtime/data, and more without needing traditional bank transfers. It provides virtual cards (USD/Naira) for global online payments — helpful especially when traditional bank cards don’t work for international purchases. Users can also access high-yield savings options, currency swaps, and sometimes loans depending on eligibility. The app aims for a smooth experience with cashbacks on some transactions and minimal fees.",
    client: "BoldSwitch",
    date: "February 2024",
    industry: "C to C",
    timeline: "24 weeks",
    tags: [
      "Product Strategy",
      "UX/UI Design",
      "MVP Launch & Handoff",
      "Mobile Development",
    ],
    whatWeDidTitle:
      "We delivered full UX/UI design and cross-platform development",
    whatWeDid: [
      "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
      "Built a lightweight cross-platform app using React Native",
      "Integrated calendar sync, notifications, and offline mode",
      "Created a modular design system for future scale",
      "Helped define the product scope to avoid overbuilding",
    ],
    testimonial: {
      quote:
        "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
      name: "Lina M",
      role: "Head of Product at HiTech",
    },
    resultsTag: "RESULTS",
    resultsTitle:
      "HiTech’s MVP was fully designed, developed, and launched in under 8 weeks — hitting 1,000+ users within the first two weeks post-launch. With a 4.8 App Store rating and a scalable foundation, the product proved both its usability and market potential from day one.",
  },
  {
    id: "Currencys",
    image: Phone,
    category: "Mobile",
    title:
      "Bravoo – A mobile-first productivity Fin-tech app with futuristic features.",
    description:
      "Bravoo is a mobile payment and financial services app designed to make everyday digital transactions easier and more versatile. It offers features like sending and receiving money, paying bills, buying airtime/data, and more without needing traditional bank transfers. It provides virtual cards (USD/Naira) for global online payments — helpful especially when traditional bank cards don’t work for international purchases. Users can also access high-yield savings options, currency swaps, and sometimes loans depending on eligibility. The app aims for a smooth experience with cashbacks on some transactions and minimal fees.",
    client: "BoldSwitch",
    date: "February 2024",
    industry: "C to C",
    timeline: "24 weeks",
    tags: ["UX/UI Design", "Mobile Development"],
    whatWeDidTitle:
      "We delivered full UX/UI design and cross-platform development",
    whatWeDid: [
      "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
      "Built a lightweight cross-platform app using React Native",
      "Integrated calendar sync, notifications, and offline mode",
      "Created a modular design system for future scale",
      "Helped define the product scope to avoid overbuilding",
    ],
    testimonial: {
      quote:
        "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
      name: "Lina M",
      role: "Head of Product at HiTech",
    },
    resultsTag: "RESULTS",
    resultsTitle:
      "HiTech’s MVP was fully designed, developed, and launched in under 8 weeks — hitting 1,000+ users within the first two weeks post-launch. With a 4.8 App Store rating and a scalable foundation, the product proved both its usability and market potential from day one.",
  },
   {
    id: "Currencys",
    image: Currencys,
    category: "Mobile",
    title:
      "Bravoo – A mobile-first productivity Fin-tech app with futuristic features.",
    description:
      "Bravoo is a mobile payment and financial services app designed to make everyday digital transactions easier and more versatile. It offers features like sending and receiving money, paying bills, buying airtime/data, and more without needing traditional bank transfers. It provides virtual cards (USD/Naira) for global online payments — helpful especially when traditional bank cards don’t work for international purchases. Users can also access high-yield savings options, currency swaps, and sometimes loans depending on eligibility. The app aims for a smooth experience with cashbacks on some transactions and minimal fees.",
    client: "BoldSwitch",
    date: "February 2024",
    industry: "C to C",
    timeline: "24 weeks",
    tags: [
      "UX/UI Design",
      "Mobile Development",
    ],
    whatWeDidTitle:
      "We delivered full UX/UI design and cross-platform development",
    whatWeDid: [
      "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
      "Built a lightweight cross-platform app using React Native",
      "Integrated calendar sync, notifications, and offline mode",
      "Created a modular design system for future scale",
      "Helped define the product scope to avoid overbuilding",
    ],
    testimonial: {
      quote:
        "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
      name: "Lina M",
      role: "Head of Product at HiTech",
    },
    resultsTag: "RESULTS",
    resultsTitle:
      "HiTech’s MVP was fully designed, developed, and launched in under 8 weeks — hitting 1,000+ users within the first two weeks post-launch. With a 4.8 App Store rating and a scalable foundation, the product proved both its usability and market potential from day one.",
  },
  {
    id: "MAAB Luxury",
    image: Maab,
    category: "WebApp",
    title: "Currency – A modern multi-currency wallet experience.",
    description:
      "A product-focused web app designed to help users manage and swap currencies with clarity, speed, and trust.",
    client: "Npf",
    date: "January 2024",
    industry: "Fintech",
    timeline: "10 weeks",
    tags: ["Product Strategy", "UX/UI Design", "Web development"],
    whatWeDidTitle: "We shipped a scalable web app built for growth",
    whatWeDid: [
      "Designed a clean UI system with reusable components",
      "Built core wallet flows and transaction history",
      "Implemented responsive layouts and accessible interactions",
      "Optimized performance and loading states",
      "Prepared handoff docs and component guidelines",
    ],
    resultsTag: "RESULTS",
    resultsTitle:
      "A fast, clean product experience that improved signups and reduced user drop-off across key onboarding steps.",
  },
  {
    id: "e-commerce",
    image: Ecom,
    category: "WebApp",
    title: "Currency – A modern multi-currency wallet experience.",
    description:
      "A product-focused web app designed to help users manage and swap currencies with clarity, speed, and trust.",
    client: "Npf",
    date: "January 2024",
    industry: "Fintech",
    timeline: "10 weeks",
    tags: ["Product Strategy", "UX/UI Design", "Web development"],
    whatWeDidTitle: "We shipped a scalable web app built for growth",
    whatWeDid: [
      "Designed a clean UI system with reusable components",
      "Built core wallet flows and transaction history",
      "Implemented responsive layouts and accessible interactions",
      "Optimized performance and loading states",
      "Prepared handoff docs and component guidelines",
    ],
    resultsTag: "RESULTS",
    resultsTitle:
      "A fast, clean product experience that improved signups and reduced user drop-off across key onboarding steps.",
  },
  {
    id: "nigerian police force",
    image: Npf1,
    category: "Mobile",
    title:
      "LodaPoint – A mobile-first productivity app built for Truck, Ride, & Bike Hailing.",
    description:
      "A cross-platform app experience focused on reliability, speed, and delightful onboarding.",
    client: "LodaPoint",
    date: "March 2024",
    industry: "Mobility",
    timeline: "12 weeks",
    tags: ["UX/UI Design", "Mobile Development", "MVP Launch & Handoff"],
    whatWeDidTitle: "We delivered UX/UI + cross-platform build",
    whatWeDid: [
      "Designed onboarding and driver/rider flows",
      "Built the app with React Native",
      "Set up push notifications and location handling",
      "Created scalable design components",
      "Supported release preparation and QA",
    ],
    resultsTag: "RESULTS",
    resultsTitle:
      "A launch-ready MVP with smooth onboarding, clear UX, and a codebase prepared for iterative growth.",
  },
  {
    id: "nigerian police force",
    image: Npf,
    category: "WebApp",
    title: "Currency – A modern multi-currency wallet experience.",
    description:
      "A product-focused web app designed to help users manage and swap currencies with clarity, speed, and trust.",
    client: "Npf",
    date: "January 2024",
    industry: "Fintech",
    timeline: "10 weeks",
    tags: ["Product Strategy", "UX/UI Design", "Web development"],
    whatWeDidTitle: "We shipped a scalable web app built for growth",
    whatWeDid: [
      "Designed a clean UI system with reusable components",
      "Built core wallet flows and transaction history",
      "Implemented responsive layouts and accessible interactions",
      "Optimized performance and loading states",
      "Prepared handoff docs and component guidelines",
    ],
    resultsTag: "RESULTS",
    resultsTitle:
      "A fast, clean product experience that improved signups and reduced user drop-off across key onboarding steps.",
  },
];

export const getWorkItemById = (id: string | undefined) => {
  if (!id) return undefined;
  return workItems.find((w) => w.id === id);
};
