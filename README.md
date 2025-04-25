# JavaScript Koans: A Journey of Discovery 🧘

Welcome, apprentice, to the JavaScript Koans! This project is designed to help you learn and solidify your understanding of fundamental JavaScript concepts through a series of interactive challenges.

Inspired by traditional Zen Koans, these exercises require you to contemplate and fix "broken" assertions within the code. By replacing the `__` placeholders with the correct values, you will mend the code and, in doing so, illuminate your understanding of JavaScript.

## The Path Ahead ✨

This collection guides you through several key areas of JavaScript:

1.  **JavaScript Basics (`js_koan_basics.js`):** Master the foundational elements like `if/else` statements, `while` and `for` loops, and function declarations (including arrow functions).
2.  **The Blueprint - Classes (`js_koan_classes.js`):** Delve into Object-Oriented Programming in JavaScript. Understand constructors, methods, inheritance (`extends`, `super`), static methods, and private fields (`#`).
3.  **Asynchronous Wisdom (`js_koan_async.js`):** Explore the non-blocking nature of JavaScript. Learn about Promises, `async/await`, `setTimeout`, `Promise.all`, and making network requests using `Workspace`.

## Prerequisites

- **Node.js:** You'll need Node.js installed to run these JavaScript files. Version 18+ is recommended for native `Workspace` support used in the async koan. You can download it from [nodejs.org](https://nodejs.org/).
- **npm:** Node.js comes bundled with npm (Node Package Manager), which is used to install project dependencies.
- **Terminal/Command Line:** Basic familiarity with using your terminal for commands like `cp` and `node`.

## Installation 🛠️

1.  **Clone or Download:** Get the project files onto your local machine.
    ```bash
    git clone <your-repository-url> # Don't download the ZIP
    cd <project-directory>
    ```
2.  **Install Dependencies:** Open your terminal in the project directory and run:
    ```bash
    npm install
    ```
    This will install `chalk` (for colorful console output), `express`, and `cors` (for the simple server used in the async koan).

## How to Embark on Your Journey 🚀

1.  **Copy the Koan File:** Before you start editing, make a copy of the Koan file you want to work on. This keeps the original file intact if you need to start over. In your terminal, use the `cp` command (or manually copy/paste the file using your file explorer):

    - For the Basics Koan: `cp js_koan_basics.js basics-koan.js`
    - For the Classes Koan: `cp js_koan_classes.js classes-koan.js`
    - For the Async Koan: `cp js_koan_async.js async-koan.js`

2.  **Open Your Working Copy:** Open the _copied_ file (e.g., `basics-koan.js`) in your code editor.

3.  **Find the Blanks:** Locate the lines containing `mustAssert(...)` in your _copied_ file. Your task is to replace the `__` placeholder within the assertion's _condition_ (e.g., `mustAssert(result === __, ...)` becomes `mustAssert(result === 'expected value', ...)`). **Do not** modify the original `js_koan_*.js` files.

4.  **Run Your Working Copy:** Execute the _copied_ file using Node.js from your terminal:

    ```bash
    node basics-koan.js
    ```

    or

    ```bash
    node classes-koan.js
    ```

    or (for the async koan)

    ```bash
    node async-koan.js
    ```

5.  **Observe the Output:**

    - If you see green messages (decoded from Base64!), your assertion is correct. The path unfolds!
    - If you see a red `🛑 Assertion Failed:` message, you need to rethink your answer for that specific blank in your copied file.

6.  **Repeat:** Continue filling in the blanks in your copied file and running it until all assertions pass for that Koan. Then, copy the next original Koan file (e.g., `cp js_koan_classes.js classes-koan.js`) and repeat the process.

**Special Note for the Async Koan (`async-koan.js`):**

- This Koan includes a section (`Part 5: The Call Beyond`) that interacts with a simple web server.
- **Before** running `node async-koan.js`, you need to start this server. Open a _separate_ terminal window, navigate to the project directory, and run:
  ```bash
  node server.js
  ```
- Keep this server running while you work through `async-koan.js`. You should see a message like `🔮 Async Koan server listening at http://localhost:1337`.

## File Structure

```
.
├── README.md           # This file
├── js_koan_async.js    # Original Koan focusing on asynchronous JavaScript (COPY THIS)
├── js_koan_basics.js   # Original Koan covering JS fundamentals (COPY THIS)
├── js_koan_classes.js  # Original Koan exploring JS classes (COPY THIS)
├── koan.js             # (Likely a helper or utility script - its exact role might depend on its content)
├── package-lock.json   # Records exact dependency versions
├── package.json        # Project manifest, lists dependencies (chalk, express, cors)
└── server.js           # Simple Express server for the async koan's fetch exercise

# --> You will create these files by copying the originals:
# basics-koan.js
# classes-koan.js
# async-koan.js
```

## Bonus Challenge 🏆

The original `js_koan_basics.js` file includes a bonus challenge: Create your own `Greeter` subclass that shouts the greeting in uppercase. Add and test your creation within your `basics-koan.js` file!

---

May your journey be enlightening! Copy the scrolls, fix the assertions, understand the concepts, and emerge a more confident JavaScript developer.
