import { slugify } from "../utilities/slugify.js";

// Check for crucial properties, if not present, don't build card.
// Use a try/catch block - do this for v2

export function buildCards(project) {
  let text_link = "";

  if (project.website_url) {
    text_link = `<a href="${project.website_url}" target="_blank" rel="noreferrer">View website</a>`;
  } else {
    text_link = "";
  }

  let slug = slugify(project.title);

  return `
    <section class="flex__containers">
    <div class="flex__top">
      <div class="flex__image">
        <img src="${project.image_url}" alt="${project.image_alt}" />
        <a title="Read more about my ${project.title} project." aria-label="Read about the project" href="project.html?project=${slug}"></a>
      </div>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
    <div class="flex__bottom">
      <a aria-label="Read more about the ${project.title} project" href="project.html?project=${slug}">Read more</a>
    ${text_link}
    </div>
  </section>`;
}
