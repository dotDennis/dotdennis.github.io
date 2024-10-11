import { slugify } from "../utilities/slugify.js";

export function renderCard(project) {
  try {
    // Check if project.title exists, if not throw an error (console)
    if (!project.title) {
      throw new Error("Project title is required to build the project card.");
    }

    // Check if external.website exists, prepare project_link
    let project_link = project.external.website ? `<a href="${project.external.website}" target="_blank" rel="noreferrer">View website</a>` : "";

    // Generate slug from project.title
    let slug = slugify(project.title);

    // Return the HTML for the project card
    return `
      <section class="flex__containers">
        <div class="flex__top">
          <div class="flex__image">
            <img src="${project.image.url}" alt="${project.image.alt}" />
            <a title="Read more about my ${project.title} project." aria-label="Read about the project" href="project.html?project=${slug}"></a>
          </div>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
        <div class="flex__bottom">
          <a aria-label="Read more about the ${project.title} project" href="project.html?project=${slug}">Read more</a>
          ${project_link}
        </div>
      </section>`;
  } catch (error) {
    console.error(`Error building project card: ${error.message}`);
    // Optionally, return a default error message or empty string to prevent breaking the page
    return "";
  }
}
