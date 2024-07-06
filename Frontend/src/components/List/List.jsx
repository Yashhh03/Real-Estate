import "./list.scss";
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function List({ posts }) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
