chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ moviesList: [] });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateMoviesList') {
    chrome.storage.sync.set({ moviesList: request.moviesList });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'displaySpoilerAlert') {
    chrome.tabs.sendMessage(sender.tab.id, { action: 'displaySpoilerAlert' });
  }
});
