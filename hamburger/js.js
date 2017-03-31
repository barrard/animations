document.body.addEventListener('onmousemove', function(e){
	console.log('mouse move')
	console.log(e)
})


function rainbowBoxShadow(elId, color){
	var el = elId
	console.log(color.length)
	if (color.length<0)return
	var color = color
	var el = document.getElementById(el)
	var boxShadowString='';
	for(var x = 0; x<color.length;x++){
		var thinkness = x+1
		var border = thinkness+'px '+thinkness+'px 0px 0px '+color[x]
		boxShadowString+=border
		if(x+1 !== color.length) boxShadowString+=','
	}
	console.log(boxShadowString)
	el.style.boxShadow=boxShadowString
}
	// 	1px 1px 0px 0px #ffdf32,
	// 2px 2px 0px 0px #ffe34c,
	// 3px 3px 0px 0px #ffe766,
	// 4px 4px 0px 0px #ffeb7f,
	// 5px 5px 0px 0px #ffef99,
	// 6px 6px 0px 0px #fff3b2,
	// 7px 7px 0px 0px #fff7cc,
	// 8px 8px 0px 0px #fffbe5,
	// 9px 9px 0px 0px #ffffff;


var reverseShades = ["#000000", "#0d0207", "#1a040f", "#270616", "#35081e", "#420a25", "#4f0c2d", "#5d0e34", "#6a103c", "#771243", "#85144b"]

var colorPallet = ['#85144b','#912b5d','#9d426e','#a95a81','#b57293','#c289a5','#cea1b7','#dab8c9','#e6d0db','#f2e7ed','#ffffff']
var combo = reverseShades.concat(colorPallet)
// var rainbow1 = rainbowBoxShadow('rainbow1', combo)


var navyColors = [
'#001f3f',
'#001b38',
'#001832',
'#00152c',
'#001225',
'#000f1f',
'#000c19',
'#000912',
'#00060c',
'#000306',
'#000000',
'#001f3f',
'#193552',
'#324b65',
'#4c6278',
'#66788b',
'#7f8f9f',
'#99a5b2',
'#b2bbc5',
'#ccd2d8',
'#e5e8eb',
'#ffffff']
// var rainbow2 = rainbowBoxShadow('rainbow2', navyColors)

var tealColors=[
'#7fdbff',
'#72c5e5',
'#65afcc',
'#5899b2',
'#4c8399',
'#3f6d7f',
'#325766',
'#26414c',
'#192b33',
'#0c1519',
'#000000',
'#7fdbff',
'#8bdeff',
'#98e2ff',
'#a5e5ff',
'#b2e9ff',
'#bfedff',
'#cbf0ff',
'#d8f4ff',
'#e5f7ff',
'#f2fbff',
'#ffffff'
]
// var rainbow3 = rainbowBoxShadow('rainbow3', tealColors)



document.getElementsByClassName('bulls-eye')[0].addEventListener('click', function(){
	this.classList.toggle('outer-ring')
})



var hamburger = true;
document.getElementById('animated').addEventListener('click', function(e){
	console.log(this.children)
	var bars = this.children;
	var nav = document.getElementsByClassName('main-nav')[0]
	if (hamburger) {
		bars[0].classList.remove('upLeftFlat')
		bars[1].classList.remove('reappear')
		bars[2].classList.remove('downRightFlat')
		
		bars[0].classList.add('rotateRight')
		bars[1].classList.add('disolve')
		bars[2].classList.add('rotateLeft')
		hamburger = false
		//open main-nav
		nav.classList.add('open-nav')
	}else{
		bars[0].classList.add('upLeftFlat')
		bars[1].classList.add('reappear')
		bars[2].classList.add('downRightFlat')


		bars[0].classList.remove('rotateRight')
		bars[1].classList.remove('disolve')
		bars[2].classList.remove('rotateLeft')


	
		hamburger = true
		nav.classList.remove('open-nav')

	}

}, true)


var dropDownBtnEl = document.getElementsByClassName('dropDownBtn')[0];
dropDownBtnEl.addEventListener('click', function(){
	this.classList.toggle('activeDrop')
}, false)