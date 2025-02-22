import React, { useState } from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Modal from '../../shared/UIElements/Modal';
// import MapPotholes from '../../shared/UIElements/MapPotholes';
// import MapCrash from '../../shared/UIElements/MapCrash';

import './FeatureItem.css';

const FeatureItem = (props) => {
	const [showPopup, setShowPopup] = useState(false);

	const openPopupHandler = () => setShowPopup(true);

	const closePopupHandler = () => setShowPopup(false);

	return (
		<React.Fragment>
			<Modal
				show={showPopup}
				onCancel={closePopupHandler}
				header={props.title}
				contentClass="feature-item__modal-content"
				footerClass="feature-item__modal-actions"
				footer={<Button onClick={closePopupHandler}>CLOSE</Button>}
			>
				{/* <div className="map-container">
					{props.id === 'potholes' && <MapPotholes />}
					{props.id === 'crash' && <MapCrash />}
				</div> */}
			</Modal>
			<li className="feature-item">
				<Card className="feature-item__content">
					<div className="feature-item__image">
						<img src={props.image} alt={props.title} />
					</div>
					<div className="feature-item__info">
						<h2>{props.title}</h2>
						<p>{props.description}</p>
					</div>
					<div className="feature-item__actions">
						{props.id === 'parking' ? (
							<Button to="/parking" className="btn">
								Choose parking lot
							</Button>
						) : props.id === 'crash' ? (
							<Button to="/crash">View on Map</Button>
						) : props.id === 'potholes' ? (
							<Button to="/potholes">View on Map</Button>
						) : props.id === 'distraction' ? (
							<Button to="/distraction">View instances</Button>
						) : (
							<Button onClick={openPopupHandler}>View on Map</Button>
						)}
					</div>
				</Card>
			</li>
		</React.Fragment>
	);
};

export default FeatureItem;
