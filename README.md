# Week 4

## 정적 메서드
정적 메서드는 특정 클래스의 인스턴스가 아닌 클래스 전체에 필요한 기능을 만들 때 사용할 수 있다.

```
class User {
    static staticMethod() {
        alert(this === User);
    }
}

User.staticMethod(); // true
```

## Kpop Code
```
class Kpop {
    constructor(singerName, releaseDate, members) {
        this.singerName = singerName
        this.releaseDate = releaseDate
        this.members = members
    }
    set reset(value) {
        [this.singerName, this.releaseDate, this.members] = value.split(' ')
    }
}

class SummerComes extends Kpop {
    constructor(leaderName, singerName, releaseDate, members) {
        super(singerName, releaseDate, members)
        this.leaderName = leaderName;
    }
    sing() {
        return console.log("귀를 귀울여 듣고 싶은 맘이 설레이잖아")
    }
}

const summerComes = new SummerComes('Hyojung')
summerComes.sing()
summerComes.reset = "OHMYGIRL 2023-07-24 6"

console.log(summerComes)
```