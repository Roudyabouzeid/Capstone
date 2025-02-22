import React, { useEffect, useState } from 'react';

import MapPotholes from '../../shared/UIElements/MapPotholes';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

const PotholesPlaces = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [loadedPotholes, setPotholesLocations] = useState();
	useEffect(() => {
		const sendRequst = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/pothole');

				const responseData = await response.json();
				console.log(responseData);
				if (!response.ok) {
					throw new Error(responseData.message);
				}

				setPotholesLocations(responseData.potholes);
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
			{!isLoading && loadedPotholes && (
				<MapPotholes potholes={loadedPotholes} />
			)}
		</React.Fragment>
	);
};

export default PotholesPlaces;
