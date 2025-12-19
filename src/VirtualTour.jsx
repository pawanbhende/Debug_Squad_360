// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { monasteriesData } from './Monasteries';

// function PanoramaViewer() {
//   const { name } = useParams();
//   const decodedName = decodeURIComponent(name);
  
//   const monastery = monasteriesData.find(m => m.name === decodedName);

//   useEffect(() => {
//     if (monastery) {
//       window.pannellum.viewer('panorama', {
//         type: 'equirectangular',
//         panorama: monastery.image,
//       });
//     }
//   }, [monastery]);

//   if (!monastery) return <p>Monastery not found</p>;

//   return (
//     <div className="py-24 flex justify-center items-center rounded-2xl">

//       <div id="panorama" style={{ width: '800px', height: '500px' }}></div>
//     </div>
//   );
// }

// export default PanoramaViewer;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { monasteriesData } from './Monasteries';

function PanoramaViewer() {
  const { name } = useParams();
  const decodedName = name ? decodeURIComponent(name) : null;
  const navigate = useNavigate();

  const [selectedMonastery, setSelectedMonastery] = useState(null);

  useEffect(() => {
    if (decodedName) {
      const monastery = monasteriesData.find((m) => m.name === decodedName);
      setSelectedMonastery(monastery);
    }
  }, [decodedName]);

  useEffect(() => {
    if (selectedMonastery) {
      window.pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: selectedMonastery.image,
      });
    }
  }, [selectedMonastery]);

  return (
    <div className="py-24 flex flex-col items-center space-y-6">
      {selectedMonastery && (
        <h2 className="text-2xl font-bold">{selectedMonastery.name}</h2>
      )}

      {!selectedMonastery && !decodedName && (
        <select
          onChange={(e) => {
            const monastery = monasteriesData.find(
              (m) => m.name === e.target.value
            );
            if (monastery) {
              navigate(`/tour/${encodeURIComponent(monastery.name)}`);
            }
          }}
          className="p-2 border rounded shadow"
          defaultValue=""
        >
          <option value="" disabled>
            Select a Monastery
          </option>
          {monasteriesData.map((m) => (
            <option key={m.id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>
      )}

      {selectedMonastery ? (
        <div id="panorama" style={{ width: '1200px', height: '600px' }}></div>
      ) : (
        decodedName && <p className="text-gray-600">Monastery not found</p>
      )}
    </div>
  );
}

export default PanoramaViewer;
