import { Link } from "react-router-dom";
import { MapPin, Book, Headphones, Calendar, Camera, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import imgImage from "./assets/img.jpeg";import { Navigation, Pagination } from "swiper/modules";
import sikkim1 from "./assets/sikkim1.jpg";
import sikkim2 from "./assets/sikkim2.jpg";
import sikkim3 from "./assets/sikkim3.jpg";
import sikkim4 from "./assets/sikkim4.jpg";
import sikkim5 from "./assets/sikkim5.jpg";
import sikkim6 from "./assets/sikkim6.jpg";
import sikkim7 from "./assets/sikkim7.jpg";

const ImageSlider = () => {
  const images = [sikkim1, sikkim2, sikkim3, sikkim4, sikkim5, sikkim6, sikkim7];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]} 
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[500px] md:h-[700px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function CTA() {
  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="bg-fixed min-h-screen bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${imgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg" data-aos="fade-down">
              Monastery360
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up">
              Explore Sikkim’s Spiritual Heritage – Immersive Virtual Tours,
              Cultural Archives, and Smart Travel Experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up">
              <Link
                to="/tour"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
              >
                Explore Virtual Tour
              </Link>
              <Link
                to="/map"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
              >
                Explore through Map
              </Link>
              <Link
                to="/monasteries"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
              >
                Explore Monasteries
              </Link>
              <Link
                to="/digital-archives"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
              >
                Explore Digital Archives
              </Link>
              <Link
                to="/hotels"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
              >
                Nearby Hotels
              </Link>
              <Link to="/travel-tourism" className="ml-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105">
                Transport & Tourism
              </Link>
            </div>
          </div>
        </section>
        {/* ...rest of your CTA component */}
      </div>
    </>
  );
}
