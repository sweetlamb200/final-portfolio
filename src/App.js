import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Box, Grid, container} from "@mui/material";

function App() {
  return (

    <div className="main">
      <div className="top">
        <div className='top-img'>
        <img src={require("./head.png")} className="t-img"/>
        </div>
      </div>

      <div className="body">
          <div className="first">
            <div className="welcom ">
            <b>Welcome to</b> <br /> <span className="animate-charcter">Sweet Lamb's Portfolio</span><br /> <span className ="a2">I am a software developer with a keen interest </span>  <span className ="a2"> in systems programming and a new found </span> <span className ="a2">passion of user interfaces and user experience. </span>
            </div>
            <div className="photo">
            <img src={require("./mem2.png")} className="mem2"/>
            </div>
          </div>

          <div className="projects">
          <div className="project-head"><b>Projects</b></div>
          <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
            <Box className="box1">
           <a className="img-link" href="https://sweetlamb200.github.io/cs1300-personas/" target="_blank" rel="noopener noreferrer">
            <Box width={450} component={'img'} src={require("./per4.png")} alt={'mockup'}/> 
            </a>
            <h1 style={{fontSize: '2rem', color: 'purple'}} >

            <a className="link1" href="https://sweetlamb200.github.io/cs1300-personas/" target="_blank" rel="noopener noreferrer">Personas</a></h1>
            <p className="descrption">

            Purpose
            <br></br>
            <br></br>
            This project was made with the motive observe real users interacting with an interface. It tells you the problems with a particular interface and how a persona or a real person feels about this. It is a narrative to explore problems with a specific interface. Checkout the website to see which interface is this
            <br></br>
            <br></br>
            Conclusion
            <br></br>
            <br></br>
            The main takeways from this project for me were to learn how people interact with an interface. To notice the problems with an interface Brown Students use frequently. This also helped to interact with new people and help me understand interfaces better.
            <br></br>
            <br></br>
            <br></br>
            <center>Click <a className="a3" href="https://sweetlamb200.github.io/cs1300-personas/" target="_blank" rel="noopener noreferrer"><span className="span1"><b>here</b></span></a> for more information.</center>
            <br></br>
            <br></br>
            
            
            </p> 
            </Box>
            <Box className="box1">
            <a className="img-link" href="https://sweetlamb200.github.io/development/" target="_blank" rel="noopener noreferrer">
            <Box width={450}  component={'img'} src={require("./devlop.png")} alt={'mockup'}/> </a>
            <h1 style={{fontSize: '2rem', color: 'purple'}}><a className="link1" href="https://sweetlamb200.github.io/development/" target="_blank" rel="noopener noreferrer">Development</a></h1>
            <p className="descrption">

            Purpose
            <br></br>
            <br></br>
            This project showcases the aspects of react. It is helpful for people new to watching animes since they can use this wensite to sort animes and choose from a personalised list of good animes to start watching.
            <br></br>
            <br></br>
            <br></br>

            <center>Check out the website <a className="a3" href="https://sweetlamb200.github.io/development/" target="_blank" rel="noopener noreferrer"><span className="span1"><b>Here</b></span></a> and then come back to read the Conclusion </center>
            <br></br>
            <br></br>
            Conclusion
            <br></br>
            <br></br>
            This project showcases how to use react to sort adn filter. This helped me learn that on top of that it was a great experince to generate a list of animes which I personally like. Currently this only contains 12 but I will keep updating them as I watch more.
            <br></br>
            <br></br>
            <br></br>

            </p> 
            </Box>
            <Box className="box1">
            <a className="img-link" href="https://sweetlamb200.github.io/cs1300-responsive-redesign/" target="_blank" rel="noopener noreferrer">
            <Box width={450} component={'img'} src={require("./responsive.png")} alt={'mockup'}/> </a>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>
            <a className="link1" href="https://sweetlamb200.github.io/cs1300-responsive-redesign/" target="_blank" rel="noopener noreferrer">
              Responsive-Redesign</a></h1>
            <p className="descrption">

            Purpose
            <br></br>
            <br></br>
            The motive of this project was to redesign an existing website. The project redesigns the website of Berkshire Hathaway and adds a modern touch to their basic website.
            <br></br>
            <br></br>
            <br></br>
            <center>Check out the new webiste and the full project <a className="a3" href="https://sweetlamb200.github.io/cs1300-responsive-redesign/" target="_blank" rel="noopener noreferrer"><span className="span1"><b>here</b></span></a> !</center>
            <br></br>
            </p> 
            </Box>
            <Box className="box1">
            <a className="img-link" href="https://sweetlamb200.github.io/iterative-design/" target="_blank" rel="noopener noreferrer">
            <Box width={450}  component={'img'} src={require("./iterative.png")} alt={'mockup'}/> </a>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>
            <a className="link1" href="https://sweetlamb200.github.io/iterative-design/" target="_blank" rel="noopener noreferrer">Iterative-Design</a></h1>
            <p className="descrption">

            Purpose
            <br></br>
            <br></br>
            Iterative Design was meant to design a mockup for a startup and achieve the goals of the company using a website. 
            <br></br>
            <br></br>
            <br></br>
            <center>Check out <a className="a3" href="https://sweetlamb200.github.io/iterative-design/" target="_blank" rel="noopener noreferrer"><span className="span1"><b>this link</b></span></a> for more information and to view our mockups!</center>
            <br></br>
            <br></br>
            
            
            </p> 
            </Box>
            
            </Grid>
          </Box>
          </div>
          <div className='end'>
          <div className='top-img'>
            <center>
        <img src={require("./mem3.png")} className="t-img"/>
        </center>
        </div>
        </div>
      </div>
    </div>
      

  );
}

export default App;
