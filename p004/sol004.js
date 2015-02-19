/*
	Alex Klibisz, alexklibisz.github.io, 02/19/2015
*/

var a, b, prod, maxPalindrome = 0;

for(a = 100; a < 1000; a++) {
	for(b = 100; b < a; b++) {
		prod = a*b;
		if(isPalindrome(prod) && prod > maxPalindrome) {
			maxPalindrome = prod;
		}
	}
}

console.log(maxPalindrome);

function isPalindrome(s) {
	s = s.toString();
	for(var i = 0; i < Math.ceil(s.length/2); i++) {
		if(s[i] != s[s.length - 1 - i]) return false;
	}
	return true;
}