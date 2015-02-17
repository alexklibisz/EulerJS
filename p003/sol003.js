/*
	Alex Klibisz, alexklibisz.github.io, 02/17/2015
*/

var n = 600851475143;

console.log(maxPrimeFactor(n));

function maxPrimeFactor(n) {
	var root = Math.ceil(Math.sqrt(n));		//important to call ceil in JS
	for(var f = root; f > 1; f--) {
		if(isFactor(n, f) && isPrime(f)) {
			return f;
		}
	}
	return -1;
}

function isFactor(n, f) {
	return (n % f == 0);
}

function isPrime(n) {
	for(var i = 2; i < Math.sqrt(n); i++) {
		if(n % i == 0) return false;
	}
	return true;
}