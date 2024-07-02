const express = require("express");
const controller = require("./todoController");

const router = express.Router();

router.get("/",controller.get);
router.post("addPost", (req,res)=>{
    console.log("addTodo called");
    return res.end(JSON.stringify(todos));
});

module.exports.router=router;