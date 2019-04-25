const relativePath = document.querySelector("#raw-url").getAttribute("href");

const container = document.getElementsByClassName("new-discussion-timeline")[0];
container.insertBefore(
  linkFor({
    title: "OpenAPI Preview",
    filePath: relativePath,
    rawFilePath: `https://github.com${relativePath}`,
  }),
  container.firstChild,
);
