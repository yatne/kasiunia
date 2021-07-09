import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const GeographicsTab = () => {
  const [lat, setLat] = useState(52.229609700027126);
  const [lng, setLng] = useState(21.008587478535755);

  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 11,
  };

  const handleDrag = (map) => {
    setLat(map.center.lat());
    setLng(map.center.lng());
  };

  return (
    <div>
      <Header>Test z geografii historycznej! (Twoja mocna strona)</Header>
      <div style={{
        height: '50vh', width: '75%', margin: 'auto', display: 'relative',
      }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAgOJ8hNIIG-JWCt4l1c11gEw0T2hYPn10' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onDrag={(map) => handleDrag(map)}
        />
        <CrosshairLeft />
        <CrosshairTop />
      </div>
      <div>
        { lat }
      </div>
      <div>
        { lng }
      </div>
    </div>
  );
};

const CrosshairLeft = styled.div`
  height: 50vh;
  left: 50%;
  top: -50vh;
  border: 1px dotted gray;
  position: relative;
  width: 0;
`;

const CrosshairTop = styled.div`
  height: 0;
  width: 100%;
  left: 0;
  top: -75vh;
  border: 1px dotted gray;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  width: 99%;
  margin-right: auto;
  margin-left: auto;
`;

export default GeographicsTab;
