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
            <td>Adds object to the set</td>
        </tr>
        <tr>
            <td><b>find</b>(&lt;Object&gt; val1, &lt;Object&gt; val2)</code></td>
            <td>Boolean</td>
            <td>Returns true when val1 and val2 are connected.</td>
        </tr>
        <tr>
            <td><b>union</b>(&lt;Object&gt; val1, &lt;Object&gt; val2)</code></td>
            <td>Boolean</td>
            <td>Сonnects val1 with val2.</td>
        </tr>
        <tr>
            <td><b>extract</b></code></td>
            <td>Array</td>
            <td>Returns array with all connected items.</td>
        </tr>
    </tbody>
</table>