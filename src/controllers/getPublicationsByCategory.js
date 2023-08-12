require('dotenv').config()
const { Publications } = require("../db");

const getPublicationsByCategory  = async (category) => {
  const findPublications = await Publications.findAll({
    where: { category }
  });

  if (!findPublications) throw { message: "Not Found!" };
  return findPublications;
};

module.exports = getPublicationsByCategory;