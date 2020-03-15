//generics

class Observable<T> {
    constructor(public value: T) {}
}

let x : Observable<number>;

let y : Observable<iPerson>;

//implicite
let z = new Observable(23);

// -----

//arrs

type MyList = [number?, string?, boolean?];

const arr2: MyList[] = [];

const arr: number[] = [];

arr.push(1);
arr.push(23);
arr.push(100);

// -----

//functions:

function pow(x : number, y : number) : string {
    return Math.pow(x, y).toString();
}

pow(5, 10)

function blah() : void {
    console.log('blah');
}

// -----

//interface enforcing

interface iPerson {
    first: string;
    last: string;
    [key: string]: any
}

const person : iPerson = {
    first: "bob",
    last: "dole"
}

const person2 : iPerson = {
    first: "bugs",
    last: "bunny",
    fast: true
}

// -----

// Custom Types:

type Style = 'bold' | 'italic';

let font : Style;

font = 'bold';


//implicite
let something = 1;