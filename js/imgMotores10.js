var SVG_010 = Snap(560,380).attr({
	display: "block",
	marging: "auto"
});
/*Piezas polares*/
var elipse01 = SVG_010.ellipse(140,140,50,80).attr({
		fill: "#b22222",
		stroke: "none"});
	rectangulo01 = SVG_010.rect(0,100,100,80).attr({
		fill: "#b22222",
		stroke: "none"});
	elipse02 = SVG_010.ellipse(420,140,50,80).attr({
		fill: "#4682b4",
		stroke: "none"});
	rectangulo02 = SVG_010.rect(460,100,100,80).attr({
		fill: "#4682b4",
		stroke: "none"});
	circulo01 = SVG_010.circle(280,140,160).attr({
		fill: "white",
		stroke: "none"});
	texto01 = SVG_010.text(100,140,"N").attr({
		font: '18px Arial',
		"text-anchor":"middle",
		"dominant-baseline":"middle",
		fill: "white"});
	texto01 = SVG_010.text(460,140,"S").attr({
		font: '18px Arial',
		"text-anchor":"middle",
		"dominant-baseline":"middle",
	fill: "white"});
/*Rotor*/
var Rotor01 = SVG_010.circle(280,140,100).attr({
	fill: "lightgray",
	stroke: "black",
	strokeWidth: 1
});
var Rotor02 = SVG_010.circle(280,140,25).attr({
	fill: "darkgray",
	stroke: "black",
	strokeWidth: 1
});
var Rotor03 = SVG_010.circle(280,140,5).attr({
	fill: "black",
	stroke: "black",
	strokeWidth: 1
});
/*Bobinado del rotor*/
var flechaArriba = SVG_010.path("M 190 140 l 0 -60 l -5 20 l 10 0 l -5 -20").attr({
	fill: "black",
	stroke: "black",
	strokeWidth: 1
})
var bobinaRotorIzquierda = SVG_010.circle(190,140,10).attr({
	fill: "white",
	stroke: "black",
	strokeWidth: 1
});
var puntaRotorIzquierda = SVG_010.circle(190,140,5).attr({
	fill: "black",
	stroke: "none"
});
var rotorIzquierda = SVG_010.g(flechaArriba,bobinaRotorIzquierda,puntaRotorIzquierda);
var flechaAbajo = SVG_010.path("M 370 150 l 0 60 l -5 -20 l 10 0 l -5 20").attr({
	fill: "black",
	stroke: "black",
	strokeWidth: 1
});
var bobinaRotorDerecha = SVG_010.circle(370,140,10).attr({
	fill: "white",
	stroke: "black",
	strokeWidth: 1
});
var cruzRotorDerecha = SVG_010.path("M360 140 l 20 0 m -10 -10 l 0 20").attr({
	fill: "white",
	stroke: "black",
	strokeWidth: 1,
	transform: "r45,370,140"
});
var rotorDerecha = SVG_010.g(flechaAbajo,bobinaRotorDerecha,cruzRotorDerecha);
/*Lineas de campo magnético*/
var lineaCampo01 = SVG_010.path("M 120 140 l 320 0 l -20 -5 l 0 10 l 20 -5").attr({
	fill: "orange",
	stroke: "orange"
});
var prueba = "M " + (280 - Math.sqrt(Math.pow(160,2)-Math.pow(30,2))) + " " + 110 + "l " + (2*Math.sqrt(Math.pow(160,2)-Math.pow(30,2))) + " 0" + "l -20 -5 l 0 10 l 20 -5";
var lineaCampo01 = SVG_010.path(prueba).attr({
	fill: "orange",
	stroke: "orange"
});
var prueba = "M " + (280 - Math.sqrt(Math.pow(160,2)-Math.pow(60,2))) + " " + 80 + "l " + (2*Math.sqrt(Math.pow(160,2)-Math.pow(60,2))) + " 0" + "l -20 -5 l 0 10 l 20 -5";
var lineaCampo01 = SVG_010.path(prueba).attr({
	fill: "orange",
	stroke: "orange"
});
var prueba = "M " + (280 - Math.sqrt(Math.pow(160,2)-Math.pow(30,2))) + " " + 170 + "l " + (2*Math.sqrt(Math.pow(160,2)-Math.pow(30,2))) + " 0" + "l -20 -5 l 0 10 l 20 -5";
var lineaCampo01 = SVG_010.path(prueba).attr({
	fill: "orange",
	stroke: "orange"
});
var prueba = "M " + (280 - Math.sqrt(Math.pow(160,2)-Math.pow(60,2))) + " " + 200 + "l " + (2*Math.sqrt(Math.pow(160,2)-Math.pow(60,2))) + " 0" + "l -20 -5 l 0 10 l 20 -5";
var lineaCampo01 = SVG_010.path(prueba).attr({
	fill: "orange",
	stroke: "orange"
});
/*Bobinado del estator*/
var path05 = SVG_010.path("M 10 340 l 0 -160 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 180 l 390 0 l 0 -100 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 80 a 5 5 0 1 0 10 0 m 0 -80 a 5 5 0 1 1 10 0 l 0 240 " ).attr({
	fill: "none",
	stroke: "black",
	strokeWidth: 2
});
var texto01 = SVG_010.text(10,342,"F").attr({
	font: '18px Arial',
	"text-anchor":"middle",
	"dominant-baseline":"hanging"
});
var texto01 = SVG_010.text(540,342,"N").attr({
	font: '18px Arial',
	"text-anchor":"middle",
	"dominant-baseline":"hanging"
});
var path06 = SVG_010.path("M 290 280 l -20 -5 l 0 10 Z").attr({
	fill: "black",
	stroke: "none",
});
var texto01 = SVG_010.text(280,287,"I").attr({
	font: '18px Arial',
	"text-anchor":"middle",
	"dominant-baseline":"hanging"
});
/*Flechas*/


var ruta1 = SVG_010.path("M 190 140 a 90 90 0 0 1 " + [90-45*Math.sqrt(2)] + " " + [-45*Math.sqrt(2)]).attr({
	fill: "none",
	stroke: "none"
});
var ruta2 = SVG_010.path("M 370 140 a 90 90 0 0 1 " + [-90+45*Math.sqrt(2)] + " " + [45*Math.sqrt(2)]).attr({
	fill: "none",
	stroke: "none"
});


tamanoRuta1 = Snap.path.getTotalLength(ruta1);
tamanoRuta2 = Snap.path.getTotalLength(ruta2);

Snap.animate(0,tamanoRuta1,function(step) {
	moveToPoint = Snap.path.getPointAtLength(ruta1,step);
	x = moveToPoint.x-190;
	y = moveToPoint.y-140;
	rotorIzquierda.transform("translate(" + x + "," + y + ")");
	},3000, mina.easeout ,function(){});
Snap.animate(0,tamanoRuta2,function(step) {
		moveToPoint = Snap.path.getPointAtLength(ruta2,step);
		x = moveToPoint.x-370;
		y = moveToPoint.y-140;
		rotorDerecha.transform("translate(" + x + "," + y + ")");
	},3000, mina.easeout ,function(){});


