// JavaScript Document

var map;
var usuario = { latitud:-24.608257, longitud:-48.372164 };
var cazeneuve = { latitud:-34.608257, longitud:-58.372164 };
var centro = { latitud:-34.608257, longitud:-58.372164 };
var posicion = { latitud:0, longitud:0 };
var intervalo;
var velocidadLatitud;
var velocidadLongitud;
var marca;
var image = 'recursos/imagenes/nube.png';
var velocidad = 0.0000015;
var aceleracion = 0.01;
var velocidadActualLatitud = 0;
var velocidadFinalLatitud = 0;
var velocidadActualLongitud = 0;
var velocidadFinalLongitud = velocidad;

velocidadLatitud = Math.abs((usuario.latitud - centro.latitud) * 0.0000001);
velocidadLongitud = Math.abs((usuario.longitud - centro.longitud) * 0.0000001);
	
function initialize() {
	var myOptions = {
	zoom: 17,
	navigationControl: false,
	mapTypeControl: false,
	scaleControl: false,
	mapTypeId: google.maps.MapTypeId.SATELLITE
};

map = new google.maps.Map(document.getElementById('paisaje'), myOptions);

// Try HTML5 geolocation
if(navigator.geolocation) 
{
	navigator.geolocation.getCurrentPosition(function(position) {
		usuario.latitud = position.coords.latitude;
		usuario.longitud = position.coords.longitude;
		
		velocidadLatitud = 0.000009;//Math.abs((usuario.latitud - centro.latitud) * 0.0000001);
		velocidadLongitud = 0.000009;//Math.abs((usuario.longitud - centro.longitud) * 0.0000001);

		//var pos = new google.maps.LatLng(usuario.latitud, usuario.longitud);
		/*var infowindow = new google.maps.InfoWindow( { 
			map: map,
			position: pos,
			content: "Anoche acabé de construir la jaula para el obispo de Evreux, jugué con el gato Teodoro W. Adorno, y descubrí sobre el cielo de Cazeneuve una nube solitaria que me hizo pensar en un cuadro de René Magritte, La bataille de l'Argonne."
		} );*/
	
		//map.setCenter(pos);
	}, function() {
			handleNoGeolocation(true);
		} );
	} else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	}
		
	intervalo = setInterval("posicionar()", 10);
/*	var myLatLng = new google.maps.LatLng(centro.latitud, centro.longitud);
  marca = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });*/

}

function handleNoGeolocation(errorFlag) {
	if (errorFlag) {
		var content = 'Error: The Geolocation service failed.';
	} else {
		var content = 'Error: Your browser doesn\'t support geolocation.';
	}
	var options = {
		map: map,
		position: new google.maps.LatLng(cazeneuve.latitud, cazeneuve.longitud),
		content: content
	};

	//var infowindow = new google.maps.InfoWindow(options);
	map.setCenter(options.position);
}

function posicionar()
{
	if(centro.latitud > usuario.latitud) velocidadFinalLatitud = -velocidad;
	else if(centro.latitud < usuario.latitud) velocidadFinalLatitud = velocidad;
	
	if(centro.longitud > usuario.longitud) velocidadFinalLongitud = -velocidad;
	else if(centro.longitud < usuario.longitud) velocidadFinalLongitud = velocidad;
	/*
	var centroActual = map.getCenter();
	alert( centroActual.latitude)
	posicion.latitud = centroActual.coords.latitude + (centro.latitud - centroActual.coords.latitude) * 0.01;
	posicion.longitud = centroActual.coords.longitude + (centro.longitud - centroActual.coords.longitude) * 0.01;
	*/
	
//	marca.setMap(null);
	
 /* var myLatLng = new google.maps.LatLng(centro.latitud, centro.longitud);
  marca = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });*/
	velocidadActualLatitud += (velocidadFinalLatitud - velocidadActualLatitud) * aceleracion;
	velocidadActualLongitud += (velocidadFinalLongitud - velocidadActualLongitud) * aceleracion;
	
	centro.latitud += velocidadActualLatitud;
	centro.longitud += velocidadActualLongitud;
	var pos = new google.maps.LatLng(centro.latitud, centro.longitud);
	/*if(new Date().getTime() - tiempo.getTime() > espera)
	{
		var infowindow = new google.maps.InfoWindow( { 
			map: map,
			position: pos,
			content: fragmentos[contador++]
		} );
		tiempo = new Date();
		if(contador >= fragmentos.length) contador = 0;
	}
	*/
	map.setCenter(pos);
}

google.maps.event.addDomListener(window, 'load', initialize);