import React from 'react';

import Card from '../../shared/UIElements/Card';
import FeatureItem from './FeatureItem';
import './FeatureList.css';

const FeatureList = props => {
  if (props.items.length === 0) {
    return (
      <div className="feature-list center">
        <Card>
          <h2>No Feature found. Maybe create one?</h2>
        </Card>
      </div>
    );
    }

  return (
    <ul className="feature-list">
      {props.items.map(place => (
        <FeatureItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          coordinates={place.location}
    
        />
      ))}
    </ul>
  );
};

export default FeatureList;
