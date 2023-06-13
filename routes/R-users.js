const express = require('express')
const userControllers = require('../controllers/C-users')
const router = express.Router()
router.use(express.json());

//get all
router.get('/users', userControllers.list)

//get one
router.get('/users/:id', userControllers.show)

//create
router.post('/users', userControllers.create)

//update
router.put('/users/:id', userControllers.update)

//delete
router.delete('/users/:id', userControllers.deleteUsers)

module.exports = router;