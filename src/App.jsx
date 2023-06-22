import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "./App.css";
import logo from "./image/HeadLogo.png";

function extractTrackId(url) {
  const regex = /track\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);

  if (match && match.length > 1) {
    return match[1];
  }

  return null;
}

const App = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [load, setLoad] = useState(false);
  const [thumbnailUrl, setThumnailurl] = useState("");
  const [isstatetrue, setIsStateTrue] = useState(false);
  const [coverArt, setCoverArt] = useState("");
  const [state,setState] = useState("");
  const [image,setImage] = useState(false);

  const Rapidkey = "a597310939msh2d19f03988866e2p17b2eejsn5e135d6c5603";
  const Rapidhost = "youtube-mp36.p.rapidapi.com";
  const handleChange = (e) => {
    setVideoid(e.target.value);
  };

  const buttonStyles = {
    backgroundColor: isstatetrue ? "green" : "red",
  };

  const buttonClick = async (event) => {
    if (videoid.match("youtu.be")) {
      console.log("youtube");
      
        youTube();
      
    } else if (videoid.match("open.spotify.com")) {
      console.log("spotify");
      
        spotify();
      
    } else {
      console.log("Enter a valid link...");
    }
  };

  //  Youtube

  const youTube = async (event) => {
    const { id } = getVideoId(`${videoid}`);
    console.log(id);
    setState("Youtube song");
    setImage(true);
    //https://youtu.be/U3ASj1L6_sY
    // https://open.spotify.com/track/5gLcAfMfOWBmDnHRIEn3xh
    setThumnailurl(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
    const option = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      params: { id: `${id}` },
      headers: {
        "X-RapidAPI-Key": `${Rapidkey}`,
        "X-RapidAPI-Host": `${Rapidhost}`,
      },
    };

    setIsStateTrue(true);
    try {
      setLoad(true);
      const response = await axios.request(option);
      setTitle(response.data.title);
      setLink(response.data.link);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Spotify

  const spotify = async (event) => {
    const trackId = extractTrackId(videoid);
    setState("click Download to start downloading...");
    setImage(false);
    const options = {
      method: "GET",
      url: `https://spotify-downloader1.p.rapidapi.com/download/${trackId}`,
      headers: {
        "X-RapidAPI-Key": "a597310939msh2d19f03988866e2p17b2eejsn5e135d6c5603",
        "X-RapidAPI-Host": "spotify-downloader1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLink(response.data.link);
    } catch (error) {
      console.error(error);
    }

    const option = {
      method: "GET",
      url: "https://spotify-scraper.p.rapidapi.com/v1/track/download",
      params: {
        track: `${trackId}`,
      },
      headers: {
        "X-RapidAPI-Key": "d3987b9906mshd927ef0d501a8b8p1791d4jsn2a6399d97bbe",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      },
    };

    try {
      const responsee = await axios.request(option);
      console.log("Cover Api started");
      setCoverArt(responsee.data.spotifyTrack.album.cover[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="main  ">
        <div className="flex flex-col items-center">
          <div className="logon column">
            <figure>
              <img className="headlogo" src={logo} alt="" />
            </figure>
          </div>

          <div className="input ">
            <input
              required="number"
              type="url"
              className="px-4 py-2 w-full  rounded-md transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 rounded-xl"
              onChange={handleChange}
              value={videoid}
              placeholder="Paste the video link here"
            />
          </div>
          <div className="mt-4">
            <a href={link ? `${link}` : " #"}>
              <button
                className="sojan px-4 py-2 text-white  rounded-md "
                style={buttonStyles}
                onClick={buttonClick}
              >
                {link ? "Download" : "Submit"}
              </button>
            </a>
          </div>

          <h1 className="videotitle text-xl mt-2 text-black-200 ">
            <b>Video title:</b> {title}
            
          </h1>
          <h1>{state}</h1>

          <div>
            <img className="thumbnail" src={image === true ? thumbnailUrl : coverArt} alt="" />

          </div>
          <h1>{load === true && link === "" ? "Loading" : ""}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
