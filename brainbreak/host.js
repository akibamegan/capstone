console.log('script for the host page is running!');

var userID = prompt("Enter a unique name or ID. It must match the name you enter on your mobile device!");

var y = setInterval(check, 500);

function check() {
	var wrapper = document.querySelector('.Wrapper');
	var users = wrapper.querySelectorAll('.NameText');
	var i;
	var target = "rgb(57, 198, 57)";
	
	for(i = 0; i < users.length; i++) {
		console.log('current users: ' + users[i].innerText);
		console.log('user id entered: ' + userID);
		if(users[i].innerText == userID) {
			//correct User, check for completion
			console.log('match found');
			var focusUser = wrapper.querySelector('.User');
			var style = focusUser.style.backgroundColor;
			console.log(style);
			if(style === target) {
				console.log('mobile device has detected enough movement for the chrome extension to reset!');
				clearInterval(y);
				chrome.runtime.sendMessage({hostMsg: "reset"}, function(response) {
					console.log(response.extMsg);
				});
			}
		}
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	console.log(request.extMsg);
});