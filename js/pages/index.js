import { projects } from "../assets/projects.js";
import { renderCard } from "../components/renderCard.js";

const container = document.querySelector("main");

// turn into a try/catch block to catch and display potential issues

if (projects) {
  projects.forEach((project) => {
    container.innerHTML += renderCard(project);
  });
} 
