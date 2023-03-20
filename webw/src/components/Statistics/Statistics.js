import CountUp from "react-countup";
import data from "./data.json";
import VisibilitySensor from "react-visibility-sensor";
import { Row, Col } from "antd";
import './Statistics.scss';


const Statistics=()=>{
    return (
        <div className="statistics">
          <Row>
          {data.map((item) =>
          
              <Col md={6} sm={12} xs={24} key={item.id} className={''}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <h1>
                          <CountUp
                            start={0}
                            end={parseFloat(item.reachedNumber)}
                            duration={2.75}
                            redraw={true}
                           
                          />
                        </h1>
                      ) : (
                        <h1>{item.reachedNumber}</h1>
                      )}
                    </div>
                  )}
                </VisibilitySensor>
                <p>{item.category}</p>
              </Col>
           
          )}
        </Row>
        </div>
    )
}

export default Statistics;