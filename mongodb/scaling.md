1. What is Sharding? 

Sharding is when you split your database into smaller parts (called shards) so that the data can be spread across multiple servers instead of storing everything in one place.

Imagine you’re building an e-commerce website (like Amazon) using the MERN stack.
If you have:
1 million users
10 million orders
...and you store all of that in one MongoDB server, it can get slow and hard to scale.
So instead, MongoDB can shard the data:
Some user data goes to Shard 1
Some to Shard 2
Some to Shard 3, etc.
Each shard is a separate MongoDB server that holds a portion of the data.

Why Use Sharding?
⚡ Better performance
🧠 Handles large data efficiently
💥 Prevents one server from getting overloaded
📈 Makes it easy to scale horizontally (add more servers as needed)


2. What is Cluster/Replica Sets ?

Clustering in databases means grouping multiple servers (nodes) together to work as a single system.
Replica Set is A set of MongoDB servers with the same data (copies).
One server is the primary, others are secondaries.
If the primary goes down, one secondary is automatically promoted.


difference between cluster and replica sets is 
Grouping multiple DB servers to act as one system is Clustering
High availability (same data on multiple servers) is Replica sets

For example we have a single server with our database , every users use this server to use our application , now we are replicating these servers with same database , means in every server same data is available , so it will make out system available every time.

a cluster is a team of database nodes working together to make sure:
Your data is always available
Load is balanced
The system recovers from failures

Why Use clusters/Replica Sets ?
⚡ Redundancy
🧠 Load balancing
💥 Availability
📈 Makes it easy to scale horizontally (add more servers as needed)
☁️Cloud-ready apps need auto-scaling and high uptime
💥 Cluster = your app won’t crash if a server goes down
⚡ Better read/write speed with distributed work
🔒 Great for production-level apps


3. What is Data Models in DBMS ?

A data model defines:
How data is stored
How data is related
How data is accessed

Its a blueprint for your database — like how tables, fields, and relationships are organized.

Type of data models :
- Relational Model (Used in MySql and PostSql) with rows and columns (like Excel sheets)
- Document Model (Used in MongoDB) with JSON-like documents ({ key: value })
- Key-Value Model (Used in Redis ans Dynamo DB) Simple key-value pairs



4. Query Rollback in MongoDB

Rollback is part of ACID properties → "Atomicity" (all-or-nothing)
Used to maintain data consistency
Requires transactions
MongoDB supports rollback only with replica sets or sharded clusters

const session = await mongoose.startSession();
session.startTransaction();

try {
  await Account.updateOne({ userId: 'A' }, { $inc: { balance: -500 } }, { session });
  await Account.updateOne({ userId: 'B' }, { $inc: { balance: 500 } }, { session });

  await session.commitTransaction(); // Save changes
} catch (error) {
  await session.abortTransaction(); // Rollback if error
} finally {
  session.endSession();
}
