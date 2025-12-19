import { Link } from "react-router-dom";
import { Bus, Car, Plane, Hotel, MapPin } from "lucide-react";

export default function TravelPlanner() {
  const destinations = [
    {
      name: "Rumtek Monastery",
      location: "Gangtok",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "45 min", fare: "₹1200" },
        { type: "Bus", icon: <Bus size={18} />, duration: "1 hr", fare: "₹100" },
      ],
      hotels: [
        { name: "Hotel Rumtek Dzong", price: "₹2,500/night" },
        { name: "Delight The Fortuna", price: "₹3,200/night" },
      ],
    },
    {
      name: "Pemayangtse Monastery",
      location: "Pelling",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "5 hrs", fare: "₹4000" },
        { type: "Bus", icon: <Bus size={18} />, duration: "6 hrs", fare: "₹350" },
      ],
      hotels: [
        { name: "Norbu Ghang Resort", price: "₹4,000/night" },
        { name: "Summit Newa Regency", price: "₹3,500/night" },
      ],
    },
    {
      name: "Nathula Pass",
      location: "Near Gangtok",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "2 hrs", fare: "₹3500" },
      ],
      hotels: [
        { name: "Mayfair Spa Resort", price: "₹7,500/night" },
        { name: "The Elgin Nor-Khill", price: "₹5,200/night" },
      ],
    },
  ];

  return (
    <div className="p-8 py-24 space-y-8">
      <h1 className="text-3xl font-bold text-orange-700 flex items-center gap-2">
        <MapPin className="text-orange-600" /> Travel & Tourism Planner
      </h1>
      <p className="text-gray-600">
        Select a destination to explore transport options and nearby hotels.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{dest.name}</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
              <MapPin size={14} className="text-orange-600" /> {dest.location}
            </p>

            {/* Transport Section */}
            <div className="mt-4">
              <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
                <Bus className="text-orange-600" size={18} /> Transport Options
              </h3>
              <ul className="space-y-2">
                {dest.transport.map((t, i) => (
                  <li
                    key={i}
                    className="bg-orange-50 rounded-lg p-2 flex justify-between items-center"
                  >
                    <span className="flex items-center gap-2">
                      {t.icon} {t.type}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {t.duration} • {t.fare}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hotels Section */}
            <div className="mt-4">
              <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
                <Hotel className="text-orange-600" size={18} /> Nearby Hotels
              </h3>
              <ul className="space-y-2">
                {dest.hotels.map((h, i) => (
                  <li
                    key={i}
                    className="bg-gray-50 rounded-lg p-2 flex justify-between items-center"
                  >
                    <a href="#" className="block">{h.name}</a>
                    <span className="text-gray-600 text-sm">{h.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link to="/payment"><button className="mt-5 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">Plan Trip</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
