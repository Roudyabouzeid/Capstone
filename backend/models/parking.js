const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
	// __id: { type: String, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
	image: { type: String },
	current_parking_image: { type: String },
	vacant_spots: { type: Number, required: true },
	occupied_spots: { type: Number, required: true },
});

module.exports = mongoose.model('Parking', parkingSchema);
