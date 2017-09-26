var map;
var service;
var infowindow;
var markers = [];

function initialize() {
    var austin = new google.maps.LatLng(30.307182,-97.755996 );

    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(30.307182,-97.755996 ),
        zoom: 12
    });





    service = new google.maps.places.PlacesService(map);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i].geometry.location);
        }

    }
}


$("#google-searchButton").on("click", function() {
    markers.forEach(function(marker) {

    setMap(null);
    });
    var request = {
        location: new google.maps.LatLng(30.307182,-97.755996 ),
        radius: '500',
        query: $("#google-input").val().trim()
    }
    service.textSearch(request, callback);
});

function createMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        mapTypeId: 'terrain'

    });

markers.push(marker);
}









// var google = {
//    maps: {
//        Marker: function() {

//        },
//        Animation: {
//            BOUNCE: ''
//        },
//        LatLng: function(lat, lng) {

//        }
//    }
// }

//  new google.maps.LatLng('lat',lng)

// function createObject(prop1, prop2, prop3) { // this = {}
//     this.prop1 = prop1 // this = {prop1: prop1}
//     this.prop2 = prop2 // this = {prop1: prop1, prop2: prop2}
//     this.prop3 = prop3 // this = {prop1: prop1, prop2: prop2, prop3: prop3}
//     // return this
// }

// function createObjectWithoutNew(prop1, prop2, prop3) {
//     return {prop1: prop1, prop2: prop2, prop3: prop3}
// }

// var b = createObjectWithoutNew('a', 'b', 'c')

// var a = new createObject('a', 'b', 'c') 

// a === b



// get the current location longitude and latitude ... how to get the current location from google 

// after we get the current location we pass the latitude and the longitude  in a function to search 
// for  places around the user location like beer places or parks depend on user input 
// (( we need to save the latitude and the longitude in a variable we need firebase in case the
// user refresh the page )) ...

//

// Mapquest API

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
