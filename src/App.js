import React from "react";
import "./style.css";
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'

export default function App() {
  return (
    <div className="container"> 
    <div  className="img" > <a href="https://developer.mozilla.org/" ><img style={{marginLeft:"80px"}} 
    src="https://ghavatars.staticblitz.com/21stChrom.png?size=160" alt="21stChrom profile picture" /></a>
    </div>
    {
      <div>
    <div style={{color:"red"}}>``    Juice - No Laces</div> 
    <audio style={{backgroundColor: ""}} controls>
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-1jl7rd@main/src/Juice%20mus/Juice%20WRLD%20-%20No%20Laces%20(Unreleased)%20(Lyrics)%20[720p].mp3" type="audio/mpeg" />
      </audio> 
      </div>
      }
      <div style={{color:"red"}}>``    Dax - Dear Alcohol</div> 
    <audio style={{backgroundColor: "transparent"}} controls>
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/dear%20Alcohol%20-%20Dax%20[720p].mp3" type="audio/mpeg" />
      </audio>
      <div style={{color:"red"}}>``    DGold - Lil Parachute</div> 
    <audio style={{backgroundColor: "transparent"}} controls>
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/DGold%20-%20Lil%20Parachute%20(Prod.%20Sace%20x%20Loneliness)%20[720p].mp3" type="audio/mpeg" />
      </audio>
      <div style={{color:"red"}}>``    S0Cliche' - Kisses with your mask on</div> 
    <audio style={{backgroundColor: "transparent"}} controls>
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/s0clich%C3%A9%20-%20Kisses%20With%20Your%20Mask%20On%20[Lyrics%20x%20AMV]%20[720p].mp3" type="audio/mpeg"/>
     </audio>
     <div style={{color:"red"}}>``  -  Wasting time``</div> 
    <audio style={{backgroundColor: "transparent"}} controls>
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20I%20Hate%20Wasting%20Time%20%20%20(Unreleased)%20[prod.%20dfk]%20[720p].mp3" type="audio/mpeg"/>
     </audio>
          
   <div className="second" style={{color: "transparent", marginTop: "8px"}}><strong>Parker made this app....</strong></div>
   {
      <div className="first" style={{color: "red"}}>
      <div className="bb" style={{margin: "100px 10px 10px 10px"}} />
      <div  className="Pmack">
        <div><BsFillDropletFill /></div>
       <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span>
       </div>
       </div>
      </div>
 }
 <h1 className="animation">
   <button style={{backgroundColor: "transparent", border: "3px solid transparent"}}><a href="https://www.bing.com/"><FaHome /></a></button>
   </h1>
  

    </div>
  );
}
