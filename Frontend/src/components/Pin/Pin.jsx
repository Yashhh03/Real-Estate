import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} Bedroom</span>
            <b>&#8377; {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

Pin.propTypes = {
  item: PropTypes.object.isRequired,
};
