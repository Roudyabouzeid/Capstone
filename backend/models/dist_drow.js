const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ddSchema = new Schema({
	name: { type: String, required: true },
	location: {
		lng: { type: Number, requried: true },
		lat: { type: Number, required: true },
	},
	distracted: { type: Number, required: true },
	drowsy: { type: Number, required: true },
});

module.exports = mongoose.model('Fatigue', ddSchema);
