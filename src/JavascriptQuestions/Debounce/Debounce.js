
// This function we want to call on every key stoke
function someFunction(...args) {
    // some api call or aynschronous operation
    console.log(args[0], args[1]);
};

function debounce (fn, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

// need to implement debounce function which will take a fn and delay
const updatedFunction = debounce(someFunction, 3000);


//Closure

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

let res = x();
res();


