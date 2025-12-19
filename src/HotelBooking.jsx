
export default function HotelBooking() {
  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Review Your Booking</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Guest Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border p-3 rounded" placeholder="First Name" />
          <input className="border p-3 rounded" placeholder="Last Name" />
          <input className="border p-3 rounded" placeholder="Email Address" />
          <input className="border p-3 rounded" placeholder="Mobile Number" />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Stay Details</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input type="date" className="border p-3 rounded" />
          <input type="date" className="border p-3 rounded" />
          <select className="border p-3 rounded">
            <option>1 Room · 2 Adults</option>
            <option>1 Room · 1 Adult</option>
            <option>2 Rooms · 4 Adults</option>
          </select>
        </div>
      </div>

      <a href="/payment"><button className="px-8 py-3 bg-orange-600 text-white rounded-lg">
        Proceed to Payment
      </button></a>
    </div>
  );
}
