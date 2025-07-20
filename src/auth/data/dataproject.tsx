import project1 from "../../assets/project/img1.png";
import project2 from "../../assets/project/img2.jpg";
import project3 from "../../assets/project/img3.jpg";
import project4 from "../../assets/project/img4.jpg";
import project5 from "../../assets/project/img5.jpg";
import project6 from "../../assets/project/img6.jpg";

export const HERO_CONTENT = `I am a Frontend Developer with more than 3 years of experience in building responsive and user-friendly web interfaces using React, Next.js, and Tailwind CSS. Accustomed to working in Agile teams and have good analytical and problem-solving skills.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of middle experience, I have worked with a variety of technologies, including React, Next.js, Sequelize, Express, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    id : 1,
    year: "Aug 2021 - Mar 2022",
    role: "Full Stack Developer",
    company: "PT Whiteopen Teknologi",
    description: `I am work as Programmer in one of vendor on Jakarta, while working i use programming languages like C# with ASP .NET framework, Javascript, Jquery, HTML, CSS, Ajax, Power BI. And several office application like Microsoft Excel and Microsoft Word. Sometime i have meeting with my clients, to discuss additional or bugs by user, after that i do system analysis and work on it.`,
    technologies: ["ASP.NET MVC", "jQuery", "JavaScript", "PostgreSQL","Spring Boot","Microsoft SQL Server","Java","Software Development Life Cycle (SDLC)","Application Programming Interfaces (API)"],
  },
];

// export const EXPERIENCES = [
//   // {
//   //   year: "2023 - Present",
//   //   role: "Senior Full Stack Developer",
//   //   company: "Google Inc.",
//   //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//   //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   // },
//   // {
//   //   year: "2022 - 2023",
//   //   role: "Frontend Developer",
//   //   company: "Adobe",
//   //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//   //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   // },
//   // {
//   //   year: "2021 - 2022",
//   //   role: "Full Stack Developer",
//   //   company: "Facebook",
//   //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//   //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   // },
//   {
//     year: "Aug 2021 - Mar 2022",
//     role: "Full Stack Developer",
//     company: "PT Whiteopen Teknologi",
//     description: `I am work as Programmer in one of vendor on Jakarta, while working i use programming languages like C# with ASP .NET framework, Javascript, Jquery, HTML, CSS, Ajax, Power BI. And several office application like Microsoft Excel and Microsoft Word. Sometime i have meeting with my clients, to discuss additional or bugs by user, after that i do system analysis and work on it.`,
//     technologies: ["ASP.NET MVC", "jQuery", "JavaScript", "PostgreSQL","Spring Boot","Microsoft SQL Server","Java","Software Development Life Cycle (SDLC)","Application Programming Interfaces (API)"],
//   },
// ];

export const PROJECTS = [
  {
    id: 1,
    pekerjaan: [
      {
        image: project1,
        title: "Web Portfolio",
        description:
          "A website that presents my experience while I was a web developer",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Typescript",
          "NextJS",
          "ReactJs",
          "Tailwind Css",
        ],
      },
    ],
    perusahaan: "PT.Bank Mandiri",
    Job: "Software Engineer",
    time: "Feb 2023 - present",
  },
  {
    id: 2,
    pekerjaan: [
      {
        image: project1,
        title: "Analisys Monitoring System",
        description:
          "Fully functional monitoring web application with features like notifications, creditor search, case creation and user authentication.",
        technologies: [
          "HTML",
          "CSS",
          "ReactJs",
          "NextJs",
          "Typescript",
          "Node.js",
          "Bootstrap",
          "Sequelize",
          "Express",
          "SQL",
        ],
      },
    ],
    perusahaan: "PT.Asiatek Solusi Indonesia",
    Job: "Software Engineer",
    time: "Feb 2023 - present",
  },
  {
    id: 3,
    pekerjaan: [
      {
        image: project1,
        title: "DPLK Management App",
        description:
          "Application to manage DPLK management, with features such as participant registration, fee calculation, and create, read, update, delete DPLK participant data and user authentication.",
        technologies: [
          "CSHTML",
          "CSS",
          "JavaScript",
          "JQuery",
          "C#",
          ".Net 5 (MVC)",
          "Bootstrap",
        ],
      },
    ],
    perusahaan: "PT.Praisindo",
    Job: "Full Stack Developer",
    time: "Mar 2022 - Feb 2023",
  },
  {
    id: 4,
    pekerjaan: [
      {
        image: project1,
        title: "VPH PT. Toyota Motor Manufacturing Indonesia (TMMIN)",
        description:
          "Web Apps were created for inventory management (stock and inventory) in the PT.Toyota Motor Manufacturing Indonesia (TMMIN). with features such as CRUD data on products entering the warehouse and products used during production as well as total products received and those that have been used and user authentication.",
        technologies: [
          "CSHTML",
          "CSS",
          "JavaScript",
          "JQuery",
          "C#",
          ".Net 5 (MVC)",
          "Bootstrap",
        ],
      },
      {
        image: project1,
        title: "HENKATEN PT. Toyota Motor Manufacturing Indonesia (TMMIN)",
        description:
          "Web application created for employee management of PT.Toyota Motor Manufacturing Indonesia (TMMIN). with features such as CRUD SOPs for each tool employees use for work or production. also employee activity schedules and user authentication.",
        technologies: [
          "CSHTML",
          "CSS",
          "JavaScript",
          "JQuery",
          "C#",
          ".Net 5 (MVC)",
          "Bootstrap",
        ],
      },
      {
        image: project1,
        title:
          "Inventory and Cost System, PT. Toyota Motor Manufacturing Indonesia (TMMIN)",
        description:
          "Web Apps were created for inventory management (stock and inventory) in the PT.Toyota Motor Manufacturing Indonesia (TMMIN). with features such as calculating the total stock available and the price of goods in the warehouse as well as the total price of goods that have been used during production and user authentication.",
        technologies: [
          "CSHTML",
          "CSS",
          "JavaScript",
          "JQuery",
          "C#",
          ".Net 5 (MVC)",
          "Bootstrap",
        ],
      },
    ],
    perusahaan: "PT.Whiteopen Teknologi",
    Job: "Full Stack Developer",
    time: "August 2021 - Mar 2023",
  },
  // {
  //   id: 5,
  //   pekerjaan: [
  //     {
  //       image: project5,
  //       title: "HENKATEN PT. Toyota Motor Manufacturing Indonesia (TMMIN)",
  //       description:
  //         "Web application created for employee management of PT. Toyota Motor Manufacturing Indonesia (TMMIN). with features such as CRUD SOPs for each tool employees use for work or production. also employee activity schedules and user authentication.",
  //       technologies: [
  //         "CSHTML",
  //         "CSS",
  //         "JavaScript",
  //         "JQuery",
  //         "C#",
  //         ".Net 5 (MVC)",
  //         "Bootstrap",
  //       ],
  //     },
  //   ],
  //   perusahaan: "PT.Whiteopen Teknologi",
  //   Job: "Full Stack Developer",
  //   time: "August 2021 - Mar 2023",
  // },
  // {
  //   id: 6,
  //   pekerjaan: [
  //     {
  //       image: project6,
  //       title:
  //         "Inventory and Cost System, PT. Toyota Motor Manufacturing Indonesia (TMMIN)",
  //       description:
  //         "Web Apps were created for inventory management (stock and inventory) in the PT environment. Toyota Motor Manufacturing Indonesia (TMMIN). with features such as calculating the total stock available and the price of goods in the warehouse as well as the total price of goods that have been used during production and user authentication.",
  //       technologies: [
  //         "CSHTML",
  //         "CSS",
  //         "JavaScript",
  //         "JQuery",
  //         "C#",
  //         ".Net 5 (MVC)",
  //         "Bootstrap",
  //       ],
  //     },
  //   ],
  //   perusahaan: "PT.Whiteopen Teknologi",
  //   Job: "Full Stack Developer",
  //   time: "August 2021 - Mar 2023",
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
