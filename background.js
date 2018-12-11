
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        "file": "contentscript.js"
    }, function () { // Execute your code
        console.log("Reloaded page without postback"); // Notification on Completion
    });
});