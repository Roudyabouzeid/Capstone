import React, { useEffect, useState } from 'react';
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import io from 'socket.io-client';

import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import './Map.css';
import Button from '../FormElements/Button';

const socket = io('http://localhost:5000');

const MapCrash = (props) => {
	let crash = props.crash;
	// console.log(crash[0].date.substring(5, 7));
	const [activeMarker, setActiveMarker] = useState(null);
	const [initialCrash, setInitialCrash] = useState(crash);

	const handleActiveMarker = (marker) => {
		//if the marker we are clicking is already clicked nothing happens
		//if the marker id is not the same, make the marker as active
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	//filter state

	const January = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() === 1
		);
		setInitialCrash(crashFiltered);
	};
	const February = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 2
		);

		setInitialCrash(crashFiltered);
	};

	const March = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 3
		);

		setInitialCrash(crashFiltered);
	};

	const April = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 4
		);

		setInitialCrash(crashFiltered);
	};

	const May = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 5
		);

		setInitialCrash(crashFiltered);
	};

	const June = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 6
		);

		setInitialCrash(crashFiltered);
	};

	const July = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 7
		);

		setInitialCrash(crashFiltered);
	};

	const August = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 8
		);

		setInitialCrash(crashFiltered);
	};

	const September = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 9
		);

		setInitialCrash(crashFiltered);
	};

	const October = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 10
		);

		setInitialCrash(crashFiltered);
	};

	const November = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 11
		);

		setInitialCrash(crashFiltered);
	};

	const December = () => {
		const crashFiltered = crash.filter(
			(e) => new Date(e.date).getMonth() + 1 === 12
		);

		setInitialCrash(crashFiltered);
	};

	// 👇️ reset to initial state
	const resetState = () => {
		setInitialCrash(crash);
	};

	const myFunction = () => {
		var x = document.getElementById('mySelect').value;

		x === 'January' && January();
		x === 'February' && February();
		x === 'March' && March();
		x === 'April' && April();
		x === 'May' && May();
		x === 'June' && June();
		x === 'July' && July();
		x === 'August' && August();
		x === 'September' && September();
		x === 'October' && October();
		x === 'November' && November();
		x === 'December' && December();
		x === 'reset' && resetState();
	};

	const handleOnLoad = (map) => {
		const google = window.google;
		const bounds = new google.maps.LatLngBounds();
		initialCrash.forEach(({ location }) => bounds.extend(location));
		map.fitBounds(bounds);
	};

	const checkDate = (crashInstanceDate) => {
		const currentDate = new Date();
		const y = currentDate.getFullYear();
		const m = currentDate.getMonth() + 1;
		const day = currentDate.getDate();
		const hours = currentDate.getHours();

		const crashDate = new Date(crashInstanceDate);
		const yCrash = crashDate.getFullYear();
		const mCrash = crashDate.getMonth() + 1;
		const dayCrash = crashDate.getDate();
		const hoursCrash = crashDate.getHours();

		let x;
		if (
			y - yCrash === 0 &&
			m - mCrash === 0 &&
			day - dayCrash === 0 &&
			hours - hoursCrash < 2
		)
			x = true;
		else x = false;

		return x;
	};

	useEffect(() => {
		socket.on('crashupdate', (data) => {
			crash.push(data.data);
			setInitialCrash(crash);
			successNotification();
			// setTimeout(() => window.location.reload(), 4000);
			if (initialCrash) {
				//handleActiveMarker(initialCrash[0]._id);
				setActiveMarker(null);
			}
		});
		return () => {
			socket.off('crashupdate');
		};
	}, [crash, initialCrash]);

	function successNotification() {
		addNotification({
			title: 'Crash',
			// subtitle: 'A new crash has been detected',
			message: 'A new crash has been reported',
			theme: 'light',
			closeButton: 'X',
			backgroundTop: 'red',
			backgroundBottom: 'orangered',
		});
	}

	return (
		<React.Fragment>
			<Notifications />
			<GoogleMap
				onLoad={handleOnLoad}
				onClick={() => setActiveMarker(null)}
				mapContainerClassName="mapstyle"
			>
				{initialCrash.map(({ _id, driver_name, location, intensity, date }) => (
					<Marker
						key={_id}
						position={location}
						onClick={() => handleActiveMarker(_id)}
						icon={{
							path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
							fillColor: checkDate(date) ? 'red' : 'blue',
							fillOpacity: 0.6,
							strokeWeight: 0,
							rotation: 0,
							scale: 2,
						}}
					>
						{activeMarker === _id ? (
							<InfoWindow onCloseClick={() => setActiveMarker(null)}>
								<div>
									<div>Driver: {driver_name}</div>
									<div>Intensity: {intensity}g</div>
									<div>Date: {date}</div>
								</div>
							</InfoWindow>
						) : null}
					</Marker>
				))}
			</GoogleMap>
			<div className='buttons'>
				<div className="custom-select">
					<select id="mySelect" onChange={myFunction}>
						<option value="reset">All time</option>
						<option value="January">January</option>
						<option value="February">February</option>
						<option value="March">March</option>
						<option value="April">April</option>
						<option value="May">May</option>
						<option value="June">June</option>
						<option value="July">July</option>
						<option value="August">August</option>
						<option value="September">September</option>
						<option value="October">October</option>
						<option value="November">November</option>
						<option value="December">December</option>
					</select>
				</div>

				<Button to="/features" className='btn-map'>Go Back</Button>
				</div>
			
		</React.Fragment>
	);
};

export default MapCrash;
