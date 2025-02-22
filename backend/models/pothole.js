const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const potholeSchema = new Schema({
	location: {
		lng: { type: Number, requried: true },
		lat: { type: Number, required: true },
	},
	image: { type: String, required: true },
});

module.exports = mongoose.model('Pothole', potholeSchema);
