/*
    ## Node.js Architecture

    Node.js uses an event-driven, non-blocking, single-threaded architecture.
    This means Node.js can handle many requests at the same time without creating multiple threads.

    -------------------------------------------------------------------------
    ## 1) V8 Engine (JavaScript Engine)

    Node.js runs on top of the V8 JavaScript engine (same engine used by Google Chrome).
    V8 is written in C++ and it takes JavaScript code and converts it into fast machine code.
    Because of V8, Node.js is very fast and powerful.

    -------------------------------------------------------------------------
    ## 2) Node.js Core (C++ Layer)

    Under the hood, Node.js itself is a C++ program.
    It embeds the V8 engine and adds extra features that JavaScript alone cannot do,
    like file systems, network operations, threads, buffers, streams, etc.

    JavaScript normally cannot access hardware or operating system functions,
    so Node.js uses C++ to provide these capabilities.

    -------------------------------------------------------------------------
    ## 3) libuv (Important Library)

    Node.js uses a library called "libuv".
    libuv also is written in C and handles:
        - Event Loop
        - Thread Pool
        - Asynchronous I/O operations
        - Timers
        - File system operations

    libuv is responsible for making Node.js non-blocking (asynchronous),
    allowing it to handle many tasks without waiting.

    -------------------------------------------------------------------------
    ## 4) Event Loop (Heart of Node.js)

    The Event Loop is the main part of Node.js.
    Even though Node.js uses a single thread to run JavaScript,
    it can still manage many operations at the same time using the Event Loop.

    The Event Loop continuously checks:
        - Are there any functions to run?
        - Are there callbacks waiting?
        - Did any async operation finish?

    It has multiple phases:
        - Timers phase (setTimeout, setInterval)
        - Pending callbacks
        - Idle/Prepare
        - Poll phase (I/O operations)
        - Check phase (setImmediate)
        - Close callbacks

    The Event Loop keeps running until your program stops.

    -------------------------------------------------------------------------
    ## 5) Thread Pool (Asynchronous Tasks)

    JavaScript runs on a single thread, but heavy tasks
    (file reading, crypto, DNS lookup) cannot run on that thread,
    otherwise everything will hang.

    libuv provides a thread pool (default 4 threads)
    where heavy asynchronous tasks execute in the background.
    Once the task finishes, the callback is pushed back to the Event Loop.

    This is how Node.js is non-blocking even though JavaScript is single-threaded.

    -------------------------------------------------------------------------
    ## 6) Callback Queue / Task Queue

    When asynchronous operations finish, their callbacks are placed
    in the callback queue. The Event Loop picks them one by one based on priority.

    Examples of such callbacks:
        - File read complete
        - HTTP request complete
        - Database query finished

    -------------------------------------------------------------------------
    ## 7) Single Threaded JavaScript Execution

    JavaScript code in Node.js always runs on a single thread (main thread).
    Only heavy internal tasks use the thread pool.

    Because it uses only one main thread:
        - Less memory usage
        - No thread creation overhead
        - Very fast for I/O operations

    -------------------------------------------------------------------------
    ## 8) How Node.js Handles a Request

    Step-by-step:
        1. Client sends request
        2. Event Loop receives it
        3. If request is simple → execute immediately
        4. If request is heavy (file/database) -> send to thread pool
        5. Thread pool completes work in background
        6. Callback added to queue
        7. Event Loop picks callback
        8. Response sent back to client

    Because of this flow, Node.js can handle thousands of requests with very few resources.
*/
