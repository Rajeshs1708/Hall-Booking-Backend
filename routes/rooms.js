const express = require('express')
const router = express.Router()
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRooms,
  getRoom
} = require('../controllers/room')

//CREATE
router.post('/', createRoom)

//UPDATE
router.put('/:id', updateRoom)

//DELETE
router.delete('/:id/:hotelid', deleteRoom)

//GET
router.get('/:id', getRoom)

//GET ALL
router.get('/', getRooms)

module.exports = router
