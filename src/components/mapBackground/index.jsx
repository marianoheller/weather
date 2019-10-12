import React from "react";
import styled from "styled-components";
import { Map, TileLayer } from "react-leaflet";

const StyledMap = styled(Map)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  & .leaflet-control-container {
    display: none;
  }
`;

const CoverLayer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.25)
  );
`;

function MapBackground({ lat = 49.84, lon = -97.13, ...rest }) {
  const position = [lat, lon];
  return (
    <React.Fragment>
      <CoverLayer />
      <StyledMap center={position} animate zoom={9} {...rest}>
        <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
      </StyledMap>
    </React.Fragment>
  );
}

export default MapBackground;
