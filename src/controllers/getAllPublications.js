require('dotenv').config()
const { Publications } = require('../db');

const getAllPublications = async () => {
  const allPublications = await Publications.findAll()
  return (allPublications);
};

module.exports = getAllPublications;