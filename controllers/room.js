const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const { createError } = require('../utils/error')

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save()
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id }
      })
    } catch (error) {
      next(error)
    }
    res.status(200).send(savedRoom)
  } catch (error) {
    next(error)
  }
}

exports.updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).send(updateRoom)
  } catch (error) {
    next(error)
  }
}
exports.deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id)
    res.status(200).send('Room has been deleted')
  } catch (error) {
    next(error)
  }
}
exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id)
    res.status(200).send(room)
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.getRoom = async (req, res, next) => {
  const newRoom = new Room(req.body)
  try {
    const savedRoom = await newRoom.save()
    res.status(200).send(savedRoom)
  } catch (error) {
    next(error)
  }
}
exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find()
    res.status(200).send(Rooms)
  } catch (error) {
    next(error)
  }
}
