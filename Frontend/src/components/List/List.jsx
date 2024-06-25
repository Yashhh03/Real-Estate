import "./list.scss";
import Card from "../Card/Card";
import { listData } from "../../lib/dummydata";

export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
