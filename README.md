<img src="https://avatars2.githubusercontent.com/u/7190376?s=140" width="50px" height="50px" />

Disjoint-set is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non overlapping) subsets. A union–find algorithm is an algorithm that performs two useful operations on such a data structure:

* Find: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset;
* Union: Join two subsets into a single subset.

## API

### Creation

<table>
    <thead>
        <tr>
            <th>Factory</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <code>
                    disjointSet()
                </code>
            </td>
            <td>
                Instantiates disjoint-set data structure.
            </td>
        </tr>
    </tbody>
</table>

### Methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Returns</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>add</b>(&lt;Object&gt; val)</code></td>
            <td>this</td>
            <td>Adds object to the set.</td>
        </tr>
        <tr>
            <td><b>union</b>(&lt;Object&gt; val1, &lt;Object&gt; val2)</code></td>
            <td>Boolean</td>
            <td>Сonnects val1 with val2.</td>
        </tr>
        <tr>
            <td><b>find</b>(&lt;Object&gt; val)</code></td>
            <td>String</td>
            <td>Returns identifier for a given value.</td>
        </tr>
        <tr>
            <td><b>connected</b>(&lt;Object&gt; val1, &lt;Object&gt; val2)</code></td>
            <td>Boolean</td>
            <td>Returns true when val1 and val2 are connected.</td>
        </tr>
        <tr>
            <td><b>extract</b>()</code></td>
            <td>Array</td>
            <td>Returns array with all items grouped by connections.</td>
        </tr>
    </tbody>
</table>

## Usage example

    var set = disjointSet(); // instantiate disjoint-set data structure

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

    // add objects to the set
    set.add(person1)
        .add(person2)
        .add(person3)
        .add(person4)
        .add(person5)
        .add(person6);

    // connect some objects to each other
    set.union(person1, person2);
    set.union(person2, person3);
    set.union(person3, person4);
    set.union(person5, person6);

    // check connections
    console.log(set.connected(person1, person2)); // returns true. Direct connection
    console.log(set.connected(person1, person4)); // returns true. Indirect connection
    console.log(set.connected(person5, person6)); // returns true. Another direct connection
    console.log(set.connected(person4, person5)); // returns false. No connection

    /**
     * returns two arrays grouped by connection:
     * [
     *     [person1, person2, person3, person4],
     *     [person5, person6]
     * ]
     */
    console.log(set.extract());

## Order of growth

<table>
    <thead>
        <thead>
            <tr>
                <th>Method</th>
                <th>Order of growth</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>add</th>
                <th>constant</th>
            </tr>
            <tr>
                <th>find</th>
                <th>constant</th>
            </tr>
            <tr>
                <th>connected</th>
                <th>constant</th>
            </tr>
            <tr>
                <th>union</th>
                <th>linear</th>
            </tr>
            <tr>
                <th>extract</th>
                <th>linear</th>
            </tr>
        </tbody>
    </thead>
</table>

## Papers

* Robert Sedgewick and Kevin Wayne, Algorithms, 4th edition, page 216

## Changelog

### 1.0.1 &mdash; 07.04.2014

* connected() method added
* find() method changed

### 1.0 &mdash; 06.04.2014

* First Disjoint-set release