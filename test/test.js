var assert = require("assert"),
    disjointSet = require('../src/DisjointSet')

describe('DisjointSet', function() {

        var set = disjointSet();
        var person1 = {
            name: 'Volodymyr',
            surname: 'Velykyj'
        }
        var person2 = {
            name: 'Yaroslav',
            surname: 'Mydryi'
        }
        var person3 = {
            name: 'Bohdan',
            surname: 'Khmelnytskyi'
        }
        var person4 = {
            name: 'Ivan',
            surname: 'Mazepa'
        }
        var person5 = {
            name: 'Viktor',
            surname: 'Yanukovich'
        }
        var person6 = {
            name: 'Volodymyr',
            surname: 'Putin'
        }
        set.add(person1)
            .add(person2)
            .add(person3)
            .add(person4)
            .add(person5)
            .add(person6);
        set.union(person1, person2);
        set.union(person3, person4);
        set.union(person2, person3);
        set.union(person5, person6);    

    describe('#disjointSet()', function() {
        it('should return new instance of DisjointSet class with stable API', function() {
            assert.ok(typeof(set.add) == "function");
            assert.ok(typeof(set.find) == "function");
            assert.ok(typeof(set.connected) == "function");
            assert.ok(typeof(set.union) == "function");
            assert.ok(typeof(set.extract) == "function");
            assert.ok(typeof(set.destroy) == "function");
        })
    })

    describe('#add()', function() {
        it('should return this for chaining', function() {
            var set = disjointSet();
            assert.strictEqual(set.add(5), set);
        })
    })

    describe('#find()', function() {
        it('should not return undefined', function() {
            assert.ok(disjointSet().add(5).find(5));
        })

        it('should return common ID for the elements with direct connection', function() {
            assert.equal(set.find(person1), set.find(person2));
        })

        it('should return common ID for the elements with indirect connection', function() {
            assert.equal(set.find(person1), set.find(person4));
        })

        it('should not return common ID for the elements without connection', function() {
            assert.notEqual(set.find(person4), set.find(person5));
        })
    })

    describe('#connected()', function() {
        it('should return true for the elements with direct connection', function() {
            assert.ok(set.connected(person1, person2));
        })

        it('should return true for the elements with indirect connection', function() {
            assert.ok(set.connected(person1, person4));
        })

        it('should return false for the elements without connection', function() {
            assert.ok(!set.connected(person4, person5));
        })
    })

    describe('#union()', function() {
        it('should return this for chaining', function() {
            var set = disjointSet();
            assert.strictEqual(set.union(5, 4), set);
        })
    })

    describe('#extract()', function() {
        it('should return array with elements grouped by sets', function() {
            function inArray(what, where) {
                for(var i=0; i<where.length; i++)
                    if(JSON.stringify(what) === JSON.stringify(where[i]))
                        return true;
                return false;
            }
            assert.ok(
                inArray(person1, set.extract()[0]) &&
                inArray(person2, set.extract()[0]) &&
                inArray(person3, set.extract()[0]) &&
                inArray(person4, set.extract()[0])
            );
            assert.ok(
                inArray(person5, set.extract()[1]) &&
                inArray(person6, set.extract()[1])
            );
        })
    })

    describe('#destroy()', function() {
        it('should clear data structure', function() {
            var set = disjointSet();
            set.add(5).add(10);
            set.destroy();
            assert.equal(set.extract().length, 0);
        })
    })

})