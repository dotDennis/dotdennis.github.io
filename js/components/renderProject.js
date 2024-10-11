export function renderProject(project) {
  // If project.title is missing, user will be redirect to 404.html (../pages/project.js)

  // Helper function to safely generate feature sections
  function createFeature({ title, desc }) {
    return title && desc ? `<h3>${title}</h3><p>${desc}</p>` : "";
  }

  // Generate optional elements using ternary operators
  const project_link = project.external.website ? `<a href="${project.external.website}">View Project</a>` : "";
  const image_link = project.external.website ? `<a title="View the project" aria-label="View the website" href="${project.external.website}"></a>` : "";
  const source_link = project.external.source ? `<a href="${project.external.source}">View Source</a>` : "";

  // Generate features HTML by mapping through the features array
  const featuresHTML = project.features.list.map(createFeature).join("");

  // Conditionally render the "Features" section only if there are features available
  const featuresSection = featuresHTML
    ? `
      <section class="container">
        <h2>Features</h2>
        <p>${project.features?.intro || "Features are listed below:"}</p>
        ${featuresHTML}
      </section>`
    : "";

  return `
  <section class="container">
    <h1>${project.title}</h1>
    <p class="lead">${project.description}</p>
    <a class="cta-scroll" href="#introduction">
      <span class="material-icons">keyboard_arrow_down</span>
    </a>
  </section>
  <div class="container__image--container">
    <img class="container__image" src="${project.image.url || "placeholder-image.png"}" alt="${project.image.alt || "Empty placeholder image"}" />
    ${image_link}
  </div>
  <section class="container" id="introduction">
    <h2>Introduction</h2>
    <p>${project.introduction}</p>
  </section>
  ${featuresSection} 
  <div class="container__links">
    ${project_link}
    ${source_link}
    <a href="/">Return Home</a>
  </div>
  `;
}