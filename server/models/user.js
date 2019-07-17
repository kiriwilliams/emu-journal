const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: { 
        type: String, required: true, unique: true 
    },
    password: {
         type: String, required: true 
    },
    email: { 
        type: String
    },
    entries: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Entry"
        }
      ],
    tags: [{ type: String }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;