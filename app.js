const express = require('express');
const app=express();

const userRouter=require('./routes/user.routes')
const dotenv=require('dotenv');
dotenv.config();
const connectToDB=require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes')
//#################### for ejs ##################
app.set('view engine','ejs')
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)
app.use('/user',userRouter)

// ################### For port 3000 running ##############
app.listen(3000,()=>{
          console.log('Server is running');
          
})

// ################## User router ###############
