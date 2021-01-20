import React from "react";
import { Input, Button, Row, Col, Collapse } from "antd";

const Group = Input.Group;
const { Panel } = Collapse;

class IMEIgen extends React.Component {
  render() {
    return (
      <Collapse size="large">
        <Panel header="Tạo IMEI">
          <Group size="medium">
            <Row gutter={8} style={{ padding: "5px" }}>
              <Col span={5}>
                <Input />
              </Col>
              <Col span={3}>
                <Button type="primary">Gen</Button>
              </Col>
            </Row>
            <Row gutter={8} style={{ padding: "5px" }}>
              <Col span={5}>
                <Input />
              </Col>
              <Col span={3}>
                <Button type="primary">Clip</Button>
              </Col>
            </Row>
            <Row gutter={8} style={{ padding: "5px" }}>
              <Col span={5}>
                <Input />
              </Col>
              <Col span={3}>
                <Button type="primary">Clip</Button>
              </Col>
            </Row>
          </Group>
        </Panel>
        <Panel header="Check">
          <Group />
        </Panel>
      </Collapse>
    );
  }
}

export default IMEIgen;
