function specElement(spec) {
  newElement = document.createElement("redoc");
  newElement.setAttribute("spec-url", spec);
  return newElement;
}

const params = new URLSearchParams(window.location.search);

async function render(specUrl) {
  const response = await fetch(specUrl);
  const spec = await response.text();
  console.log(spec);
  document.body.appendChild(specElement(spec));
}

document.body.appendChild(specElement(params.get("spec")));
