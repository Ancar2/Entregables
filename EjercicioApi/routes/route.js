const express = require ('express')
const controllUser = require('../controller/user.controller')
const controllerWork = require('../controller/work.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { login } = require('../controller/login.controller')
const router = express.Router()

//rutas de usuario
router.get('/users',middlewareJWT, controllUser.getUser)
router.get('/users/:id', controllUser.getOneUser)
router.post('/users/create', controllUser.createUser)
router.put('/users/update/:id', controllUser.updateUser)
router.delete('/users/delete/:id', controllUser.deleteUser)

//rutas de tareas
router.get('/works',controllerWork.getWorks)
router.get('/works/:id', controllerWork.getOneWork)
router.post('/works/create', controllerWork.createWork)
router.put('/works/update/:id',controllerWork.updateWork)
router.delete('/works/delete/:id',controllerWork.deleteWork )

//Login
router.post('/login', login)

module.exports = router