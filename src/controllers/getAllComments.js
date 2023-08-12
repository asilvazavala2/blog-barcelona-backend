require('dotenv').config()
const { Comments } = require('../db');

const getAllComments = async () => {
  const allComments = await Comments.findAll()
  return (allComments);

};

module.exports = getAllComments;