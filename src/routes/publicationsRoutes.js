require('dotenv').config()
const controllers = require("../controllers");
const express = require("express");

const publicationsRoutes = express.Router();

publicationsRoutes
.get("/", async (req, res) => {
  const { category } = req.query;
    if (category) {
      try {
      const data = await controllers.getPublicationsByCategory(category);
      if (data) {
        res.send(data);
      }
      } catch (error) {
        console.log(error)
        res.status(404).send(error);
      }
    } else {
      try {
        const data = await controllers.getAllPublications();
        res.send(data);
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    }
})

.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.send(await controllers.getPublicationById(id));
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
})

module.exports = publicationsRoutes;