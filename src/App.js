import React, { useState } from "react";
import axios from "axios";
import getVideoId from 'get-video-id' ;
import './App.css';


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
    const  {id}  = getVideoId(`${videoid}`);
    console.log(id)
    
 
    
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
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
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
    </>
  );
};

export default App;
