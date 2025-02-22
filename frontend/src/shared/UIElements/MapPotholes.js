import React from 'react';
// import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import './Map.css';
// import Button from '../FormElements/Button';
import AutoComplete from './Autocomplete';

const MapPotholes = (props) => {
	// const potholes = props.potholes;
	// const [activeMarker, setActiveMarker] = useState(null);

	// const handleActiveMarker = (marker) => {
	// 	if (marker === activeMarker) {
	// 		return;
	// 	}
	// 	setActiveMarker(marker);
	// };

	// const handleOnLoad = (map) => {
	// 	const google = window.google;
	// 	const bounds = new google.maps.LatLngBounds();
	// 	potholes.forEach(({ location }) => bounds.extend(location));
	// 	map.fitBounds(bounds);
	// };

	return (
		// <React.Fragment>
		// 	<AutoComplete />
		// 	<GoogleMap
		// 		onLoad={handleOnLoad}
		// 		onClick={() => setActiveMarker(null)}
		// 		mapContainerClassName="mapstyle"
		// 	>
		// 		{potholes.map(({ id, image, location, date }) => (
		// 			<Marker
		// 				key={id}
		// 				position={location}
		// 				onClick={() => handleActiveMarker(id)}
		// 			>
		// 				{activeMarker === id ? (
		// 					<InfoWindow onCloseClick={() => setActiveMarker(null)}>
		// 						<div>
		// 							<div>
		// 								<img
		// 									src={`/images/${image}`}
		// 									alt="frem.jpg"
		// 									width="200"
		// 									height="200"
		// 								/>
		// 							</div>
		// 							{/* <div>Driver: {driver_name}</div>
		// 							<div>Intensity: {intensity}g</div> */}
		// 							<div>Date: {date}</div>
		// 						</div>
		// 					</InfoWindow>
		// 				) : null}
		// 			</Marker>
		// 		))}
		// 	</GoogleMap>
		// 	<Button to="/features">Go Back</Button>
		// </React.Fragment>
		<AutoComplete potholes={props.potholes} />
	);
};

export default MapPotholes;
