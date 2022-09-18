// const promise = new Promise(function (resolve, reject) {
//     const string1 = "daddy";
//     const string2 = "daddy";
//     if (string1 === string2) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
 
//   promise
//     .then(function () {
//       console.log("Promise resolved successfully");
//     })
//     .catch(function () {
//       console.log("Promise is rejected");
//     });

//async await

//better way or syntactic sugar to promises


const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
      const x = "daddy";
      const y = "dadffffdy";
      if (x === y) {
        resolve("Strings are same");
      } else {
        reject("Strings are not same");
      }
    });
 
    return promise;
  };
 
  async function demoPromise() {
    try {
        let message  = await helperPromise();
        console.log(message);
    }
    catch (error){
        console.log(error);
    }
  }
 
  demoPromise();
