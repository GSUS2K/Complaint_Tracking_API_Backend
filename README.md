# Complaint_Tracking_API_Backend
RESTful API to track complaints with authorization

Prereq: Node and express js


PS:

Problem Statement
You must build a backend REST API using Node.js and Express.js for handling complaints. The main purpose of
this assignment is to understand Express routing, middleware, and clean backend architecture. No database is
allowed. All data must be stored in memory using JavaScript arrays.

Mandatory Rules
• NO database (MongoDB, MySQL, PostgreSQL, etc.).
• Use in-memory arrays only.
• Use express.Router() for all routes.
• Do NOT write business logic inside routes.
• Controllers must handle all logic.
• Use ES Modules (import / export).
• Follow the folder structure exactly.

Required Folder Structure
complaint-api/
■
■■■ server.js
■■■ app.js
■
■■■ routes/
■ ■■■ complaint.routes.js
■
■■■ controllers/
■ ■■■ complaint.controller.js
■
■■■ middleware/
■ ■■■ logger.middleware.js
■ ■■■ auth.middleware.js
■
■■■ package.json

API Routes
• GET /complaints → Fetch all complaints (Public)
• POST /complaints → Create a new complaint (Public)
• PUT /complaints/:id/resolve → Resolve a complaint (Protected)
• DELETE /complaints/:id → Delete a complaint (Protected)

Complaint Object Structure
{
id: number,

title: string,
description: string,
status: "open" | "resolved"
}

Middleware Requirements
• Logger Middleware (App-level): logs HTTP METHOD and URL for every request.
• Auth Middleware (Router-level): logs 'Auth checked' and protects resolve and delete routes.
• Middleware execution order must be visible using console.log().

Server Requirements
Server must run on port 3000 and print: Server running on port 3000

Evaluation Criteria
• Correct folder structure
• Proper use of express.Router()
• Correct middleware usage and order
• Clean separation of routes and controllers
• Readable and clean code

Submission Instructions
Submit a GitHub repository link. The project must run using 'npm start' without errors.
