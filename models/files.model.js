const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

          path:{
                    type:String,
                    required: [true , 'path is require'],
          },
          originalname:{

                    type:String,
                    required: [true , 'Originalname is require'],
          },
          user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref: 'users',
                    required:[true , 'Originalname is require'],
          }
})

const file = mongoose.model('file',fileSchema)
module.exports= file;