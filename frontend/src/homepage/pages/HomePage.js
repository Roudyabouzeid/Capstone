import React from 'react';
import HomeContent from '../components/HomeContent';


const DUMMY_CONTENT = [
  {
   
    titleParking: 'Parking Spot Availability',
    imageParking:
      'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1506521781263-d8422e82f27a-1920w.jpg',
    descriptionParking: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    
    titlePotholes: 'Pothole Detection',
    imagePotholes:
      'https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE521_pothol_20190225113729_ZH.jpg?uuid=a474c3e8-391b-11e9-93c5-ac162d7bc1f7',
    descriptionPotholes: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',

    titleCrash: 'Crash Alert',
    imageCrash:
    //  'https://resources.stuff.co.nz/content/dam/images/4/y/y/h/d/x/image.related.StuffLandscapeSixteenByNine.710x400.4yyhdd.png/1651650816830.jpg?format=pjpg&optimize=medium',
    'https://live-production.wcms.abc-cdn.net.au/05db6e05034e19270a77082b0bb9af0b?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485',
    descriptionCrash: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
   

    titleDistraction: 'Distraction and Drawsiness Alert',
    imageDistraction:
      'https://www.frotcom.com/sites/default/files/styles/asset_image_full/public/assets/images/how_to_curb_distracted_driving_bp_-_frotcom.jpg?itok=Y74LkgXX',
    descriptionDistraction: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  }
];

const HomePage = () => {
 
  return <HomeContent items={DUMMY_CONTENT} />;
};

export default HomePage;
