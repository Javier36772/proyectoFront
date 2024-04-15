import React from 'react';

function ProfileImage({ src }) {
  return (
    <div className="profile-image-container">
      <img src={src} alt="Profile" className="profile-image" />
    </div>
  );
}

export default ProfileImage;