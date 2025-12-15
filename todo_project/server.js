import express from 'express';
import todoRoutes from './src/routes/todoRoutes.js';
const app = express();
const port = 8000;
app.use(express.json());

app.use('/api/task', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//here we are creating server and from this page call is going to the routes file