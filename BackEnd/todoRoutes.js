const express = require("express");
const controller = require("./todoController");

const router = express.Router();
router.get("/",controller.get);
router.post("/addPost", controller.addTodo);

module.exports.router=router;