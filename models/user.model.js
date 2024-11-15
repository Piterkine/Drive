const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
          username:{
                    type:String,
                    required:true,
                    trim:true,
                    lowercase:true,
                    unique:true,
                    minlength:[3,'Username must be contain 3 character']

          },
          email:{
                    type:String,
                    required:true,
                    trim:true,
                    lowercase:true,
                    unique:true,
                    minlength:[13,'Email must be contain 3 character']
          },
          password:{
                    type:String,
                    required:true,
                    trim:true,
                    lowercase:true,
                    unique:true,
                    minlength:[5,'Password must be contain 3 character']
          }
})

const user=mongoose.model('user',userSchema)
module.exports=user;