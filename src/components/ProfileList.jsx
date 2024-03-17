import React, { useState } from "react";
//import { ProfileService } from "./profile.service";

const ProfileList = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const handleSearch = () => {
    const filtered = ProfileService.getProfiles().filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchText.toLowerCase()) ||
        profile.location.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search profiles by name or location"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <div>
              <strong>Name:</strong> {profile.name}
            </div>
            <div>
              <strong>Location:</strong> {profile.location}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
