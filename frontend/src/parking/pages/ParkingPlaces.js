import React, { useEffect, useState } from 'react';

import ParkingList from '../components/ParkingList';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';

const ParkingPlaces = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [loadedParkings, setLoadedParkings] = useState();

	useEffect(() => {
		const sendRequst = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/parking');

				const responseData = await response.json();
				console.log(responseData);
				if (!response.ok) {
					throw new Error(responseData.message);
				}

				setLoadedParkings(responseData.parkings);
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
			{!isLoading && loadedParkings && <ParkingList items={loadedParkings} />}
		</React.Fragment>
	);
};

export default ParkingPlaces;
