function changeRange(){
	// get color values and convert to integer
	var red = parseInt(document.getElementById('r').value);  
	var green = parseInt(document.getElementById('g').value); 
	var blue = parseInt(document.getElementById('b').value); 

	//generate color
	var color = '#' + hex(red) + hex(green) + hex(blue);

	//change background color and name hex color
	document.body.style.backgroundColor = color;
	
	document.getElementById('hex-label').innerText = color;
	document.getElementById('r-label').innerText = red;
	document.getElementById('g-label').innerText = green;
	document.getElementById('b-label').innerText = blue;

	if (red < 100 && green < 100 && blue < 100) {
		document.body.style.color = "#ffffff";
	} else {
		document.body.style.color = "#333333";
	}
}

function hex(v){
	var hex = v.toString(16);
	if(v < 16){
		hex = '0' + hex;
	}
	return hex;
}