/*
	Alex Klibisz, alexklibisz.github.io, 02/17/2015
*/

var max = 4000000, evenSum = 0;
var fib = 0, n0 = 0, n1 = 1;

while(fib < max) {
	fib = n0 + n1;
	n0 = n1;
	n1 = fib;
	if((fib) % 2 == 0) {
		evenSum += fib;	
	}
}

console.log(evenSum);