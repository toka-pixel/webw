import { Row, Col } from "antd";
import Button from "../shared-components/Button/Button";
import "./Footer.scss";

const Footer = () => {
  const data = [
    "Avis clients",
    "Mentions légales ",
    "Plan du site",
    "Blog d’Idéematic",
    "Le dictionnaire du digital",
    " ‹ Notre boutique /›",
  ];

  return (
    <div className="footer">
      <Row className="container">
        <Col xs={24} sm={24} md={7}>
          <h2>Study</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget diam at mi sollicitudin
          </p>
        </Col>
        <Col xs={24} sm={24} md={7}>
          <h2>Nos services</h2>
         
            {data.map((item,index) => (
              <p key={index}>{item}</p>
            ))}
        
        </Col>
        <Col xs={24} sm={24} md={24} lg={10}>
          <h2>Sign up for Special Offers!</h2>
          <div className="subscribe">
            <input placeholder="Mail" />
            <Button className="subscribeButton">Subscribe</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
