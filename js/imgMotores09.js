var SVG_010 = Raphael("container",350,250);

var pulgar = SVG_010.path("M 150 150 l 0,-100 l -5 30 l 10 0 l -5 -30").attr({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1
});

var indice = SVG_010.path("M 150 150 l 100 0 l -30 -5 l 0 10 l 30 -5").attr({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1
});
var pulgar = SVG_010.path("M 150 150 l 100 0 l -30 -5 l 0 10 l 30 -5")
	.attr({
		fill: 'black',
		stroke: 'black',
		strokeWidth: 1
	});
pulgar.transform('r135,150,150');
var circulo = SVG_010.circle(150,150,20).attr({
	fill: 'white',
	stroke: 'black',
	strokeWidth: 1
});
var text = SVG_010.text(150,40,'Pulgar [F]')
	.attr({
		font: '18px Arial',
		"text-anchor":"middle"
	});
var text = SVG_010.text(260,150,'Indice [B]')
	.attr({
		font: "18px Arial",
		"text-anchor":"start",
		"dominant-baseline":"middle"
	});
var text = SVG_010.text(72,228,'Corazón [I]')
	.attr({
		font: '18px Arial',
		"text-anchor":"middle",
		"dominant-baseline":"hanging"
	});