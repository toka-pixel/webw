import { useEffect, useState } from "react";
import Button from "../shared-components/Button/Button";
import { Row, Col, Grid } from "antd";
import links from "./NavigationLinks.json";
import MobileMenu from "./MobileMenu";
import "./Header.scss";

const Header = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  console.log(windowWidth);
  return (
    <div className="header container">
      {windowWidth < 1215 ? (
        <MobileMenu />
      ) : (
        <Row>
          <Col xs={20} className="logo-links">
     
            <h1 className="logo">St<span className="v"> v</span>dy
            </h1>

            <ul>
              {links.map((item) => (
                <li key={item.id}>{item.item}</li>
              ))}
            </ul>
          </Col>

          <Col xs={4}>
            <Button>About us</Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Header;
