const express = require("express");
const todoRoutes=require("./todoRoutes");

const server = express();

// Middleware to handle JSON requests
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Add other CORS headers as needed
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files from the React app
// server.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

server.use("/api/todos/", todoRoutes.router);

// server.get("/", (req, res)=>{
//     res.send("Welcome to Skill Builder Suite");
// });
// console.log("Server is listening at 4100");

// server.listen(4100);

// Catchall handler to serve the React app for any unknown routes
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4100;
server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});

