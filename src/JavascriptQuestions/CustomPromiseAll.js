// should take promises array as input 
// should return a Promise itself
// result array 
// track for completion of the promises
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        const completed = 0;

        if(!promises.length) {
            return resolve([]);
        }

        // iterate over promises 

        promises.forEach((value, index) => {
            //one by one resolve the promises to ensure non-promises value
            // also should wrap it inside a promise 
            Promise.resolve(value)
            .then( value => {
                result[index] = value;
                completed += 1;
                if(completed === promises.length) {
                    resolve(result);
                }
            })
            .catch(err => reject(err)); // reject immediately if any failures
        });
    });
}


const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((res) => setTimeout(() => res(3), 100));

Promise.myAll([p1, p2, p3])
  .then(result => console.log(result)) // [1, 2, 3]
  .catch(err => console.error(err));