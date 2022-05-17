import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String },
    lastName: { type: String },
    userName: { type: String },
    age: { type: String },
    email: { type: String },
    password: { type: String }
  },
  {
    timestamps: true
  }
);

const userModel = Mongoose.model("user", UserSchema);

export default userModel;
