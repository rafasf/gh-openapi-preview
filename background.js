function openRedoc(specUrl, title) {
  chrome.tabs.create({
    url: chrome.extension.getURL(`/redoc.html?spec=${specUrl}&title=${title}`),
  });
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg == "openSpec") openRedoc(request.specUrl, request.title);
});
