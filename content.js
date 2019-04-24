function linkFor({filePath, rawFilePath}) {
  elem = document.createElement("div");
  elem.innerHTML = `Preview ${filePath}`;
  elem.setAttribute(
    "style",
    "margin: 5px 0; padding: 10px 5px; border: 1px solid #B10DC9; color: #B10DC9; cursor: pointer;",
  );
  elem.onclick = function() {
    chrome.extension.sendMessage({
      msg: "openSpec",
      specUrl: `${rawFilePath}`,
    });
  };
  return elem;
}

function rawPathFor(blobPath) {
  return `https://github.com${blobPath.replace(/\/blob\//, "/raw/")}`;
}

const previewFiles = [...document.querySelectorAll(".file-header")]
  .map(file => ({
    filePath: file.getAttribute("data-path"),
    rawFilePath: rawPathFor(
      file.querySelector(".file-actions .BtnGroup a").getAttribute("href"),
    ),
  }))
  .filter(file => /(swagger|openapi)\.(yaml|yml)/.test(file.filePath));

for (file of previewFiles) {
  document
    .getElementById("partial-discussion-header")
    .appendChild(linkFor(file));
}
