/**
 * (c) 2014, Andrey Geonya
 * https://github.com/dstructjs/disjoint-set
 */

(function () { 'use strict';

function disjointSet() {
    return new DisjointSet();
}

var DisjointSet = function() {
    this._reset();
};

DisjointSet.prototype = {
    add: function (val) {
        var id = DisjointSet._isPrimitive(val) ? val : val._id = this._lastId++;
        this._objects[id] = val;
        if (typeof this._relations[id] === 'undefined') {
            this._relations[id] = id;
            this._size[id] = 1;
        }
        return this;
    },

    find: function (val) {
        var id = DisjointSet._isPrimitive(val) ? val : val._id;
        return this._findById(id);
    },

    _findById: function (id) {
        var rootId = id;
        while (this._relations[rootId] !== rootId) {
            rootId = this._relations[rootId];
        }
        return rootId;
    },

    connected: function (val1, val2) {
        return this.find(val1) === this.find(val2) ? true : false;
    },

    union: function (val1, val2) {
        var val1RootId = this.find(val1),
            val2RootId = this.find(val2),
            val1Id = DisjointSet._isPrimitive(val1) ? val1 : val1._id,
            val2Id = DisjointSet._isPrimitive(val2) ? val2 : val2._id;

        if (val1RootId === val2RootId) { return this; }

        if (this._size[val1Id] < this._size[val2Id]) {
            this._relations[val1Id] = val2RootId;
            this._size[val1Id] += this._size[val2Id];
        }
        else {
            this._relations[val2Id] = val1RootId;
            this._size[val2Id] += this._size[val1Id];
        }

        return this;
    },

    extract: function () {
        var rootId,
            resObj = {},
            resArr = [];

        for (var id in this._relations) {
            rootId = this._findById(id);

            if (typeof resObj[rootId] === 'undefined') {
                resObj[rootId] = [];
            }
            resObj[rootId].push(this._objects[id]);
        }

        for (var key1 in resObj) {
            resArr.push(resObj[key1]);
        }

        return resArr;
    },

    destroy: function () {
        this._reset();
    },

    _reset: function() {
        this._objects = {};
        this._relations = {};
        this._size = {};
        this._lastId = 0;
    }
};

DisjointSet._isPrimitive = function(val) {
    if (Object.prototype.toString.call(val) === '[object String]' ||
        Object.prototype.toString.call(val) === '[object Number]') {
        return true;
    }
    else {
        return false;
    }
};

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