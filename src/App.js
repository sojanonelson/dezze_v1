import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "./App.css";

const App = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [load,setLoad] = useState(false);

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
      setLoad(true)
      const response = await axios.request(options);
      setTitle(response.data.title);
      setLink(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="main bg-slate-700 ">
    
     <div className="flex flex-col items-center">
      <div className="input ">
        <input className="px-4 py-2 w-full border-b-slate-950 rounded-md" onChange={handleChange}
          value={videoid} type="text" placeholder="Paste the video link here"/>
      </div>
      <div className="mt-4">
   <a href={link ? `${link}` : "#"}>


        <button className="px-4 py-2 text-white bg-blue-500 rounded-md" onClick={handleSubmit} >{link ? "Download" : "Submit" }</button>
   </a>
        
      </div>
      <h1 className="text-xl text-white-500 font-serif">Video title: {title}</h1>
      <h1>{load === true && link === "" ? "Loading" : ""}</h1>
      
    </div>
  </div>
  );
};

export default App;
