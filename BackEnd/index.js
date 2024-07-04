const express = require("express");
const path = require('path');
const todoRoutes=require("./todoRoutes");

const server = express();

// Middleware to handle JSON requests
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Serve static files from the React app
server.use(express.static(path.join(__dirname, '..', 'FrontEnd', 'build')));
server.use("/api/todos/", todoRoutes.router);

// Catchall handler to serve the React app for any unknown routes
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'FrontEnd', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4100;
server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});

