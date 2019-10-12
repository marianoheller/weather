import React from "react";
import styled from "styled-components";
import MapBackground from "../../components/mapBackground";
import Input from "../../components/input";
import renderForecastCards from "./renderForecastCards";
import { useForecast, getCoords } from "./utils";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 300px;
`;

function Home() {
  const [forecast, setCity] = useForecast();
  return (
    <Wrapper>
      <MapBackground {...getCoords(forecast)} />
      <InputContainer>
        <Input handleChange={setCity} />
      </InputContainer>
      {renderForecastCards(forecast)}
    </Wrapper>
  );
}

export default Home;
