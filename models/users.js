import mongoose, { Schema } from "mongoose"; //import mongoose and Schema from mongoose

//create a new schema for the user
const userSchema = new Schema(
  {
    //define the fields for the user schema
    name: String,
    email: String,
    password: String,
  },
  {
    //add the timestamps for the user schema
    timestamps: true,
  }
);

//create a new model for the user schema
//the interrogation mark is used to check if the model already exists
const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
