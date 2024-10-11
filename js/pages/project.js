import { projects } from "../assets/projects.js";
import { renderProject } from "../components/renderProject.js";

const container = document.querySelector("main");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// get the project from the querystring
export const query = params.get("project");

if (!query) {
  location.href = "/404.html";
}

// match the project key with id in array.
const project = projects.find((p) => p.slug === query);

if (!project || !project.title || !project.description) {
  location.href = "/404.html";
} else {
  // Set document title and render the project if valid
  document.title = `Dennis Løvold | ${project.title}`;
  document.querySelector("meta[name='description'").setAttribute("content", project.description);
  container.innerHTML = renderProject(project);
}
