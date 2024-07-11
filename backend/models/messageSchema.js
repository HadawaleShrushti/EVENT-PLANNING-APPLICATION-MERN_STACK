import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
        minLength: [3, "Name must contain ateast 3 character"],
    },


    email: {
        type: String,
        required: [true, "Email required"],
        validate: [validator.isEmail, "Please provide valid email"],
    },

    subject: {
        type: String,
        required: [true, "Subject required"],
        minLength: [5, "Subject must contain ateast 5 character"],
    },

    message: {
        type: String,
        required: [true, "Message required"],
        minLength: [5, "Message must contain ateast 5 character"],
    },


});
export const Message = mongoose.model("Message", messageSchema);