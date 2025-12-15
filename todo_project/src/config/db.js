import mongoose from "mongoose";
const connect = async function(){
    try{
        await mongoose.connect('mongodb://localhost:27017/tododb');
        console.log('Database connected');
    }
    catch(err){
        console.error('Database Connectior Error:',err);
    }
}
export default connect;


/*here we are creating connection to the database
using mongoose to connect to mongodb database
we are using try and catch blovk so we can know if there any error comes during connection
*/
