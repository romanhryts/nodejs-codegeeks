require('dotenv').config();

// imports
const express = require('express');
const cors = require('cors');

// environment variables and server
const PORT = process.env.PORT || 8000;
const app = express();

// routers and middlewares
const imageRouter = require('./api/routers/image.router');
const loggerMiddleware = require('./api/middlewares/logger.middleware');

function startServer() {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
    } catch (error) {
        console.log(`Error while starting the server: ${error.message}`);
    }
}

// middlewares
app.use(cors({ credentials: true, origin: ['http://localhost:4200', 'http://localhost:3000'] }));
app.use(express.static('public'));
app.use(loggerMiddleware)

app.use('/api', imageRouter)

startServer();
