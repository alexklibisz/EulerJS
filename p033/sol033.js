/*If the product of these four fractions is given 
in its lowest common terms, find the value of the 
denominator. (100) */

var n, d, f1 = {}, f2 = {}, t  = {}, q1, q2;

t = { n: 1, d: 1 };

for(d = 11; d < 100; d++) {
	for(n = 11; n < d; n++) {
		if(d%10 === 0 && n%10 === 0) continue;
		f1 = {n: n, d: d};
		f2 = {n: n, d: d};

		cancel(f2);

		q1 = f1.n / f1.d;
		q2 = f2.n / f2.d;
		
		if((f1.n != f2.n) && (f1.d != f2.d) && (q1 === q2)) {
			console.log(f1.n + '/' + f1.d + ' = ' + f2.n + '/' + f2.d + ' = ' + q1);
			t.n *= f2.n;
			t.d *= f2.d;
		}
		
	}
}

console.log('Product: ' + t.n + '/' + t.d);
console.log('Reduced denominator: ' + t.d / t.n);

function cancel(f) {
	var i, j, a = '', b = '';
	f.n = f.n.toString();
	f.d = f.d.toString();
	a = f.n;
	b = f.d;
	for(i = 0; i < f.n.length; i++) {
		for(j = 0; j < f.d.length; j++) {
			if(f.n[i] === f.d[j]) {
				a = a.replace(f.n[i], "");
				b = b.replace(f.d[j], "");
			}
		}
	}
	f.n = a;
	f.d = b;
}