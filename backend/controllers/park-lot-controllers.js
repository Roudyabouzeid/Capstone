const HttpError = require('../models/http-error');
const Parking = require('../models/parking');

const getParkings = async (req, res, next) => {
	let parkings;
	try {
		parkings = await Parking.find({});
	} catch (err) {
		const error = new HttpError(
			'Fetching parkings failed, please try again later.',
			500
		);
		return next(error);
	}
	res.json({
		parkings: parkings.map((parking) => parking.toObject({ getters: true })),
	});
};

exports.getParkings = getParkings;
