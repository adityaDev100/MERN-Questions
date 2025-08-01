1. SQL vs NoSQL Database ?
2. How to choose between sql and noSql in any project ?


1. SQL
SQL stands for structure query language which is used to query relational database system (RDBMS).
In Sql there are tables, in these tables there are rows and columns, there is a relation between multiple tables.
So SQL is a way to query this data or managing this data which is present inside these tables.

* Structure - It has tables , rows , columns, pre-determined schema before we start query in it and there are relation between multiple tables.

* Scaling - So there are two types of scaling in any database:

  Vertical Scaling - When new resources are added to the existing system to meet the expectation, it is known as vertical scaling.Vertical scaling is based on the idea of adding more power(CPU, RAM,Storage) to existing systems, basically adding more resources.Vertical scaling is not only easy but also cheaper than Horizontal Scaling. It also requires less time to be fixed. 

  Horizontal Scaling - When new server racks are added to the existing system to meet the higher expectation, it is known as horizontal scaling. 
  Horizontal scaling is based on the idea of adding more machines to our pool of resources. Horizontal scaling is difficult and also costlier than Vertical Scaling. It also requires more time to be fixed. 


We can scale our SQL database by using vertical scaling, horizontal scaling(sharding) is not well supported in SQL 

Reasons SQL Doesn't Support Horizontal Scaling Well:

ACID Transactions – Hard to maintain consistency across distributed nodes.

Joins Across Nodes – SQL databases are designed for complex joins across multiple tables,When the data is sharded across nodes, performing joins across shards is very inefficient and requires network calls between nodes, increasing latency and reducing performance.

Strong Consistency – Most relational databases use a strong consistency model, often relying on a single source of truth (primary node or leader).In a horizontally scaled setup, multiple nodes may have copies of the data (replicas), but keeping them consistent in real time is hard without sacrificing performance

Vertical Design – Traditional SQL databases are built for scaling up, not out.

CAP Theorem – SQL favors consistency and availability, not partition tolerance.


* Properties - SQL follows ACID properties

A - the entire transaction takes place at once or doesn't happen at all.
C - the database must be consistent before and after all the transaction.
I - multiple transactions occur independently without interference.
D - the changes of a successful transaction occurs even if the system failure occurs.

1. Atomicity: "All or Nothing"
Atomicity ensures that a transaction is atomic, it means that either the entire transaction completes fully or doesn't execute at all. There is no in-between state i.e. transactions do not occur partially. If a transaction has multiple operations, and one of them fails, the whole transaction is rolled back, leaving the database unchanged. This avoids partial updates that can lead to inconsistency.

2. Consistency: Maintaining Valid Data States
Consistency ensures that a database remains in a valid state before and after a transaction. It guarantees that any transaction will take the database from one consistent state to another, maintaining the rules and constraints defined for the data. In simple terms, a transaction should only take the database from one valid state to another. If a transaction violates any database rules or constraints, it should be rejected, ensuring that only consistent data exists after the transaction.

Example: Suppose the sum of all balances in a bank system should always be constant. Before a transfer, the total balance is $700. After the transaction, the total balance should remain $700. If the transaction fails in the middle (like updating one account but not the other), the system should maintain its consistency by rolling back the transaction.

Total before T occurs = 500 + 200 = 700 .
Total after T occurs = 400 + 300 = 700 .


3. Isolation: Ensuring Concurrent Transactions Don't Interfere
This property ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state. Transactions occur independently without interference. Changes occurring in a particular transaction will not be visible to any other transaction until that particular change in that transaction is written to memory or has been committed.

This property ensures that when multiple transactions run at the same time, the result will be the same as if they were run one after another in a specific order. This property prevents issues such as dirty reads (reading uncommitted data), non-repeatable reads (data changing between two reads in a transaction), and phantom reads (new rows appearing in a result set after the transaction starts).


4. Durability: Responsible for Recovery
This property ensures that once the transaction has completed execution, the updates and modifications to the database are stored in and written to disk and they persist even if a system failure occurs. These updates now become permanent and are stored in non-volatile memory. In the event of a failure, the DBMS can recover the database to the state it was in after the last committed transaction, ensuring that no data is lost.



2. NoSQL
NoSQL stand for non-relational database or not only SQL database.
NoSQL works on unstructured data


Structure - it works on unstructured data, it can be four type
key value db
document db
columns db
graph db


* key-value DB - A Key-Value Database is the simplest form of NoSQL database.
It stores data as a collection of key-value pairs, where:
Key = a unique identifier (like a name or ID)
in these type of db we can query data by using key, we can not query data by using value, 
Example - DynamoDB, Redis.


* Document DB - A Document Database is a type of NoSQL database that stores data as documents, usually in JSON, BSON, or XML format.
Each document is a self-contained unit with its own structure — like a row in SQL, but more flexible.
we can query these type of db by both key and value part of the json.
Example - MongoDB, CouchDB


* Column wise DB - A Column-Oriented Database stores data by columns instead of rows.This makes reading specific columns across large datasets very fast, which is great for analytics.
Example - Apache Cassandra

* Graph DB -  A Graph Database stores data in the form of nodes and relationships (edges) — just like a graph in mathematics.
Nodes = entities (e.g., people, products)
Edges = connections/relationships between nodes (e.g., "follows", "bought")
It’s perfect for modeling complex relationships and running relationship-heavy queries efficiently.
Example- OrientDB



Scaling - In NoSQL data is distributed in many nodes , that is why horizontal scaling will be used to NoSQL database scaling.

Properties - 
it follow BASE property

BA - Basically available
Due to replication of data and sharding , the data is available to query most of the time.

S -  Safe State
state of data can be changed without interaction, because data is distributed thats why updated data can be synced automatically in other distributed servers.


E - Eventual Consistency
In distributed nodes , sometime user can get stale data but after some time it will be updated by syncing with updated data node.



2. How to choose between sql and noSql in any project ?
