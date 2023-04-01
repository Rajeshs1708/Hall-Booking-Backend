const Hotel = require('../models/Hotel')

exports.createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).send(savedHotel)
  } catch (error) {
    next(error)
  }
}
exports.updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).send(updateHotel)
  } catch (error) {
    next(error)
  }
}
exports.deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).send('Hotel has been deleted')
      } catch (error) {
        next(error)
      }
}
exports.getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).send(hotel)
      } catch (error) {
        res.status(500).send(error)
      }
}
exports.getHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).send(savedHotel)
  } catch (error) {
    next(error)
  }
}
exports.getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).send(hotels)
      } catch (error) {
        next(error)
      }
}
