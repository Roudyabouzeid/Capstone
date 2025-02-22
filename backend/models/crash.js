const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crashSchema = new Schema({
	driver_name: { type: String, requried: true },
	intensity: { type: Number, required: true },
	date: { type: Date, required: true },
	location: {
		lng: { type: Number, requried: true },
		lat: { type: Number, required: true },
	},
});

module.exports = mongoose.model('Crash', crashSchema);

