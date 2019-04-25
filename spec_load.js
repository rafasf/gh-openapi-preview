function specElement(spec) {
  newElement = document.createElement("redoc");
  newElement.setAttribute("spec-url", spec);
  return newElement;
}

const params = new URLSearchParams(window.location.search);

document.title = params.get("title");
document.body.appendChild(specElement(params.get("spec")));
