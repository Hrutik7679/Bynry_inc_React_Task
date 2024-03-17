import React, { useState } from "react";
import ProfileList from "./ProfileList";

const SearchFilter = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default SearchFilter;
