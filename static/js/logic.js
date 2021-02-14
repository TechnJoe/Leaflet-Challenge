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