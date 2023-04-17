// Getter là phương thức trả về giá trị 
// Setter là một phương thức được sử dụng để gán giá trị cho thuộc tính

class Person {
    private _age: number = 0;
  
    get age(): number {
      return this._age;
    }
  
    set age(value: number) {
      if (value >= 0 && value <= 120) {
        this._age = value;
      }
    }
  }
  
  const person = new Person();
  person.age = 30; // Gọi phương thức set age, giá trị của age bây giờ là 30
  console.log(person.age); // Gọi phương thức get age, hiển thị giá trị 30
  person.age = 150; // Gọi phương thức set age, giá trị của age không thay đổi vì không thỏa mãn điều kiện if
  console.log(person.age); // Gọi phương thức get age, hiển thị giá trị 30 vì giá trị của age vẫn không thay đổi

  console.log("=============")
//------------------------------------------------------

class Person2 {
    private _age: number
    public firstName: string
    public lastName: string

    constructor (_age: number, firstName: string, lastName: string) {
        this._age = _age
        this.firstName = firstName
        this.lastName = lastName
    }

    get age() {
        return this._age;
    }

    set age(age2: number) {
        if(age2 < 0 || age2 > 100) {
            throw Error("Invalid get")
        }
        this._age = age2
    }
}   

let person2 = new Person2(40, "Yushing", "Guen")
person2.age = 70

console.log("check age", person2)

console.log("======")

//// VD3
class Person4 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        this._name = newName
    }

    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        if(newAge < 0) {
            throw new Error ("Age cannot be negative")
        }
        this._age = newAge;
    }
}

const person4 = new Person4("John4", 50)
console.log(person4.name)
console.log(person4.age)

person4.name = "Yushing"
person4.age = 21

console.log(person4.name)
console.log(person4.age)

// person4.age = -10 Throws an error: "Age cannot be negative"