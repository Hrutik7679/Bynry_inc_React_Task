const ProfileService = {
  profiles: [
    { id: 1, name: "John Doe", address: "123 Main St" },
    { id: 2, name: "Jane Smith", address: "456 Elm St" },
  ],

  getProfiles: function () {
    return this.profiles;
  },

  addProfile: function (newProfile) {
    newProfile.id = this.profiles.length + 1;
    this.profiles.push(newProfile);
  },

  editProfile: function (id, editedProfile) {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index !== -1) {
      this.profiles[index] = { ...this.profiles[index], ...editedProfile };
    } else {
      console.error(`Profile with id ${id} not found.`);
    }
  },

  deleteProfile: function (id) {
    this.profiles = this.profiles.filter((profile) => profile.id !== id);
  },
};

export default ProfileService;
