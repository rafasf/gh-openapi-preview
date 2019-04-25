function rawPathFor(blobPath) {
  return `https://github.com${blobPath.replace(/\/blob\//, "/raw/")}`;
}

const previewFiles = [...document.querySelectorAll(".file-header")]
  .map(fileHeader => ({
    filePath: fileHeader.getAttribute("data-path"),
    rawFilePath: rawPathFor(
      fileHeader.querySelector(".file-actions a").getAttribute("href"),
    ),
  }))
  .filter(fileHeader =>
    /(swagger|openapi)\.(yaml|yml)/.test(fileHeader.filePath),
  );

for (file of previewFiles) {
  document
    .getElementById("partial-discussion-header")
    .appendChild(linkFor(file));
}
