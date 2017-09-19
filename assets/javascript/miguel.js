
//Eventful API key hQSxPV7TZCQgqHwx 

var APIkeyEventful = "hQSxPV7TZCQgqHwx";

var category; //Category will alaways change according to the user selection on the dropdown menu

var location; //This always going to be Austin

var time; //Time will always change according to the user selection on the dropdown menu

var queryEventfulURL = "http://eventful.com/events?q=" + category + "&l=" + location + "&t=" + time;



function show_alert()

{

  var oArgs = {

            app_key:"hQSxPV7TZCQgqHwx",

            id: "20218701",

            page_size: 25 ,

  };

  EVDB.API.call("/events/get", oArgs, function(oData) {

      // Note: this relies on the custom toString() methods below

    });

}



function show_alert2()

{

   var oArgs = {

      app_key: "hQSxPV7TZCQgqHwx",

      q: "music",

      where: "San Diego", 

      "date": "2013061000-2015062000",

      page_size: 5,

      sort_order: "popularity",

   };

   EVDB.API.call("/events/search", oArgs, function(oData) {

      // Note: this relies on the custom toString() methods below

    });

}

// Run Sample api searches <br><br>

// <input type="button" onclick="show_alert()" value="Query #1 " /> <br>

// <input type="button" onclick="show_alert2()" value="Query #2 " /> <br>