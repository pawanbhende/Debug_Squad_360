import React from "react";

export default function Homepage() {
  return (
    <>
    <div className="font-sans text-gray-900 py-20">

      {/* Hero Section */}
      <section 
        className="bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-gray-900 text-center px-4"
        // style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Explore Sikkim’s Spiritual Heritage
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Virtual tours, interactive maps, and digital archives at your fingertips
        </p>
        <Link 
          to="#highlights" 
          className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Discover Now
        </Link>
      </section>

      {/* Image Slider */}

      {/* Highlights Section */}
      <section id="highlights" className="py-16 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌀</div>
            <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
            <p>Explore monastery interiors in stunning 360° panoramic views.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p>Discover geo-tagged monasteries with nearby attractions and travel routes.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Digital Archives</h3>
            <p>Access scanned manuscripts, murals, and historical documents anytime.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">About Monastery360</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Sikkim is home to over 200 monasteries rich in history, architecture, and spiritual significance. 
          Monastery360 brings these cultural treasures online through immersive virtual tours, interactive maps, and digital archives.
        </p>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Why It Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Boosts Tourism</h3>
            <p>Making monasteries accessible digitally increases tourist engagement.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Preserves Culture</h3>
            <p>Digitally archives endangered murals, manuscripts, and rituals.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Educational Exploration</h3>
            <p>Supports researchers, students, and spiritual seekers globally.</p>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
