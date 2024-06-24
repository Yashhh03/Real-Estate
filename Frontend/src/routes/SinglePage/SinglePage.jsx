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
              <img src="/utility.png" />
              <div className="featuredText">
                <span>Utilities</span>
                <p>Renter are responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" />
              <div className="featuredText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" />
              <div className="featuredText">
                <span>Property Fees</span>
                <p>Must be 2x the Rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" />
              <span>1200 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
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
