 // varibales for map  and markers 
 // 

var map;
var markers = [];

//  Austin map (google maps )

function initialize() {
    var austin = new google.maps.LatLng(30.307182,-97.755996 );

    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(30.307182,-97.755996 ),
        zoom: 12
    });



 // servic call 

    service = new google.maps.places.PlacesService(map);
}
// call the function to make it work ar the begingning
initialize()


//  grt the results and the data from google map places 
// console log the result and the data 

function callback(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
              createMarker(results[i].geometry.location,);
            console.log(' pins info ',results);
              $("#displayGoogle").prepend('<div id=eventDiv[i]>' +
      '<button id=onClickEvent[i]>' +'<h5>'+ results[i].name + '</h5>' +
       '<p>'+ results[i].formatted_address+ '</p></div><br>')
        }

    }
}


$("#google-searchButton").on("click", function() {
    markers.forEach(function(marker) {
        marker.setMap(null);

    });
    var request = {
        location: new google.maps.LatLng(30.307182,-97.755996 ),
        radius: '500',
        query: $("#google-input").val().trim()
        // console.log(query)
    }
    service.textSearch(request, callback);
});

function createMarker(location, data) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        mapTypeId: 'terrain'
    });
    var infowindow = new google.maps.InfoWindow({
      content:data
    });
  
    // if (data) { 
        marker.addListener('click', function() {
            infowindow.open(event.venue_name, event.title);
        });
    
 

    markers.push(marker);
}

function getEventsByLocation(lat, lng) {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.eventful.com/json/events/search?app_key=FJj2tfhj2XNJM7Jb&location=${lat},${lng}&within=10`)
        .then(a => a.json())
        .then(function(response) {
            response.events.event.forEach(function(event) {
                console.log('inside request to eventful',event)
                displayEvent(event.venue_name, event.title)

                createMarker({lat: parseFloat(event.latitude), lng: parseFloat(event.longitude)}, event.description)

            })
        })
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
    console.log('inside success',crd)
    getEventsByLocation(crd.latitude, crd.longitude)
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);





// this function is for diplayig events on the pannel 

  function displayEvent (venue,title){
    // for ()
    console.log('inside displayEvent',event)
    $("#displayEvents").prepend('<div id=eventDiv>' +
      '<button id=onClickEvent>' +'<p>'+ title + '</p>' +
       '<p>'+ name + '</p></div><br/>');
  }

  $("#google-searchButton").on("click", displayEvents());