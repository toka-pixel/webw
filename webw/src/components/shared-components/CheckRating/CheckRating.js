import  "./CheckRating.scss";
import { StarFilled } from "@ant-design/icons";

const CheckRating = (props) => {
    const {rate}=props
  return [...new Array(5)].map((_, index) => {
    return (
      <StarFilled
        className={` ${index < rate ? "purple" : "gray"} ${
          "star"
        }`}
        key={index}
      />
    );
  });
};

export default CheckRating;