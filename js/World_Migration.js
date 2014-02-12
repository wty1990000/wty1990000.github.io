
var dayMap = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707',
			styleId: 102230});
			
var nightMap = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707',
			styleId: 33332});
		
var thunLink = '<a href="http://thunderforest.com">Thunerforest</a>',
	thunUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
	thunMap = L.tileLayer(thunUrl);

var map = L.map('map', {
			layers: [thunMap]
		})
		.setView([30,0], 3);
		


		
var baseLayers = {
		"Day View": dayMap,
		"Night View": nightMap
	};
	
	
var largeInflows = new L.LayerGroup();
L.marker([35.86166,104.195397],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('China Top1 Inflow Popolation').addTo(largeInflows);
L.marker([45.943161,24.96676],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Romania Top2 Inflow Popolation').addTo(largeInflows);
L.marker([51.919438,19.145136],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Poland Top3 Inflow Popolation').addTo(largeInflows);
L.marker([20.593684,78.96288],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('India Top4 Inflow Popolation').addTo(largeInflows);
L.marker([23.634501,-102.552784],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Mexico Top5 Inflow Popolation').addTo(largeInflows);
L.marker([12.879721,121.774017],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Philippines Top6 Inflow Popolation').addTo(largeInflows);
L.marker([37.09024,-95.712891],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('United States Top7 Inflow Popolation').addTo(largeInflows);
L.marker([51.165691,10.451526],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Germany Top8 Inflow Popolation').addTo(largeInflows);
L.marker([31.791702,-7.09262],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('Morocco Top9 Inflow Popolation').addTo(largeInflows);
L.marker([55.378051,-3.435973],{icon: L.AwesomeMarkers.icon({icon: 'coffee@2x', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('United Kingdom Top10 Inflow Popolation').addTo(largeInflows);

var largeOutflows = new L.LayerGroup();
L.marker([34.86166,105.195397], {title: 'China', opacity: 0.8}).bindPopup('Top1 Outflow Popolation').addTo(largeOutflows);
L.marker([50.919438,20.145136], {title: 'Poland', opacity: 0.8}).bindPopup('Top2 Outflow Popolation').addTo(largeOutflows);
L.marker([44.943161,25.96676], {title: 'Romania', opacity: 0.8}).bindPopup('Top3 Outflow Popolation').addTo(largeOutflows);
L.marker([36.09024,-96.712891], {title: 'United States', opacity: 0.8}).bindPopup('Top4 Outflow Popolation').addTo(largeOutflows);
L.marker([50.165691,11.451526], {title: 'Germany', opacity: 0.8}).bindPopup('Top5 Outflow Popolation').addTo(largeOutflows);
L.marker([45.227638,3.213749], {title: 'France', opacity: 0.8}).bindPopup('Top6 Outflow Popolation').addTo(largeOutflows);
L.marker([19.593684,79.96288], {title: 'India', opacity: 0.8}).bindPopup('Top7 Outflow Popolation').addTo(largeOutflows);
L.marker([40.87194,13.56738], {title: 'Italy', opacity: 0.8}).bindPopup('Top8 Outflow Popolation').addTo(largeOutflows);
L.marker([54.378051,-4.435973], {title: 'United Kingdom', opacity: 0.8}).bindPopup('Top9 Outflow Popolation').addTo(largeOutflows);
L.marker([41.733883,26.48583], {title: 'Bulgaria', opacity: 0.8}).bindPopup('Top10 Outflow Popolation').addTo(largeOutflows);


var overlays = {
	"Show Top 10 Largest Inlows Countries": largeInflows,
	"Show Top 10 Largest Outlows Countries": largeOutflows
	};

L.control.layers(baseLayers,overlays).addTo(map);
		
//add search box to the map	
var osmGeocoder = new L.Control.OSMGeocoder({
		//collapsed: false,
		position: 'bottomright',
		text: 'Country Search'
	});
	map.addControl(osmGeocoder);

//load local file	
var style = {color:'red', opacity: 1.0, fillOpacity: 1.0, weight: 2, clickable: false};
		L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open"></i>';
		L.Control.fileLayerLoad({
			fitBounds: true,
			layerOptions: {style: style,
			pointToLayer: function (data, latlng) {
		return L.circleMarker(latlng, {style: style});
		}},
	}).addTo(map);	

//add draw features
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
edit: {
featureGroup: drawnItems
}
});

map.addControl(drawControl);
map.on('draw:created', function (e) {
var type = e.layerType,
layer = e.layer;
drawnItems.addLayer(layer);
});
	

//choropleth map functions begin
var selectnumber;

function handleSelect(myForm) 
{
 
    selectnumber=myForm.numberList.selectedIndex;
  
    function getColor(d) {
    return d > 200 ? '#7a0177' :
           d > 100 ? '#ae017e' : 
           d > 50  ? '#dd3497' :
           d > 10  ? '#f768a1' :
           d > 2   ? '#fa9fb5' :
           d > 1   ? '#fcc5c0' :
           d > 0.1 ? '#feebe2' :
                     '#E0E0E0';
}

    function style(feature) {
    return {
        fillColor: getColor(feature.properties.pop[selectnumber]),
        weight: 2,
        opacity: 1,
        color: '#C0C0C0',
        dashArray: '',
        fillOpacity: 0.7
    };
}
var geojson;

	function highlightFeature(e) {
		var layer = e.target;
	
	info.update(layer.feature.properties);
	
		layer.setStyle({
			weight: 4,
			color: '#FFFF00',
			dashArray: '',
			fillOpacity: 0.7
		});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}

}

	

	function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

	function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}

	function onEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: zoomToFeature
			});
		}

		geojson = L.geoJson(countriesData, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(map);

		map.attributionControl.addAttribution('Migration data &copy; <a href="http://www.oecd.org/">OECD</a>');
}



	var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
			this._div.innerHTML = '<h4>World Migration Population</h4>' +  (props ?
				'<b>' + props.name + '</b><br />' + props.pop[selectnumber] + ' thousand people flow'
				: 'Hover over a country');
		};

		


	function getColor(d) {
    return d > 200 ? '#7a0177' :
           d > 100 ? '#ae017e' : 
           d > 50  ? '#dd3497' :
           d > 10  ? '#f768a1' :
           d > 2   ? '#fa9fb5' :
           d > 1   ? '#fcc5c0' :
           d > 0.1 ? '#feebe2' :
                     '#E0E0E0';
		}

	info.addTo(map);


//add legend for choropleth map
	var legend = L.control({position: 'bottomright'});

		legend.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 0.1, 1, 2, 10, 50, 100, 200],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};

		legend.addTo(map);

		
//add sidebar
var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left'
});
    map.addControl(sidebar);

	setTimeout(function () {
		sidebar.show();
	}, 500);

var marker = L.marker([30,0],{icon: L.AwesomeMarkers.icon({icon:'info', prefix: 'fa', markerColor: 'green'}) }).bindPopup('Click me to see the sidebar ^o^').addTo(map).on('click', function () {
	sidebar.toggle();
});

	map.on('click', function () {
		sidebar.hide();
	})

	sidebar.on('show', function () {
		console.log('Sidebar visible.');
	});

	sidebar.on('hide', function () {
		console.log('Sidebar hidden.');
	});

	L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
		console.log('Close button clicked.');
	});	

