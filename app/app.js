const express = require('express');
const app = express();
const path = require('path');
const cloudinary = require('cloudinary');
require('dotenv').config({path : 'process.env'});

//CLOUDINARY

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

//VIWE ENGINE

app.set('view engine' , 'pug')
app.set('views', path.join(__dirname, '/views'));

//DATA

app.set('cloudinaryData' , cloudinary)


//ROUTES

app.use(require('./routes/index'));

//SERVER

app.set('port' , process.env.PORT || 3000);
const server = app.listen(app.get('port'),function(){
	console.log('Listening on port ' + app.get('port'))
})