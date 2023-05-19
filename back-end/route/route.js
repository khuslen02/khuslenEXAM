const express = require("express");
const router = express.Router();
const { createTodo, getTodo } = require('../controller/controller');
router


.post("/", createTodo)
.get("/", getTodo)
.get(    "/test", getTodo)

console.log("fafafafa");
