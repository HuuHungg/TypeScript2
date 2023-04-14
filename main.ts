class Employe {
    public empCode : string
    empName : string
    
    constructor(empCode: string, empName: string) {
        this.empCode = empCode
        this.empName = empName
    }

}

let emp = new Employe ("aaa", "bbb")
emp.empCode = "毎日ITを勉強してる頑張りましょう"
emp.empName = "頑張ってください"

console.log(emp)