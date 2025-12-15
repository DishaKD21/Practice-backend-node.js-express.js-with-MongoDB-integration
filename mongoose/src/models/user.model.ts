import mongoose, { Schema } from "mongoose";
import type { IUser } from "../types/user.types";

const UserSchema: Schema = new Schema<IUser>({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String },
    job_title: { type: String }
});

export const UserModel = mongoose.model<IUser>("users", UserSchema);
