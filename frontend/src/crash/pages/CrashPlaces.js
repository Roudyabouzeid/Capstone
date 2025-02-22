import React, { useEffect, useState } from 'react';

import MapCrash from '../../shared/UIElements/MapCrash';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

const CrashPlaces = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [loadedCrashes, setCrashLocations] = useState();
	useEffect(() => {
		const sendRequst = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/crash');

				const responseData = await response.json();
				console.log(responseData);
				if (!response.ok) {
					throw new Error(responseData.message);
				}

				setCrashLocations(responseData.crashes);
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
			{!isLoading && loadedCrashes && <MapCrash crash={loadedCrashes} />}
		</React.Fragment>
	);
};

export default CrashPlaces;
