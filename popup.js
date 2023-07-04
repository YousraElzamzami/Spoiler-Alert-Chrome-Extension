document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('watchlist-form');
  var movieInput = document.getElementById('movie-input');
  var statusDiv = document.getElementById('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var movies = movieInput.value.split(',').map(function(movie) {
      return movie.trim();
    });
    chrome.storage.sync.set({ watchlist: movies }, function() {
      statusDiv.textContent = 'Watch list saved!';
      setTimeout(function() {
        statusDiv.textContent = '';
      }, 2000);
    });
    
    // Send a message to the background script to update the movies list
    chrome.runtime.sendMessage({ action: 'updateMoviesList', moviesList: movies });
  });
});
