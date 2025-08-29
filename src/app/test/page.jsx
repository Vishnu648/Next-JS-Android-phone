import React from 'react'

function TestPage() {
  return (
    <div>TestPage</div>
  )
}

export default TestPage
// "use client"
// import React, { useState, useEffect } from 'react';

// // Main App component
// const App = () => {
//   const [batteryLevel, setBatteryLevel] = useState(null);
//   const [isCharging, setIsCharging] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if the Battery Status API is supported
//     if ('getBattery' in navigator) {
//       navigator.getBattery().then((battery) => {
//         // Function to update state with current battery info
//         const updateBatteryStatus = () => {
//           setBatteryLevel(Math.round(battery.level * 100));
//           setIsCharging(battery.charging);
//         };

//         // Initial update
//         updateBatteryStatus();

//         // Add event listeners for real-time updates
//         battery.addEventListener('levelchange', updateBatteryStatus);
//         battery.addEventListener('chargingchange', updateBatteryStatus);

//         // Clean up the event listeners when the component unmounts
//         return () => {
//           battery.removeEventListener('levelchange', updateBatteryStatus);
//           battery.removeEventListener('chargingchange', updateBatteryStatus);
//         };
//       }).catch(err => {
//         setError("Could not get battery information.");
//         console.error("Error getting battery information:", err);
//       });
//     } else {
//       setError("Battery Status API not supported in this browser.");
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
//       <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center w-full max-w-sm">
//         <h1 className="text-3xl font-bold mb-4">Battery Status</h1>
//         {error ? (
//           <p className="text-red-400">{error}</p>
//         ) : (
//           <div>
//             <div className="mb-4">
//               <div className="relative h-8 rounded-full bg-gray-600 overflow-hidden">
//                 <div 
//                   className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
//                   style={{
//                     width: `${batteryLevel}%`,
//                     backgroundColor: batteryLevel > 50 ? '#4ade80' : batteryLevel > 20 ? '#fde047' : '#f87171'
//                   }}
//                 ></div>
//                 <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
//                   {batteryLevel !== null ? `${batteryLevel}%` : 'Loading...'}
//                 </span>
//               </div>
//             </div>
//             {isCharging !== null && (
//               <p className="text-lg font-medium">
//                 Charging Status: {isCharging ? 'Charging' : 'Not Charging'}
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
