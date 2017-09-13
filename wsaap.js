$(document).ready(function() {
	// Llamada final
	var llamadafinal = true; // En false para desactivarlo
	var count = 0;
	// Tiempo respuesta
	var tmres = 2500;
	//var tmres = 0;
	$('#enviar').bind('click', function() {
		var mensaje = $('#msjaqui').val();
		if(mensaje!=''){
			$('#chat').append('<p class="yo">'+mensaje+horaspan+'</p>');
			$('#msjaqui').val('');
			setTimeout(function(){
				$('.nombre h1').removeClass('mt10');
				$('.nombre h2').html('escribiendo...');
				$('#chat p.yo span.hora').addClass('visto');
			},1500);
			setTimeout(function() {
				$('.nombre h2').html('en l&iacute;nea');
				$('#chat p.yo span.hora').addClass('vistoc');
				respuesta(count);
			}, tmres);
		}
	});
	$('#msjaqui').keyup(function(event) {
		if (event.keyCode == 13) {
			$('#enviar').click();
		}
	});
	// Avatar
	var avtimgs = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
	var avtimg = avtimgs[Math.floor(Math.random()*avtimgs.length)];
	// Nombre
	var nomswsp = ['Mia Gonzalez','Kiera Winters','Pau Gonzz','Angela Vargas','Rosii grey',];
	var nomwsp = nomswsp[Math.floor(Math.random()*nomswsp.length)];
	// Primer mensaje
	var msjs1 = [
		'Holii! Queres ver mi video hot ahora? <img class="emj" src="img/emoji/beso.png"/>',
		'Holaaa! A vos te iba a pasar mi video hot? <img class="emj" src="img/emoji/besos.png"/>',
		'Holis!!! Vos querias ver mi video hot? <img class="emj" src="img/emoji/diablo.png"/>'
	];
	var msj1 = msjs1[Math.floor(Math.random()*msjs1.length)];
	// Segundo mensaje
	var msjs2 = [
		'Justo me estoy yendo! Pasame tu numero y te agrego <img class="emj" src="img/emoji/triste.png"/>',
		'Me tengo que iiir! Perdon <img class="emj" src="img/emoji/angel.png"/>',
		'Me voy a dormir asi que te libero <img class="emj" src="img/emoji/vuelta.png"/>'
	];
	var msj2 = msjs2[Math.floor(Math.random()*msjs2.length)];
	// Tercer mensaje
	var msjs3 = [
		'Bajalo antes de que me vaya! <img class="emj" src="img/emoji/fantasma.png" style="margin-left:0"/> <img class="emj" src="img/emoji/fantasma.png"/>',
		'Plisss bajalo que ya me voy!!! <img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png"/>',
		'Lo bajaste ya?? <img class="emj" src="img/emoji/rush.png"/>'
	];
	var msj3 = msjs3[Math.floor(Math.random()*msjs3.length)];
	// Mensaje final
	var msjsf = [
		'Beso! <img class="emj" src="img/emoji/beso.png"/>',
		'<img class="emj emjf" src="img/emoji/beso.png"/><img class="emj emjf" src="img/emoji/beso.png"/>',
		'Nos vemos! <img class="emj" src="img/emoji/enamo.png"/>',
	];
	var msjf = msjsf[Math.floor(Math.random()*msjsf.length)];
	var mensajes = [
		'<a href="http://www.sexytubes.mobi/?sl=1053677-1b023&data1=Track1&data2=Track2" class="video"><span class="duracion">2:56</span></a>',
		msj2
	];
	var final = false;
	function respuesta(mensaje) {
		// Mensaje pegado
		if (count == 0) {
			setTimeout(function() {
				$('#chat').append('<p class="ella">'+msj3+horaspan+'</p>');
			}, tmres);
		}
		count = count + 1;
		// Mensaje final
		if(!final){
			if (count > mensajes.length) {
				setTimeout(function() {
					$('#chat').append('<p class="final">'+msjf+horaspan+'</p>');
					$('.nombre h1').addClass('mt10');
					$('.nombre h2').html('');
				}, tmres);
				setTimeout(function() {$('.llamada').addClass('llama');}, 10000);
				if(llamadafinal){setTimeout(function() {$('.llamada').addClass('llama');}, 10000);}
				final = true;
			} else {
				$('#chat').append('<p class="ella">'+mensajes[mensaje]+horaspan+'</p>');
			}
		}
	}
	// Hora
	var dt = new Date();
	var min = dt.getMinutes();
	if(min<10){min='0'+min;}else{min=min+'';}
	var hora = dt.getHours()+':'+min;
	var horaspan = '<span class="hora">'+hora+'</span>';
	$('.nombre h1,.wsptit h2').html(nomwsp);
	$('#avatarimg').attr('title',nomwsp);
	$('#avatarimg').attr('src','img/avatar/'+avtimg);
	$('.llamada').css('background-image','url(img/avatar/'+avtimg+')');
	$('#chat p').html(msj1+horaspan);
});