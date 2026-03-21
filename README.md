# Simple Web Server in Node.js

A simple HTTP web server built with Node.js that serves a static HTML home page and handles multiple routes.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Open your browser and visit:
   - `http://localhost:3000/` — home page
   - `http://localhost:3000/about` — about page
   - Any other route — returns a 404 Not Found response

## Tests

Run the test suite with:
```bash
npm test
```

**Normal cases:**
- `GET /` returns status 200
- `GET /about` returns status 200
- `GET /random-address` returns status 404

**Edge cases:**
- `GET /About` (wrong capitalization) returns status 404
- `GET /about/` (trailing slash) returns status 404
- `GET /about?foo=bar` (query string) returns status 404

---

## Video Demo Reference

- Show the server starting with `node server.js`
- Visit `http://localhost:3000/` in the browser — show the home page
- Visit `http://localhost:3000/about` — show the text response
- Visit an invalid route (e.g. `http://localhost:3000/xyz`) — show the 404 response
- Run `npm test` and show all 6 tests passing
- Point out the 3 normal cases and 3 edge cases in the output

---

# Assignment: Building a Simple Web Server in Node.js

In this assignment, you will create a simple web server using Node.js. This server will serve a basic HTML page and handle different routes including a homepage and an about page. By the end of this assignment, your server will be able to:

Serve an HTML file for the home page.
Display a simple text response for an about page.
Handle invalid routes with a 404 response.
Steps
Step 1: Setup Your Project

Install `http` and `fs` dependencies using npm.
Use `server.js` for your server.
Use the `home.html` file for your homepage.
Step 2: Import Required Modules

Import the `http` and `fs` modules using ES6 `import` syntax.
Step 3: Create HTTP Server

Use the `http` module to create a new HTTP server.
Inside the server, set up a request handler function.
Step 4: Handle Routing

In your request handler function, implement routing.
Handle two routes: `/` for home and `/about` for the about page.
For the `/` route, use the `fs` module to read `home.html` and send its contents.
For the `/about` route, send a simple text response.
Step 5: Handle 404 Responses

Add a default case to handle unknown routes.
Send a `404` status code with a `'Not found'` message for any unknown routes.
Step 6: Start the Server

Have the server listen on a port (preferably `3000`, or `process.env.PORT` for flexibility).
Step 7: Testing Your Server

Start your server and test it by visiting `http://localhost:3000/` and `http://localhost:3000/about`.
Check if the home page loads correctly and if the about page displays the right message.
Try accessing an invalid route to see if the 404 response works.
 

Assignment Submission:
Once you have completed the assignment, please prepare the following for submission:

GitHub Repository:

Push your program to a new GitHub repository.
Ensure that your repository is public so that it can be accessed and reviewed.
Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.
Demonstration:

Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)
Submission:

Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)