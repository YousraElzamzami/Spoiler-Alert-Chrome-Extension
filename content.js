function checkForMovieMentions() {
  var elements = document.querySelectorAll('body *');
  var watchlist = []; // Initialize an empty array

  // Retrieve the watchlist from the extension's storage
  chrome.storage.sync.get('watchlist', function(data) {
    watchlist = data.watchlist || [];

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var text = element.innerText.toLowerCase();
      for (var j = 0; j < watchlist.length; j++) {
        var movie = watchlist[j].toLowerCase();
        if (text.includes(movie)) {
          element.style.filter = 'blur(5px)';
          break;
        }
      }
    }
  });
}

checkForMovieMentions();
setInterval(checkForMovieMentions, 3000); // Check every 3 seconds for new movie mentions
