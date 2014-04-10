disjointSet = require('../src/DisjointSet');
var set = disjointSet();

var start1 = new Date();
for (var i = 0; i < 10001; i++) {
    set.add(i);
};
console.log('10000 add() ', new Date() - start1);

var start2 = new Date();
for (var i = 0; i < 10000; i++) {
    set.union(i, i+1);
};
console.log('10000 union() ', new Date() - start2);

var start3 = new Date();
for (var i = 0; i < 10001; i++) {
    set.find(i);
};
console.log('10000 find() ', new Date() - start3);

var start4 = new Date();
set.extract();
console.log('extract() ', new Date() - start4);

/** quick-find
 10000 add() 11
 10000 union() 23810
 10000 find() 1
 */

 /** quick-union
 10000 add() 12
 10000 union() 6
 10000 find() 5103
 */

 /** weighted quick-union
 10000 add()  12
 10000 union()  7
 10000 find()  1
 */