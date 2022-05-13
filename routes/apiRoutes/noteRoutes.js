const fs = require("fs");
const router = require("express").Router();
const notes = require("../../db/db.json");
const generateUniqueId = require("generate-unique-id");
const path = require("path");

//API GET request
router.get("/notes", (req, res) => {
  res.status(200).json(notes);
  console.log("collecting notes!");
});

//API POST request
router.post("/notes", (req, res) => {
  const newNote = req.body;
  const id = generateUniqueId();
  newNote.id = id;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
  res.status(200).send("New note created!");
});

//API DELETE request
// router.delete("/notes/:id", (req, res) => {
//   const id = req.params.id;

//   fs.writeFileSync(
//     path.join(__dirname, "../../db/db.json"),
//     JSON.stringify({ notes })
//   );
//   res.status(200).send("Note deleted!");
// });

module.exports = router;
