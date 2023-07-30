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

const k_pop = new Kpop()
k_pop.reset = "OHMYGIRL 2023-07-24 6"

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

console.log(k_pop)
console.log(summerComes)