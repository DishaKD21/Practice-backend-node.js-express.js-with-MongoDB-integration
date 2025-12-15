import express from "express";
import { connectDB } from "./config/db";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

async function startServer() {
    await connectDB();

    app.use("/api/users", userRoutes);

    app.listen(8000, () => {
        console.log("Server running at http://localhost:8000");
    });
}
startServer();