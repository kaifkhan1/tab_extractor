document.addEventListener('DOMContentLoaded', function() {
  var grabButton = document.getElementById('grabTitle');
  var titleDisplay = document.getElementById('titleDisplay');

  grabButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
      titleDisplay.innerHTML = "<strong>Current tab title:</strong><br>" + currentTab.title;
      titleDisplay.classList.add('show');
    });
  });
});
