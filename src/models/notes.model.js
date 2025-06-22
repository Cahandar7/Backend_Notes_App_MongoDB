const { Schema, model } = require("mongoose");

const notesSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const notesModel = model("notes", notesSchema);

module.exports = notesModel;
