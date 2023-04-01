const User = require('../models/User')

exports.updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).send(updateUser)
  } catch (error) {
    next(error)
  }
}
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send('User has been deleted')
  } catch (error) {
    next(error)
  }
}
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.getUser = async (req, res, next) => {
  const newUser = new User(req.body)
  try {
    const savedUser = await newUser.save()
    res.status(200).send(savedUser)
  } catch (error) {
    next(error)
  }
}
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (error) {
    next(error)
  }
}
