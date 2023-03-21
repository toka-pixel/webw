import ParagraphInfo from "../shared-components/ParagraphInfo/ParagraphInfo";
import { Row, Col } from "antd";
import "./BestPlatform.scss";

const BestPlatform = (props) => {
  const { leftImg } = props;
  return (
    <div className="bestPlatform">
      <Row className="row">
        <Col
          order={leftImg ? 1 : 2}
          className={`zindexImg `}
          xs={24}
          sm={12}
          md={12}
        >
          <img src="/imgs/bestPlatform2.png" className="img-blatForm" />
        </Col>
        <Col xs={1}></Col>
        <Col
          xs={24}
          sm={11}
          md={11}
          order={leftImg ? 2 : 1}
          className="bestPlatformInfo "
        >
          <ParagraphInfo
            header_1="Best Platform for the"
            header_2="Technological Era"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
          />
        </Col>
      </Row>
    </div>
  );
};

export default BestPlatform;
