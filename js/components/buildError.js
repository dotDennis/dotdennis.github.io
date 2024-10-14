// can most likely just delete this, but I'll let it rest for a while and see as project goes on.
export function buildError(title = "Error", error) {
  return `<div class="container--error">
            <h2>${title}</h2>
            <p>${error}</p>
            </div>`;
}
