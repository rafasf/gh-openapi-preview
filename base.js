function linkFor({title, filePath, rawFilePath}) {
  elem = document.createElement("div");
  elem.innerHTML = `Preview ${filePath}`;
  elem.setAttribute(
    "style",
    "margin: 5px 0; padding: 10px 5px; border: 1px solid #B10DC9; color: #B10DC9; cursor: pointer;",
  );
  elem.onclick = function() {
    chrome.extension.sendMessage({
      title: title,
      msg: "openSpec",
      specUrl: `${rawFilePath}`,
    });
  };
  return elem;
}
