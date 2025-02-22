const HttpError = require('../models/http-error');
const Pothole = require('../models/pothole');

const getPotholes = async (req, res, next) => {
	let potholes;
	try {
		potholes = await Pothole.find({});
	} catch (err) {
		const error = new HttpError(
			'Fetching potholes failed, please try again later.',
			500
		);
		return next(error);
	}
	res.json({
		potholes: potholes.map((pothole) => pothole.toObject({ getters: true })),
	});
};

const createdPothole = async (req, res, next) => {
	// const errors = validationResult(req);
	// if (!errors.isEmpty()) {
	// 	return next(
	// 		new HttpError('Invalid inputs passed, please check your data', 422)
	// 	);
	// }
	const { location, image } = req.body;
	// let existingPothole;
	// try {
	// 	existingPothole = await User.findOne({ email: email });
	// } catch (err) {
	// 	const error = new HttpError(
	// 		'Signing up failed, pleast try again later',
	// 		500
	// 	);
	// 	return next(error);
	// }

	// if (existingUser) {
	// 	const error = new HttpError(
	// 		'User exists already, please login instead',
	// 		422
	// 	);
	// 	return next(error);
	// }

	const createdPothole = new Pothole({
		location,
		image,
	});

	try {
		await createdPothole.save();
	} catch (err) {
		const error = new HttpError(
			'Creating pothole failed, please try again.',
			500
		);
		return next(error);
	}
	res.status(201).json({ pothole: createdPothole.toObject({ getters: true }) });
};

exports.getPotholes = getPotholes;
exports.createdPothole = createdPothole;
