// {
//  id: number,
//  title: string,
//  description: string,
//  status: "open" | "resolved"
// }

// Scenario: Complaints regarding wifi-provider

import express from 'express'

import complaintRoutes from './routes/complaint.routes.js'

import logger from './middleware/logger.middleware.js'

import auth from './middleware/auth.middleware.js'

const app = express();

app.use(express.json());

app.use(logger);

app.use(auth);

app.use('/complaints', complaintRoutes)

export default app;
