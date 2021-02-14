// Create map
var myMap = L.map("map", {
	center: [37.09, -95.71],
	zoom: 5,
});

// Create the tile layer that will be the background of the world map displaying earthquakes
L.tileLayer(
	"https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
		"access_token=pk.eyJ1IjoidmFyc2hhcmFtYWNoIiwiYSI6ImNqbnhyeGJsejAzaXgza28wcjRhNHNjMm0ifQ.H9CPMe-YN9zMVYFJIdB4aA"
).addTo(myMap);

// JSON link
//var API_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var link =
	"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(link, function (data) {
	var features = data["features"];
	for (var i = 0; i < features.length; i++) {
		var geometry = features[i]["geometry"]["coordinates"];
		var magnitude = features[i]["properties"]["mag"];
		var place = features[i]["properties"]["place"];
		var coords = {
			longitude: geometry["0"],
			latitude: geometry["1"],
            depth: geometry["1"],
		};