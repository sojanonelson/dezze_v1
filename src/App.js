import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "./App.css";

const App = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const Rapidkey = process.env.REACT_APP_RAPIDAPI_KEY;
  const Rapidhost = process.env.REACT_APP_RAPIDAPI_HOST;
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
      </div>
    </div>
  );
};

export default App;
