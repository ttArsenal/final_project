//This method actually do two things: first filter and find all the unseen objects
//and frames (size is 1*1); second set the sandbox attribute for the frames within
//the page, this is to prevent the children frames to change the parent one.
window.addEventListener("beforeunload", function(event) {
    event.returnValue = "The page is about to redirect from " + event.target.baseURI;
});

function tag(tag_value){return document.getElementsByTagName(tag_value);}
function exists(val){ return (val == null || val == undefined || val == "") ? false : true; }

document.addEventListener("DOMContentLoaded", function(event) { 
  //Do not know whether the libs are permitted, so use the native javascript.

	var frames = tag("iframe");
	var objects = tag("object");
	var count = 0; // count is used to count all the objects and iframes with
					//suspecious size and offset
	var bodyRect = document.body.getBoundingClientRect();
	for(var i = 0; i < frames.length; i ++){
		var elemRect = frames[i].getBoundingClientRect();
		var offset1 = elemRect.top - bodyRect.top;
		if(offset1 < 0){
			count = count + 1;
		}
		if(elemRect.top - elemRect.bottom <= 10 && elemRect.right - elemRect.left <= 10){
			count = count + 1;
		}
		// Set the sandbox attribute for the frames.
		frames[i].setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
	}

	for (var i = 0; i < objects.length; i ++){
		var objRect = objects[i].getBoundingClientRect();
		var offset2 = objRect.top - bodyRect.top;
		if(offset2 < 0){
			count = count + 1; 
		}
		if(objRect.top - objRect.bottom <= 10 && objRect.right - objRect.left <= 10){
			count = count + 1;
		}
	}

	alert("There are " + count + " elements are hiden within this page!");
});

