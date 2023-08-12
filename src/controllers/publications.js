const { Router } = require('express');
const router = Router();
const { Publications } = require('../db');

// Obtener todas las publicaciones || Buscar publicación por categoría
router.get('/', async (req, res) => {  
  const allPublications = await Publications.findAll()
  const { category } = req.query;

  if (category) {
    const findCategory = await allPublications.filter(
      pub => pub.category.toLowerCase().includes(category.toLowerCase()));
      
    findCategory.length > 0 
    ? res.send(findCategory) 
    : res.status(404).send(`No hay publicaciones de la categoría "${category}" intenta con otra`);
  } else {
      res.send(allPublications);
    }
});

// Buscar publicación por id
router.get('/:id', async (req, res) => {  
  const allPublications = await Publications.findAll()
  const { id } = req.params;
  
    if (id) {
    const findId = await allPublications.filter(
      pub => pub.id === (id));
      
    findId.length > 0 
    ? res.send(findId) 
    : res.status(404).send(`No existe ninguna publicación con ID "${id}" intenta con otro`);
  } 
});


module.exports = router;