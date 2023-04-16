import React from "react";
import "./Dashboard.css";
import { Col, Row } from "react-bootstrap";
import { Card } from "../components/card/Card";
import { ScallerProgress } from "../components/scalerProgress/ScallerProgress";
import { CardGroup } from "../components/cardGroup/CardGroup";
function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <CardGroup title="Regulation enforcement rate">
            <Row>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <CardGroup title="Regulation enforcement rate">
            <Row>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <CardGroup title="Regulation enforcement rate">
            <Row>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card>
                  <ScallerProgress
                    title={"Current state"}
                    subTitle={"1 Week"}
                    percentage={""}
                    difference={0.1}
                  />
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Card>
            <ScallerProgress
              title={"Current state"}
              subTitle={"1 Week"}
              percentage={""}
              difference={0.1}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
