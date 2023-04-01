const express = require('express')
const router = express.Router()
const {
  updateUser,
  deleteUser,
  getUsers,
  getUser
} = require('../controllers/user')

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)

//GET
router.get('/:id', getUser)

//GET ALL
router.get('/', getUsers)

module.exports = router
