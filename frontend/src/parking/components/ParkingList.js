import React from 'react';
import ParkingItem from './ParkingItem';
import Card from '../../shared/UIElements/Card';
import './ParkingList.css';

const ParkingList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h2>No Parking found.</h2>
				</Card>
			</div>
		);
	}

	return (
		<ul className="parking-list">
			{props.items.map((parking) => (
				<ParkingItem
					key={parking.id}
					id={parking.id}
					image={parking.image}
					current_parking_image={parking.current_parking_image}
					name={parking.name}
					vacant={parking.vacant_spots}
					occupied={parking.occupied_spots}
					location={parking.location}
					date={parking.date}
				/>
			))}
		</ul>
	);
};

export default ParkingList;
