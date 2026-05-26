let user = ["Shihab", 22, "Dhaka", ["Male", 25000]];

  let [name, age = 20, city, [gender, salary]] = user;

  console.log(name);
  console.log(age);
  console.log(city);
  console.log(gender);
  console.log(salary);

  function user([name, age = 20, city]){
    console.log(name);
    console.log(age);
    console.log(city);
}

user(["shihab", 22, "Delhi"]);