disjointSet = require('../src/DisjointSet');
var set = disjointSet();

var objects = [];
for (var i = 0; i < 100001; i++) {
    var o = {};
    o[i] = i;
    o[i+'a'] = i; o[i+'b'] = i; o[i+'c'] = i; o[i+'d'] = i;
    o[i+'e'] = i; o[i+'f'] = i; o[i+'g'] = i; o[i+'h'] = i;
    o[i+'i'] = i; o[i+'j'] = i; o[i+'k'] = i; o[i+'l'] = i;
    o[i+'m'] = i; o[i+'n'] = i; o[i+'o'] = i; o[i+'p'] = i;
    o[i+'q'] = i; o[i+'r'] = i; o[i+'s'] = i; o[i+'t'] = i;
    o[i+'u'] = i; o[i+'v'] = i; o[i+'w'] = i; o[i+'x'] = i;
    o[i+'y'] = i; o[i+'z'] = i;
    objects[i] = o;
};

var start1 = new Date();
for (var i = 0; i < 100001; i++) {
    set.add(objects[i]);
};
console.log('100000 add() ', new Date() - start1);

var start2 = new Date();
for (var i = 0; i < 100000; i++) {
    set.union(objects[i], objects[i+1]);
};
console.log('100000 union() ', new Date() - start2);

var start3 = new Date();
for (var i = 0; i < 100001; i++) {
    set.find(objects[i]);
};
console.log('100000 find() ', new Date() - start3);

var start4 = new Date();
set.extract();
console.log('extract() ', new Date() - start4);

// Numbers

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

// Objects

/*
100000 add()  1561
100000 union()  4455
100000 find()  1672
extract()  4592
*/

/* stringify keys changed to ids
100000 add()  132
100000 union()  212
100000 find()  217
extract()  25
*/

/* type checking cache added
100000 add()  84
100000 union()  34
100000 find()  24
extract()  94
*/