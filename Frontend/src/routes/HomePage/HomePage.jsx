import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Perfect Place </h1>

          <p>
            Experience luxurious living in our contemporary urban oasis, where
            modern design meets unparalleled comfort. Welcome to a prestigious
            address redefining upscale living.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" />
      </div>
    </div>
  );
}
