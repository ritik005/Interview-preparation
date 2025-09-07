if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }
  
      const array = this;
      let accumulator;
      let startIndex;
  
      if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
      } else {
        if (array.length === 0) {
          throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = array[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < array.length; i++) {
        // ensures that only elements that actually exist in the array are passed to the reducer function — skipping empty (sparse) slots.
        if (i in array) {
          accumulator = callback(accumulator, array[i], i, array);
        }
      }
  
      return accumulator;
    };
  }

  // Actual reduce function
  array.myReduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
  }, initialValue);
