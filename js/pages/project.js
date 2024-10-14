import { projects } from "../assets/projects.js";
import { renderProject } from "../components/renderProject.js";

const container = document.querySelector("main");
const params = new URLSearchParams(document.location.search);

// get the project from the querystring
export const query = params.get("project");

// Redirect to 404 page if no querystring 'project' is found
if (!query) {
  location.href = "/404.html";
}

// Match the project using the slug
const project = projects.find(({ slug }) => slug === query);

// Redirect to 404 page if project not found or missing required properties
if (!project || !project.title || !project.description) {
  location.href = "/404.html";
}

// Set document title and meta description, then render the project
document.title = `Dennis Løvold | ${project.title}`;
document.querySelector("meta[name='description']").setAttribute("content", project.description);
container.innerHTML = renderProject(project);