Exercise 2
1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?

- setImmediate it doesn't use queue of functions. It checks queue of I/O eventhandlers. 

2. Explain the difference between process.nextTick and setImmediate?

- process.nextTick:  which puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers.

- setImmediate: Its callback is placed in the check queue of the next cycle of the event loop. Check queue occurs later than the timer queue. 

3. Name 10 global modules/methods available in Node environment.

- module
- global (The global namespace object)
- process
- buffer
- require
- console
- setInterval(callback, delay) 
- clearInterval()
- setTimeout(callback, delay)  
- clearTimeout()
- setImmediate
- clearImmediate





