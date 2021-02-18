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
            depth: geometry["2"],
		};
        //Add circles to markers. 
		var latlng = L.latLng(coords.latitude, coords.longitude);
        	var circle = L.circleMarker(latlng, {
			color:"#000000",
			fillColor: getColor(coords.depth),
			fillOpacity: 1,
			radius: magnitude * 4,
        
        //Add tool tip and pop up information to each earthquake marker
        }).bindPopup(
            `<h1>${place}</h1> <hr> <h3>Magnitude: ${magnitude}</h3> <h3>Depth: ${coords.depth}</h3>`
        )  
            .addTo(myMap);
		
            }
            
            //Add Legend 
        //     var legend = L.control({ position: "bottomright" });
        //     legend.onAdd = function (myMap) {
        //         var div = L.DomUtil.create("div", "info legend"),
        //             colors = ["green", "yellow", "orange", "red"],
        //             labels = ["< 1.0", "1.0 - 2.0", "2.0 - 3.0", "> 3.0"];
        //         div.innerHTML += "<h4 style = 'color: #fff'>Magnitude</h4>";
        
        //         // loop through our density intervals and generate a label with a colored square for each interval
        //         for (var i = 0; i < labels.length; i++) {
        //             div.innerHTML +=
        //                 '<i style="background:' +
        //                 colors[i] +
        //                 '">' +
        //                 labels[i] +
        //                 "</i> <br>";
        //         }
        //         return div;
        //     };
        //   legend.addTo(myMap);

                 
 });          
    //Assign colors 

        //   function getColor(mag) {
        //     var color = "";
        //     if (mag <= 1) {
        //         color = "green";
        //     } else if (mag > 1 && mag <= 2) {
        //         color = "yellow";
        //     } else if (mag > 2 && mag <= 3) {
        //         color = "orange";
        //     } else if (mag > 3) {
        //         color = "red";
        //     }
        //     return color;  
        // } 
        
        function getColor(depth) {
            var color = "";
            if (depth <= -10) {
                color = "green";
            } else if (depth > -10 && depth <= 10) {
                color = "yellow";
            } else if (depth > 10 && depth <= 30) {
                color = "orange";
            } else if (depth > 30 && depth <= 50) {
                color = "brown";
            }else if (depth > 50 && depth <= 70) {
                color = "purple";
            }else if (depth > 70 && depth <= 90) {
                    color = "red";   
            }else if (depth > 90) {
                color = "black";
            }
            console.log(depth,color)

                return color;
         
        }




    
