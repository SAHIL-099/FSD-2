// Write a program to demonstrate various methods of os module in Node.js.

const os = require("os")

console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.freemem())

const mem=os.freemem()
const gb=mem/(1024 * 1024 * 1024)
console.log(gb) 