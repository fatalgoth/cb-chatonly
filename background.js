chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if(tab.url.includes('chaturbate.com/b/')){
	chrome.tabs.executeScript({file: 'logic.js'});
	}
});
