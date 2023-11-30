document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let currentTab = tabs[0];
      let tabUrl = currentTab.url;

      fetch(`http://localhost:3000/cricket-scores?url=${tabUrl}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById('score-container').innerText = data.score;
        })
        .catch(error => console.error(error));
    });
  });