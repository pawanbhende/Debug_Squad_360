import { Link } from "react-router-dom";
import { Bus, Car, Plane, Train } from "lucide-react";

export default function TourismTab() {
  const transportModes = [
    {
      icon: <Bus className="text-orange-600" size={28} />,
      title: "Bus & Shared Jeeps",
      desc: "Affordable travel between major towns like Gangtok, Pelling, Siliguri.",
      routes: [
        { from: "Gangtok", to: "Pelling", duration: "4–5 hrs", fare: "₹250–400" },
        { from: "Gangtok", to: "Siliguri", duration: "4–5 hrs", fare: "₹200–300" },
      ],
    },
    {
      icon: <Car className="text-orange-600" size={28} />,
      title: "Private Taxis",
      desc: "Available from stands and hotels, more flexible but costly.",
      routes: [
        { from: "Gangtok", to: "Nathula", duration: "2 hrs", fare: "₹3500–4000" },
        { from: "Gangtok", to: "Lachen", duration: "6–7 hrs", fare: "₹5000–6000" },
      ],
    },
    {
      icon: <Plane className="text-orange-600" size={28} />,
      title: "Air Travel",
      desc: "Pakyong Airport (35 km from Gangtok) has limited flights. Bagdogra (West Bengal) is the nearest major airport.",
      routes: [{ from: "Delhi / Kolkata", to: "Bagdogra", duration: "2 hrs flight" }],
    },
    {
      icon: <Train className="text-orange-600" size={28} />,
      title: "Railway",
      desc: "No direct trains to Sikkim. Nearest stations: Siliguri (114 km) & New Jalpaiguri (120 km).",
      routes: [{ from: "Kolkata", to: "NJP", duration: "10–12 hrs" }],
    },
  ];

  return (
    <div className="p-8 space-y-6 py-24">
      <h1 className="text-2xl font-bold text-orange-700">Transportation in Sikkim</h1>
      <p className="text-gray-600">
        Learn about how to travel across Sikkim: buses, jeeps, taxis, flights, and trains.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {transportModes.map((mode, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border-l-4 border-orange-600 p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              {mode.icon}
              <h2 className="text-lg font-semibold">{mode.title}</h2>
            </div>
            <p className="text-gray-500 mt-2">{mode.desc}</p>

            <ul className="mt-3 space-y-2">
              {mode.routes.map((r, i) => (
                <li
                  key={i}
                  className="bg-orange-50 p-2 rounded-lg text-sm flex justify-between"
                >
                  <span>
                    {r.from} → {r.to}
                  </span>
                  <span className="text-gray-600">
                    {r.duration} • {r.fare}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
