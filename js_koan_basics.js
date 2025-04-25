// Welcome, young apprentice, to the JavaScript Basics Koan!
// Your journey to understanding unfolds as you mend the broken assertions.
// Replace `__` in the assertions below with the correct values.
// Remove the `__` once you've replaced it. Do NOT try to update the `__` constant.
// Run this code in a Node.js environment. Install chalk: npm install chalk

import chalk from 'chalk';

const __ = 'FILL_ME_IN'; // ⚠️ Do not change or use this directly in your answers.

function mustAssert(condition, message, successMessageBase64) {
  if (!condition) {
    console.error(chalk.redBright(`🛑 Assertion Failed: ${message}`));
    process.exit(1); // Node-only
    return; // Unreachable but included for clarity
  } else {
    const decoded = Buffer.from(successMessageBase64, 'base64').toString('utf-8');
    console.log(chalk.green(decoded));
  }
}

console.log(chalk.cyan(`

  ╔══════════════════════════════════════════╗
  ║   STARTING THE JOURNEY INTO JAVASCRIPT   ║
  ╚══════════════════════════════════════════╝
`));
console.log(chalk.cyan("You stand at the entrance of a cave marked with JavaScript symbols."));

// Part 1: The Fork in the Road (if/else statements)
console.log(chalk.yellow(`
╔══════════════════════════════╗
║ Part 1: The Fork in the Road ║
╚══════════════════════════════╝`));
let condition = true;
let result = '';
if (condition) { result = 'Condition was true'; } else { result = 'Condition was false'; }
mustAssert(result === 'Condition was true', 'Assertion 1 Failed: The scroll depicting "true" seems misread.', 'Li4uVGhlIHBhdGggaXMgc2V0LCBsaXQgdXMgcHJvY2VlZC4=');

condition = false;
if (condition) { result = 'Condition was true'; } else { result = 'Condition was false'; }
mustAssert(result === 'Condition was false', 'Assertion 2 Failed: The scroll depicting "false" seems misread.', 'Li4uVGhlIG90aGVyIHBhdGggcmV2ZWFscyBpdHNlbGYu');

let value = 15;
let size = '';
if (value < 10) { size = 'small'; } else if (value < 20) { size = 'medium'; } else { size = 'large'; }
mustAssert(size === __, 'Assertion 3 Failed: The measure of "size" is incorrect. Fill the blank in the assertion.', 'Li4uQSBzZWNvbmQgc2lnbiBnbG93cyBvbiB0aGUgd2FsbC4=');


// Part 2: The Repeating Path (while loops)
console.log(chalk.yellow(`
╔═══════════════════════════════╗
║ Part 2: The Repeating Path    ║
╚═══════════════════════════════╝`));
let counter = 0;
let loopSum = 0;
while (counter < 5) { loopSum += counter; counter++; }
mustAssert(loopSum === __, 'Assertion 4 Failed: The sum collected is wrong. Fill the blank.', 'Li4uU2lnbnMgaW4gdGhlIGR1c3Qgc3RyaXAgZ2xvdyB3aXRoIHJ1bmVzLg==');

mustAssert(counter === __, 'Assertion 5 Failed: The final step count is incorrect. Fill the blank.', 'Li4uWW91IGNvdW50ZWQgNSBzdGVwcy4=');


// Part 3: The Measured Tread (for loops)
console.log(chalk.yellow(`
╔═════════════════════════════════╗
║ Part 3: The Measured Tread      ║
╚═════════════════════════════════╝`));
let forSum = 0;
for (let i = 0; i < 4; i++) { forSum += i; }
mustAssert(forSum === __, 'Assertion 6 Failed: The sum from the measured tread is inaccurate. Fill the blank.', 'Li4uVGhlIHR1bm5lbCBmbG9vciByZXNvbmF0ZXMu');

let colors = ['red', 'green', 'blue'];
let colorString = '';
for (let i = 0; i < colors.length; i++) { colorString += colors[i] + ' '; }
mustAssert(colorString.trim() === __, 'Assertion 7 Failed: The colors gathered by index are out of order. Fill the blank.', 'Li4uU2VxdWVuY2UgcmVjb2duaXplZC4=');

colorString = '';
for (const color of colors) { colorString += color + ' '; }
mustAssert(colorString.trim() === __, 'Assertion 8 Failed: The colors gathered directly are out of order. Fill the blank.', 'Li4uVGhlIGxpZ2h0IGlzIHVubGVhc2hlZC4=');


// Part 4: The Artisan's Tools (Functions)
console.log(chalk.yellow(`
╔═════════════════════════════════╗
║ Part 4: The Artisan's Tools     ║
╚═════════════════════════════════╝`));
function add(a, b) { return a + b; }
mustAssert(add(5, 3) === __, 'Assertion 9 Failed: The Adder tool yields an incorrect sum. Fill the blank.', 'Li4uVGhlIEFkZGVyIGZsYXNoZXMu');

const multiply = function (a, b) { return a * b; };
mustAssert(multiply(4, 6) === __, 'Assertion 10 Failed: The Multiplier tool yields an incorrect product. Fill the blank.', 'Li4uVGhlIE11bHRpcGxpZXIgc3BpcnMu');

const subtract = (a, b) => { return a - b; };
mustAssert(subtract(10, 7) === __, 'Assertion 11 Failed: The Subtractor tool yields an incorrect difference. Fill the blank.', 'Li4uVGhlIFN1YnRyYWN0b3IgY3V0cyB0aHJvdWdoIGRvdWJ0Lg==');

const square = x => x * x;
mustAssert(square(5) === __, 'Assertion 12 Failed: The Squarer tool yields an incorrect result. Fill the blank.', 'Li4uVGhlIFNxdWFyZXIgc2hpbmVzLg==');


// Part 5: The Blueprint (Classes)
console.log(chalk.yellow(`
╔═════════════════════════════════╗
║ Part 5: The Blueprint           ║
╚═════════════════════════════════╝`));
class Greeter {
  constructor(name) { this.name = name; }
  greet() { return `Hello, ${this.name}!`; }
}
const myGreeter = new Greeter('World');
mustAssert(myGreeter.name === __, 'Assertion 13 Failed: The Greeter blueprint has the wrong name. Fill the blank.', 'Li4uVGhlIG5hbWUgJ1dvcmxkJyBpcyBpbmRlbGliZWQu');

mustAssert(myGreeter.greet() === __, 'Assertion 14 Failed: The Greeter speaks incorrectly. Fill the blank.', 'Li4uIkhlbGxvLCBXb3JsZCEiIGVjaG9lcyBmcm9tIHRoZSBzaGFkb3dzLg==');

class ExtendedGreeter extends Greeter {
  constructor(name, punctuation) { super(name); this.punctuation = punctuation; }
  greet() { return `Hello, ${this.name}${this.punctuation}`; }
}
const myExtendedGreeter = new ExtendedGreeter('Universe', '!!!');
mustAssert(myExtendedGreeter.name === __, 'Assertion 15.1 Failed: Enthusiastic Greeter name incorrect. Fill the blank.', 'Li4uTmFtZSBzZXQgdG8gJ1VuaXZlcnNlJy4=');
mustAssert(myExtendedGreeter.punctuation === __, 'Assertion 15.2 Failed: Enthusiastic Greeter flair incorrect. Fill the blank.', 'Li4uRmxhaXIgc2V0IHRvICchISEnLg==');

mustAssert(myExtendedGreeter.greet() === __, 'Assertion 16 Failed: Enthusiastic Greeter speaks without zeal. Fill the blank.', 'Li4uIkhlbGxvLCBVbml2ZXJzZSEhISIiIGJvb21zIGVudGh1c2lhc3RpY2FsbHku');


// Final Message
console.log(chalk.magenta(`
  ╔═══════════════════════════════════════════════════════════╗
  ║ 🌞 JOURNEY COMPLETE? If no assertion failed above, the    ║
  ║ cave exit opens, revealing a sunlit path forward.         ║
  ║ You have grasped the fundamentals. Well done, apprentice! ║
  ╚═══════════════════════════════════════════════════════════╝
`));

// Bonus Challenge: Create your own Greeter subclass that shouts in uppercase.
// Example: Hello, UNIVERSE!!!
