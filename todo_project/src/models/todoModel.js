import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {type :String ,required :true},
    desc : {type :  String ,required :true},
    iscompleted : {type :Boolean ,default : false},
    createdAt : {type : Date , default : Date.now}
});
 const TodoModel = mongoose.model("Todo", todoSchema);
export default TodoModel;
/*
here we are creating schema for the todo tasks
defining structure of the data that will be stored in the database
from this file we know what are the field are there are required for each task
*/