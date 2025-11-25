const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 8000;
app.use(express.json());

//routes
app.get("/api/users",(req,res) =>{
    return res.json(users);
})

//example of sending html
// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map((user) => `<li>${user.first_name}</li>.join`)}
//     </ul>`
//     res.send(html);
// })

const fun = (req, res)=> {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id)
    return res.json(user);
}

app.get('/api/users/:id',fun);


app.post('/api/users',(req,res)=>{
    // //TODO: Create New User
    // res.json({status:"pending"})
    const newUser = {
        id: users.length,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    users.push(newUser);

    return res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
})

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (req.body.first_name) user.first_name = req.body.first_name;
    if (req.body.last_name) user.last_name = req.body.last_name;
    if (req.body.email) user.email = req.body.email;

    return res.json({
        message: "User updated successfully",
        user
    });
})

app.delete('/api/users/:id', (req, res) => {
    // delete users
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users.splice(index, 1);

    return res.json({ message: "User deleted successfully" });
})
app.listen(PORT , ()=> console.log(`Server started at port ${PORT}`));