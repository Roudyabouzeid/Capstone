const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const app = express();

const server = http.createServer(app);
const socketio = require('socket.io');
const cors = require('cors');
app.use(cors());
var chat = require('./models/connection');
const io = socketio(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});
chat(io);

const parkLotRoute = require('./routes/park-lot-routes');
const usersRoute = require('./routes/users-routes');
const potholeRoute = require('./routes/pothole-map-routes');
const crashRoute = require('./routes/crash-routes');
const distdrowRoute = require('./routes/distdrow-routes');

const HttpError = require('./models/http-error');

app.use(bodyParser.json());

// io.on('connection', (socket) => {
// 	console.log('a user connected');
// });
chat(server);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // * any domain we can restric it to localhost:3000
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	next();
});

app.use('/api/parking', parkLotRoute);
app.use('/api/users', usersRoute);
app.use('/api/pothole', potholeRoute);
app.use('/api/crash', crashRoute);
app.use('/api/fatigue', distdrowRoute);

app.use((req, res, next) => {
	return next(new HttpError('Could not found find this route', 404));
}); //this middleware is only reached if we have some request which didn't get a response

app.use((error, req, res, next) => {
	//error handling middleware
	if (res.headerSent) {
		return next(error);
	}
	//if you reached this middleware without a response holding error being sent
	res.status(error.code || 500);
	res.json({ message: error.message || 'An unknown error occured!' });
});

mongoose
	.connect(
		'mongodb+srv://hasan:<password>@cluster0.cokbf4f.mongodb.net/db?retryWrites=true&w=majority'
	)
	.then(() => {
		// app.listen(5000);
		server.listen(5000, () => {
			console.log('Listening on *: 5000');
		});
	})
	.catch((err) => console.log(err));
