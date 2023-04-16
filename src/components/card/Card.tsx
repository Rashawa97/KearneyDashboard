// create card componmet
import React from "react";
import "./Card.css";
interface CardProps {
  className?: string;
}
export const Card = (props: React.PropsWithChildren<CardProps>) => {
  return (
    <div className={"card " + (props.className ?? "")}>{props.children}</div>
  );
};
