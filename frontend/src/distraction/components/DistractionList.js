import React from 'react';

import DistractionItem from './DistractionItem';
import './DistractionList.css';

const DistractionList = (props) => {
	return (
		// <div class="grid-container">
		<div className="tableFixHead">
			<table>
				<thead>
					<tr>
						<th>Driver: {('props ', props.name[0].name)} </th>
					</tr>
				</thead>
				<div>
					{console.log(props)}
					{props.name.map((place) => (
						<DistractionItem
							key={place.id}
							id={place.id}
							name={place.name}
							location={place.location}
							distracted={place.distracted}
							drowsy={place.drowsy}
							date={place.date}
						/>
					))}
				</div>
			</table>
		</div>
	);
};

export default DistractionList;
