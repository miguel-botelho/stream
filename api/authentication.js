const express = require('express')
const firebase = require('firebase/app')

require('firebase/database')
require('firebase/auth')

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_DOMAIN}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_DOMAIN}.firebaseio.com`,
  projectId: process.env.FIREBASE_DOMAIN,
  storageBucket: `${process.env.FIREBASE_DOMAIN}.appspot.com`,
}

firebase.initializeApp(config)
const router = express.Router()
// const database = firebase.database()
const auth = firebase.auth()

router.get('/login', (req, res) => {
  auth.signInWithEmailAndPassword(req.query.email, req.query.password).then(
    () => {
      res.status(200).send('Success')
    },
    (reason) => {
      console.warn(`Couldn't authenticate user ${reason.message}`)
      res.status(403).send('Could not authenticate')
    }
  )
})

router.get('/register', (req, res) => {
  auth.createUserWithEmailAndPassword(req.query.email, req.query.password).then(
    () => {
      res.status(200).send('Success')
    },
    (reason) => {
      console.warn(`Couldn't register user ${reason.message}`)
      res.status(403).send('Could not register')
    }
  )
})

module.exports = router