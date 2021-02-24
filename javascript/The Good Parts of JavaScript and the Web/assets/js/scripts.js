(function () {
	'use strict';

	var title = 'Challenges';

	// Challenges 1
	console.log(title + ' 1');

	function add(first, second) {
		return first + second;
	}
	function sub(first, second) {
		return first - second;
	}
	function mul(first, second) {
		return first * second;
	}

	function intentityf(x) {
		return function() {
			return x;
		}
	}

	var three = intentityf(3);

	three();

	// Challenges 2
	console.log(title + ' 2');
	function addf(first) {
		return function(second) {
			return first + second;
		}
	}

	console.log(addf(3)(4));
	console.log('----------------------');
	function liftf(fun) {
		 return function(first) {
		 	return function(second) {
		 		return fun(first, second);
			}
		}
	}

	console.log(liftf(mul)(5)(6));
	console.log('----------------------');
	function curry(fun, first) {
		return function(second) {
			return fun(first, second);
		}
	}

	console.log(curry(mul, 5)(6));
	console.log('----------------------');
	var inc = addf(1);
	console.log(inc(5));
	console.log('----------------------');
	var inc2 = liftf(add)(1);
	console.log(inc2(5));
	console.log('----------------------');
	var inc3 = curry(add, 1);
	console.log(inc3(5));
	console.log('----------------------');
	// Challenges 3
	console.log(title + ' 3');

	function twice(fun) {
		return function(first) {
			return fun(first, first);
		}
	}
	var doubl = twice(add);
	console.log(doubl(11));
	var square = twice(mul);
	console.log(square(11));
	console.log('----------------------');
	function reverse(fun) {
		return function(first, second) {
			return fun(second, first);
		}
	}

	var bus = reverse(sub);
	console.log(bus(3, 2));
	console.log('----------------------');
	function composeu(fun1, fun2) {
		return function(first) {
			return fun2(fun1(first));
		}
	}

	console.log(composeu(doubl, square)(5));
	console.log('----------------------');
	function composeb(fun1, fun2) {
		return function(first, second, third) {
			return fun2(fun1(first, second), third);
		}
	}
	console.log(composeb(add, mul)(2, 3, 7));
	console.log('----------------------');
	function limit(fun, limit) {
		return function (x, y) {
			if(limit >= 1) {
				limit -= 1;
				return fun(x, y);
			}
			return undefined;
		}
	}
	var add_ltd = limit(add, 1);
	console.log(add_ltd(3, 4));
	console.log(add_ltd(3, 4));

	// Challenges 4
	console.log(title + ' 4');

	function from(x) {
		return function() {
			var next = x;
			x += 1;
			return next;
		}
	}

	var index = from(0);
	console.log(index());
	console.log(index());
	console.log(index());
	console.log(index());
	console.log('----------------------');
	function to(start, to) {
		return function() {
			var beginning = start();
			if (beginning  < to) {
				return beginning;
			}
			return undefined;
		}
	}

	var index1 = to(from(1), 3);
	console.log(index1());
	console.log(index1());
	console.log(index1());
	console.log(index1());
	console.log(index1());
	console.log('----------------------');
	function fromTo(start, end) {
		return to(from(start), end);
	}

	var index2 = fromTo(0, 3);
	console.log(index2());
	console.log(index2());
	console.log(index2());
	console.log(index2());
	console.log('----------------------');
	function element(arr, gen) {
		if (gen === undefined) {
			gen = fromTo(0, arr.length);
		}
		return function() {
			var num = gen();
			if(arr[num] !== undefined) {
				return arr[num];
			}
			return undefined;
		}
	}
	var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
	console.log(ele());
	console.log(ele());
	console.log(ele());
	console.log('----------------------');
	var ele2 = element(['a', 'b', 'c', 'd']);
	console.log(ele2());
	console.log(ele2());
	console.log(ele2());
	console.log(ele2());
	console.log(ele2());
	console.log('----------------------');
	// Challenges 5
	console.log(title + ' 5');

	function collect(gen, arr) {
		return function() {
			var num = gen();
			if (num !== undefined) {
				arr.push(num);
			}
			return arr;
		}
	}

	var array = [],
		col = collect(fromTo(0, 2), array);

	console.log(col());
	console.log(col());
	console.log(col());
	console.log(array);
	console.log('----------------------');
	function filter(gen, bool) {
		return function() {
			var num;
			do {
				num = gen()
			} while(num !== undefined && !bool(num));
			return num;
		}
	}

	var fil = filter(fromTo(0, 5), function(value) { return (value % 3) === 0;});
	console.log(fil());
	console.log(fil());
	console.log(fil());
	console.log('----------------------');
	function concat(gen1, gen2) {
		var gen = gen1;
		return function () {
			var num = gen();
			if(num !== undefined) {
				return num;
			}
			gen = gen2;
			return gen();
		}
	}

	var con = concat(fromTo(0, 3), fromTo(0, 2));
	console.log(con());
	console.log(con());
	console.log(con());
	console.log(con());
	console.log(con());
	console.log(con());
	console.log('----------------------');
	// Challenges 6
	console.log(title + ' 6');

	function gensymf(prefix) {
		var counter = 0;
		return function () {
			counter += 1;
			return prefix + counter;
		}
	}

	var geng = gensymf("G"),
		genh = gensymf("H");

	console.log(geng());
	console.log(genh());
	console.log(geng());
	console.log(genh());
	console.log('----------------------');
	function gensymff(fun, num) {
		return function (prefix) {
			var value = num;
			return function() {
				value = fun(value);
				return prefix + value;
			}
		}
	}

	var gensymf1 = gensymff(inc, 0),
		geng1 = gensymf1("G"),
		genh1 = gensymf1("H");

	console.log(geng1());
	console.log(genh1());
	console.log(geng1());
	console.log(genh1());
	console.log('----------------------');
	function fibonacci(first, second) {
		var print;
		return function() {
			print = first;
			first = second;
			second = add(print, second);
			return print;
		}
	}

	var fib = fibonacci(0, 1);

	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log(fib());
	console.log('----------------------');
	// Challenges 7
	console.log(title + ' 7');

	function counter(start) {
		return {
			up: function() {
				start = add(start, 1);
				return start;
			},
			down: function() {
				start = sub(start, 1);
				return start;
			}
		}
	}

	var object = counter(10),
	up = object.up,
	down = object.down;

	console.log(up());
	console.log(down());
	console.log(down());
	console.log(up());

	console.log('----------------------');
	
	function revocable(func) {
		return {
			invoke: function() {
				return function(first, second) {
					if (func !== undefined) {
						return func(first, second);
					}
				}
			},
			revoke: function () {
				return func = undefined;
			}
		}
	}

	var rev = revocable(add),
		add_rev = rev.invoke();

	console.log(add_rev(3, 4));
	rev.revoke();
	console.log(add_rev(5, 7));

	console.log('----------------------');

	// Challenges 8
	console.log(title + ' 8');

	function m(value, source) {
		return {
			value: value,
			source: (typeof source === 'string') ? source : String(value)
		}
	}

	function addm(obj1, obj2) {
		return m(
			obj1.value + obj2.value,
			"(" + obj1.source + '+' + obj2.source + ")"
		)
	}

	console.log(JSON.stringify(addm(m(3), m(4))));
	console.log(JSON.stringify(addm(m(1), m(Math.PI, "pi"))));

	console.log('----------------------');

	function liftm(fun, str) {
		return function(first, second) {
			// Varian 1
			// var val1,
			// 	val2;
			// if (typeof first === 'object') {
			// 	val1 = first.value;
			// } else {
			// 	val1 = first;
			// }
			// if (typeof second === 'object') {
			// 	val2 = second.value;
			// } else {
			// 	val1 = second;
			// }

			// Variant 2
			if (typeof first === 'number') {
				first = m(first);
			}
			if (typeof first === 'number') {
				second = m(second);
			}
			return m(
				// fun(val1, val2), Varian 1
				fun(first.value, second.value), // Varian 2
				"(" + first.source + str + second.source + ")"
			)
		}
	}

	var addm1 = liftm(add, "+");

	console.log(JSON.stringify(addm1(m(3), m(4))));
	console.log(JSON.stringify(liftm(mul, "*")(m(3), m(4))));

	console.log('----------------------');

	// Challenges 9
	console.log(title + ' 9');

	function exp(arr) {
		if(Array.isArray(arr)) {
			return arr[0](
				exp(arr[1]),
				exp(arr[2])
			);
		}
		return arr;
	}

	var sae = [mul, 5, 11];
	console.log(exp(sae));
	console.log(exp(42));

	var nae = [
		Math.sqrt,
		[
			add,
			[square, 3],
			[square, 4]
		]
	];

	console.log(exp(nae));

	console.log('----------------------');

	// Challenges Homework
	console.log(title + ' Homework');

	function addg(n) {
		function more(m) {
			if(m === undefined) {
				return n;
			}
			n += m;
			return more;
		}
		if (n !== undefined) {
			return more;
		}
	}

	console.log(addg());
	console.log(addg(2)());
	console.log(addg(2)(7)());
	console.log(addg(3)(0)(4)());
	console.log(addg(1)(2)(4)(8)());

	// Challenges 10
	console.log(title + ' 10');

	function liftg(fun) {
		return function (n) {
			var result;
			if (n  === undefined) {
				return n;
			}
			result = n;

			function inner(m) {
				if(m === undefined) {
					return result;
				}
				result = fun(result, m);
				return inner;
			}

			return inner;
		}
	}

	console.log(liftg(mul)());
	console.log(liftg(mul)(3)());
	console.log(liftg(mul)(3)(0)(4)());
	console.log(liftg(mul)(1)(2)(4)(8)());

	console.log('----------------------');

	function addyg(n) {
		var result = [];
		if (n === undefined) {
			return result;
		}
		function more(m) {
			if(m === undefined) {
				return result;
			}
			result.push(m);
			return more;
		}
		return more(n);
	}

	console.log(addyg());
	console.log(addyg(3)());
	console.log(addyg(3)(4)(5)());

	console.log('----------------------');

	function continuize(fun) {
		return function(callback, par) {
			return callback(fun(par));
		}
	}

	var sqrtc = continuize(Math.sqrt);
	console.log(sqrtc(alert, 81));


	// Challenges 11
	console.log(title + ' 11');

	function vector() {
		var array = [];

		return {
			get: function get(i) {
				return array[i]
			},
			store: function store(i, v) {
				array[i] = v;
			},
			append: function append(v) {
				array.push(v);
			}
		}
	}

	var vec = vector();
	vec.append(1);
	vec.append(10);
	vec.append(213);
	vec.append(4);
	vec.append(63);

	var stash;
	vec.store('push', function() { stash = this; });
	vec.append();

	console.log(stash);

	function pubsub() {
		var subscribers = [];
		return {
			subscribe: function (subscriber) {
				subscribers.push(subscriber);
			},
			publish: function (publiccation) {
				var i, length = subscribers.legth;
				for (i = 0; i < length; i += 1) {
					subscribers[i](publiccation);
				}
			}
		}
	}

	var my_pubsub = pubsub();

	my_pubsub.subscribe(log);
	my_pubsub.publish("It works");

}());
