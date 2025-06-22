const { Router } = require("express");
const notesRouter = require("./notes.router");

const mainRouter = Router();

mainRouter.use("/notes", notesRouter);

module.exports = mainRouter;
