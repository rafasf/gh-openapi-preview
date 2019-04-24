function openRedoc(specUrl) {
  chrome.tabs.create({
    url: chrome.extension.getURL(`/redoc.html?spec=${specUrl}`),
  });
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg == "openSpec") openRedoc(request.specUrl);
});
