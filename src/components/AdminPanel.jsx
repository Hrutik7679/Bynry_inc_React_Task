import React, { useState, useEffect } from "react";
import ProfileService from "./profile.service";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    photoUrl: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = () => {
    const loadedProfiles = ProfileService.getProfiles();
    setProfiles(loadedProfiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleAddProfile = () => {
    ProfileService.addProfile(newProfile);
    loadProfiles();
    setNewProfile({
      name: "",
      photoUrl: "",
      description: "",
      address: "",
    });
  };

  const handleEditProfile = (id, editedProfile) => {
    ProfileService.editProfile(id, editedProfile);
    loadProfiles();
  };

  const handleDeleteProfile = (id) => {
    ProfileService.deleteProfile(id);
    loadProfiles();
  };

  return (
    <div className="admin-panel">
      <h2>Add New Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newProfile.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="photoUrl"
        placeholder="Photo URL"
        value={newProfile.photoUrl}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newProfile.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={newProfile.address}
        onChange={handleInputChange}
      />

      <button onClick={handleAddProfile}>Add Profile</button>

      <h2>Profiles</h2>
      <ul className="profile-list">
        {profiles.map((profile) => (
          <li key={profile.id} className="profile-item">
            <div>
              <strong>Name:</strong> {profile.name}
            </div>
            <div>
              <strong>Address:</strong> {profile.address}
            </div>

            <div className="profile-actions">
              <button
                onClick={() =>
                  handleEditProfile(profile.id, { name: "Updated Name" })
                }
              >
                Edit
              </button>
              <button onClick={() => handleDeleteProfile(profile.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
