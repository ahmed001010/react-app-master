import Mock from "../mock";

const database = {
  information: {
    name: "Sergio Eersel",
    aboutContent:
      "Wij zijn een bedrijf gevestigd in Utrecht, we bieden verschillende diensten aan zoals het leveren van Microsoft software, internet marketing en diverse innovatieve ontwikkelingen.",
    // age: 38,
    phone: "",
    // nationality: "",
    language: "English, Spanish",
    email: "",
    // address: "2350 s race st, Denver CO - 80210 - USA",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://www.facebook.com/profile.php?id=100029658283923",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/sergio-eersel-bbb24087/",
      dribbble: "",
      github: "",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/cv.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "color-pallet",
      details:
        "Design is not only what a website looks like and feels on the front-end. Design surrounds the internal functionality of a website as well as the overall UX.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "I am passionate about web development with a strong interest in mobile apps. As a developer, I aspire to write consistent, clear, elegant and readable code. ",
    },
    {
      title: "Engineering",
      icon: "construction-hammer",
      details:
        "As an engineer, I will carry the curiosity, critical thinking, collaborative spirit, creativity, effective communication and more to my new career. ",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 100,
    },
    {
      title: "CSS3",
      value: 100,
    },
    {
      title: "Javascript",
      value: 100,
    },
    {
      title: "Sass",
      value: 100,
    },
    {
      title: "ReactJS",
      value: 100,
    },
    {
      title: "Bootstrap",
      value: 100,
    },
    {
      title: "Responsive design",
      value: 100,
    },
    {
      title: "Git",
      value: 100,
    },
    {
      title: "Github",
      value: 100,
    },
    {
      title: "Material UI",
      value: 100,
    },
    {
      title: "Redux",
      value: 100,
    },
    {
      title: "ES6+",
      value: 100,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Modeling / Entrepeneur",
      subtitle: "An elegant modeling website.",
      imageUrl: "/images/Photo-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://test.lucialuzdesigns.com/",
      github: "https://github.com/melliottgithub/lucialuzdesigns/tree/gh-pages",
    },
    {
      id: 2,
      title: "Virtual Dance Classes",
      subtitle: "Website Extension for virtual classes.",
      imageUrl: "/images/Photo-2.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg",
      // ],
      url: "https://cns.melliott.io/",
      github: "https://github.com/melliottgithub/cnsonline",
    },
    {
      id: 3,
      title: "Wedding Photography",
      subtitle: "Beautiful Photography Website.",
      imageUrl: "/images/Photo-3.jpg",
      url: "https://rqphoto.melliott.io/",
      // github: "",
    },
    {
      id: 4,
      title: "Gallery Website",
      subtitle: "Gallery placer websites.",
      imageUrl: "/images/Photo-4.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "https://rqptest.melliott.io/",
    },
    {
      id: 5,
      title: "Websites Clones",
      subtitle: "IMDb Clone.",
      imageUrl: "/images/Photo-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: "https://imdb.melliott.io/",
      github: "https://github.com/melliottgithub/imdb"
    },
    // {
    //   id: 6,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/Photo-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    // },
    // {
    //   id: 7,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 8,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 9,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 10,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Front-end Web Developer",
        company: "Freelancer",
        details:
          "Self-taught design-oriented front-end developer creating beautiful and functional websites with clean code.",
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Petroleum Engineer/Data Analyst",
        company: "Petrovalues",
        details:
          "Decline curve analysis, Reservoir Characterization, write and code DSU - Website Support.",
      },
      {
        id: 3,
        year: "2016-2018",
        position: "Engineer",
        company: "CTL Thompson",
        details:
          "Field Engineer work - Data analysis.",
      },
      {
        id: 4,
        year: "2015-2015",
        position: "Engineer / Data Manager",
        company: "Chevron",
        details:
          "Data Manager - Quality Control - Quality Assurance.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2023",
        graduation: "Master of Science",
        university: "Regis University",
        details:
          "Starting Master of Science In Computer Science and Data Science.",
      },
      {
        id: 2,
        year: "2013 - 2016",
        graduation: "Bachelor of Science",
        university: "Colorado School of Mines",
        details:
          "Master of Science in Petroleum Engineering.",
      },
      // {
      //   id: 3,
      //   year: "2012 - 2013",
      //   graduation: "Community College",
      //   university: "College",
      //   details:
      //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      // },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["720-244-0453"],
    emailAddress: ["contact@melliot.io"],
    address: "Denver CO - 80227 - USA",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
