const { Router } = require('express');

//Call Controllers
const {getUser} = require('../Controllers/getUser.controller.js')
const router = Router();

//Routes
router.get('/getUser/:id', getUser)
router.get('/getUser/', (req, res) => {
    res.status(404).json({message: "Error id not found"})
})

module.exports = router