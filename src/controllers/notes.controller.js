const notesModel = require("../models/notes.model");
const {
  getNotesService,
  getNoteService,
  createNoteService,
  updateNoteService,
  deleteNoteService,
  deleteAllNotesService,
} = require("../services/notes.service");

const getNotes = async (req, res) => {
  let result = await getNotesService();
  res.json(result);
};

const getNote = async (req, res) => {
  const id = req.params.id;

  let result = await getNoteService(id);

  if (!result) {
    res.json({ message: "Note is not found" });
  }

  res.json(result);
};

const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    let result = await createNoteService({ title, content });
    res.json({ message: "Note is created successfully", Note: result });
  } catch (error) {
    res.json({ Error: "POST error", error });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  try {
    let result = await updateNoteService(id, { title, content });
    res.json({ message: "Note is updated successfully", Note: result });
  } catch (error) {
    res.json({ Error: "UPDATE error", error });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    await deleteNoteService(id);
    res.json({ message: "Note is deleted successfully" });
  } catch (error) {
    res.json({ Error: "DELETE error", error });
  }
};

const deleteAllNotes = async (req, res) => {
  try {
    await deleteAllNotesService();
    res.json({ message: "Notes are deleted successfully" });
  } catch (error) {
    res.json({ Error: "DELETE error", error });
  }
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  deleteAllNotes,
};
