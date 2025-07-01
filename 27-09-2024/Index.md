# 1. What is Redis ?

- Redis is a type of database, but it’s a little different from like MySQL or MongoDB database.
- Instead of storing data on a hard drive, Redis keeps data in memory (RAM). This makes it super fast because reading from and writing to memory is much quicker than using a disk.
- People often use Redis when they need to access or update data really quickly. It’s often used for things like caching (temporarily storing data to speed up access), managing sessions, or handling real-time tasks like leader-boards in games.
In short: Redis is a super-fast, in-memory database often used for quick data access and temporary storage.



# 2 . What is Kafka ?

Kafka is like a messaging system that helps different apps talk to each other by sending and receiving data in real-time. Imagine you have a delivery service where packages (data) are put on a conveyor belt, and different workers (apps) pick up the packages they need.

Difference between a database and kafka is that kafka has hight throw-put it means it can execute more read and write operation per seconds and db has low throw-put means it can execute less read and write operation per second.
but kafka has less storage and db has hard drive to store more data 

it works on publisher and consumer model , pub sub model or queue model , means one publisher and many consumer or one publisher and one consumer

When an app has something new to share, it puts it on Kafka’s conveyor belt. Other apps that need this data can pick it up whenever they want. This way, everyone gets the information they need without having to wait.

In really simple terms: Kafka helps apps send messages to each other quickly and efficiently, kind of like a fast-moving delivery system for data.


# 3 . What is Event loop in Browser js and node js 

in browser javascript there are web apis like DOM, Windows and eventListeners but browser don't have network or file system operations, browser itself provides event loop for javascript running in browser side .
this event loop handle async tasks like setTimeout, setInterval, fetch , ajax and promises, mutation observer etc.

Event loop allow javascript to execute synchronous code in the call stack while handling async operations by queuing their callbacks in the task queues. it ensure thar async tasks do not block the main thread and are execute when main thread is empty.

Node.js is a runtime environment which is created on top of chrome v8 engine , libuv provides event loop to nodejs which is created in c++, this libuv is a dependency for node.js which allow not blocking I/O operations in nodejs, multiple request handling in one time while js is a single threaded language.
