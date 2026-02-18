import Image from "next/image";
import React from "react";
import Swiggy from "@/public/Swiggy.png"

export default function page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Simple React Page</h1>
      <Image src={Swiggy} width={500} height={500} alt="image" priority={false} placeholder="blur"/>
      <p style={styles.text}>
        This is a simple React page with an image.
      </p>

      <button style={styles.button}>Click Me</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  heading: {
    color: "#333",
  },
  image: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    margin: "20px 0",
  },
  text: {
    fontSize: "18px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
