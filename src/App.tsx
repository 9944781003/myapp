import mapboxgl from "mapbox-gl";
import React, { useState, useCallback, useRef, Ref, LegacyRef } from "react";
import ReactMapGL, {
  MapEvent,
  MapRef,
  MapStateProps,
  Marker,
} from "react-map-gl";
//@ts-ignore
import Geocoder from "react-map-gl-geocoder";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiOTk0NDc4MTAwMyIsImEiOiJja3hpZzdybDAxZDlsMnBucDdpMnI3ejQxIn0.6iDU2BmtR6YAvIjDUcBPaA";

const config: MapStateProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  longitude: 78.19265559814414,
  latitude: 11.647076241203393,
  zoom: 8,
};

export default function App() {
  const [arr, setArr] = React.useState<number[][]>([]);
  const [viewport, setViewport] = useState<MapStateProps>(config);
  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
  }, []);
  const geocoderContainerRef = useRef<LegacyRef<HTMLDivElement>>(null);
  const mapRef = useRef<MapRef>(null);

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <div
        ref={() => geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <ReactMapGL
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onClick={(mapEvent: MapEvent) => {
          setArr([...arr, mapEvent.lngLat]);
          console.log(mapEvent.lngLat);
        }}
      >
        {arr.map((arr, index) => {
          console.log(arr);
          return (
            <Marker
              key={index}
              longitude={arr[0]}
              latitude={arr[1]}
              offsetLeft={-20}
              offsetTop={-30}
            >
              <img width={"50%"} src={"./icons/bus-stop.png"} />
            </Marker>
          );
        })}
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </ReactMapGL>
    </div>
  );
}
