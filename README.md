# final_project_new
This is the chrome extension to blocking redirection and count suspecious hiding elements

The initial motivation for the extension is to block unintended page redirection or tabs creation. These are pretty annoying when browsing the webpages. 

Initially I would like to design an extension to capture all the outgoing http requests and inform the user what information is sent out to remote server. But this is not neither practical nor useful since for regular webpage there will be hundreds of http requests.

Then I decide to add event handlers that will trap the events can trigger functions that call window.open() and href to inform the user the redirection destination. But I found that it is not easy to find the tricks used by some malicous webpages to redirect and open new windows. And I can only be sure where is the user before the redirection and not clear which hard-coded url the webpage will go. I am still working on it.

Besides, I also find it may be helpful to let the user know hiding elements and make all the frames sandbox to prevent outer frame being overwriten by inside frames.

