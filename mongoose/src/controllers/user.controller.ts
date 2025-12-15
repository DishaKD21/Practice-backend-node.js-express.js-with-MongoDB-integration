import type { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {

    async getUsers(req: Request, res: Response) {
        const users = await userService.getAllUsers();
        return res.json(users);
    }

    async getUser(req: Request, res: Response) {
        const id = Number(req.params.id);
        const user = await userService.getUserById(id);

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    }

    async createUser(req: Request, res: Response) {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({ message: "User created", user: newUser });
    }

    async updateUser(req: Request, res: Response) {
        const id = Number(req.params.id);
        const updated = await userService.updateUser(id, req.body);

        if (!updated) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated", user: updated });
    }

    async deleteUser(req: Request, res: Response) {
        const id = Number(req.params.id);
        const deleted = await userService.deleteUser(id);

        if (!deleted) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted" });
    }
}
