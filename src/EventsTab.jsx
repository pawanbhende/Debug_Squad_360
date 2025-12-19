import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function EventsTab() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://mysticmonks.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events", err));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };
  const getGoogleCalendarLink = (event) => {
    const startDate = new Date(event.start_date);
    const endDate = event.end_date ? new Date(event.end_date) : startDate;

    const formatDate = (date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const baseUrl = "https://www.google.com/calendar/render";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: event.name,
      details: event.description || "Event in Sikkim",
      location: event.monastery || "Sikkim",
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    });

    return `${baseUrl}?${params.toString()}`;
  };
  return (
    <div className="p-6 space-y-6 py-24">
      {/* Global Calendar */}
      <section>
        <h2 className="text-xl font-semibold flex items-center gap-2 text-orange-700">
          <Calendar size={20} /> Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="mt-4 text-gray-500">No events available</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={`${event.event_id}-${event.monastery || "general"}`}
                className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-orange-600 hover:shadow-lg transition"
                data-aos="fade-up">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg">{event.name}</h3>
                  <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-lg">
                    {formatDate(event.start_date)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {event.monastery || "General Event"}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {event.description || "No description available"}
                </p>
                {/* <button className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 flex items-center gap-2">
                  <Clock size={16} /> Add to Calendar
                </button> */}
                <a
                    href={getGoogleCalendarLink(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} /> Add to calendar
                  </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
