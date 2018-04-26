var rainBowShadow = document.getElementsByClassName('rainBowShadow')[0]
var incs = 100
var totalLengthCounter = 1000
var lengthCounter = 0
var Right = 200
var Left = -200
var pendullum = 0
var Swing = true
//1 black to red   0 ,0 ,0 => 255, 0, 0
while(lengthCounter < totalLengthCounter ){
	console.log('go')
	for (var r = 0; r<=255;r+=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		console.log(pendullum+'px '+lengthCounter+'px 0px rgb('+r+', 0, 0)')
		rainBowShadow.style.textShadow += pendullum+'px '+lengthCounter+'px 0px rgb('+r+', 0, 0)'
		console.log(rainBowShadow.style.textShadow)
	}
	//2 red to yellow  255 ,0 ,0 => 255, 255, 0
	for (var r = 0; r<=255;r+=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		console.log(', '+pendullum+'px '+lengthCounter+'px 0px rgb(255, '+r+', 0)')

		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb(255, '+r+', 0)'
		console.log(rainBowShadow.style.textShadow)

	}
	//3 yellow to green   255 ,255 ,0 => 0, 255, 0
	for (var r = 255; r>=0;r-=incs){
	lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb('+r+', 255, 0)'
	}
	//4 green to turquoise   0 ,255 ,0 => 0, 255, 255
	for (var r = 0; r<=255;r+=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb(0, 255, '+r+')'
	}
	//5 turquoise to blue   0 ,255 ,255 => 0, 0, 255
	for (var r = 255; r>=0;r-=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb(0, '+r+', 255)'
	}
	//6 blue to purple   0 ,0 ,255 => 255, 0, 255
	for (var r = 0; r<=255;r+=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}

		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb('+r+',0,  255)'
	}
	//7 purple  to white  255, 0, 255 => 255, 255, 255
	for (var r = 0; r<=255;r+=incs){
		lengthCounter++
		if(pendullum > Right){
			Swing = false
		}else if(pendullum < Left){
			Swing = true

		}
		if(Swing){
			pendullum++
		}else{
			pendullum--
		}
		console.log('Swing '+Swing)
		console.log('lengthCounter '+lengthCounter)
		// console.log(pendullum)
		console.log('pendullum '+pendullum)
		console.log('r '+r)
		rainBowShadow.style.textShadow += ', '+pendullum+'px '+lengthCounter+'px 0px rgb(255, '+r+',  255)'
	}
}




var dupText = document.getElementById('dupText')
dupText.addEventListener('input', function(){
	document.getElementsByClassName('duplicateSize')[0].innerHTML = this.value
	console.log(this.value)

}, false)



var rainbow = document.getElementsByClassName('rainbow')[0]
console.log('hi')
console.log('')
var incs = 10
//1 black to red   0 ,0 ,0 => 255, 0, 0
for (var r = 0; r<=255;r+=incs){
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba('+r+', 0, 0, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}


//2 red to yellow  255 ,0 ,0 => 255, 255, 0

for (var r = 0; r<=255;r+=incs){
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba( 255, '+r+', 0, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}
//3 yellow to green   255 ,255 ,0 => 0, 255, 0

for (var r = 255; r>=0;r-=incs){

	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba('+r+', 255, 0, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}

//4 green to turquoise   0 ,255 ,0 => 0, 255, 255
for (var r = 0; r<=255;r+=incs){
	
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba(0, 255, '+r+', 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}
//5 turquoise to blue   0 ,255 ,255 => 0, 0, 255

for (var r = 255; r>=0;r-=incs){
	
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba(0, '+r+', 255, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}
//6 blue to purple   0 ,0 ,255 => 255, 0, 255

for (var r = 0; r<=255;r+=incs){
	
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba('+r+',0,  255, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}
//7 purple  to white  255, 0, 255 => 255, 255, 255

for (var r = 0; r<=255;r+=incs){
	
	var colorLine = document.createElement('div')
	colorLine.classList.add('colorLine')
	colorLine.style.borderLeft='1px solid rgba(255, '+r+',  255, 1)'
	colorLine.style.display='inline-block'
	// colorLine.style.transform='rotate(90deg)'
// 
	rainbow.appendChild(colorLine)


}