const mongoose = require("mongoose");
const { Schema } = mongoose;

const useSchema = new Schema({
  googleId: String,
});

mongoose.model("users", useSchema);
