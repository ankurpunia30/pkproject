import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar"; // Import the Navbar component
import "./PropertyCard.css";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/properties/");
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch properties. Please try again later.");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Generate random image URL
  const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 1000); // Randomize image ID
    return `https://picsum.photos/400/200?random=${randomId}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <div className="property-container">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img
              className="property-image"
              src={getRandomImage()}
              alt={property.title}
            />
            <div className="property-details">
              <h2 className="property-title">{property.title}</h2>
              <p className="property-location">Location: {property.location}</p>
              <p className="property-price">
                Price: ${property.price.toLocaleString()}
              </p>
              <p className="property-description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
