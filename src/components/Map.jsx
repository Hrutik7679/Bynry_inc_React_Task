import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ profile }) => {
  const [viewport, setViewport] = React.useState({
    latitude: profile.address[0],
    longitude: profile.address[1],
    zoom: 10,
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="400px"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={profile.address[0]} longitude={profile.address[1]}>
          <Popup>{profile.name}</Popup>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
