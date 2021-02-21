const express = require('express')
const routes = express.Router()

const musicController = require('./controllers/MusicController')

routes.get('/musics', musicController.index)
routes.get('/musics/:id', musicController.show)
routes.post('/musics', musicController.store)
routes.put('/musics/:id', musicController.update)
routes.delete('/musics/:id', musicController.destroy)

module.exports = routes