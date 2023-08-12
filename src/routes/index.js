const { Router } = require('express');
const router = Router();

// Importar todos los routers;
const commentsRoutes = require('./commentsRoutes')
const publicationsRoutes = require('./publicationsRoutes')

// Configurar los routers
router.use('/publications', publicationsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;