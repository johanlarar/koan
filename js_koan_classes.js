// Welcome back, apprentice, to the Koan of Classes!
// This journey is focused entirely on mastering JavaScript classes.
// As before, your task is to fill in the blanks (`__`) to complete the assertions.
// Base64-encoded messages will be revealed only as each challenge is solved.
// 🧙 Run this in Node.js with chalk installed: npm install chalk

import chalk from 'chalk';

const __ = 'FILL_ME_IN'; // ⚠️ Do not reuse this placeholder directly in answers.

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
  ╔════════════════════════════════════╗
  ║     THE PATH OF THE BLUEPRINTS     ║
  ╚════════════════════════════════════╝
`));

// Part 1: The Humble Constructor
console.log(chalk.yellow(`
╔══════════════════════════════════╗
║ Part 1: The Humble Constructor   ║
╚══════════════════════════════════╝`));
class Wizard {
  constructor(name) {
    this.name = name;
  }
}
const gandalf = new Wizard('Gandalf');
mustAssert(gandalf.name === __, 'Assertion 1 Failed: Wizard name is not as expected.', 'VGhlIHdpenFyZCdzIG5hbWUgaXMgc2V0Lg=='); // "The wizard's name is set."

// Part 2: The Speaking Method
console.log(chalk.yellow(`
╔══════════════════════════════════╗
║ Part 2: The Speaking Method      ║
╚══════════════════════════════════╝`));
class Bard {
  constructor(name) {
    this.name = name;
  }
  sing() {
    return `La la la, I am ${this.name}`;
  }
}
const luthien = new Bard('Luthien');
mustAssert(luthien.sing() === __, "Assertion 2 Failed: Bard's song incorrect.", 'VGhlIGJhcmQgc2luZ3Mu'); // "The bard sings."

// Part 3: The Extended Lineage
console.log(chalk.yellow(`
╔══════════════════════════════════╗
║ Part 3: The Extended Lineage     ║
╚══════════════════════════════════╝`));
class Hero {
  constructor(name) {
    this.name = name;
  }
  title() {
    return `${this.name} the Brave`;
  }
}
class Paladin extends Hero {
  constructor(name, rank) {
    super(name);
    this.rank = rank;
  }
  fullTitle() {
    return `${this.rank} ${this.title()}`;
  }
}
const aric = new Paladin('Aric', 'Captain');
mustAssert(aric.name === __, 'Assertion 3 Failed: Name not inherited correctly.', 'VGhlIGhlcm8gaXMgbmFtZWQu'); // "The hero is named."
mustAssert(aric.rank === __, 'Assertion 4 Failed: Rank not set properly.', 'VGhlIHJhbmsgYXBwZWFycy4='); // "The rank appears."
mustAssert(aric.fullTitle() === __, 'Assertion 5 Failed: Full title incorrect.', 'VGhlIGZ1bGwgdGl0bGUgZW1lcmdlcyBmcm9tIHRoZSBzaGFkb3cu'); // "The full title emerges from the shadow."

// Part 4: The Living Archive (static methods)
console.log(chalk.yellow(`
╔══════════════════════════════════╗
║ Part 4: The Living Archive       ║
╚══════════════════════════════════╝`));
class Tome {
  static describe() {
    return 'A book of forgotten lore';
  }
}
mustAssert(Tome.describe() === __, 'Assertion 6 Failed: Static method output is wrong.', 'VGhlIHRvbWUgc3BlYWtzLg=='); // "The tome speaks."

// Part 5: The Hidden Chamber (private fields)
console.log(chalk.yellow(`
╔══════════════════════════════════╗
║ Part 5: The Hidden Chamber       ║
╚══════════════════════════════════╝`));
class Vault {
  #treasure;
  constructor(item) {
    this.#treasure = item;
  }
  reveal() {
    return `The treasure is ${this.#treasure}`;
  }
}
const chest = new Vault('gold');
mustAssert(chest.reveal() === __, 'Assertion 7 Failed: Private field not accessed correctly.', 'VGhlIHZhdWx0IHJldmVhbHMgdGhlIHRyZWFzdXJlLg=='); // "The vault reveals the treasure."

console.log(chalk.magenta(`
  ╔══════════════════════════════════════════════════════════╗
  ║ 🎓 JOURNEY COMPLETE — The secrets of classes are yours.  ║
  ╚══════════════════════════════════════════════════════════╝
`));
