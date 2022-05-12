const fs = require("fs");
const express = require("express");
const router = require("express").Router();
const { notes } = require("../../db/db.json");

//API GET request
router.get("/notes", (req, res) => {
  res.json(notes);
  console.log("collecting notes!");
});
//API POST request

//API DELETE request

module.exports = router;
