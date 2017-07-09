const express = require('express');
const app = express();
const path = require('path');
app.set('view engine' , 'pug')
app.set('views', path.join(__dirname, '/views'));
app.get('/' , function(req,res){
	res.render('index' , {
		title: 'Hey',
		message : 'What the fuck you slow cunt!!!'
	})
})

app.set('port' , process.env.PORT || 3000);
const server = app.listen(app.get('port'),function(){
	console.log('Listening on port ' + app.get('port'))
})