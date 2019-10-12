import React, { useState, useEffect } from "react";
import styled from "styled-components";
import get from "lodash/fp/get";
import head from "lodash/fp/head";
import compose from "lodash/fp/compose";
import { useTransition, animated } from "react-spring";
import ForecastCard from "../../components/forecastCard";

const MainContainer = styled.div`
  display: block;
  flex-direction: row;
  justify-content: center;
`;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10vw;
`;

const transitionConfig = {
  from: {
    opacity: 0,
    transform: "translate3d(0, -40px, 0)"
  },
  enter: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)"
  },
  leave: {
    opacity: 0,
    transform: "translate3d(0, 40px, 0)"
  }
};

export const getFirstCityId = compose([get("cityId"), head]);
export const getFirstTimestamp = compose([get("timestamp"), head]);
export const getKey = forecasts =>
  `${getFirstCityId(forecasts)}${getFirstTimestamp(forecasts)}`;

export default function RenderForecastCards(forecast = []) {
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, getKey, transitionConfig);
  useEffect(() => {
    setItems([forecast]);
  }, [forecast]);

  return (
    <MainContainer>
      {transitions.map(({ item, props, key }) => (
        <AnimatedDiv key={key} style={props}>
          <CardsContainer>
            {item && item.map(cardProps => <ForecastCard {...cardProps} />)}
          </CardsContainer>
        </AnimatedDiv>
      ))}
    </MainContainer>
  );
}
