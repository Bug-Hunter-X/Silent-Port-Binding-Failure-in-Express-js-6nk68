# Silent Port Binding Failure in Express.js

This repository demonstrates a common yet subtle issue in Express.js applications: the lack of informative error messages when attempting to bind to an already occupied port.

## The Problem

When an Express.js server tries to listen on a port that's already in use, it typically fails silently.  This makes debugging difficult, as there's no clear indication of what went wrong.

## The Solution

The recommended approach is to wrap the `app.listen()` call within a `try...catch` block to gracefully handle the error and provide feedback to the user.

## How to Reproduce

1.  Clone this repository.
2.  Run `node bug.js`.  (This will likely fail silently if port 3000 is already in use)
3.  Run `node bugSolution.js`. (This will show an error message)