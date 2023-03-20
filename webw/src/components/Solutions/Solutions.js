import ParagraphInfo from "../shared-components/ParagraphInfo/ParagraphInfo";
import BusinessBox from "./BusinessBox";
import { Col, Row } from "antd";
import "./Solutions.scss";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="container">
        <Row className="solutionsInfo" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} md={12}>
            <ParagraphInfo
              header_1="The best business "
              header_2="solution for you"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col xs={24} md={12} className="business">
            <BusinessBox />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Solutions;
