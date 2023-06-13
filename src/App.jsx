import React, { useState } from "react";
import axios from "axios";
import getVideoId from "get-video-id";
import "./App.css";
const App = () => {
  const [videoid, setVideoid] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [load,setLoad] = useState(false);
  const [thumbnailUrl,setThumnailurl] = useState("");
  const [isstatetrue,setIsStateTrue] =useState(false);
  
  

  const Rapidkey = "a597310939msh2d19f03988866e2p17b2eejsn5e135d6c5603";
  const Rapidhost = "youtube-mp36.p.rapidapi.com";
  const handleChange = (e) => {
    setVideoid(e.target.value);
  };
  
  const buttonStyles = {
    backgroundColor: isstatetrue ? "green" : "red",


    
  };


  const handleSubmit = async (event) => {
    const { id } = getVideoId(`${videoid}`);
    console.log(id);
    
    setThumnailurl(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      params: { id: `${id}` },
      headers: {
        "X-RapidAPI-Key": `${Rapidkey}`,
        "X-RapidAPI-Host": `${Rapidhost}`,
      },
    }
     
    setIsStateTrue(true);
    ;

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
  <div>
   
  <div className="main  ">
    
    
     <div className="flex flex-col items-center">
      
      <div className="input ">
        <input required="number" type="url" className="px-4 py-2 w-full  rounded-md" onChange={handleChange}
          value={videoid} placeholder="Paste the video link here"/>
      </div>
      <div className="mt-4">
   <a href={link ? `${link}` : "#"}>


        <button className="sojan px-4 py-2 text-white  rounded-md " style={buttonStyles}  onClick={handleSubmit} >{link ? "Download" : "Submit" }</button>
        
   </a>
        
      </div>
      
      <button className="sojan">button</button>
      
      <h1 className="videotitle text-xl mt-5 text-black-200 "><b>Video title:</b> {title}</h1>
      <div >
      <img className="thumbnail" src={thumbnailUrl} alt="" />
      </div>
      <h1>{load === true && link === "" ? "Loading" : ""}</h1>

    </div>
  </div>
  </div>
  
  
  );
};

export default App;
