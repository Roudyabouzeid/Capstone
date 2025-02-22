import React from 'react';

// import MapPotholes from '../../shared/UIElements/MapPotholes';
// import MapCrash from '../../shared/UIElements/MapCrash';

import './DistractionItem.css';

const DistractionItem = (props) => {
	const distracted='Distracted';
	const drowsy='Drowsy';
	const str='http://www.google.com/maps/place/';
	const timing=""+props.date;
	const date=timing.substring(0,10);
	const time=timing.substring(11,19);
	const state='State: '
	return (
		<div className="grid-item">
			<tr>
				<td>{props.distracted===1 && state}</td>
				<td>{props.distracted===1 && distracted }</td>
				
			</tr>
			<tr>
			<td>{props.drowsy===1 && state}</td>
				<td>{props.drowsy===1 && drowsy }</td>
			</tr>
			<tr>
				<td>Date: </td>
				<td>{date}</td>
				
			</tr>
			<tr>
				<td>Time: </td>
				<td>{time}</td>
				
			</tr>
			
			<tr>
				<td>Location:</td>
				<td><a href={str+props.location.lat+','+props.location.lng} target="_blank" className='loc'>View on Map</a></td>
			</tr>
		</div>
	);
};

export default DistractionItem;
