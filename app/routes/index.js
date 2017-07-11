const express = require('express');
const router = express.Router();

router.get('/' , function(req,res){
	const cloudinary = req.app.get('cloudinaryData')
	res.render('index' , {
		title: 'Hey',
		message : 'What the fuck you slow cunt!!!',
		image : cloudinary.image("Hand.png", { alt: "Sample Image" })
	})
})

module.exports = router;
