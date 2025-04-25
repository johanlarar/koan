// Welcome to the Koan of Asynchronous Wisdom 🌀
// This journey will guide you through the mysteries of async JavaScript:
// promises, async/await, timeouts, and finally — communication via fetch.
// Replace each `__` with the correct solution to reveal the teachings.
// Run this in Node.js (v18+ for fetch support). Use `npm install chalk` if needed.

import chalk from 'chalk';

const __ = 'FILL_ME_IN'; // ⚠️ Do not reuse this placeholder in your answers.

function mustAssert(condition, message, successMessageBase64) {
  if (!condition) {
    console.error(chalk.redBright(`🛑 Assertion Failed: ${message}`));
    process.exit(1);
    return;
  } else {
    const decoded = Buffer.from(successMessageBase64, 'base64').toString('utf-8');
    console.log(chalk.green(decoded));
  }
}

console.log(chalk.cyan(`
  ╔═════════════════════════════════════╗
  ║     THE KOAN OF ASYNC AWAITS...     ║
  ╚═════════════════════════════════════╝
`));

// Part 1: The Promise Path
console.log(chalk.yellow(`
╔══════════════════════════════╗
║ Part 1: The Promise Path     ║
╚══════════════════════════════╝`));
const promise = new Promise((resolve) => setTimeout(() => resolve('enlightened'), 50));
const resolved = await promise;
mustAssert(resolved === 'enlightened', 'Assertion 1 Failed: The promise did not resolve as expected.', 'VGhlIHByb21pc2UgaXMgdW5mb2xkZWQu'); // "The promise is unfolded."

// Part 2: The Awaiting Monk
console.log(chalk.yellow(`
╔══════════════════════════════╗
║ Part 2: The Awaiting Monk    ║
╚══════════════════════════════╝`));
async function meditate() {
  const value = await Promise.resolve(42);
  return value;
}
mustAssert(await meditate() === 42, 'Assertion 2 Failed: Await meditation incomplete.', 'VGhlIG1pbmQgc2V0dGxlcyBpbiBzaWxlbmNlLg=='); // "The mind settles in silence."

// Part 3: The Delayed Enlightenment
console.log(chalk.yellow(`
╔═══════════════════════════════════╗
║ Part 3: The Delayed Enlightenment ║
╚═══════════════════════════════════╝`));
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let waited = false;
await wait(100).then(() => { waited = true; });
mustAssert(waited === true, 'Assertion 3 Failed: Waiting did not resolve.', 'VGhlIG1vbWVudCBpcyBhcml2ZWQu'); // "The moment is arrived."

// Part 4: The Parallel Scrolls
console.log(chalk.yellow(`
╔══════════════════════════════╗
║ Part 4: The Parallel Scrolls ║
╚══════════════════════════════╝`));
async function scrolls() {
  const one = Promise.resolve('one');
  const two = Promise.resolve('two');
  const result = await Promise.all([one, two]);
  return result.join(' & ');
}
mustAssert(await scrolls() === "one & two", 'Assertion 4 Failed: Parallel knowledge not joined.', 'VGhlIHNwZWFjaGVzIG1lcmdlLg=='); // "The speeches merge."

// Part 5: The Call Beyond (fetch)
console.log(chalk.yellow(`
╔══════════════════════════════╗
║ Part 5: The Call Beyond       ║
╚══════════════════════════════╝`));
async function divine() {
  const res = await fetch('http://localhost:1337/divine');
  return await res.json();
}

const sacred = await divine();
mustAssert(sacred.message === "The call is heard.", 'Assertion 5 Failed: Message from the beyond unclear.', 'VGhlIGNhbGwgaXMgaGVhcmQu'); // "The call is heard."

console.log(chalk.magenta(`
  ╔════════════════════════════════════════════════════════╗
  ║ 🌀 JOURNEY COMPLETE — The async path is now within you. ║
  ╚════════════════════════════════════════════════════════╝
`));
