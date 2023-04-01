const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { createError } = require('../utils/error')

exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash
    })
    console.log(newUser)
    await newUser.save()
    res.status(200).send('User has been created')
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    if (!user) return next(createError(404, 'User Not Found'))

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or User Name'))
    const { password, isAdmin, ...otherDetails } = user._doc

    res.status(200).send({otherDetails})
  } catch (error) {
    next(error)
  }
}
