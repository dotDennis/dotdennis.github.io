import { projects } from "../assets/projects.js";
import { buildCards } from "../components/buildCards.js";

const container = document.querySelector("main");

projects.forEach((project) => {
  container.innerHTML += buildCards(project);
});
