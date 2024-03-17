import React, { useState } from "react";
import "./App.css";
import ProfileList from "./components/ProfileList";
import AdminPanel from "./components/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "./assets/manImages.jpeg";
const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      photo: profileImage,
      description: "Software Engineer",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: profileImage,
      description: "UX Designer",
      address: "456 Park Ave",
    },
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  return (
    <div className="app">
      <h1>Profile Explorer</h1>
      <div className="main-container">
        <div className="sidebar">
          <AdminPanel onAddProfile={handleAddProfile} />
          <ProfileList
            profiles={profiles}
            onProfileClick={handleProfileClick}
            loading={loading}
          />
        </div>
        <div className="map-container">
          {selectedProfile && <Map profile={selectedProfile} />}
        </div>
      </div>
    </div>
  );
};

export default App;
