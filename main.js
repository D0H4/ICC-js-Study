import _ from "lodash"

const obj = {
	a: 1,
	b: 2,
	c: 3,
	//x: 6
}

const {a, b} = obj;
console.log(a,b)

const {c} = obj;
console.log(c)

const {x = 4} =obj;
console.log(x)

const {c: test} = obj; // c를 할당
console.log(test)

const {c, ...rest} = obj; // c 제외
console.log(c, rest)
