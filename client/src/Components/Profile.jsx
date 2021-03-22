import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const Profile = () => {

  return (
    <div className="accordion-profile" id="fade-in">
      <div className="profile-classification">
          <h6>Kingdom: </h6>
          <h6>Phylum: </h6>
          <h6>Class: </h6>
          <h6>Order: </h6>
          <h6>Family: </h6>
          <h6>Genus: </h6>
          <h6>Species: </h6>
      </div>
      <div className="profile-classification-detail">
        <h6>Animalia</h6>
        <h6>Chordata</h6>
        <h6>Mammalia</h6>
        <h6>Primates</h6>
        <h6>Hominidae</h6>
        <h6>Homo</h6>
        <h6>Homo sapiens</h6>
      </div>
    </div>
  )
}

export default Profile;