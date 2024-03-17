let profiles = [
  {
    id: 1,
    name: "John Doe",
    photoUrl: "...",
    description: "...",
    address: "...",
  },
];

const ProfileService = {
  getProfiles: () => profiles,
  addProfile: (profile) => {
    profile.id = profiles.length + 1;
    profiles.push(profile);
  },
  editProfile: (editedProfile) => {
    const index = profiles.findIndex(
      (profile) => profile.id === editedProfile.id
    );
    if (index !== -1) {
      profiles[index] = editedProfile;
    } else {
      console.error(`Profile with id ${editedProfile.id} not found.`);
    }
  },
  deleteProfile: (profileId) => {
    profiles = profiles.filter((profile) => profile.id !== profileId);
  },
};

export default ProfileService;
