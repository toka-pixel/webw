import ParagraphInfo from "../shared-components/ParagraphInfo/ParagraphInfo";
import Button from "../shared-components/Button/Button";
import { Row, Col } from "antd";
import "./About.scss";

const About = () => {
  const clients = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
  ];
  return (
    <div className="about ">
      <Row className="">
        <Col xs={24} sm={24} md={13} className="about-img">
          <div className="aboutInfo">
            <ParagraphInfo
              title_1="Advanced Platforr"
              header_1="Take your Team"
              header_2="to the next level"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              button={<Button className="whiteButton">About us</Button>}
            />
          </div>
         
        </Col>
        <Col xs={24} md={9}>
          <img className="report" src="/imgs/report.png" />
        </Col>
      </Row>

     
        <Row className="clients" justify={'center'}>
          {clients.map((item, index) => (
            <Col xs={24} sm={12} md={4} key={index}>
              <div className="one-client"  key={index}>
                <img src={`/imgs/${item}`} />
              </div>
            </Col>
          ))}
        </Row>
     
    </div>
  );
};

export default About;
