export function buildError(title = "Error", error) {
  return `<div class="container--error">
            <h2>${title}</h2>
            <p>${error}</p>
            </div>`;
}
