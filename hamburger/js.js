var hamburger = false;
document.getElementById('animated').addEventListener('click', function(e){
	console.log(this.children)
	var bars = this.children;
	if (!hamburger) {
		bars[0].classList.remove('upLeftFlat')
		bars[1].classList.remove('reappear')
		bars[2].classList.remove('downRightFlat')
		
		bars[0].classList.add('rotateRight')
		bars[1].classList.add('disolve')
		bars[2].classList.add('rotateLeft')
		hamburger = true
	}else{
		bars[0].classList.add('upLeftFlat')
		bars[1].classList.add('reappear')
		bars[2].classList.add('downRightFlat')


		bars[0].classList.remove('rotateRight')
		bars[1].classList.remove('disolve')
		bars[2].classList.remove('rotateLeft')


	
		hamburger = false
	}

}, true)