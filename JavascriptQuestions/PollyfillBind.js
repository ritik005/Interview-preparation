const nameObj = {
    firstname: 'Ritik',
    lastName : 'Varsheny'
};

const printName = function(state, city, country, world) {
    console.log(this.firstname + " " + this.lastName + " " + state + " " + city + " " + country + " " + world);
}

// Normal Bind function 
const copyFn = printName.bind(nameObj, 'UP', 'aligarh');

copyFn('India', 'world');

// Pollyfill of bind

Function.prototype.myBind = function (...args) {
    const obj = this;
    let params = args.slice(1);
    return function (...context) {
        obj.apply(args[0], [...params, ...context]);
    }
}

const copyFunction2 = printName.myBind(nameObj, 'UP', 'aligarh');
copyFunction2('India', 'World');

// Regular function is required for pollyfill of bind because of this binding
// in arrow function, they inherit "this" from the surrounding lexical scope.