class employee {
    constructor(name) {
        console.log("Constructor : Employee " + name);
    }
}

class manager extends employee {
    constructor(name) {
        super(name); 
        console.log("Constructor : Manager " + name);
    }
}

let a = new manager("shihab islam");

class employee {
    constructor(name) {
        this.empname = name;
        console.log("Constructor : Employee");
    }

    info() {
        console.log("Employee Name : " + this.empname);
    }
}

class manager extends employee {
    info() {
        console.log("Manager Name : " + this.empname);
        super.info();
    }
}

let a = new manager("shihab islam Baba");
a.info();