const express = require('express')

const server = express()


server.get('/' ,function(req , res){
	res.json({
		status : 200,
		message : "You are Amazing"
	})
})


server.listen(4000)


console.log('Server Running on Port : 4000')
