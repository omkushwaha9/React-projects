import React from "react";

const Profile = () => {
  // Dynamic Data (you can fetch from API later)
  const user = {
    name: "OM Kushwaha",
    age: 22,
    profession: "Web Developer",
    bio: "Passionate about crafting dynamic and modern web experiences using React.js, Tailwind, and GSAP.",
    image: "https://via.placeholder.com/150", // replace with your photo URL
  };

  return (
    <div style={styles.container}>
      <img src={user.image} alt="Profile" style={styles.image} />
      <h2>{user.name}</h2>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Profession:</strong> {user.profession}</p>
      <p style={styles.bio}>{user.bio}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  image: {
    width: "150px",
    borderRadius: "50%",
  },
  bio: {
    marginTop: "15px",
    color: "#555",
  },
};

export default Profile;
