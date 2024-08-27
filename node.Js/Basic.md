# 1. What is FrameWorks in programming and why we use them ?

A framework is like a pre-built structure or template that developers can use to avoid starting from scratch when building software. It provides useful tools and components that speed up the development process and can be customized to fit specific project needs.

Frameworks are built using programming languages, and there are many popular ones like Django, Angular, React Native, Django, ExpressJs, and others. They help developers create powerful and feature-rich software.

Some key benefits of using frameworks are:
- They make it easier to test and fix code.
- The code is cleaner and easier to understand.
- They reduce repetitive code, saving time and effort.
- They lower the cost and time needed to complete a project.
- You can modify and expand the features provided by the framework to fit your needs.


# 2. What is Node ? 

"Node is neither a language not a framework , its a runtime environment for executing javascript on the server side"

There are multiple programming languages like python, java , javascript and c++ , for these programming languages there is some frameworks for these programming languages like Django for python , spring boot for java , expressJs for js and 
.Net for c++, these frameworks are like a pre-build template for developers that avoid develop a app from scratch using any programming languages , it provides useful tools and component that speed up development process and easy to debug.


Now we know that there are some programming languages and for these programming languages there are different frameworks , but nodeJs is neither a programming language and nor a frameworks of javascript , "Its a runtime environment for executing javascript code", same for other programming languages , for python runtime environment is CPython , for java JVM , for C++ CLR.

# 3. What is ExpressJs ? 

Express.js is a framework built on the top of nodejs, it is designed to simplify the process of building web applications and APIs by proving a set of features like simple routing system , middleware support etc.


# 4. How Node is a runtime environment on server side ? What is V8 ?

V8 is a JavaScript engine used to execute JavaScript code in the browser (client-side). Node.js is a runtime built using the V8 engine and the C++ language, allowing JavaScript to be executed on the server side.


# 5. What is the difference between runtime environment and framework ?

Runtime environment of any programming language is responsible for execute that programming language code . it primarily focuses on proving the necessary infrastructure for code execution , including services like memory management and input output operations.

On the other hand frameworks primarily focuses on simplifying the development process by providing a pre-built structure an set of tools , components , libraries and best practices .


# 6. What is the difference between js on client Side (Browser) and Server Side(Node.js) ?

client side                                                      server-side 

runs on the user web browser                                     runs on server side   
uses html , css and js                                           uses js only 
have document , window , navigator and event objects             have request response ,server and database object
handle UI interaction                                            handle business logic, data storage ,                                                        access authorization and authentication



# 7. What is MVC Framework ? 

The Model-View-Controller (MVC) framework is an architectural pattern that separates an application into three main logical components Model, View, and Controller. Each architectural component is built to handle specific development aspects of an application.
The main goal of this design pattern was to solve the problem of users controlling a large and complex data set by splitting a large application into specific sections that all have their own purpose.

Components of MVC

* Controller
* Model
* View

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220224160807/Model1.png"/>

1. Controller:
The controller is the component that enables the interconnection between the views and the model so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, it just tells the model what to do. It processes all the business logic and incoming requests, manipulates data using the Model component, and interact with the View to render the final output.

Responsibilities:
* Receiving user input and interpreting it.
* Updating the Model based on user actions.
* Selecting and displaying the appropriate View.

2. View:
The View component is used for all the UI logic of the application. It generates a user interface for the user. Views are created by the data which is collected by the model component but these data aren’t taken directly but through the controller. It only interacts with the controller. In MERN stack view part will be our React Application that take care of all the UI logic of the application.

Responsibilities:
* Rendering data to the user in a specific format.
* Displaying the user interface elements.
* Updating the display on UI actions by end user.

Model:
The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. It can add or retrieve data from the database. It responds to the controller’s request because the controller can’t interact with the database by itself. The model interacts with the database and gives the required data back to the controller.In model part we define schemas for different data collections that manage data communication between controller and database.

Responsibilities:
* The model layer is responsible for the application's data logic and storing and retrieving data from back-end data stores. The model layer might also include mechanisms for validating data and carrying out other data-related tasks.


Here's a simplified and corrected version of your explanation:

---

**Example:** We have a basic application that shows a list of books. The user can filter these books or click on any book to see its details. They can also add, update, or delete books from the list.

In the **Model** part, there’s a pre-defined schema for a book, which includes properties like the book's name, author, publish date, etc. When a user wants to add a new book, they fill out a form on the **View** part, created using HTML, CSS, and JavaScript. After filling out the form, the user clicks the "Add" button, which sends a POST request with the form data.

This request goes to the **Controller**, which handles input requests. The controller checks if all the required data is provided. If everything is correct, the controller sends this data to the **Service** part, which is a more detailed breakdown of the controller’s tasks.

In the **Service** part, the data is saved in the database using the book schema defined in the model. The model checks that all validations are met before creating a new entry in the database. If the data is successfully saved, the model sends a success response back to the controller, which then sends it to the view, letting the user know the book was added successfully. If there’s any error during this process, the controller sends an error message back to the user in the view.

---

This version keeps the explanation clear and straightforward.