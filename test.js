
var util = require('util');
var compare = require('./index.js').compare;

var cases = [
  ['1.0', '1', 0],
  ['1.0', '1.0.0.0', 0],
  ['1.0', '1.0.1', -1],
  ['1.0', '1.1', -1],
  ['1.0', '0.9.1', 1],
  ['2.0', '10.0', -1],
  ['1.10', '1.9.2', 1]
];


var cur, i = 0, l = cases.length, ret;
for (; i < l; ++i) {
  cur = cases[i];
  ret = cur[2] === compare(cur[0], cur[1]);
  if (!ret) {
    util.error('Fail', i, cur);
  }
}

