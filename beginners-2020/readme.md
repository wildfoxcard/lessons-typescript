# TypeScript Course for Beginners 2020

from youtube video:

https://www.youtube.com/watch?v=BwuLxPH8IDs&t=53s

How to load:

```bash
npm start
```

## Notes From Video

TypeScript is a JavaScript superset. This means that it is a language building up on JavaScript. Adds new features and advantages to JavaScript. TypeScript doesn't run in a JavaScript runtime. It has to be compiled to JavaScript.

TypesScript main feature are:

1. add types to Javascript.
2. can catch logical errors in development before runtime
3. works great with VSCode
4. Next-gen JavaScript features that compile to older browsers
5. Non-JavaScript features like interfaces or generics
6. Meta-Programming features like decorators
7. Rich Configuration Options
8. Modern tooling that helps even in non-TypeScript Projects

If you add a ! (bang) at the end of a declaration, then you are tell the compiler that this value will never be null. example:

```typescript
const input2 = document.getElementById("num1")! as HTMLInputElement;
```

Difference in types: JavaScript uses "dynamic types" that resolve at runtime. Typescript uses "static types" that are set during development.

JavaScript Core Types

1. number
2. string
3. boolean (including truthy)
4. object
5. array

TypeScript core types:

1. number
2. string
3. boolean (including truthy)
4. object (more specific object in typescript)
5. array (more options for stricter array)
6. tuple (fixed length/type array)
7. enum (gives you an enumerated list, pascal-case)
8. any (flexible, anything, note: this is a disadvantage that should be avoided)
9. union (the pipe symbol "|" used to allow multiple types)
10. literal types (range for values)
11. type aliases
12. function types
13. unknown types
14. never types

#### Inference

It is better to let TypeScript implicitly infer types than to be super strict.

so

```typescript
const number1 = 1;
```

is better than:

```typescript
const number1: number = 1;
```

and

```typescript
const person = {
  name: "Mike",
  age: 31
};
```

is better than:

```typescript
const person: {
  name: string;
  age: number;
} = {
  name: "Mike",
  age: 31
};
```

#### Tuple

How to create a tuple:

```typescript
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Mike",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  // tuple
  role: [2, "author"]
};
```

The example above show a tuple on the role. The the TypeScript compiler is saying about this tuple:

1. I have a fixed array of length 2.
2. The first element (index: 0) should be of type number.
3. The second element (index: 1) should be of type string.

Although this code is legal, it isn't what we want:

```typescript
person.roles.push("admin");
```

but this isn't allowed, even though it has the same result:

```typescript
person.role = [0, "admin", "user"];
```

both example are more than the fixed length of the tuple, but the 'person.role.push' example works. ".push()" should be avoided when using tuples.

#### Enums

Enums by convention are written with pascal-case. Values of enums will be often seen as all caps, but this is not necessarily convention.

Example:

```typescript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
```

So by default: ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
But you can change the default identifiers by doing the following:

```typescript
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
}
```

So now the identifiers are: ADMIN = 5, READ_ONLY = 6, AUTHOR = 7

You are also not restricted by numbers

```typescript
enum Role {
  ADMIN = "admin",
  READ_ONLY = 0,
  AUTHOR
}
```

so now identifiers are: ADMIN = 'admin', READ_ONLY = 0, AUTHOR = 1

#### Any

This should be avoided because compiler functionality. Only real purpose is retrieving unknown data from external connection. This removes inference as well.

#### Union

The union is the pipe symbol used to imply multiply assignable types.

example:

```typescript
let someValue: number | string;
```

When using an union on function arguments, you may have to resolve the types with functionality in the code, so example:

This doesn't work:

```typescript
function combine(input1: number | string, input2: number | string) {
  result = input1 + input2;

  return result;
}
```

But if control the types with logic (aka runtime type check), this works:

```typescript
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
```

#### literal types

Literal types is base on value. Here is an example of a function defining an argument "resultConversion" with two literal types by using an union.

```typescript
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
```

This is saying that the argument "resultConversion" should equal 'as-number' or 'as-text'

#### Type aliases

Type aliases is a method for creating a new type.

example:

```typescript
type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
```

In the example above, "Combinable" and "ConversationDescription" are both examples of type aliases.

#### Functions

return types can be infered.

example:

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

will have a function signature of: function add(n1: number, n2: number): number

but:

```typescript
function add(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}
```

will have a function signature of: function add(n1: number, n2: number): string

The difference between the functions is a return type of "number" or "string". This is done by the compiler base on the return type of the function.

Functions can also return a void.

example:

```typescript
function printResult(num: number) {
  console.log("Result: ", num);
}
```

will have a function signature of: function printResult(num: number): void

This is the equivalent of:

```typescript
function printResult(num: number): void {
  console.log("Result: ", num);
}
```

a void function will return undefined. But in javascript, undefined is a type. So it is advise that you explicitly define the function with a void or else you will be required to add a "return" to the function.

Functions as a type.

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));
```

Above is an example of a function type. "combineValues" is a function that takes two arguments of type number and returns a number. The argument names "a" and "b" don't matter, they are like placeholders.

This works will callbacks as well

```typescript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, result => {
  console.log(result);
});
```

#### Unknown types

The unknown type is not the same as an any time.

The following code has an error of: Type 'unknown' is not assignable to type 'string'.

```typescript
let userInput: unknown;
let userName: string;

userName = userInput;
^^^^^^^^
```

If you switch the unknown with any, the error is gone. But we can fixed this error with logic

```typescript
let userInput: unknown;
let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}
```

#### Never Type

Never is another type that functions can return. The function below doesn't return undefined because of the throw statement.

```typescript
function generateError(message: string, code: number) {
  throw { message, errorCode: code };
}

generateError("an error occurred", 500);
```

the function should be written like this:

```typescript
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
```

another function that will never return is a function with an infinite loop

```typescript
function loopForever(): never {
  while (true) {}
}
```

#### TypeScript config

You can generate your typescript configuration file with the following:

```bash
tsc --init
```

Now the only thing you need to run to compile all files in the project is the following:

```bash
tsc
```

If you want to watch all files in a project, run the following:

```bash
tsc -w
```

You can exclude files in the tsconfig.json file

```json
{
  "exclude": [
    "unknown-never.ts",
    "union-aliases.ts",
    "types-examples.ts",
    "functions.ts",
    "basics.ts",
    "node_modules"
  ]
}
```

You can limit what files you want to run with include.

```json
{
  "include": ["app.ts", "analytics.ts"]
}
```

#### Compiler options

Target is for the javascript version. Higher the version, the less work arounds in the js code.

The lib option has defaults that allow functionality to be exposed through auto-complete.

allowJs will allow js files to be compiler.

checkJs will check for errors.

jsx is an option for react js.

sourceMap helps with debuging

outDir is where the output files are stored

rootDir is where the input files are stored

removeComments will remove comment in js.

noEmit will not generate javascript files.

downlevelIteration for old javascript loops

noEmitOnError if true, this will prevent file generates if error

#### Compiler strict options

note: setting strict: true will make all strict options true

noImplicitAny: prevent any types as function params

strictNullCheck: tells typescript to be strict how to deal with types that can be null. Example: Adding the bang after the getElementById

strictFunctionTypes: niche for functions

strictBindCallApply: used for "bind" method
