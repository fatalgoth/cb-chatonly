let toggle = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = 1 - toggle;

  // No tabs or host permissions needed!
  if(tab.url.includes('chaturbate.com/b/')){
    if(toggle){
      chrome.tabs.executeScript({file: 'hide.js'});
    } else {
      chrome.tabs.reload(tab.id);
    }
	}
});
