import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>My Profile</h2>
      <ul style={styles.navList}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    color: "white",
    padding: "10px 30px",
  },
  title: { margin: 0 },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
};

export default Navbar;
