require('dotenv').config()
const controllers = require("../controllers");
const express = require("express");

const commentsRoutes = express.Router();

commentsRoutes
  .get("/", async (req, res) => {
    try {
      res.send(await controllers.getAllComments());
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  .post("/", async (req, res) => {
    const commentCreationForm = req.body;
    try {
      res.status(201).send(await controllers.postComment(commentCreationForm));
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  })
  
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const commentUpdateForm = req.body;
    try {
      res.status(201).send(await controllers.updateComment(id, commentUpdateForm));
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  })
  
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      res.status(201).send(await controllers.deleteComment(id));
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  });

module.exports = commentsRoutes;