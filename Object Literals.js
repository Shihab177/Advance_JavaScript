let name = "shihab";

let obj = {
    name : name
};

let obj = {
    name
};



let n = "student";

var obj = {
    [n + "name"] : "Shihab",
    course : "BBA",
    detail : function(){
        return `${this.studentname} is student of ${this.course}`;
    }
};

console.log(obj);
console.log(obj.detail()); 


let n = "student";

var obj = {
    [n + "name"] : "Shihab",
    course : "Btech",
    'detail show'(){
        return `${this.studentname} is student of ${this.course}`;
    }
};

console.log(obj);
console.log(obj['detail show']());