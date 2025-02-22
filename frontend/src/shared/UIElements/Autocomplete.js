import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import './Map.css';
import Button from '../FormElements/Button';

const AutoComplete = (props) => {
	const autoCompleteRef = useRef();
	const inputRef = useRef();
	// const options = {
	// 	componentRestrictions: { country: 'ng' },
	// 	fields: ['address_components', 'geometry', 'icon', 'name'],
	// 	types: ['establishment'],
	// };
	const [zoom, setZoom] = useState(null);
	useEffect(() => {
		autoCompleteRef.current = new window.google.maps.places.Autocomplete(
			inputRef.current
			// options
		);
		autoCompleteRef.current.addListener('place_changed', async function () {
			const place = await autoCompleteRef.current.getPlace();
			if (place.geometry) {
				setZoom(
					new window.google.maps.LatLng(
						place.geometry.location.lat(),
						place.geometry.location.lng()
					)
				);
			}
		});
	}, [zoom]);

	const potholes = props.potholes;
	const [activeMarker, setActiveMarker] = useState(null);

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	const handleOnLoad = (map) => {
		const google = window.google;
		const bounds = new google.maps.LatLngBounds();
		potholes.forEach(({ location }) => bounds.extend(location));
		map.fitBounds(bounds);
		// map.setZoom(12);
	};

	return (
		<React.Fragment>
			<div className="buttons">
				<div id="search-bar">
					<label id="search-bar-label">Search address: </label>
					<input ref={inputRef} />
				</div>
				<Button to="/features">Go Back</Button>
			</div>
			<GoogleMap
				onLoad={handleOnLoad}
				onClick={() => setActiveMarker(null)}
				mapContainerClassName="mapstyle"
				center={zoom}
			>
				{potholes.map(({ id, image, location, date }) => (
					<Marker
						key={id}
						position={location}
						onClick={() => handleActiveMarker(id)}
					>
						{activeMarker === id ? (
							<InfoWindow onCloseClick={() => setActiveMarker(null)}>
								<div>
									<div>
										<img
											src={`/images/${image}`}
											alt="frem.jpg"
											width="200"
											height="200"
										/>
									</div>
									{/* <div>Driver: {driver_name}</div>
                                <div>Intensity: {intensity}g</div> */}
									<div>Date: {date}</div>
								</div>
							</InfoWindow>
						) : null}
					</Marker>
				))}
			</GoogleMap>
		</React.Fragment>
	);
};

export default AutoComplete;
