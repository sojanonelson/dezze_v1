import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "../../App.css";
import "../../index.css"
// import logo from "../../image/HeadLogo.png";
import LeftSlide from "../../components/Left"
import RightSlide from "../../components/Right"
function extractTrackId(url) {
  const regex = /track\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);

  if (match && match.length > 1) {
    return match[1];
  }

  return null;
}

const Home = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [thumbnailUrl, setThumnailurl] = useState("");
  const [isstatetrue, setIsStateTrue] = useState(false);
  const [coverArt, setCoverArt] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState(false);
  // Api
  const youtubekey = process.env.REACT_APP_BASEURL_YT;
  const youtubehost = process.env.REACT_APP_BASEURL_YTHOST;
  const spotifykey = process.env.REACT_APP_BASEURL_SP;
  const spotifyhost = process.env.REACT_APP_BASEURL_SPHOST;

  const handleChange = (e) => {
    setVideoid(e.target.value);
  };

  const buttonStyles = {
    backgroundColor: isstatetrue ? "green" : "red",
  };

  const buttonClick = async (event) => {
    if (videoid.match("youtu.be")) {
      youTube();
    } else if (videoid.match("open.spotify.com")) {
      spotify();
    } else {
      console.log("Enter a valid link...");
    }
  };

  //  Youtube

  const youTube = async (event) => {
    const { id } = getVideoId(`${videoid}`);

    setState(true);
    setImage(true);

    setThumnailurl(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
    const option = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      params: { id: `${id}` },
      headers: {
        "X-RapidAPI-Key": `${youtubekey}`,
        "X-RapidAPI-Host": `${youtubehost}`,
      },
    };

    setIsStateTrue(true);
    try {
      const response = await axios.request(option);
      setTitle(response.data.title);
      setLink(response.data.link);
      setVideoid("");
    } catch (error) {
      console.error(error);
    }
  };

  // Spotify

  const spotify = async (event) => {
    const trackId = extractTrackId(videoid);
    setImage(false);
    const options = {
      method: "GET",
      url: `https://spotify-downloader1.p.rapidapi.com/download/${trackId}`,
      headers: {
        "X-RapidAPI-Key": `${spotifykey}`,
        "X-RapidAPI-Host": `${spotifyhost}`,
      },
    };

    try {
      const response = await axios.request(options);
      setLink(response.data.link);
      setVideoid("");
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
    <div className="head">
        
    <div className="left">
      <LeftSlide />
    </div>

    <div className="right">
      <RightSlide />
    </div>
      <div className="main">
        <div className="flex flex-col items-center">
          <div className="logon column">
           
             <b><h1 className="dezze">Dezze</h1></b> 
             {/* logo here */}
              
            
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
                {link === "" ? "Submit" : "Download"}
              </button>
            </a>
          </div>

          <h1 className="videotitle text-xl mt-2 text-white ">
            <b>{state === true ? "Video title:" : ""}</b> {title}
          </h1>

          <div>
            <img
              className="thumbnail"
              src={image === true ? thumbnailUrl : coverArt}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
