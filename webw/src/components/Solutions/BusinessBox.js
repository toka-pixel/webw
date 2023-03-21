import { Col, Row } from "antd";
import "./Solutions.scss";

const BusinessBox = () => {
  const data = [
    { img: "activity.png", id: 1, title: "scale your activity", color: "red" },
    { img: "bootcamps.png", id: 2, title: "Bootcamps", color: "green_1" },
    { img: "hq.png", id: 3, title: "Hight Quality", color: "purple" },
    {
      img: "certifcation.png",
      id: 4,
      title: "Get Certifcation",
      color: "green",
    },
  ];

  return (
    <Row className="businessBox">
      {data.map((item, index) => (
        <>
        <Col xs={11} >
         
            <img
              src={`/imgs/${item.img}`}
              alt={item.img}
              className={`businessImg ${item.color}`}
            />
        
          <p className="businessTitle">{item.title}</p>
          <div className="line"></div>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </Col>
        <Col xs={1}></Col>
        </>
      ))}
    </Row>
  );
};

export default BusinessBox;
