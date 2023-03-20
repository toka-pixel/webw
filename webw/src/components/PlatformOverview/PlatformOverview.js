import SliderSlick from "../shared-components/Slider/SliderSlick";
import "./PlatformOverview.scss";

const PlatformOverview = () => {
  const data = ["report.png", "report.png", "report.png"];

  return (
    <div className="platformOverview ">
      <div className="container">
        <p className="title">Advanced Customer Service Platform</p>
        <h2>Platform Overview</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>

        <SliderSlick
          slidesToShow={1}
          slidesToShowlaptop={1}
          slidesToShowtablet={1}
          slidesToShowmobile={1}

        >
          {data.map((item, index) => (
           
              <img key={index} className="img" src={`/imgs/${item}`} />
         
          ))}
        </SliderSlick>
      </div>
    </div>
  );
};

export default PlatformOverview;
