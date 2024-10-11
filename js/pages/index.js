import { projects } from "../assets/projects.js";
import { renderCard } from "../components/renderCard.js";

const container = document.querySelector("main");

projects.forEach((project) => {
  container.innerHTML += renderCard(project);
});
