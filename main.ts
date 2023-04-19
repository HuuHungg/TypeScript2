class Coder {
    constructor (
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript in Youtube"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }   
    
    getAge() {
        return `Hello, My name is ${this.name}. I'm ${this.age}`
    }
}

let Dave = new Coder("YuShing", "音楽", 21)

console.log(Dave)
console.log(Dave.getAge())

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }
    
    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac Air M1', 'Yushing', '音楽の日本', 21)
console.log(Sara)
console.log(Sara.getLang())