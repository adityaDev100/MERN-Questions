* Mongodb Time-series collection :

1. Specifically optimized for storing and querying time-series data, such as sensor readings, logs, or events, where each document includes a timestamp.

2. In Normal collection documents are stored as they are inserted, with no special optimizations for time-based data.
In Time-Series Collection:
Automatically organizes data based on time ranges and metadata fields.
Groups related documents into "time buckets", reducing storage overhead and improving performance for time-range queries.

3. Normal Collection:
Optimized for general CRUD operations and diverse queries.
Requires manual indexing to optimize performance for specific use cases.
On the other hand Time-Series Collection Optimized for time-based queries (e.g., filtering by date range).
MongoDB uses specialized indexes and compression techniques to store time-series data more efficiently.

4. making operations like $group and $match on time-series data faster and more efficient for time-series collection.