import "./ParagraphInfo.scss";

const ParagraphInfo = (props) => {
  const { title_1, header_1,header_2, description, button,showLine } = props;
  return (
    <div className="paragraphInfo">
      
      <p className="title_1">{title_1}</p>
      <p className="bg_header">{header_1} <br/>{header_2}</p>
     
      <div className="description">{description}</div>

      {button ? (
        button
      ) : (
        <div className="link">
          <span>Learn About Our Success</span>
          <img className="arrow" src="/imgs/arrow.png" alt='arrow' />
        </div>
      )}
    </div>
  );
};

export default ParagraphInfo;
