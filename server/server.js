let express = require('express');
let cors = require('cors');
const app = express();
var server = app.listen(process.env.PORT || 5000, listen);
var io = require('socket.io')(server);


app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Credentials', true);
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://' + host + ':' + port);
}
var opens,values;

function callrand(){
	 
        if (Array.isArray(opens)) {
            opens.forEach(function(open) {

            	 var d1 = Math.floor(Math.random().toFixed(5)*100000) ;
      			   var d2 = Math.floor(Math.random().toFixed(5)*100000) ;
            	 values = {open : open , close : d1, buy : d2};
            	 console.log(values);
                io.to(open).emit('stack',values);
                console.log('data send to the room :' + values);

            });
        }
}

setInterval(function(){callrand()}, 200);

io.on('connection', function (socket) {

	console.log('User connected. Socket id %s', socket.id);
    
    socket.on('join', function (rooms) {
      	opens = rooms;
        console.log('Socket %s subscribed to %s', socket.id, opens);
      	
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.join(room);
            });
        } else {
            socket.join(rooms);
        }
    });

    //callrand();
    //setInterval(function(){callrand()}, 2000);


    socket.on('disconnect', function () {
        console.log('User disconnected - %s', socket.id);
    });
  }
);