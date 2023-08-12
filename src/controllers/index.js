const deleteComment = require("./deleteComment");
const getAllComments = require("./getAllComments");
const getAllPublications = require("./getAllPublications");
const getPublicationsByCategory = require("./getPublicationsByCategory");
const getPublicationById = require("./getPublicationById");
const postComment = require("./postComment");
const updateComment = require("./updateComment");

module.exports = controllers = {
  deleteComment,
  getAllComments,
  getAllPublications,
  getPublicationsByCategory,
  getPublicationById,
  postComment,
  updateComment
};