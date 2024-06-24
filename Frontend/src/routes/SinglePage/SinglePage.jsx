import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/Map/Map";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">&#8377; {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="utility.png" />
              <div className="featuredText">
                <span>Utilities</span>
                <p>Renter are responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" />
              <div className="featuredText">
                <span>Set Prosit</span>
                <p>pat are responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="utility.png" />
              <div className="featuredText">
                <span>Utilities</span>
                <p>Renter are responsible</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>
          <div className="MapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" />
              Send a message
            </button>
            <button>
              <img src="/save.png" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
