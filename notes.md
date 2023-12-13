# Module 7 assessment

## **Initial runtime.js** ##

Results for the tinyArray
insert 36 μs
append 86.8 μs

Results for the smallArray
insert 59.1 μs
append 123 μs

Results for the mediumArray
insert 206.2 μs
append 156.5 μs

Results for the largeArray
insert 9.8549 ms
append 717.3 μs

Results for the extraLargeArray
insert 974.1154 ms
append 2.9136 ms


### *** Write up *** ##

Initially the doubler insert is faster than the the doublerappend functions. As we reach medium sized array at roughly 1000 elements the append is significantly faster than the insert function. 

Both trend logarithmically but insert is significantly sharper as array sizes increase.

The unshift method that the doublerInsert function uses is less efficient for larger arrays compared to a push method because each time a new item is entered the method will iterate through all of the elements in the current array to modify its location where the push method adds the new element to the end.