import { Router } from "express";
import {AllList,GetAllLIstById,UpdateTask,CreateTask,DeleteTask } from "../controllers/todocontroller.js";
const router = Router();

router.get("/", AllList);
router.get("/:id", GetAllLIstById);
router.patch("/:id", UpdateTask);
router.post("/", CreateTask);
router.delete("/:id", DeleteTask);
export default router;

/* 
here we are creating routes and declaring all the endpoints of the api
and calling the function from controller file
we have created routes for getting all tasks, getting task by id, 
updating task, creating task and deleting task 
*/