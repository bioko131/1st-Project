// var getURL = "https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=" + locOne + "&location=" + locTwo + "&location=" + locThree + "&location=" + locFour + "&location=" + locFive + "&location=" + locSix + "&location=" + locSeven + "&location=" + locEight + "&location=" + locNine + "&location=" + locTen + "&key=J1QaI4jjVKo2OqXJfOMydpJBrTudN95J";

L.mapquest.key = 'J1QaI4jjVKo2OqXJfOMydpJBrTudN95J';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
    center: [30.283748, -97.725979],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
});

// Variables for lat/lng of TM search results
var locOne = ""

// Function to drop pins for each result

// Info/Picture on click/mouseover