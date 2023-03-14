const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/point', userController.createPoint)
router.get('/point', userController.getPoints)
router.get('/point/:id', userController.getOnePoint)
router.put('/point', userController.updatePoint)
router.delete('/point/:id', userController.deletePoint)


module.exports = router