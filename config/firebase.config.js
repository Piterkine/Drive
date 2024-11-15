const Firebase = require('firebase-admin');


const serviceAccount= require('../drive-c68a5-firebase-adminsdk-rns24-2634cc0352.json')

const firebase = Firebase.initializeApp({

          credential: Firebase.credential.cert(serviceAccount),
          storageBucket:'drive-c68a5.firebasestorage.app'
})

module.exports = Firebase;