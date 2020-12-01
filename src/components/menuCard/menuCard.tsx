import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { IMenuCardProps } from "./menuCard.interfaces";

export const MenuCard = (props: IMenuCardProps) => {
  const { text, onClick, color = "#4B89BF" } = props;
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Card
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: `scale(${hovered ? 1.05 : 1})`,
        cursor: "pointer",
        backgroundColor: color,
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#eeeeee",
        transition: "all 0.5s",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
