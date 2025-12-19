
import { Hotel, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HotelsPage() {
  const monasteries = [
    {
      name: "Pemayangtse Monastery (Pelling)",
      hotels: [
        {
          name: "The Elgin Mount Pandim – Heritage Resort & Spa",
          location: "Pelling",
          rating: 5,
          price: "₹7,500 / night",
          image: "https://www.elginhotels.com/wp-content/uploads/2020/02/gallery-pic1-5.jpg",
        },
        {
          name: "Magpie Chestnut Retreat",
          location: "Pelling",
          rating: 4,
          price: "₹4,500 / night",
          image: "https://www.magpiehotelsandresorts.in/images/hotels/magpie-the-chestnut-retreat/1.jpg",
        },
        {
          name: "The Chumbi Mountain Retreat & Spa",
          location: "Pelling",
          rating: 5,
          price: "₹8,200 / night",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362584096.jpg",
        },
      ],
    },
    {
      name: "Phensang Monastery (Near Gangtok)",
      hotels: [
        {
          name: "Mayfair Spa Resort & Casino",
          location: "Gangtok",
          rating: 5,
          price: "₹7,800 / night",
          image: "https://assets.simplotel.com/simplotel/image/upload/mayfair-spa-resort-casino-gangtok",
        },
        {
          name: "Denzong Regency",
          location: "Gangtok",
          rating: 5,
          price: "₹6,500 / night",
          image: "https://www.denzongregency.com/Photos/5-star-hotel-in-gangtok-sikkim-14.jpg",
        },
        {
          name: "Netuk House",
          location: "Gangtok",
          rating: 4,
          price: "₹4,200 / night",
          image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/86553387.jpg",
        },
      ],
    },
    {
      name: "Doling Monastery (South Sikkim)",
      hotels: [
        {
          name: "Buddha Retreat",
          location: "Ravangla",
          rating: 4,
          price: "₹3,800 / night",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217243441.jpg",
        },
        {
          name: "Khachoe Residency",
          location: "Ravangla",
          rating: 3,
          price: "₹2,500 / night",
          image: "https://r1imghtlak.mmtcdn.com/9ebcdc6678ce11eb8c900242ac110005.jpg",
        },
        {
          name: "Valley Mist Homestay",
          location: "Ravangla",
          rating: 3,
          price: "₹2,200 / night",
          image: "https://assets.culturetravel.in/9c4d21ac-b004-4fcc-950d-557677ce287e/thumbnail.jpg",
        },
      ],
    },
  ];

  return (
    <div className="p-8 space-y-10 py-24">
      <h1 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
        <Hotel className="text-orange-600" /> Hotels & Stays
      </h1>

      {monasteries.map((monastery, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            🏯 {monastery.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monastery.hotels.map((hotel, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="text-orange-600" /> {hotel.location}
                  </p>

                  <div className="flex items-center gap-1 mt-2 text-yellow-500">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-700 mt-2 font-medium">{hotel.price}</p>

                  <Link to="/hotel-booking">
                    <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
