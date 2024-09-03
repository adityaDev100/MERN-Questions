# 1. Explain the javascript DOM , What is virtual DOM , What is Reconciliation, What is react fiber ?


* Document Object Model (DOM)

DOM stands for document object model , whenever any web page is loaded ,browser creates a document object model of the page, DOM is a object that allows programs to change , add , update or get something in a web page

DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript


* Virtual DOM and Reconciliation

React introduced the virtual DOM ,The Virtual DOM is an in-memory representation of the Real DOM, its a lightweight copy of the actual DOM.
same as the real DOM virtual dom is also a object.but its a lightweight javascript object
When a component's state or props change, React creates a new virtual DOM with updates. then it compares the new Virtual DOM with the previous version of DOM that is a copy of real DOM, then between these two virtual dom by applying diffing algorithm it determine the minimal set of changes needed to update the Real DOM,
it means instead of repainting real DOM for new changes, it change the specific node of the real dom where changes happen
this process called "reconciliation."


* React Fiber

React Fiber is an reimplementation of React's core algorithm,the primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

    -pause work and come back to it later.
    -assign priority to different types of work.
    -reuse previously completed work.
    -abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.

