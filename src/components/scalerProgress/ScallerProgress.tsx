// create card componmet
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ScallerProgress.css";
interface ScallerProgressProps {
  title: string;
  subTitle: string;
  percentage: string;
  difference?: number;
  className?: string;
}
export const ScallerProgress = ({
  subTitle,
  percentage,
  difference,
  title,
  className,
}: ScallerProgressProps) => {
  return (
    <div className={"scaller-progress " + (className ?? "")}>
      <Row>
        <Col xs={4}>
          <img src={"../assets/Chart.png"} />
        </Col>
        <Col xs={8} style={{}}>
          <div
            style={{
              textAlign: "start",
              marginLeft: "16px",
            }}
          >
            <div className="scaller-progress-title">{title}</div>
            <div className="scaller-progress-subtitle">({subTitle})</div>
            {difference && difference >= 0 ? (
              <div className="scaller-progress-diff-positive">
                {getFormattedDifference(difference)}
              </div>
            ) : null}
            {difference && difference < 0 ? (
              <div className="scaller-progress-diff-negative">
                {getFormattedDifference(difference)}
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

const getFormattedDifference = (difference: number) => {
  return difference >= 0 ? `+${difference * 100}%` : `-${difference * 100}%`;
};
