import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../shared/UIElements/Modal';
import Button from '../../shared/FormElements/Button';
import Avatar from '../../shared/UIElements/Avatar';
import Card from '../../shared/UIElements/Card';
import './ParkingItem.css';

const ParkingItem = (props) => {
	const [showPopup, setShowPopup] = useState(false);

	const openPopupHandler = () => setShowPopup(true);

	const closePopupHandler = () => setShowPopup(false);

	return (
		<React.Fragment>
			<Modal
				show={showPopup}
				onCancel={closePopupHandler}
				header={props.name}
				contentClass="feature-item__modal-content"
				footerClass="feature-item__modal-actions"
				footer={<Button onClick={closePopupHandler}>CLOSE</Button>}
				vacant={props.vacant}
			>
				<div className="container">
					<img
						src={`/images/${props.current_parking_image}`}
						alt={props.name}
						class="parking-image"
					/>
				</div>
			</Modal>
			<li className="parking-item">
				<Card className="parking-item__content">
					<Link onClick={openPopupHandler}>
						<div className="parking-item__image">
							<Avatar image={props.image} alt={props.name} />
						</div>
						<div className="parking-item__info">
							<h2>{props.name}</h2>
							<h3>{props.location}</h3>
							<h3>
								{props.vacant}{' '}
								{props.vacant === 1 ? 'Vacant spot' : 'Vacant spots'}
							</h3>
							<h3>
								{props.occupied}{' '}
								{props.occupied === 1 ? 'Occupied spot' : 'Occupied spots'}
							</h3>
							<h3>
								Last updated: {props.date.split(' ')[0]} @{' '}
								{props.date.split(' ')[1]}
							</h3>
						</div>
					</Link>
				</Card>
			</li>
		</React.Fragment>
	);
};

export default ParkingItem;
