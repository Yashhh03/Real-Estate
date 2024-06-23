import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes from "prop-types";

export default function Card({ item }) {
  return (
    <div className="Card">
      <Link to={`/${item.id}`} className="imgContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" />
          <span>{item.address}</span>
        </p>
        <p className="price">&#8377; {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" />
            </div>
            <div className="icon">
              <img src="/chat.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
