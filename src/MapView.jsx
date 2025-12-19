import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

export default function MapView() {
  const [searchParams] = useSearchParams();

  const defaultLat = parseFloat(searchParams.get("lat")) || 27.3256;
  const defaultLng = parseFloat(searchParams.get("lng")) || 88.6132;
  const defaultName = searchParams.get("name") || "Selected Monastery";

  const [location, setLocation] = useState({
    lat: defaultLat,
    lng: defaultLng,
    name: defaultName,
  });

  const [query, setQuery] = useState("");
  const [monasteries, setMonasteries] = useState([]);

  useEffect(() => {
  fetch("https://mysticmonks.onrender.com/monasteries")
    .then((res) => res.json())
    .then((data) => {
      // console.log("Fetched monasteries:", data); 
      setMonasteries(data);
    })
    .catch((err) => console.error("Error fetching monasteries:", err));
}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = monasteries.find((m) =>
      m.name.toLowerCase().includes(query.toLowerCase())
    );
    if (found && found.location_lat && found.location_long) {
      setLocation({
        lat: parseFloat(found.location_lat),
        lng: parseFloat(found.location_long),
        name: found.name,
      });
    } else {
      alert("No monastery found with that name or coordinates missing.");
    }
  };

  return (
    <div className="bg-fixed bg-cover w-full min-h-screen flex flex-col items-center bg-gradient-to-t from-black/80 via-black/40 to-transparent py-24">
      {/* Starter text */}
      <div className="max-w-3xl text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Interactive Map of Sikkim’s Monasteries
        </h2>
        <p className="mt-2 text-gray-700 rounded-2xl m-2 p-2">
          Explore monasteries across Sikkim. Use the search bar to quickly find
          a monastery and view its exact location with travel routes and nearby
          attractions.
        </p>
      </div>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-md mb-6 bg-white shadow rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search monastery..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-4 bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="w-[90%] h-[75vh] shadow-lg rounded-xl overflow-hidden">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ChangeView center={[location.lat, location.lng]} />
            {Array.isArray(monasteries) && monasteries.map((m) => (
  m.location_lat && m.location_long && (
    <Marker key={m.monastery_id} position={[parseFloat(m.location_lat), parseFloat(m.location_long)]}>
      <Popup>
        <b>{m.name}</b><br/>
        {m.description}<br/>
        {m.image_url && <img src={m.image_url} alt={m.name} width="150" />}
      </Popup>
    </Marker>
  )
))}

        </MapContainer>
      </div>
    </div>
  );
}
