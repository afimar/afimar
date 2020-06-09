var SVG_011 = Snap(1000,1000);
/*Linea alimentación*/
var LineaR = SVG_011.path("M 50 50 l 400 0 m -400 50 l 400 0 m -400 50 l 400 0 m -400 50 l 400 0").attr({
		fill: "black",
		stroke: "black",
		strokeWidth: 1});
	texto01 = SVG_011.text(50,50,"L1").attr({
		font: '18px Arial',
		"text-anchor":"end",
		"dominant-baseline":"middle",
		fill: "black"});
	texto01 = SVG_011.text(50,100,"L2").attr({
		font: '18px Arial',
		"text-anchor":"end",
		"dominant-baseline":"middle",
		fill: "black"});
	texto01 = SVG_011.text(50,150,"L3").attr({
		font: '18px Arial',
		"text-anchor":"end",
		"dominant-baseline":"middle",
		fill: "black"});
	texto01 = SVG_011.text(50,200,"PE").attr({
		font: '18px Arial',
		"text-anchor":"end",
		"dominant-baseline":"middle",
		fill: "black"});
var Linea01 = SVG_011.path("M 250 50 l 0 350 m 50 0 l 0 -300 m 50 50 l 0 250").attr({
		fill: "black",
		stroke: "black",
		strokeWidth: 1});
/*Fusible F1F*/
var fusibleR = SVG_011.rect(238.75,237.5,22.5,75).attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
		fusibleS = fusibleR.clone();
		fusibleS.transform("t50,0");
		fusibleT = fusibleR.clone();
		fusibleT.transform("t100,0");
/*Contactor*/
var M1R = SVG_011.path("M 250 450 l 0 -60").attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
		M1R.transform("r-15,250,450");
		M1S = M1R.clone();
		M1S.transform("t50,0 R-15,300,450");
		M1T = M1R.clone();
		M1T.transform("t100,0 R-15,350,450");
var Linea01 = SVG_011.path("M 250 450 l 0 100 m 50 0 l 0 -100 m 50 0 l 0 100").attr({
		fill: "black",
		stroke: "black",
		strokeWidth: 1});
/*Relé térmico F2F*/
var x1 = 250;
	y1 = 550;
var F1F00 = SVG_011.path("M" + x1 + " " + y1 + "l 0 12.5 l 25 0 l 0 25 l -25 0 l 0 12.5" + 
		"m 50 -50 l 0 12.5 l 25 0 l 0 25 l -25 0 l 0 12.5" + 
		"m 50 -50 l 0 12.5 l 25 0 l 0 25 l -25 0 l 0 12.5").attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
	F1F01 = SVG_011.path("M" + (x1-50) + " " + y1 + "l 200 0 l 0 50 l -200 0 Z").attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
/*Lineas F2F Motor*/
var Linea02 = SVG_011.path("M 250 600 l 0 175 m 50 0 l 0 -175 m 50 0 l 0 175").attr({
		fill: "black",
		stroke: "black",
		strokeWidth: 1});
/*Motor*/
var Rotor01 = SVG_011.circle(300,775,75).attr({
		fill: "white",
		stroke: "black",
		strokeWidth: 1});
var	Rotor02 = SVG_011.text(300,[775-0.6*18],"M").attr({
			font: '18px Arial',
			"text-anchor":"middle",
			"dominant-baseline":"middle",
			fill: "black"});
var	Rotor03 = SVG_011.text(300,[775+0.6*18],"3").attr({
			font: '18px Arial',
			"text-anchor":"middle",
			"dominant-baseline":"middle",
			fill: "black"});
	Motor = SVG_011.g(Rotor01,Rotor02,Rotor03);
/*Botones puesta en marcha*/
var Boton01 = SVG_011.circle(100,300,20).attr({
		fill: "red",
		stroke: "none",
		strokeWidth: 1});
	Boton02 = SVG_011.circle(100,300,25).attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
	BotonParo = SVG_011.g(Boton01,Boton02);
var Boton03 = SVG_011.circle(100,400,20).attr({
		fill: "green",
		stroke: "none",
		opacity: 0.3,
		strokeWidth: 1});
	Boton04 = SVG_011.circle(100,400,25).attr({
		fill: "none",
		stroke: "black",
		strokeWidth: 1});
	BotonMarcha = SVG_011.g(Boton03,Boton04);
	
	Motor.animate({transform:"r-360 300 775)"},2000,mina.linear);
	
