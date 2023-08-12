require('dotenv').config()
const { Publications } = require("../db");

const getPublicationById  = async (id) => {
  const findPublication = await Publications.findOne({
    where: { id }
  });

  if (!findPublication) throw { message: "Not Found!" };
  return [findPublication];
};

module.exports = getPublicationById;