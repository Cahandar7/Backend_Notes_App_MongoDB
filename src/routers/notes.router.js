const { Router } = require("express");
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  deleteAllNotes,
} = require("../controllers/notes.controller");

const notesRouter = Router();

notesRouter.get("/", getNotes);

notesRouter.get("/:id", getNote);

notesRouter.post("/", createNote);

notesRouter.put("/:id", updateNote);

notesRouter.delete("/:id", deleteNote);

notesRouter.delete("/", deleteAllNotes);

module.exports = notesRouter;
