1. Explanation:

Both debouncing and throttling are techniques to control how often a function is executed, especially in response to high-frequency events like scroll, resize, or input.

🔁 Debouncing
Debouncing ensures a function is called only after a specified delay has passed since the last time it was invoked.

Use case: Search input, autocomplete, window resize

Behavior: Waits for the user to stop triggering the event

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

🔁 Throttling
Throttling ensures a function is called at most once every specified time interval, regardless of how often the event occurs.
it limit the rate of function execution

Use case: Scroll events, API rate limiting, button spamming

Behavior: Executes at regular intervals

function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}