import React from 'react';

const Profile = ({ name, photo, description }) => {
  return (
    <div className="profile">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Profile;