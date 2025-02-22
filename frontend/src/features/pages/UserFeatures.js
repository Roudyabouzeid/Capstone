import React from 'react';


import FeatureList from '../components/FeatureList';

const DUMMY_PLACES = [
  {
    id: 'parking',
    title: 'Parking Spots Availability',
    description: 'Real-time reporting park occupancy giving users and parking managers access to insights instantly and eagle-view of the parking.',
    imageUrl:
      'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1506521781263-d8422e82f27a-1920w.jpg',
     
  },

  {
    id: 'potholes',
    title: 'Pothole Detection',
    description: 'Pothole Mapper is a service that provides liveupdated maps of road defects mainly potholes, with the aid of drones.',
    imageUrl:
      'https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE521_pothol_20190225113729_ZH.jpg?uuid=a474c3e8-391b-11e9-93c5-ac162d7bc1f7',
      location: {
        lat: 34.123001,
        lng: 35.651928
      },
  },

  {
    id: 'crash',
    title: 'Crash Alert',
    description: 'Crash Alert is a rapid response alert system that enables faster notifications and emergency reaction in your time of need. The system reacts in the event of vehicle accident through the real-time analysis of sensor data provided by the crash alert module.',
    imageUrl:
      'https://live-production.wcms.abc-cdn.net.au/05db6e05034e19270a77082b0bb9af0b?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485',
      location: {
        lat: 34.123001,
        lng: 35.651928
      },
  },

  {
    id: 'distraction',
    title: 'Distraction and Drawsiness Alert',
    description: 'Distraction and drawsiness fearuer logs pilot drowsiness and on-road distractions to help fleet managers better monitor their drivers.',
    imageUrl:
      'https://www.frotcom.com/sites/default/files/styles/asset_image_full/public/assets/images/how_to_curb_distracted_driving_bp_-_frotcom.jpg?itok=Y74LkgXX',
      location: {
        lat: 34.123001,
        lng: 35.651928
      },
     
      
  },

  
 
];

const UserFeatures = () => {

  return <FeatureList items={DUMMY_PLACES} />;
};

export default UserFeatures;
