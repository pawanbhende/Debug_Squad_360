// src/pages/DigitalArchives.tsx
import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function DigitalArchives() {
const [selectedDoc, setSelectedDoc] = useState(null);

  const archives = [
    {
      id: 1,
      title: "DETAILED INFORMATION ABOUT SIKKIM",
      description: "Digitized version of a rare Buddhist manuscript.",
      pdfUrl:
        "https://dspace.cus.ac.in/jspui/bitstream/1/3337/1/Sikkim.pdf",
    },
    {
      id: 2,
      title: "SIKKIM'S MONASTERIC HERITAGE AFTER EARTHQUAKE",
      description: "High-resolution scans of monastery murals.",
      pdfUrl:
        "https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_2011_01_04.pdf",
    },
    {
        id:3,
        title:"MONASTERIES IN SIKKIM",
        description: "",
        pdfUrl :"https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_1996_03_note2.pdf"
    }
  ];

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="min-h-screen bg-gray-100 p-6 py-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Digital Archives
      </h1>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
        {archives.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg cursor-pointer transition"
            onClick={() => setSelectedDoc(item.pdfUrl)}
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* PDF Preview */}
      {selectedDoc && (
        <div className="shadow-lg rounded-xl h-[80vh] mt-4 pt-4 flex flex-col justify-center items-center bg-white">
          <h2 className="text-lg font-semibold mb-3 text-gray-700 mt-2">Preview</h2>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={`http://localhost:5000/proxy-pdf?url=${encodeURIComponent(
                selectedDoc
              )}`}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      )}
    </div>
  );
}
