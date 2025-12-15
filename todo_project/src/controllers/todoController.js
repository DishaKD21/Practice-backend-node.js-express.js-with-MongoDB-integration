import {TodoService} from '../services/todoService.js';
const todoService = new TodoService();
async function AllList(req, res) {
    // function to get all tasks
    const result = await todoService.getAllTasks();
    return res.json(result);
}
async function GetAllLIstById(req, res) {
    // function to get task by id
    const result = await todoService.getTaskById(req.params.id);
    return res.json(result);
}
async function UpdateTask(req, res) {
    // function to update task
    const result = await todoService.updateTask(req.params.id, req.body);
    return res.json(result);
}
async function CreateTask(req, res) {
    // function to create task
    const result = await todoService.createTask(req.body);
    return res.json(result);
}
async function DeleteTask(req, res) {
    // function to delete task
    const result = await todoService.deleteTask(req.params.id);
    return res.json(result);
}


export {AllList, GetAllLIstById, UpdateTask, CreateTask, DeleteTask};   

/* here we are creating controller functions for each endpoint of the api
   what we will do when these function gets called from the routes file from routes file we are getting some requests
   in response to that request we are calling these functions from controller file
   what we are doing we are creating the object of service class then we are calling 
   function of that class and in the serive file we are writing all the business logic to
   interact with the database in model file it will have structure of the data 
   and whatever response we are getting from the service file we are sending that response back to the client
   through res.json() method 
*/