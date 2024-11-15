const multer = require('multer');

const firebaseStorage = require('multer-firebase-storage')

const firebase = require('./firebase.config')

const serviceAccount = require('../drive-c68a5-firebase-adminsdk-rns24-2634cc0352.json')

const storage = firebaseStorage({
          credentials: firebase.credential.cert(serviceAccount),
          bucketName: 'drive-c68a5.firebasestorage.app',
          unique: true,
})

const upload = multer({
          storage: storage,
})

module.exports = upload;