/*-------------------INTRO----------------------*/
var all  = document.querySelector('div.all-content');
var intro = document.querySelector('div.intro');
var body = document.querySelector('body');
var svg = document.querySelectorAll('svg');
var h1 = document.querySelector('h1');
var p  = document.querySelector('p');

window.setTimeout("reduct()", 2000);
window.setTimeout("display()", 2500);
window.setTimeout("opac()", 2830);

function reduct() {
	for (let i = 0; i < svg.length; i++) {
		svg[i].style.width = "5%";
		svg[i].style.margin = "0 8px";
		svg[i].style.top = "8px";
		body.style.background = "#fff";
		h1.style.display = "none";
		p.style.display = "none";
		intro.style.background = "rgba(255,255,255,0)";
	};
}

function display(){
	intro.style.opacity = "0"
	all.style.display = "block";
}

function opac(){
	intro.style.display = "none";
	all.style.opacity = "1";
}

/*----------------ONGLET-------------------*/

var onglet = document.querySelectorAll('.nav-bike a');
var page = document.querySelectorAll('section');

for ( let i = 0; i < onglet.length; i++ ){
	onglet[i].addEventListener('click', function() {
		for(var j = 0; j< onglet.length; j++){
			page[j].classList.remove('active');
			onglet[j].classList.remove('strong');
		}   
		onglet[i].classList.add('strong');
		page[i].classList.add('active');
	});
}

/*----------------logo link-------------------*/

var logoLink = document.querySelector('.logo-link');
var backHome = document.querySelector('.back-home');

logoLink.style.width = '40px';
window.setTimeout("spanner()", 5000);
window.setTimeout("logoMin()", 6000);

function spanner() {
	backHome.style.width = "0";
}	

function logoMin() {
	logoLink.style.width = '';	
}