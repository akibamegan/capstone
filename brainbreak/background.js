console.log("hello background script is running");

var workingTracker = new Date();
var timeWorkingStart = workingTracker.getTime(); // gets current timestamp (unix time)

var idleDetection = 150; // detection interval of 60 seconds to count if computer is idle aka take a break for atleast 150 seconds
// var idleCounter = 0; // used to count number of times computer is in idle state
var currentState = "active";
var inIdle = false;

var motivational;
var warning;

chrome.idle.setDetectionInterval(parseInt(idleDetection));

//set the time for when each glitch triggers (60000ms/min)
var g1 = 60000*1;
var g2 = 60000*2;
var g3 = 60000*3;
var g4 = 60000*4;
var g5 = 60000*5;
var g6 = 60000*6;
var g7 = 60000*7;

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min); 
}

function showMotivationalNotification() {
	var randomX = getRandomNumber(0, motivationalMessages.length);
	var options1 = {
		type: "basic",
		iconUrl: "icon.png",
		title: "You're doing great!",
		priority: 2,
		message: motivationalMessages[randomX]
	};
	chrome.notifications.update("motivational", options1, function(exists) {
		if(exists){

		}
		else
			chrome.notifications.create("motivational", options1, function(){});
	});
}

function showWarningNotification() {
	var randomX = getRandomNumber(0, warningMessages.length);
	chrome.notifications.create("warning", {
		type: "basic",
		iconUrl: "icon.png",
		title: "Urgent Message!",
		priority: 2,
		message: warningMessages[randomX]
	}, function() {});
}

function initializeMessages() {
	if (localStorage.getItem("motivational") === null) {
		motivationalMessages = new Array();
		motivationalMessages.push("Have fun, stay active!");
		motivationalMessages.push("Don't forget to stay healthy!");
		motivationalMessages.push("You are a champion!");
		motivationalMessages.push("Keep on going!");
		motivationalMessages.push("You're doing great sweetie.");
		motivationalMessages.push("Wow! Look at you go.");
		motivationalMessages.push("Look at you! Living your best life.");
		motivationalMessages.push("You're so focused!");
		motivationalMessages.push("Great job!");
	} else {
		motivationalMessages = JSON.parse(localStorage.getItem("motivationalMessages"));
	}
    // MOTIVATIONAL; DID YOU KNOW?
    if (localStorage.getItem("warning") === null) {
    	warningMessages = new Array();
    	warningMessages.push("Sitting hunched over is not great for your back or neck!");
    	warningMessages.push("Being sedentary is not good for you! Get moving soon!");
    	warningMessages.push("Stand up now! You can prevent your metabolism from slowing down!");
    	warningMessages.push("If you stand up now, youll thank yourself later!");
    	warningMessages.push("You look a little tense, maybe you should get up for a little bit!");
    	warningMessages.push("Knock Knock... Your mental health just wanted to remind you to take a break.");
    	warningMessages.push("You've been sitting for too long. Get up!!");
    	warningMessages.push("You look like you need a break. Time to get up!");
    	warningMessages.push("Knock Knock... Heart disease says you should move soon...");
    	warningMessages.push("You look thirsty! Maybe go treat yourself to a nice drink break!");
    	warningMessages.push("You look hungry... Go on a walk and grab yourself a snack!");
    	warningMessages.push("Didn't ya hear? Sitting is the new smoking! Get moving!");
    	warningMessages.push("Get moving, or you'll be getting a visit from heart disease.");
    	warningMessages.push("You look tense...Do some jumping jacks!");
    } else {
    	warningMessages = JSON.parse(localStorage.getItem("warningMessages"));
    }
}

initializeMessages();

//listens for when the computer is in an idle state (detemines if the user is taking a break)
chrome.idle.onStateChanged.addListener(function(stateChange) {
	var now = new Date();
	var timeNow = now.getTime(); // get new timestamp

	// computer coming back from idle state, means user took a break
	// increase break counter and restart glitches
	if(stateChange === "active") {
		console.log("state changed from locked or idle to active");
		var breakLength = (idleTrackerStart - timeNow) / 60000;
		inIdle = false;
	}

	else if(stateChange === "locked") {
		// if the computer is locked
	}

	else {
		console.log("computer has been idle for " + idleDetection + " seconds");
		inIdle = true;
		var idleTracker = new Date();
		var idleTrackerStart = idleTracker.getTime();
	}
	currentState = stateChange;
	workingTracker = now;
	timeWorkingStart = timeNow;
});

function runGlitchesNormal() {
	setTimeout(function(){
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch1"});
		});
	}, g1);

	setTimeout(function(){
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch2"}, function(response){
				console.log("asking content script for glitch 2");
			});
		});
	}, g2);

	setTimeout(function(){
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch3"}, function(response){
				console.log("asking content script for glitch 3");
			});
		});
	}, g3);

	setTimeout(function(){
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch4"}, function(response){
				console.log("asking content script for glitch 4");
			});
		});
	}, g4);

	setTimeout(function(){
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch5"}, function(response){
				console.log("asking content script for glitch 5");
			});
		});
	}, g5);

	setTimeout(function(){
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch6"}, function(response){
				console.log("asking content script for glitch 6");
			});
		});
	}, g6);

	setTimeout(function(){
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch7"}, function(response){
				console.log("asking content script for glitch 7");
			});
		});
	}, g7);
}

function runGlitchesCheckTime() {
	var current = new Date();
	var currentTime = current.getTime();
	var activeTime = ((currentTime - timeWorkingStart));

	if(activeTime >= g1) {
		// load glitch 1
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch1"}, function(response){
				console.log("asking content script for glitch 1");
			});
		});
	}
	if(activeTime >= g2) {
		// load glitch 2
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch2"}, function(response){
				console.log("asking content script for glitch 2");
			});
		});
	}	
	if(activeTime >= g3) {
		// load glitch 3
		showMotivationalNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch3"}, function(response){
				console.log("asking content script for glitch 3");
			});
		});
	}	
	if(activeTime >= g4) {
		// load glitch 4
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch4"}, function(response){
				console.log("asking content script for glitch 4");
			});
		});
	}	
	if(activeTime >= g5) {
		// load glitch 5
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch5"}, function(response){
				console.log("asking content script for glitch 5");
			});
		});
	}
	if(activeTime >= g6) {
		// load glitch 6
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch6"}, function(response){
				console.log("asking content script for glitch 6");
			});
		});
	}
	if(activeTime >= g7) {
		// load glitch 7
		showWarningNotification();
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {msgtxt: "glitch7"}, function(response){
				console.log("asking content script for glitch 7");
			});
		});
	}
}

// checks if the URL is a new page or an old page (for glitch persistence)
function completedLoadingURLInCurrentTab(tabId, newUrl,oldUrl) {
    // a url has been loaded
    if(newUrl != oldUrl) {
        // check if old url?
        console.log(">>>>>>> New URL loaded in tab=" + tabId + ". URL=" + newUrl);
        runGlitchesCheckTime();
    }
    else {
        // check if new url?
        console.log(">>>>>>> Re-load tab=" + tabId + " with URL=" + newUrl);
        runGlitchesCheckTime();
        // runGlitchesNormal();
    }

    // save url for next refresh check
    tabsInfo[tabId].previousCompleteUrl = newUrl;
    tabsInfo[tabId].loadingUrl = newUrl;
}

//object tabsInfo
let tabsInfo = {};

function InfoForTab(_loadingUrl,_previousUrl,_status) {
	this.loadingUrl = _loadingUrl;
	this.previousCompleteUrl = (_previousUrl === undefined) ? "" : _previousUrl;
	this.status = (_status === undefined) ? "" : _status;
}

function foundNewTab(tabId) {
    // Create an object to hold the collected info for the tab
    tabsInfo[tabId] = new InfoForTab();
    console.log("Found new tab... ID=" + tabId);
}

// listens for update on tab such as reload or new url
chrome.tabs.onUpdated.addListener(function(tabId, stateChangeInfo, tab) {
	if(!tabsInfo.hasOwnProperty(tabId)) {
        // this is a new tab - first time visit
        foundNewTab(tabId);
    }

    if(stateChangeInfo.hasOwnProperty("status") && stateChangeInfo.hasOwnProperty("url") && (tab.status === "loading")) {
        // a URL is loading in the tab, (first time, transition from old url, or reload)
        let outputFirst = "";
        let outputLoading = "loading";
        if(tabsInfo[tabId].previousCompleteUrl === tab.url) {
            // same url was reloaded
            outputLoading = "re-loading";
        }
        console.log(outputLoading  + " URL=" + tab.url);
        // save old url
        tabsInfo[tabId].loadingUrl = tab.url;
        tabsInfo[tabId].status = "loading";
        return;
    } 

    if(stateChangeInfo.hasOwnProperty("status") && (tab.status === "complete")) {
    	if(tabsInfo[tabId].status === "loading") {
    		tabsInfo[tabId].status = "complete";
    		completedLoadingURLInCurrentTab(tabId, tab.url, tabsInfo[tabId].previousCompleteUrl);
    		return;
    	} 
    	if(tabsInfo[tabId].status === "complete") {
    		if(tabsInfo[tabId].previousCompleteUrl === tab.url) {
    			return;
    		}
    		completedLoadingURLInCurrentTab(tabId, tab.url, tabsInfo[tabId].previousCompleteUrl);
    		return;
    	}
    }

    if(stateChangeInfo.hasOwnProperty("status") && (tab.status === "loading") && (tabsInfo[tabId].status === "complete")) {
    	return;
    }

    if(stateChangeInfo.hasOwnProperty("status") ) {
    	if((tab.status === "complete") && (tab.url === "about:newtab") && tabsInfo[tabId].loadingUrl === undefined ) {
    		tabsInfo[tabId].status = "complete";
    		completedLoadingURLInCurrentTab(tabId, tab.url, tabsInfo[tabId].previousCompleteUrl);
    		return;
    	}
    	return;
    }
});

// listens for the content script from the host page to say when the user has completed the motion with device, resets the extension timer and resets glitches
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.hostMsg == "reset") {
		console.log('message from host page received');		
		sendResponse({extMsg: "background script has received the request!"});
		workingTracker = new Date();
		timeWorkingStart = workingTracker.getTime();
	}
});
