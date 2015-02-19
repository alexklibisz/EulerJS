/*
	Alex Klibisz, alexklibisz.github.io, 02/19/2015

	relevant sources: http://stackoverflow.com/questions/7958292/mimicking-sets-in-javascript
*/
var a, b, x;

var unique = {}; //using a JS object as a pseudo-set

for(a = 2; a < 101; a++) {
	for(b = 2; b < 101; b++) {
		x = Math.log(Math.pow(a, b));
		console.log(x);
		if(!(x in unique)) {
			unique[x] = true;
		}
	}
}

//returning the number of keys in the object
console.log(Object.keys(unique).length);