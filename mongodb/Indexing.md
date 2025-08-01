https://www.mongodb.com/resources/basics/databases/database-index

https://www.geeksforgeeks.org/indexing-in-mongodb/

What is an index?
A database index is a special data structure that provides faster access to data and helps create highly performant applications. An index usually consists of two columns: the search key and the data pointer. The key stores the value you want to search for and the pointer points to the block where the data resides. Let’s say you have an index on the ‘score’ field (column) of a collection (table) named 'exam'. When you want to access the scores that are < 40, the index will scan through blocks rather than individual documents (rows).