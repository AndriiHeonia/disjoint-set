/*
 (c) 2014, Andrey Geonya
 https://github.com/dstructjs/disjoint-set
*/

// TODO: to think about weighted quick-union or quick union with path compression (Sedjwik, page 231)
// TODO: to think about stringify optimization
// TODO: tests
// TODO: doc
(function () { 'use strict';

function disjointSet() {
    return new DisjointSet();
}

var DisjointSet = function() {
    this._relations = {};
}

DisjointSet.prototype = {
    add: function (val) {
        var key = JSON.stringify(val);
        if (typeof this._relations[key] === 'undefined') {
            this._relations[key] = val;
        }
    },

    find: function (val1, val2) {
        var key1 = JSON.stringify(val1),
            key2 = JSON.stringify(val2);
        return this._relations[key1] === this._relations[key2] ? true : false;
    },

    union: function (val1, val2) {
        var key1 = JSON.stringify(val1),
            key2 = JSON.stringify(val2);

        for (var key in this._relations) {
            if (this._relations[key] === this._relations[key1]) {
                this._relations[key] = this._relations[key2];
            };
        }
    },

    extract: function () {
        var resObj = {},
            resArr = [];

        for (var key in this._relations) {
            var resKey = JSON.stringify(this._relations[key]);
            if (typeof resObj[resKey] === 'undefined') {
                resObj[resKey] = [JSON.parse(key)];
            }
            else {
                resObj[resKey].push(JSON.parse(key));
            }
        }

        for (var key in resObj) {
            resArr.push(resObj[key]);
        }

        return resArr;
    },

    destroy: function () {
        this._relations = {};
    }
}

if (typeof define === 'function' && define.amd) {
    define(function() {
        return disjointSet;
    });
} else if (typeof module !== 'undefined') {
    module.exports = disjointSet;
} else if (typeof self !== 'undefined') {
    self.disjointSet = disjointSet;
} else {
    window.disjointSet = disjointSet;
}

})();