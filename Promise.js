// JavaScript-e Promise holo emon ekta object, jeta asynchronous operation-er ultimate success (shofolota) ba failure (bifolota) represent kore. Shorol bhashay, eta vobisshoter kono ekta value-r jonnoy ekta placeholder hishebe kaj kore, jeta ekhon-ই pawa na geleo ektu por pawa jabe."
let prom = new Promise();

let prom = new Promise(function () {});

let prom = new Promise(function (resolve, reject) {});

let prom = new Promise(function (resolve, reject) {
  if (condition) {
    resolve();
  } else {
    reject();
  }
});

let prom = new Promise(function (resolve, reject) {
  if (1 === 1) {
    resolve("Here is a Success");
  } else {
    reject("Here is a Faliure");
  }
});

let onfulfilment = (result) => {
  console.log(result);
};

let onRejection = (error) => {
  console.log(error);
};

prom.then(onfulfilment);
prom.catch(onRejection);

function prom(a, b) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data, please wait.");
    var c = a / b;
    setTimeout(() => {
      if ((a, b)) {
        resolve(`Your answer : ${c}`);
      } else {
        reject("Failed to calculate.");
      }
    }, 2000);
  });
}

prom(9, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
