import { slugify } from "../utilities/slugify.js";

export function renderCard(project) {
  try {
    // Check if project.title exists, if not throw an error (console) – project has to exist for project.title to exist
    if (!project.title) {
      throw new Error("Project title is required to build the project card, does project exist?");
    }

    // Check if external.project exists, prepare project_link
    let project_link = project.external?.project ? `<a href="${project.external.project}" target="_blank" rel="noreferrer">View website</a>` : "";

    // Generate slug from project.title
    let slug = slugify(project.title);

    // Return the HTML for the project card
    return `
      <div class="flex__item">
        <div class="flex__item--top">
          <div class="flex__item--image">
            <img src="${project.image?.url || "../img/placeholder-image.webp"}" alt="${project.image?.alt || "Empty placeholder image"}" />
            <a title="Read more about my ${project.title} project." aria-label="Read about the project" href="project.html?project=${slug}"></a>
          </div>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
        <div class="flex__item--bottom">
          <a aria-label="Read more about the ${project.title} project" href="project.html?project=${slug}">Read more</a>
          ${project_link}
        </div>
      </div>`;
  } catch (error) {
    console.error(`Error building project card: ${error.message}`);
    return ""; //this should only be logged in console, on-screen display would only draw confusion (since on homepage)
  }
}
