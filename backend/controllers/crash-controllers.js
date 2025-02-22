const HttpError = require('../models/http-error');
const Crash = require('../models/crash');

const getCrashes = async (req, res, next) => {
	let crashes;
	try {
		crashes = await Crash.find({});
	} catch (err) {
		const error = new HttpError(
			'Fetching crashes failed, please try again later.',
			500
		);
		return next(error);
	}
	res.json({
		crashes: crashes.map((crash) => crash.toObject({ getters: true })),
	});
};

const createdCrash = async (req, res, next) => {
	// const errors = validationResult(req);
	// if (!errors.isEmpty()) {
	// 	return next(
	// 		new HttpError('Invalid inputs passed, please check your data', 422)
	// 	);
	// }
	const { driver_name, intensity, date, location } = req.body;
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

	const createdCrash = new Crash({
		driver_name,
		intensity,
		date,
		location,
	});

	try {
		await createdCrash.save();
	} catch (err) {
		const error = new HttpError(
			'Creating crash failed, please try again.',
			500
		);
		return next(error);
	}
	res.status(201).json({ crash: createdCrash.toObject({ getters: true }) });
};

exports.getCrashes = getCrashes;
exports.createdCrash = createdCrash;
