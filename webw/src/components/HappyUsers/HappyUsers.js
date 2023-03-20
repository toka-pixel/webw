import { Col, Row } from "antd";
import SliderSlick from "../shared-components/Slider/SliderSlick";
import CheckRating from "../shared-components/CheckRating/CheckRating";
import ParagraphInfo from "../shared-components/ParagraphInfo/ParagraphInfo";
import data from "./data.json";
import "./HappyUsers.scss";
import Button from "../shared-components/Button/Button";

const HappyUsers = () => {
  return (
    <div className="container">
      <div className="happyUsers">
        <Row>
          <Col xs={24} md={11} className="reviews">
            <SliderSlick
              slidesToShow={1}
              slidesToShowlaptop={1}
              slidesToShowtablet={1}
              slidesToShowmobile={1}
            >
              {data.map((item) => (
                <div key={item.id} className="userReview">
                  <img src={item.img} />
                  <div>
                    <span className="name">{item.userName}</span>
                    <span className="job">{item.job}</span>
                    <p className="review">{item.review}</p>

                    <CheckRating rate={item.rate} />
                  </div>
                </div>
              ))}
            </SliderSlick>
          </Col>
          <Col xs={2}></Col>
          <Col xs={24} md={11}>
            <ParagraphInfo
              header_1="Grow Your Business and"
              header_2="Join Our Happy Users"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
              button={<Button>About Us</Button>}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HappyUsers;
