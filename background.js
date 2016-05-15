function click(e) {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var specTab = tabs[0];
		//chrome.tabs.insertCSS(specTab.id, {file:""});
		chrome.tabs.executeScript(specTab.id, {file:"filter.js", allFrames:true})
	});
}


chrome.browserAction.onClicked.addListener(click);