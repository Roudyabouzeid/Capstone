const HttpError = require('../models/http-error');
const Fatigue = require('../models/dist_drow');

const getDistDrowInstances = async (req, res, next) => {
	let instances;
	try {
		instances = await Fatigue.find({});
	} catch (err) {
		const error = new HttpError(
			'Fetching instances failed, please try again later.',
			500
		);
		return next(error);
	}
	res.json({
		instances: instances.map((instance) =>
			instance.toObject({ getters: true })
		),
	});
};

const createdFatigue = async (req, res, next) => {
	const { name, location, distracted, drowsy } = req.body;
	const createdFatigue = new Fatigue({
		name,
		location,
		distracted,
		drowsy,
	});

	try {
		await createdFatigue.save();
	} catch (err) {
		const error = new HttpError(
			'Creating fatigue instance failed, please try again.',
			500
		);
		return next(error);
	}
	res
		.status(201)
		.json({ instances: createdFatigue.toObject({ getters: true }) });
};

exports.getDistDrowInstances = getDistDrowInstances;
exports.createdFatigue = createdFatigue;
