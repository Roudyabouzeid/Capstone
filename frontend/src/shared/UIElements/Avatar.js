import React from 'react';

import './Avatar.css';
// import '../../frem_parking/frem.jpg';

const Avatar = (props) => {
	return (
		<div className={`avatar ${props.className}`} style={props.style}>
			<img
				src={props.image}
				// src={`/images/${props.image}`}
				alt={props.alt}
				style={{ width: props.width, height: props.width }}
			/>
		</div>
	);
};

export default Avatar;
