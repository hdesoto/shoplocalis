/* global __base */
const path = require('path')
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require(path.join(__base, 'models/User'))
const SECRET = process.env.SECRET || 'thelionwhale'

const jwtOptions = {
  secretOrKey: SECRET || 'thelionwhale',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(jwtOptions, (jwtPayload, done) => {
  User.findById(jwtPayload.id)
    .then(user => {
      if (user) done(null, user)
      else done(null, false)
    })
    .catch(err => done(err, false))
})

module.exports = strategy
