// 1. Click event
document.getElementById('link1').addEventListener('click', function() {
	alert('Link clicked!');
});

// 2. Mouseover event
document.getElementById('btn1').addEventListener('mouseover', function() {
	this.style.backgroundColor = '#0062cc';
});

document.getElementById('btn1').addEventListener('mouseout', function() {
	this.style.backgroundColor = '#007bff';
});

// 3. Input event
document.getElementById('input1').addEventListener('input', function() {
	console.log('Input value changed: ' + this.value);
});

// 4. Change event
document.getElementById('select1').addEventListener('change', function() {
	console.log('Selected value: ' + this.value);
});

// 5. Double click event
document.getElementById('btn2').addEventListener('dblclick', function() {
	alert('Button double clicked!');
});

// 6. Focus event
document.getElementById('input2').addEventListener('focus', function() {
	this.style.backgroundColor = '#f5f5f5';
});

document.getElementById('input2').addEventListener('blur', function() {
	this.style.backgroundColor = '#fff';
});

// 7. Resize event
document.getElementById('btn3').addEventListener('click', function() {
	window.addEventListener('resize', function() {
		console.log('Window resized!');
	});
});
