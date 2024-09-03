1. Aggregation in MongoDB
Aggregation in MongoDB is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages can filter, sort, group, reshape, and modify documents that pass through the pipeline.

Example:

Suppose we have a sales collection where each document represents a sale transaction:

        {
        "_id": 1,
        "item": "notebook",
        "quantity": 10,
        "price": 15,
        "date": "2024-09-01"
        }

To calculate the total revenue (price * quantity) for each item sold, you can use an aggregation pipeline like this:

        db.sales.aggregate([
        {
            $group: {
            _id: "$item",
            totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
            }
        },
        {
            $sort: { totalRevenue: -1 }
        }
        ])

This aggregation pipeline groups the sales by item and calculates the totalRevenue for each item. The result is then sorted in descending order by totalRevenue.




2. Lookup Query in MongoDB
$lookup is an aggregation stage in MongoDB that performs a left outer join with another collection. This is useful for combining data from different collections.

Example:

Let's say you have two collections: orders and customers. The orders collection contains documents like this:

        {
        "_id": 1,
        "product": "laptop",
        "customerId": 101
        }
And the customers collection contains documents like this:

        {
        "_id": 101,
        "name": "John Doe",
        "email": "john@example.com"
        }

To combine these collections and get the order along with customer details, you can use the $lookup stage:

        db.orders.aggregate([
        {
            $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customerDetails"
            }
        }
        ])

This query will add the customerDetails array to each order, containing the corresponding customer information.





3. Relational vs Non-Relational Database
Relational Databases (SQL databases) store data in tables with rows and columns. The data is structured and follows a schema, with relationships between tables established through foreign keys. Examples include MySQL, PostgreSQL, and Oracle.

Non-Relational Databases (NoSQL databases) store data in various formats such as documents, key-value pairs, wide-column stores, or graphs. These databases are schema-less, meaning the data structure can be flexible and vary across documents. Examples include MongoDB, Cassandra, and Redis.

Comparison Example:

Relational Database (SQL):

If you have users and orders tables, each order can reference a user through a foreign key:

        CREATE TABLE users (
        id INT PRIMARY KEY,
        name VARCHAR(100)
        );

        CREATE TABLE orders (
        id INT PRIMARY KEY,
        userId INT,
        product VARCHAR(100),
        FOREIGN KEY (userId) REFERENCES users(id)
        );
To get all orders with user details:

SELECT orders.id, users.name, orders.product
FROM orders
JOIN users ON orders.userId = users.id;
Non-Relational Database (NoSQL):

In MongoDB, you might store the same data in a single collection without the need for foreign keys:

        {
        "_id": 1,
        "product": "laptop",
        "user": {
            "id": 101,
            "name": "John Doe"
        }
        }
This way, the user information is embedded directly within the order document, reducing the need for joins.
Key Differences:

Structure: Relational databases enforce a strict schema, whereas non-relational databases offer more flexibility with schema-less designs.
Scalability: Non-relational databases are typically better suited for horizontal scaling, while relational databases often scale vertically.
Use Cases: Relational databases are preferred for transactional systems requiring complex queries and ACID compliance. Non-relational databases are used in scenarios requiring flexible, scalable data storage, like large-scale content management, real-time analytics, or handling unstructured data.






