// Most fields are required except for a live website url and anything past 2 features.
// Make an admin dashboard to add and remove items from here, steps to accomplish:
// 1. Form to fill in information + upload files.
// 2. Check if all information in form passes requirements, if not - give error information.
// 3. Translate form data to array data, and push as object into this list using append/push etc.
// 4. Use a try/catch block to avoid issues, rather publish errors to incoming log on admin dashboard.
// 5. Use 0Auth for dashboard?


// Consider replacing this entire projects section with a mdx or md file.

import { slugify } from "../utilities/slugify.js";

// if source is not available use view project instead with a link to gitlab.
export const projects = [
  {
    id: 1,
    title: "Datamaskinarkitektur",
    description: "With the primary focus being on storage hierarchy, we have documented and weighted the pros & cons of each piece of technology and/or hardware. Including both older and newer pieces of technology",
    image_url: "img/datamaskinarkitektur.png",
    image_alt: "Snippet of the presentation video, featuring a data center in the background of the title",
    website_url: "https://gitlab.stud.idi.ntnu.no/mlamund/idata1004_gr1-datamaskinarkitektur/-/wikis/home", // Referr to as the gitlab project page - or wiki to be exact.
    source_url: null, // Referr to where the project is located, be it github or link gitlab.
    introduction: "The first assignment with team interaction. Its main purpose was to introduce us to working in teams, using gitlab and its issue boards we were tasked to deep dive into computer architecture.",
    features: {
      features_intro: "The video is quite simple, it does not focus too much on design – other than being rather coherent throughout the entire presentation.",
      feature_title_1: "Teambuilding",
      feature_desc_1: "The assignment was a combination of team building and teamwork, giving us quite a large playroom to get comfortable with eachother to begin this semester.",
      feature_title_2: "Gitlab",
      feature_desc_2: "A monstrosity of a platform to begin with, turned out to be quite alright. Helping eachother getting into it, and presenting ourselves through the use of a wiki.",
      feature_title_3: "Computers",
      feature_desc_3: "Deep dive into the architecture and especially storage. Storage was our team's assignment, giving us a great deep dive into their different use-cases and future.",
    },
  },
  {
    id: 2,
    title: "Lego Project",
    description: "Working together to create an autonomous LEGO® Education SPIKE Prime robot, using pre-programmed instructions we've written to complete various tasks.",
    image_url: "img/placeholder-image.png",
    image_alt: "Empty placeholder image",
    website_url: "https://gitlab.stud.idi.ntnu.no/dennissl/idata1004_gr1-prosjektoppgave/-/wikis/home",
    source_url: null,
    introduction: "This project is yet to be started",
    features: {
      features_intro: null, // this'll show
      feature_title_1: null, // this'll show
      feature_desc_1: null, // this'll show
      feature_title_2: null, // this'll show
      feature_desc_2: null, // this'll show
      feature_title_3: null, // this wont show
      feature_desc_3: null, // this wont show
    },
  },
  {
    id: 3,
    title: "Mappeprosjekt",
    description: "The application uses a text-based UI to provide the user with AI-generated recipies based on an entry of ingredients. Ingredients can be added, removed, modified and are checked on entry.",
    image_url: "img/placeholder-image.png",
    image_alt: "Empty placeholder image",
    website_url: null, // it has no website except for the source url.
    source_url: "https://github.com/NTNU-IE-IIR/mappe-idata1003-2024-foodwaste-dotDennis",
    introduction: "Tasked with developing an application that contributes to consumers becoming increasingly aware of their food waste. Providing the user with an overview of available products in their assortment, and using AI to generate recepies.",
    features: {
      features_intro: "The application uses native Java, to provide the user with an assortment of products available through a text-based UI.",
      feature_title_1: "Java",
      feature_desc_1: "This website is project will be built with Java, and has already started slightly",
      feature_title_2: "UI",
      feature_desc_2: "I've created the class files, but not started on the UI just yet.",
      feature_title_3: "AI",
      feature_desc_3: "This will be added once everything else is working and setup properly. It's not required, but would be a fun accomplishment.",
    },
  },
];

// Slugify title, create and add project.slug property.
projects.forEach((project) => {
  project.slug = slugify(project.title);
});
