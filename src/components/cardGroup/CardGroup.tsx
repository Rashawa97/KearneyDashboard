// create card componmet
import React from "react";
import "./CardGroup.css";
interface CardGroupProps {
  title: string;
  className?: string;
}
export const CardGroup = (props: React.PropsWithChildren<CardGroupProps>) => {
  return (
    <>
      <h4 className="card-group-title">{props.title}</h4>
      <div className={props.className}>{props.children}</div>
    </>
  );
};
