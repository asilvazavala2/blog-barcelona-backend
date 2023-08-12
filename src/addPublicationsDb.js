const pubJson = require('./publications.json')
const { Publications } = require('./db');

const addPubsToDb = () => {
  pubJson.Search.map(el => Publications.findOrCreate({
     where: {
      title: el.title,
      date: el.date,
      author: el.author,
      image: el.image,
      category: el.category,
      description: el.description,
      theme: el.theme
    }
  }))

  Publications.findAll();
  console.log('Publications added to DB');
}

module.exports = {
  addPubsToDb,
}