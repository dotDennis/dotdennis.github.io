// Most fields are required except for a live website url and anything past 2 features.
// Make an admin dashboard to add and remove items from here, steps to accomplish:
// 1. Form to fill in information + upload files.
// 2. Check if all information in form passes requirements, if not - give error information.
// 3. Translate form data to array data, and push as object into this list using append/push etc.
// 4. Use a try/catch block to avoid issues, rather publish errors to incoming log on admin dashboard.
// 5. Use 0Auth for dashboard?

// Consider replacing this entire projects section with a mdx or md file.
// rename .project to demo or something? If a project has a link, it'll be for example to a website displaying
// its usecase, and or the application. Source will always be the github link, no other links go here.
// Perhaps split it into 'wiki, demo, website, source' to further improve the ux design.
// .project was a weird choice anyways, confusing with project.external.project ...

// Added dateAdded to allow for organizing later down the road.

import { slugify } from "../utilities/slugify.js";

// project 1 includes of every property available.
export let projects = [
  {
    id: 1,
    title: "Datamaskinarkitektur",
    description: "With the primary focus being on storage hierarchy, we have documented and weighted the pros & cons of each piece of technology and/or hardware. Including both older and newer pieces of technology",
    dateAdded: "10-04-2024",
    image: {
      url: "img/datamaskinarkitektur.webp",
      alt: "Snippet of the presentation video, featuring a data center in the background of the title",
      credit: null,
    },
    external: {
      link: "https://gitlab.stud.idi.ntnu.no/mlamund/idata1004_gr1-datamaskinarkitektur/-/wikis/home",
      source: null,
    },
    introduction: "The first assignment with team interaction. Its main purpose was to introduce us to working in teams, using gitlab and its issue boards we were tasked to deep dive into computer architecture.",
    features: {
      intro: "The video is quite simple, it does not focus too much on design – other than being rather coherent throughout the entire presentation.",
      list: [
        { title: "Teambuilding", desc: "The assignment was a combination of team building and teamwork, giving us quite a large playroom to get comfortable with eachother to begin this semester." },
        { title: "Gitlab", desc: "A monstrosity of a platform to begin with, turned out to be quite alright. Helping eachother getting into it, and presenting ourselves through the use of a wiki." },
        { title: "Computers", desc: "Deep dive into the architecture and especially storage. Storage was our team's assignment, giving us a great deep dive into their different use-cases and future." },
      ],
    },
  },
  {
    id: 2,
    title: "Lego Project",
    description: "Working together to create an autonomous LEGO® Education SPIKE Prime robot, using pre-programmed instructions we've written to complete various tasks.",
    dateAdded: "22-10-2024",
    image: {
      url: "img/legoprosjekt.webp",
      alt: "A LEGO® Education SPIKE Prime robot prototype designed for the First Lego League Challenge, featuring a four-wheel base and an extended arm mechanism.",
    },
    external: {
      link: "https://gitlab.stud.idi.ntnu.no/dennissl/idata1004_gr1-prosjektoppgave/-/wikis/home",
    },
    introduction: "This project involved designing and programming an autonomous robot to solve tasks related to marine ecosystem challenges, fostering teamwork and technical skills.",
    features: {
      intro: "A comprehensive look into the creation of an autonomous LEGO robot, addressing real-world environmental issues while emphasizing teamwork and iterative development.",
      list: [
        {
          title: "Autonomous Design",
          desc: "Developed and programmed a robot to autonomously execute tasks on a game board within a time limit.",
        },
        {
          title: "Environmental Focus",
          desc: "Addressed challenges like marine pollution and coral reef restoration through carefully chosen tasks.",
        },
        {
          title: "Key Challenges",
          desc: "Faced communication breakdowns, attendance issues, and tight deadlines, learning to adapt and overcome obstacles.",
        },
        {
          title: "Technologies and Methods",
          desc: "Utilized GitLab for task management, followed a structured project plan, and applied iterative development techniques.",
        },
        {
          title: "Worth mentioning",
          desc: "The report delivered will be added to the gitlab link attached once grading is complete. Due to deadline limiting my ability to update the GitLab with any new content.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Mappeprosjekt",
    description: "The application uses a text-based UI to provide the user with AI-generated recipies based on an entry of ingredients. Ingredients can be added, removed, modified and are checked on entry.",
    dateAdded: "10-05-2024",
    image: {
      url: "img/mappeprosjekt.webp",
      alt: "Person holding a cup of coffee with latte art in the shape of a heart floral design.",
      credit: "Photo by <a href='https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Nathan Dumlao</a> on <a href='https://unsplash.com/photos/focus-photography-of-coffee-artwork-r-KfktlyBL0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>",
    },
    external: {
      source: "https://github.com/NTNU-IE-IIR/mappe-idata1003-2024-foodwaste-dotDennis",
    },
    introduction: "Tasked with developing an application that contributes to consumers becoming increasingly aware of their food waste. Providing the user with an overview of available products in their assortment, and using AI to generate recepies.",
    features: {
      intro: "The application uses native Java, to provide the user with an assortment of products available through a text-based UI.",
      list: [
        { title: "Java", desc: "This project will be built with Java, and has already started slightly." },
        { title: "UI", desc: "I've created the class files, but not started on the UI just yet." },
        { title: "AI", desc: "This will be added once everything else is working and setup properly. It's not required, but would be a fun accomplishment." },
      ],
    },
  },
  {
    id: 4,
    title: "Programming exercies",
    description: "A large collection of Python excercies from one of our Programming subjects. Using Python to solve math equations, starting of rather simple – ends with complex functions solving particullary difficult equations using large datasets.",
    dateAdded: "10-04-2024",
    image: {
      url: "img/programmering.webp",
      alt: "Visual representation of a system of four linear equations with four variables, presented in a mathematical format.",
      credit: "Photo by <a href='https://unsplash.com/@antoine1003?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Antoine Dautry</a> on <a href='https://unsplash.com/photos/mathematics-computation-05A-kdOH6Hw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>",
    },
    external: {
      source: "https://github.com/dotDennis/programmering",
    },
    introduction: "Tasked with solving a large variety of mathematic equation we had to use Python. Provided with an introduction to the language, I had to use datasets, numpy, and mathematics, to create solutions to these challenging exercises.",
    features: {
      intro: "A collection of jupyter tasks solved with Python. The average grading I recieved was slightly above 90/100, challenging and fun.",
      list: [
        { title: "Python", desc: "The exercies provided me with a gradual introduction to Python. Using functions, arrays, numpy and different datasets to solve challenging mathematics." },
        { title: "Mathematics", desc: "Utilising the many features of python, I've solved over 90% of the tasks in these exercies. In return I've recieved a great understanding of the way operators work." },
      ],
    },
  },
];

// Slugify title, create and add project.slug property. // DO the same for ID?
projects.forEach((project) => {
  project.slug = slugify(project.title);
});
