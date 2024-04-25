/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let [p1, p2] = await Promise.all([promise1, promise2]);
     return p1+p2;  // Runtime: 44 ms
 };
 
// TODO: Try returing ( await p1 ) + ( await p2 ) // Runtime : 67ms
 /**
  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  *   .then(console.log); // 4
  */