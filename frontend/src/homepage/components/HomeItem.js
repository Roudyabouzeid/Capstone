import React from 'react';

import Card from '../../shared/UIElements/Card';

import './HomeItem.css';

const HomeItem = props => {
 

  return (
  
      <li className="content-item">
        <Card className="content-item__content ">
        <div className="content-item__info">
            <h1>Our Features</h1>
            <p>{props.descriptionCrash}</p>
          </div>
          
          <div className="content-item__image">
            <img src={props.imageParking} alt={props.titleParking} />
          </div>
          <div className="content-item__info">
            <h2>{props.titleParking}</h2>
            <p>{props.descriptionParking}</p>
          </div>

          <div className="content-item__image ">
            <img src={props.imagePotholes} alt={props.titlePotholes} />
          </div>
          <div className="content-item__info">
            <h2>{props.titlePotholes}</h2>
            <p>{props.descriptionPotholes}</p>
          </div>

          <div className="content-item__image">
            <img src={props.imageCrash} alt={props.titleCrash} />
          </div>
          <div className="content-item__info">
            <h2>{props.titleCrash}</h2>
            <p>{props.descriptionCrash}</p>
          </div>

          <div className="content-item__image">
            <img src={props.imageDistraction} alt={props.titleDistraction} />
          </div>
          <div className="content-item__info">
            <h2>{props.titleDistraction}</h2>
            <p>{props.descriptionDistraction}</p>
          </div>




         
        </Card>
      </li>
  
  );
};

export default HomeItem;
