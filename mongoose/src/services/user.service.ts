import { UserModel } from "../models/user.model";
import type { IUser } from "../types/user.types";
export class UserService {

    async getAllUsers() {
        return await UserModel.find({});
    }

    async getUserById(id: number) {
        return await UserModel.findOne({ id });
    }

    async createUser(userData: IUser) {
        return await UserModel.create(userData);
    }

    async updateUser(id: number, updateData: Partial<IUser>) {
        return await UserModel.findOneAndUpdate({ id }, updateData, { new: true });
    }

    async deleteUser(id: number) {
        return await UserModel.findOneAndDelete({ id });
    }
}
