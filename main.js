//일반 함수의 this는 호출 위치에서 정의
const timer = {
	title: 'timer',
	timeout() {
	console.log(this.title)
	setTimeout (function () {
		console.log(this.title)
		}, 1000)
	}
}
timer.timeout()