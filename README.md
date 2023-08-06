# Week 5

## 숙제 1
```
const numbers = [4,102,2,30,13,20]

numbers.push(32)

console.log(numbers)

const numSum = numbers.reduce((acc, cur) => {
	return acc + cur
})

console.log(numSum)
```

## 숙제 2
```
const numbers = [4,102,2,30,13,20]

numbers.push(32)

numbers.sort((a, b) => {
	return a - b
})

console.log(numbers)

numbers.forEach(item => console.log(item))
```
## 숙제 3
```
const users = [
	{name: '윤병현', age: 24, class: '1반'},
	{name: '문채현',  age: 22, class: '1반'},
	{name: '최진영',  age: 21, class: '2반'},
  	{name: '이윤수', age: 20, class: '2반'}
]

const userData = users.filter(users => {
	return users.age > 21 && users.class === "1반"
})

console.log(userData)

const userData1 = users.map(user => {
	return {
		...user,
		email: '1234@naver.com',
		tel: '010-1234-5678'
	}
})

console.log(userData1)
```
