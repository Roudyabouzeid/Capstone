import React, { useEffect, useState } from 'react';

import DistractionList from '../components/DistractionList.js';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

import '../components/DistractionList.css';

const DistractionFeature = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [loadedInstances, setLoadedInstances] = useState();
	const [loadedKeys, setLoadedKeys] = useState([]); //initially the array is empty

	useEffect(() => {
		const sendRequst = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/fatigue');

				const responseData = await response.json();
				console.log(responseData);
				if (!response.ok) {
					throw new Error(responseData.message);
				}
				let hashMap = new Map([]);
				for (let i = 0; i < responseData.instances.length; i++) {
					if (hashMap.has(responseData.instances[i].name)) {
						hashMap
							.get(responseData.instances[i].name)
							.push(responseData.instances[i]);
					} else {
						hashMap.set(responseData.instances[i].name, [
							responseData.instances[i],
						]);
					}
				}
				setLoadedInstances(hashMap);
				setLoadedKeys(Array.from(hashMap.keys()));
			} catch (err) {
				setError(err.message);
			}
			setIsLoading(false);
		};
		sendRequst();
	}, []);

	const errorHandler = () => {
		setError(null);
	};

	return (
		<React.Fragment>
			<ErrorModal error={error} onClear={errorHandler} />
			{isLoading && (
				<div className="center">
					<LoadingSpinner />
				</div>
			)}
			<div className="grid-container">
				{loadedKeys.map((key) => (
					<DistractionList name={loadedInstances.get(key)} />
				))}
			</div>
		</React.Fragment>
	);
};

export default DistractionFeature;

// const DUMMY = [
// 	{
// 		id: 'd1',
// 		name: 'antoine',
// 		location: 'jounieh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd2',
// 		name: 'antoine',
// 		location: 'jounieh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd3',
// 		name: 'antoine',
// 		location: 'jbeil',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},

// 	{
// 		id: 'd4',
// 		name: 'hasan',
// 		location: 'beirut',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd5',
// 		name: 'hasan',
// 		location: 'hamra',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd6',
// 		name: 'hasan',
// 		location: 'jneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd7',
// 		name: 'roudy',
// 		location: 'antelias',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd8',
// 		name: 'roudy',
// 		location: 'awkar',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd9',
// 		name: 'roudy',
// 		location: 'mtayleb',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd10',
// 		name: 'marc',
// 		location: 'ballouneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd11',
// 		name: 'marc',
// 		location: 'jeita',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd12',
// 		name: 'marc',
// 		location: 'zouk',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},

// 	{
// 		id: 'd13',
// 		name: 'sam',
// 		location: 'ballouneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd14',
// 		name: 'sam',
// 		location: 'jeita',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd15',
// 		name: 'sam',
// 		location: 'zouk',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},

// 	{
// 		id: 'd16',
// 		name: 'jhon',
// 		location: 'ballouneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd17',
// 		name: 'jhon',
// 		location: 'jeita',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd18',
// 		name: 'jhon',
// 		location: 'zouk',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},

// 	{
// 		id: 'd19',
// 		name: 'anthony',
// 		location: 'mtayleb',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd20',
// 		name: 'anthony',
// 		location: 'ballouneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd21',
// 		name: 'anthony',
// 		location: 'jeita',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// 	{
// 		id: 'd22',
// 		name: 'simon',
// 		location: 'zouk',
// 		distraction: 'no',
// 		drowsiness: 'no',
// 	},

// 	{
// 		id: 'd23',
// 		name: 'simon',
// 		location: 'ballouneh',
// 		distraction: 'yes',
// 		drowsiness: 'no',
// 	},
// 	{
// 		id: 'd24',
// 		name: 'simon',
// 		location: 'jeita',
// 		distraction: 'no',
// 		drowsiness: 'yes',
// 	},
// ];

// const DistractionFeature1 = () => {
// 	let hashMap = new Map([]);
// 	for (let i = 0; i < DUMMY.length; i++) {
// 		if (hashMap.has(DUMMY[i].name)) {
// 			hashMap.get(DUMMY[i].name).push(DUMMY[i]);
// 		} else {
// 			hashMap.set(DUMMY[i].name, [DUMMY[i]]);
// 		}
// 	}
// 	let keys = Array.from(hashMap.keys());

// 	return (
/* <div>
	{keys.map((key) => (
		<DistractionList name={hashMap.get(key)} />
	))}
</div>; */
// 	);
// };

// export default Fatigues;
