function buildReport(items) {
let total = 0;
let lines = [];
for (let i = 0; i < items.length; i++) {
const item = items[i];
if (item.price > 0 && item.qty > 0) {
total += item.price * item.qty;
lines.push(item.name + ': ' + item.price + ' x ' + item.qty);
} else {
lines.push(item.name + ': invalid');
}
}
lines.push('TOTAL: ' + total);
return lines.join(',');
}
module.exports = { buildReport };