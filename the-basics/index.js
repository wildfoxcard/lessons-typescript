//generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
//implicite
var z = new Observable(23);
var arr2 = [];
var arr = [];
arr.push(1);
arr.push(23);
arr.push(100);
// -----
//functions:
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 10);
function blah() {
    console.log('blah');
}
var person = {
    first: "bob",
    last: "dole"
};
var person2 = {
    first: "bugs",
    last: "bunny",
    fast: true
};
var font;
font = 'bold';
//implicite
var something = 1;
