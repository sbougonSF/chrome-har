const fs = require('fs');
const {harFromMessages} = require('./index.js');
const har = fs.readFileSync('steven.har', 'utf-8');

let post = harFromMessages(JSON.parse(har));
fs.writeFileSync('post.har', JSON.stringify(post));
console.log("Wrote post.har")


