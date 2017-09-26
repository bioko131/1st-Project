// Firebase INIT
var config = {
    apiKey: "AIzaSyDuLnrQSY0AwQnve9SeGKdvajKR1Cf4vT0",
    authDomain: "mijosi-1505956805893.firebaseapp.com",
    databaseURL: "https://mijosi-1505956805893.firebaseio.com",
    projectId: "mijosi-1505956805893",
    storageBucket: "mijosi-1505956805893.appspot.com",
    messagingSenderId: "178421641746"
};
firebase.initializeApp(config);

// Database
var database = firebase.database();

// Variables for grabbing search result info (venue, lat/lng, etc.)
var venueName = $("#employee-name-input").val().trim();
var venueLat = $("#role-input").val().trim();
var venueLng = ($("#start-input").val().trim(), "DD/MM/YY").format("X");

// Info for Search Results
var newResult = {
    venue: venueName,
    lat: venueLat,
    lng: venueLng,
};

// Pushing to Firebase	
database.ref().push(newResult);
	console.log(newResult);

