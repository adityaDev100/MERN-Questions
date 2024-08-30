
# What is this ?
In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

* In an object method, this refers to the object.
* Alone, this refers to the global object.
* In a function, this refers to the global object.
* In a function, in strict mode, this is undefined.
* In an event, this refers to the element that received the event.
* Methods like call(), apply(), and bind() can refer this to any object.

Note: this is not a variable. It is a keyword. You cannot change the value of this.


* Example : (here this refers to person object) : 
        const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
        };

* here this alone refer to global object (window object)  

        let x = this

* this in method refer to object        

        fullName : function() {
        return this.firstName + " " + this.lastName;
        }
