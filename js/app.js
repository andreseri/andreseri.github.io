var friends = [];

function Friend(_name) {
	this.name = _name;
	this.next = null;
}

function getFriends () {

	var arr = document.getElementsByName('friend');
	for (var i = 0; i < arr.length; i++) {
		friends[i] = new Friend(arr[i].value);
	};

	console.log(friends);

	shuffleFriends();
	sortFriends();
}

function shuffleFriends () {
	for(var j, x, i = friends.length; i; j = Math.floor(Math.random() * i), x = friends[--i], friends[i] = friends[j], friends[j] = x);
	console.log(friends);
}

function sortFriends () {
	for (var i = 0; i < friends.length - 1; i++) {
		friends[i].next = friends[i + 1].name;
	};
	friends[friends.length-1].next = friends[0].name;
	console.log(friends);
}

function addFriend () {
	var newFriend = document.createElement("div");
	newFriend.innerHTML = "<div class=\"col s6\"><div class=\"input-field\"><input type=\"text\" placeholder=\"Name\" name=\"friend\"></div></div>"
	newFriend.className = "row";	
	document.getElementById('friends').appendChild(newFriend);
}