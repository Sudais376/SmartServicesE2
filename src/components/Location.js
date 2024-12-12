import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox styles

const Location = () => {
  const mapContainer = useRef(null); // Reference to map container div

  useEffect(() => {
    // Set the Mapbox access token (Replace with your token)
    mapboxgl.accessToken =
      "pk.eyJ1IjoibS1zdWRhaXMiLCJhIjoiY200bDQ4cjR3MGcwOTJtc2h3anhwM3hsdSJ9.ptaopaB0iWRTzI2WQBAZtg";

    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current, // Container ID
      style: "mapbox://styles/mapbox/outdoors-v11",
 // Mapbox style URL
      center: [-101.9345, 33.5779], // Coordinates for Lubbock, TX
      zoom: 13, // Zoom level
    });

    // Add a marker to the map
    new mapboxgl.Marker()
      .setLngLat([-101.9345, 33.5779])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          "<h3>Lubbock, TX</h3><p>Selected Location</p>"
        )
      ) // Add a popup with HTML content
      .addTo(map);

    // Cleanup map instance on component unmount
    return () => map.remove();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      ref={mapContainer} // Use the ref for the map container
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    ></div>
  );
};

export default Location;
