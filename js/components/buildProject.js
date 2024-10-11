// look to rewrite this entire function so that if x is undefined, it does not display.

export function projectHtml(project) {
  const features = project.features;

  let website_url = "";
  let image_link = "";
  let source_url = "";

  // Taken simple route due to time management, get back to setting up a switch statement here:
  // v2 consider try/catch block

  /*  IF X IS MISSING THROW ERROR  */

  // If something is undefined, don't include it. Some things are important and should
  // stop the page from being built, like a project title.
  // in those cases send user to error 404 page instead.

  /*  IF X IS MISSING DON'T INCLUDE */

  if (!features.feature_title_3 || !features.feature_desc_3) {
    features.feature_title_3 = "";
    features.feature_desc_3 = "";
  } else {
    features.feature_title_3 = `<h3>${features.feature_title_3}</h3>`;
    features.feature_desc_3 = `<p>${features.feature_desc_3}</p>`;
  }

  if (project.website_url) {
    website_url = `<a href="${project.website_url}">View Website</a>`;
    image_link = `<a title="View the website" aria-label="View the website" href="${project.website_url}"></a>`;
  } else {
    website_url = "";
    image_link = "";
  }

  if (project.source_url) {
    source_url = `<a href="${project.source_url}">View Source</a>`;
  } else {
    source_url = "";
  }

  return `
      <section class="container">
        <h1>${project.title}</h1>
        <p class="lead">${project.description}</p>
        <a class="cta-scroll" href="#introduction"><span class="material-icons">keyboard_arrow_down</span></a>
      </section>
      <div class="container__image--container">
        <img class="container__image" src="${project.image_url}" alt="${project.image_alt}" />
        ${image_link}
        </div>
      <section class="container" id="introduction">
        <h2>Introduction</h2>
        <p>${project.introduction}</p>
      </section>
      <section class="container">
        <h2>Features</h2>
        <p>${features.features_intro}</p>
        <h3>${features.feature_title_1}</h3>
        <p>${features.feature_desc_1}</p>
        <h3>${features.feature_title_2}</h3>
        <p>${features.feature_desc_2}</p>
        ${features.feature_title_3}
        ${features.feature_desc_3}
      </section>
      <div class="container__links">
        ${website_url}${source_url}<a href="/">Return Home</a>
      </div>`;
}
