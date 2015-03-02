/* Alex Klibisz 3/1/2015 */

var n, d, f1 = {}, f2 = {}, r  = {}, q1, q2;

//initialize the result fraction
r = { n: 1, d: 1 };

for(d = 11; d < 100; d++) {
	for(n = 11; n < d; n++) {
		//avoid trivial fractions - i.e. 10/20
		if(d%10 === 0 && n%10 === 0) continue;
		//keep two fraction objects, cancel the second
		f1 = {n: n, d: d};
		f2 = {n: n, d: d};

		cancel(f2);

		//quotients for comparison
		q1 = f1.n / f1.d;
		q2 = f2.n / f2.d;
		
		//canceled is equal to original, multiply the resulting fraction
		if((f1.n != f2.n) && (f1.d != f2.d) && (q1 === q2)) {
			console.log(f1.n + '/' + f1.d + ' = ' + f2.n + '/' + f2.d + ' = ' + q1);
			r.n *= f2.n;
			r.d *= f2.d;
		}
		
	}
}

//Print result
console.log('Product: ' + r.n + '/' + r.d);
console.log('Reduced denominator: ' + r.d / r.n);


//Eliminate the common digits in the numerator and denominator.
//Stored as new strings to avoid errors after removal of chars.
function cancel(f) {
	f.n = f.n.toString();
	f.d = f.d.toString();
	var a = f.n;
	var b = f.d;
	for(var i = 0; i < f.n.length; i++) {
		for(var j = 0; j < f.d.length; j++) {
			if(f.n[i] === f.d[j]) {
				a = a.replace(f.n[i], "");
				b = b.replace(f.d[j], "");
			}
		}
	}
	f.n = a;
	f.d = b;
}