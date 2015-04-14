/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
exports.compare = function compare(a, b) {
  var aa = a.split('.');
  var ab = b.split('.');
  var i = 0;
  var la = aa.length, lb = ab.length;
  while ( la > lb ) {
    ab.push(0);
    ++lb;
  }
  while ( la < lb ) {
    aa.push(0);
    ++la;
  }
  while (i < la && i < lb) {
    var ai = parseInt(aa[i], 10);
    var bi = parseInt(ab[i], 10);
    if (ai > bi) {
      return 1;
    } else if (ai < bi) {
      return -1;
    }
    ++i;
  }
  return 0;
};