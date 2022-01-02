// import { POINT_CONVERSION_HYBRID } from "constants";
// import mapboxgl from "mapbox-gl";
// import React, { useRef, useEffect, useState } from "react";
// import ReactMapGL, {
//   Marker,
//   MarkerProps,
//   Layer,
//   LayerProps,
//   Source,
// } from "react-map-gl";
// // @ts-ignore
// import Geocoder from "react-map-gl-geocoder";

// const parkLayer: LayerProps = {
//   id: "landuse_park",
//   type: "line",
//   source: "mapbox",
//   "source-layer": "landuse",
//   filter: ["==", "class", "park"],
//   paint: { "fill-color": "orange" },
// };

// type ViewPort = {
//   latitude: number;
//   longitude: number;
//   zoom: number;
// };
// const CustomMarker = new mapboxgl.Marker().setLngLat({
//   lon: 78.15798,
//   lat: 11.65212,
// });
// export default function App() {
//   const [viewport, setViewport] = React.useState({
//     longitude: 78.15798,
//     latitude: 11.65212,
//     zoom: 10,
//   });
//   const [points, setpoints] = React.useState<number[][]>([
//     [78.15798, 11.65212],
//   ]);
//   const [parkColor, setParkColor] = React.useState("#8fa");
//   return (
//     <div
//       style={{
//         flex: 1,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       }}
//     >
//       <ReactMapGL
//         {...viewport}
//         zoom={10}
//         width="100%"
//         height="100%"
//         mapStyle={"mapbox://styles/mapbox/streets-v11"}
//         mapOptions={{
//           accessToken:
//             "pk.eyJ1IjoiOTk0NDc4MTAwMyIsImEiOiJja3hpZzdybDAxZDlsMnBucDdpMnI3ejQxIn0.6iDU2BmtR6YAvIjDUcBPaA",
//         }}
//         onClick={(prop: { lngLat: number[] }) => {
//           console.log(prop.lngLat);
//           setpoints([...points, prop.lngLat]);
//         }}
//         onViewportChange={(viewport: ViewPort) => {
//           setViewport(viewport);
//         }}
//       >
//         {points.map((item, index) => (
//           <Marker
//             longitude={item[0]}
//             latitude={item[1]}
//             offsetTop={-20}
//             offsetLeft={-10}
//           >
//             <img src={"./icons/gps.png"} width={24} height={24} alt="" />
//           </Marker>
//         ))}
//         <Source
//           type="geojson"
//           data={{
//             type: "Feature",
//             id: 1,
//             geometry: {
//               type: "LineString",
//               coordinates: points,
//             },
//             properties: {
//               name: "Arul",
//               city: "Salem",
//             },
//           }}
//         >
//           <Layer
//             {...{
//               id: "point",
//               type: "line",
//               paint: {
//                 "line-color": "red",
//                 "line-width": 2,
//               },
//             }}
//           />
//         </Source>
//       </ReactMapGL>
//     </div>
//   );
// }
export default {};
