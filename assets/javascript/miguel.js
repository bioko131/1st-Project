function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      var x = document.getElementById("location");
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  var x = document.getElementById("location");
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
  var latlon = position.coords.latitude + "," + position.coords.longitude;


  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&latlong="+latlon,
    async:true,
    dataType: "json",
    success: function(json) {
               
                //console logging
                console.log(json);
                // console.log(json._embedded.events[0]._embedded.venues[0].location);
                // console.log(json._embedded.events[0]._embedded.venues[0].location.longitude);
                // console.log(json._embedded.events[0]._embedded.venues[0].location.latitude);       
                // console.log(queryURL);
                var e = document.getElementById("events");
                e.innerHTML = json.page.totalElements + " events found.";
                showEvents(json);
                initMap(position, json);
             },
    error: function(xhr, status, err) {
                console.log(err);
             }
  });

}

function showError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
  }
}


function showEvents(json) {
for(var i=0; i<json.page.size; i++) {
  $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
}
}

//
function initMap(position, json) {
var mapDiv = document.getElementById('map');
var map = new google.maps.Map(mapDiv, {
  center: {lat: position.coords.latitude, lng: position.coords.longitude},
  zoom: 10
});
for(var i=0; i<json.page.size; i++) {
  addMarker(map, json._embedded.events[i]);
}
}

function addMarker(map, event) {
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
  map: map
});
marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
console.log(marker);
}




getLocation();

//document ready beginning function
// $(document).ready(function(){
//Ticketmaster API DFUJxyXZDThL41qGAweQlOth8JI3vGsf

// url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=DFUJxyXZDThL41qGAweQlOth8JI3vGsf&articles=tmus&region=40&days=1&category=1605&latlong="+latlon,
// //var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=DFUJxyXZDThL41qGAweQlOth8JI3vGsf&keyword=music";

//Array of categories to choose on the dropdown menu
// var keyword = "";
// var results = 0;
// var when = 0;
// var queryURL = 

// function getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//       var x = document.getElementById("location");
//       x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

//   var x = document.getElementById("location");
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude; 
//   var latlon = position.coords.latitude + "," + position.coords.longitude;


//   $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&latlong="+latlon,
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 //console logging
//                 console.log(json);
//                 console.log(json._embedded.events[0]._embedded.venues[0].location);
//                 console.log(json._embedded.events[0]._embedded.venues[0].location.longitude);
//                 console.log(json._embedded.events[0]._embedded.venues[0].location.latitude);       
//                 console.log(queryURL);
//                 var e = document.getElementById("events");
//                 e.innerHTML = json.page.totalElements + " events found.";
//                 showEvents(json);
//                 initMap(position, json);
                
//              },
//     error: function(xhr, status, err) {
//                 console.log(err);
//              }
//   });



// function showError(error) {
//   switch(error.code) {
//       case error.PERMISSION_DENIED:
//           x.innerHTML = "User denied the request for Geolocation."
//           break;
//       case error.POSITION_UNAVAILABLE:
//           x.innerHTML = "Location information is unavailable."
//           break;
//       case error.TIMEOUT:
//           x.innerHTML = "The request to get user location timed out."
//           break;
//       case error.UNKNOWN_ERROR:
//           x.innerHTML = "An unknown error occurred."
//           break;
//   }
// }


// function showEvents(json) {
// for(var i=0; i<json.page.size; i++) {
//   $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
// }
// }


// function initMap(position, json) {
// var mapDiv = document.getElementById('map');
// var map = new google.maps.Map(mapDiv, {
//   center: {lat: position.coords.latitude, lng: position.coords.longitude},
//   zoom: 10
// });
// for(var i=0; i<json.page.size; i++) {
//   addMarker(map, json._embedded.events[i]);
// }
// }

// function addMarker(map, event) {
// var marker = new google.maps.Marker({
//   position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//   map: map
// });
// marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
// console.log(marker);
// }




// getLocation();

//Methods for on click function

// $("#event-search").on("click", function(event) {
  
//     event.preventDefault();
  
//   })

// });
  //Ticketmaster pulls lat and log, it is shwon on the results
  //when you click a result,on click from the list a functions grabs the lat and long and pushes it to a variable in jordan.js
  //
  
  
  //push location into variables[or arrays (Empty)], in order to display pin(s). same for venue and address, and some other random info
  //
