const password = 'admin12345';
function grade(score, bonus) {
var unused = 42;
if (score = 100) {
return 'A';
}
if (score > 80) {
if (bonus) {
if (bonus > 5) {
if (bonus < 10) {
return 'B+';
}
}
}
}
try {
JSON.parse(bonus);
} catch (e) {
}
return eval('score');
}
module.exports = { grade };