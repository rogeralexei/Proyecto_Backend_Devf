const express = require('express')
const { route } = require('express/lib/router')
const router= express.Router()
const movieController = require('../controllers/MovieController')

router.post("/movies", movieController.create)
router.get("/movies", movieController.findAll)
router.get("/movies/:id", movieController.findByID)
router.patch('/movies/:id', movieController.update)

router.delete('/movies/:id', movieController.remove)

module.exports = router;