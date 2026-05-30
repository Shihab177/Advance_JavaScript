class student{
    constructor(){
        console.log("constructor Function");
    }
}

let a = new student();
let b = new student();


class student{
    constructor(name, age){
        this.studentname = name;
        this.studentage = age;
        console.log("constructor Function");
    }

    hello(){
        console.log("Hello " + this.studentname + " Your age is " + this.studentage);
    }
    static staticMethod() {
        console.log("static Function");
    }
}

let a = new student("shihab islam", 25);
let b = new student("mahim",33)


a.hello();
student.staticMethod();