const notesModel = require("../models/notes.model");

const getNotesService = async () => {
  let notes = await notesModel.find();
  return notes;
};

const getNoteService = async (id) => {
  let note = await notesModel.findById(id);
  return note;
};

const createNoteService = async (data) => {
  let newNote = await notesModel.create({
    title: data.title,
    content: data.content,
  });

  return newNote;
};

const updateNoteService = async (id, data) => {
  let changedNote = await notesModel.findByIdAndUpdate(id, data, { new: true });

  return changedNote;
};

const deleteNoteService = async (id) => {
  await notesModel.findByIdAndDelete(id);
};

const deleteAllNotesService = async () => {
  await notesModel.deleteMany();
};

module.exports = {
  getNotesService,
  getNoteService,
  createNoteService,
  updateNoteService,
  deleteNoteService,
  deleteAllNotesService,
};
