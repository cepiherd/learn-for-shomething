const express = require('express')

const server = express()


server.get('/', function(req, res){
	res.json({
		status : 200,
		message : "learn and do something"	
	})
})


server.listen(8000)




console.log( 'Server running on : 8000')
