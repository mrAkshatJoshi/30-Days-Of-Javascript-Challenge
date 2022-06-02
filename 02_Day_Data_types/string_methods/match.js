// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string1 = 'love'
let patternOne = /love/ // with out any flag
let patternTwo = /love/gi // g-means to search in the whole text, i - case insensitive
string1.match(substring)
let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string2.match('love')) //
/*
output

["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/
let pattern = /love/gi
console.log(string.match(pattern)) // ["love", "love", "love"]
// Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

let txt = 'In 2021, I run 30 Days of Java. Now, in 2022 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ['2', '0', '2', '1', '3', '0', '2', '0', '2', '2']
console.log(txt.match(/\d+/g)) // ['2021', '30', '2022']
