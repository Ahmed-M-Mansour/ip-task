import { useEffect, useState, useRef } from "react";
import "./App.css";
import Map from "./Components/Map";
import BoxContainer from "./Components/BoxContainer";
import arrow from "./images/icon-arrow.svg";

function App() {
  const [IP, setIP] = useState("");
  const [address, setAddress] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    async function ipTracker() {
      let res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_tIa8PUbTTmWBfAkaLFsumCsCXmDS7&ipAddress=${IP}`
      );
      let data = await res.json();
      setAddress(data);
    }
    try {
      ipTracker();
    } catch (error) {
      console.log(error);
    }
  }, [IP]);

  const ipAddress = () => {
    setIP(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="body">
        <header>
          <h1>IP Address Tracker</h1>
          <div className="input-box">
            <input
              type="text"
              ref={inputRef}
              placeholder="Search for any IP Address or domain"
            />
            <button onClick={ipAddress}>
              <img src={arrow} alt="search button" />
            </button>
          </div>
        </header>
        {!(address === null) && (
          <>
            <div className="map">
              <BoxContainer address={address} />
              <Map address={address} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
