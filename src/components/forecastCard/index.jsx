import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { getDayOfTheWeek } from "./utils";

const StyledCard = styled(Card)`
  max-width: 345;
`;

const StyledHeader = styled(Typography)`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  opacity: 0.5;
  filter: saturate(50%);
`;

export default function ImgMediaCard({
  key,
  timestamp,
  temp,
  tempMin,
  tempMax,
  pressure,
  seaLevel,
  groundLevel,
  humidity,
  tempKf,
  icon
}) {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <StyledHeader gutterBottom variant="h5" component="h2">
            {temp.toFixed(0)} K
            <Img src={icon} alt="weather icon" />
          </StyledHeader>
          <Typography variant="body2" color="textSecondary" component="p">
            Humidity: {humidity.toFixed(2)} %
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pressure: {pressure.toFixed(2)} hPa
          </Typography>
        </CardContent>
        <CardActions>
          <span>{getDayOfTheWeek(timestamp)}</span>
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
}
