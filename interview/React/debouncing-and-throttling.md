# Difference between Debouncing and Throttling ? 

1. Debouncing
Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed. This is useful if you have a frequently used function—say, a scroll or resize event listener—and don’t want to trigger it too frequently because that might slow down the browser.


        function debounce(func, delay) {
            let timerId;
            return function () {
                const context = this;
                const args = arguments;
                clearTimeout(timerId);
                timerId = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        }



2. Throttling
Throttling is a similar technique to debouncing, but instead of delaying the execution of a function, it limits the rate at which a function. This is useful when a function, such as a mousemove or keydown event listener, may be called repeatedly but need not be run each time.


        function throttle(callback, delay = 1000) {
            let shouldWait = false;
            return (...args) => {
                if (shouldWait) return;
                callback(...args);
                shouldWait = true;
                setTimeout(() => {
                    shouldWait = false;
                }, delay);
            };
        }


# Difference : 

Debouncing waits for a certain time before invoking the function again.
Throttling limits the number of times the function can be called over a certain period.


Ensures that the function is called only once, even if the event is triggered multiple times.
Ensures that the function is called at a regular interval, even if the event is triggered multiple times.


Useful when you want to delay the invocation of a function until a certain period of inactivity has passed.
Useful when you want to list the Frequency of function calls.


Eg. You can debounce an async API request function that is called every time the user types in an input field.
Eg. You can throttle a slide change Function that is called every time the user clicks a button in a carousel.