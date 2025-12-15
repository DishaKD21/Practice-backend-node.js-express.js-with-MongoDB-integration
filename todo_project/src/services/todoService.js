import TodoModel from "../models/todoModel.js";
class TodoService {
    async getAllTasks() {
        // logic to get all tasks from database
        return await TodoModel.find();
    }
    async getTaskById(id) {
        // logic to get a task by id from database
        return await TodoModel.findById(id);
    }
    async updateTask(id, data) {
        // logic to update a task by id in database
        return await TodoModel.findByIdAndUpdate(id, data, { new: true });
    }
    async createTask(data) {
        // logic to create a new task in database
        return await TodoModel.create(data);
    }
    async deleteTask(id) {
        // logic to delete a task by id from database
        return await TodoModel.findByIdAndDelete(id);
    }
}
export {TodoService};


/* here we are creating service class which will have
 all the business logic to interact with the database */