import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "./App.css";

const App = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const Rapidkey = "a597310939msh2d19f03988866e2p17b2eejsn5e135d6c5603";
  const Rapidhost = "youtube-mp36.p.rapidapi.com";
  const handleChange = (e) => {
    setVideoid(e.target.value);
  };

  const handleSubmit = async (event) => {
    const { id } = getVideoId(`${videoid}`);
    console.log(id);

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      params: { id: `${id}` },
      headers: {
        "X-RapidAPI-Key": `${Rapidkey}`,
        "X-RapidAPI-Host": `${Rapidhost}`,
      },
    };

    try {
      const response = await axios.request(options);
      setTitle(response.data.title);
      setLink(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <h1>YT Audio Download</h1>
      <div className="input">
        <input
          onChange={handleChange}
          value={videoid}
          placeholder="Enter video link"
        />
        <button onClick={handleSubmit}>Convert</button>
      </div>
      <div className="dwn">
        <h1> {`${title}`} </h1>
        <a href={`${link}`}>
          <button>Download</button>
        </a>
        <p>{ Rapidhost }</p>
      </div>
    </div>
  );
};

export default App;
