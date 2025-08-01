0. Object-Oriented Programming System (OOPS) is a way of programming where we think of everything as objects and classes. Each object represents a thing with properties and actions.

There are other ways to program too, like procedural programming (which focuses on steps or procedures) and functional programming (which focuses on using functions).


there are four main pillar of oops concepts -

Encapsulation 
Abstraction 
Inheritance 
Polymorphism



1. Abstraction means not showing the complexity of any program.
It means the user can use the functionality with the necessary details easily without knowing how it's working inside of the code

2. Encapsulation means -
Keeping variables private (hidden inside the class).

Allowing access or changes only through public methods.


class Person {
  #age; // private variable

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}

const p = new Person(25);
console.log(p.getAge()); // ✅ Allowed
p.setAge(30);            // ✅ Allowed
console.log(p.#age);     // ❌ Not allowed (private)


3. Inheritance means one class (child class) can use properties or methods of another class ( parent class)

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak(); // ✅ Inherited from Animal
myDog.bark();  // ✅ From Dog


4. 
Polymorphism means one function or method can behave differently based on the object that is calling it.
Think of a "Drive" button:

In a car, it moves on wheels.

In a boat, it moves on water.

In a drone, it flies.



1. How to optimize react js application?

Technique	                      Purpose
React.memo/PureComponent	    Skip unnecessary renders
useMemo/useCallback         	Memoize values/functions to avoid recomputation
Code splitting/lazy loading	    Reduce initial bundle, load on demand
Virtualized lists	            Improve performance for large data sets
Avoid inline functions	        Maintain stable references for props
Minified/compressed bundles	    Faster download and parsing
Profiling tools web vitals (lcp,cls)  Identify and resolve real bottlenecks
Debounce/throttle handlers	    Optimize event-driven renders/updates


2. How to handle error in nodejs application at big scale?

| Area                | Technique                                 |
| ------------------  | ----------------------------------------- |
| ✅ API routes       | `try/catch`, async handler wrapper        |
| ✅ Errors           | Centralized error middleware              |
| ✅ Logs             | Console or external logger (Sentry, etc.) |
| ✅ Input validation | Joi / express-validator                   |
| ✅ Crash protection | `process.on('unhandledRejection')`        |
| ✅ Monitoring       | PM2, Docker, Logging services             |
| ✅ Custom errors    | `AppError` class                          |


3. Explain SOLID design principle?

The SOLID design principles are five simple rules that help developers write cleaner, easier-to-maintain, and more flexible code. Here’s a very simple explanation for each letter:

* S — Single Responsibility Principle (SRP): Each part of your code (like a class or module) should have only one job. For example, if a function sends emails, it should not also save files.

* O — Open/Closed Principle (OCP): Your code should be open for extension (easy to add new features), but closed for modification (do not need to change existing code to add new things). For example, you can add new types of notifications without changing the notification system's core code.

* L — Liskov Substitution Principle (LSP): If one piece of code (a child or derived class) replaces another (a parent class), it should work just as well—meaning, you should be able to swap them without problems.
The child should act like the parent in all places where the parent is used, so you don’t have to change other code to accommodate it. That’s what LSP is about.

* I — Interface Segregation Principle (ISP): Don’t force any code to depend on things it doesn’t use. It’s better to have several small, specific interfaces than one big, complicated one.

* D — Dependency Inversion Principle (DIP): High-level modules (the main logic) should not depend directly on low-level modules (detailed implementations).
Instead, both should depend on abstractions like interfaces or abstract classes.
Also, abstractions should not depend on details, but details should depend on abstractions.
This principle helps make your code more flexible, maintainable, and easier to test because you can change or replace low-level modules without affecting high-level modules, as long as they follow the same abstraction.


4. what is Agile methodology?

Agile methodology is a project management and software development approach that breaks work into small, manageable units, prioritizing continuous delivery, collaboration, and the ability to adapt to change. Instead of finishing an entire project and delivering it at once, Agile divides work into iterative cycles (often called sprints or increments), so teams can deliver value more quickly and learn from frequent feedback

Key ideas in Agile:

Work is divided into smaller parts or “iterations.”
Teams review and adapt their approach frequently.
Collaboration and open communication are emphasized.
Customer feedback is taken seriously and incorporated quickly.

Scrum is one of the most widely used Agile frameworks, particularly in software development. It provides a structured way for teams to work together, learn from experience, and improve continuously.

How Scrum works:

Work is split into “sprints,” which are short, fixed periods (usually 1–4 weeks).
Each sprint starts with planning—picking what to work on from a prioritized list (the backlog).
Every day, the team gathers for a short meeting (Daily Scrum) to check progress.
At the end of the sprint, the team demonstrates what they’ve completed to stakeholders (Sprint Review) and then discusses how to improve their process (Sprint Retrospective) for the next sprint.

Kanban is another popular Agile framework


5. CI/CD pipeline explain?

A CI/CD pipeline (Continuous Integration/Continuous Delivery or Continuous Deployment pipeline) is a set of automated processes that enable development teams to build, test, and deliver software changes quickly, reliably, and repeatedly.
Simple Explanation
CI (Continuous Integration): Automatically tests and integrates code changes from multiple developers into a shared code base.
CD (Continuous Delivery/Deployment): Automates the release or deployment of tested code to a production-like or live environment.


6. What is Saas application?

Software as a Service (SaaS) is a cloud-based software delivery model where applications are hosted by a service provider and accessed by users over the internet, typically through a web browser. Instead of buying and installing software on individual computers or servers, users subscribe to the software and use it online. The provider is responsible for maintaining, updating, securing, and running the software and its infrastructure.

7. Explain about ec2 , lambda , s3 and cloudfront ?

EC2 (Elastic Compute Cloud)
Think of Amazon EC2 as a virtual computer (or server) in the cloud.
You can run websites, apps, or anything you’d run on a regular server, but you don’t need to buy the hardware.
EC2 lets you quickly launch, resize, or shut down servers (called “instances”) as your needs change.
You pay only for what you use, and you can select different types of instances (CPU, RAM, storage) for different jobs.


Lambda
AWS Lambda is a “serverless” compute service.
You only write your code, and AWS automatically runs it in response to events (like an HTTP request, a file upload, or even a scheduled job)—no need to set up or manage servers.
It automatically scales based on how much it’s used, and you’re billed just for the actual time your code runs.
You can use Lambda with many programming languages, and it connects smoothly to other AWS services.



S3 (Simple Storage Service)
Amazon S3 is a cloud storage service for storing files and data at any scale.
Files are kept in “buckets” (like special folders) and are called “objects.”
It’s ideal for backups, data archives, websites, photos, videos, logs, and more.
S3 is known for being highly durable, available, and secure, and you only pay for what you store and use.


CloudFront
Amazon CloudFront is a content delivery network (CDN).
It speeds up the delivery of your website’s static and dynamic content (like images, videos, scripts, and APIs) to users around the world.
CloudFront stores “cached” copies of your files at various “edge locations” worldwide, so users get content from the nearest location (improving speed and reducing latency).
It works well with S3, EC2, and Lambda, and is vital for fast, reliable content delivery to global audiences.
