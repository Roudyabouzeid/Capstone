import React from 'react';


import HomeItem from './HomeItem';
import './HomeContent.css';

const HomeContent = props => {
 
   

  return (
    <ul className="content-list">
      {props.items.map(content => (
        <HomeItem
          key={content.id}
          imageParking={content.imageParking}
          titleParking={content.titleParking}
          descriptionParking={content.descriptionParking}
          
          imagePotholes={content.imagePotholes}
          titlePotholes={content.titlePotholes}
          descriptionPotholes={content.descriptionPotholes}
          
          imageCrash={content.imageCrash}
          titleCrash={content.titleCrash}
          descriptionCrash={content.descriptionCrash}

          imageDistraction={content.imageDistraction}
          titleDistraction={content.titleDistraction}
          descriptionDistraction={content.descriptionDistraction}
         
          
        />
      ))}
    </ul>
  );
};

export default HomeContent;
