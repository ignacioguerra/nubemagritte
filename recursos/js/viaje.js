const { API_ENDPOINT_URL } = config;

var paisaje;
var posicion = { latitud:0, longitud:0 };
var destino = { latitud:0, longitud:0 };

var aceleracion = 0.01;
var velocidadConstante = 0.0000055;
var velocidadRequerida = { x:0, y:0, componenteX:1, componenteY:1 };
var velocidad = { x:0, y:0 };
var geocoder;
var lugar;

var intervalo;
var intervaloActualizaDatos;
var frecuencia = 40;
var frecuenciaDatos = 5000;

function inicializar() {

	var opciones = {
		zoom: 17,
		navigationControl: false,
		mapTypeControl: false,
		noClear: false,
		scaleControl: false,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		backgroundColor:"#000000",
		disableDefaultUI:true,
	};

	paisaje = new google.maps.Map(document.getElementById('paisaje'), opciones);

	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function(position) {
			$.ajax( {
				url: API_ENDPOINT_URL,
				type: "POST",
				data: { accion : 1, latitud:position.coords.latitude, longitud:position.coords.longitude },
				dataType: "json",
				success:function(data)
				{
					if(data.success)
					{
						destino.latitud = position.coords.latitude;
						destino.longitud = position.coords.longitude;
					}
				}
			} );
		} );
	}

	geocoder = new google.maps.Geocoder();

	setTimeout(actualilzarDatos, frecuenciaDatos);
	setTimeout(posicionar, frecuencia);

	$("body").keypress(function(e) {
		if(e.which == 108 || e.which == 76) {
			geocoder.geocode( { 'latLng':lugar }, function(data, status) {
				if (status == google.maps.GeocoderStatus.OK) console.log(data[1].formatted_address);
				else console.log("Geocode was not successful for the following reason: " + status);
			} );
		}
	} );
}

function posicionar()
{


	if(posicion.latitud > destino.latitud) velocidadRequerida.y = -velocidadConstante * velocidadRequerida.componenteY;
	else if(posicion.latitud < destino.latitud) velocidadRequerida.y = velocidadConstante * velocidadRequerida.componenteY;
	else velocidadRequerida.y = 0;

	if(posicion.longitud > destino.longitud) velocidadRequerida.x = -velocidadConstante * velocidadRequerida.componenteY;
	else if(posicion.longitud < destino.longitud) velocidadRequerida.x = velocidadConstante * velocidadRequerida.componenteY;
	else velocidadRequerida.x = 0;

	velocidad.x += (velocidadRequerida.x - velocidad.x) * aceleracion;
	velocidad.y += (velocidadRequerida.y - velocidad.y) * aceleracion;
	posicion.latitud += velocidad.y;
	posicion.longitud += velocidad.x;

	lugar = new google.maps.LatLng(posicion.latitud, posicion.longitud);
	paisaje.setCenter(lugar);

	setTimeout(posicionar, frecuencia);
}

function actualizarVelocidad()
{
	if(Math.abs(destino.longitud) > Math.abs(destino.latitud))
	{
		velocidadRequerida.componenteX = 1;
		velocidadRequerida.componenteY = Math.abs(destino.latitud / destino.longitud);
	}
	else
	{
		velocidadRequerida.componenteY = 1;
		velocidadRequerida.componenteX = Math.abs(destino.longitud / destino.latitud);
	}
}

function actualilzarDatos()
{
	$.ajax( {
		url: API_ENDPOINT_URL,
		type: "POST",
		data: { accion : 2, latitud:posicion.latitud, longitud:posicion.longitud },
		dataType: "json",
		success:function(data)
		{
			if(data.success)
			{
				destino.latitud = data.result.destino.latitud;
				destino.longitud = data.result.destino.longitud;
				actualizarVelocidad();
			}
		}
	} );
	/*
	geocoder.geocode( { 'latLng':lugar }, function(data, status)
	{
		if (status == google.maps.GeocoderStatus.OK)
		{
			console.log(data[1].formatted_address);
		}
		else
		{
			console.log("Geocode was not successful for the following reason: " + status);
		}
	});
	*/
	setTimeout(actualilzarDatos, frecuenciaDatos);
}

function buscarDatos()
{
	$.ajax( {
		url: API_ENDPOINT_URL,
		type: "POST",
		data: { accion : 0 },
		dataType: "json",
		success:function(data)
		{
			if(data.success)
			{
				posicion.longitud = data.result.posicion.longitud;
				posicion.latitud = data.result.posicion.latitud;
				destino.longitud = data.result.destino.longitud;
				destino.latitud = data.result.destino.latitud;

				actualizarVelocidad();
				velocidad.x = velocidadRequerida.x;
				velocidad.y = velocidadRequerida.y;

				inicializar();
			}
		}
	} );
}

// google.maps.event.addDomListener(window, 'load', buscarDatos);
