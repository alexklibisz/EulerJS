/*
	Alex Klibisz, alexklibisz.github.io, 02/19/2015
*/

var n = 2, sum = 0;
for(n = 2; n < 200000; n++) {
	if(powerSum(n, 5) == n) {
		sum += n;
	}
}

console.log(sum);

function powerSum(n, p) {
	var i, sum = 0;
	n = n.toString();
	for(i = 0; i < n.length; i++) {
		sum += Math.pow(n[i], p);
	}
	return sum;
}