import ParagraphInfo from "../shared-components/ParagraphInfo/ParagraphInfo";
import Button from "../shared-components/Button/Button";
import { Row, Col } from "antd";
import data from "./data.json";
import "./GrowProcess.scss";

const GrowProcess = () => {
  return (
    <div className=" container">
      <div className="growProcess">
        <Row className="">
          <Col xs={24} md={11} className="">
            Acceleration Process to Grow Your Business
            <ParagraphInfo
              header_1="Acceleration Process to "
              header_2="Grow Your Business"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
              button={<Button>About Us</Button>}
            />
          </Col>
          <Col xs={2}></Col>
          <Col xs={24} md={11} className="">
            {data.map((item) => (
              <div className="process" key={item.id}>
                <div className="leftSide">
                  <div className="processNum">{item.id}</div>
                  <br />
                  <div className="verticalLine"></div>
                </div>
                <div className="rightSide">
                  <p>{item.processName}</p>
                  <label className="description">{item.content}</label>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <h2>
          Don't Just Take <br /> our Word for it!
        </h2>
      </div>
    </div>
  );
};

export default GrowProcess;
