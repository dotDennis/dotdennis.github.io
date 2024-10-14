import { projects } from "../assets/projects.js";
import { renderProject } from "../components/renderProject.js";

const container = document.querySelector("main");
const params = new URLSearchParams(document.location.search);

// get the project from the querystring
export const query = params.get("project");


try {
  // Redirect to 404 if no query or project is not found
  const project = projects.find(({ slug }) => slug === query);
  if (!query || !project) {
    throw new Error("Project not found");
  }

  // Set document title and meta description
  document.title = `Dennis Løvold | ${project.title}`;
  document.querySelector("meta[name='description']").setAttribute("content", project.description);

  // Render the project
  container.innerHTML = renderProject(project);

} catch (error) {
  console.error("Error loading project:", error);
  location.href = "/404.html";  // Redirect to 404 page on error
}