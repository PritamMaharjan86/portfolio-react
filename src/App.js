// import App.css
import './App.css';
// import navigation.js
import Navigation from './components/navigation';
import Button from '@mui/material/Button';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import { useState, useEffect } from 'react';
import Loader from './components/loader';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';


function App() {


  const url = "https://res.cloudinary.com/dvmumi2mb/video/upload/v1715595333/happy-pop-2-185287_dvnrpj.mp3";
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    // Simulate data fetching or some initialization
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate a delay for fetching data
        await new Promise(resolve => setTimeout(resolve, 500));

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    if (playing) {
      setTimeout(() => {
        setPlaying(false);
      }, 500);
    }
  }, [playing]);


  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = `resume.pdf`;
    link.href = "resume.pdf";
    link.click();
    setPlaying(true);
  };

  return (
    <div className="App">
      <section id="home">

        <div className='title'>
          <Navigation />
          <h1 className='wrapper'>
            <span > Hello. I'm Pritam</span><br></br>
            <span> A Web Developer</span>
          </h1>
          <p className='description'> I am passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
          <Button onClick={handleDownload} style={{ background: 'linear-gradient(36deg, rgba(153,245,198,0.8183648459383753) 0%, rgba(247,173,246,0.6895133053221288) 99%)', border: '1px solid #bbbbbb', color: 'black', fontSize: '13px' }} variant="outlined" startIcon={<DocumentScannerOutlinedIcon />} >
            Resume
          </Button>
          {loading ? <Loader /> : <h1>{ }</h1>}
        </div>
      </section>

      <section id="about"><div className='about-container'>
        <span className='about-me'>I am a Game Programmer with a Bachelor's degree in Game Programming from Academy of Information Technology,
          passionate about creating immersive and interactive digital experiences. My goal is to pursue exciting opportunities in Game Development or Web Development, where I can apply my skills and knowledge in multiple programming languages, game design principles, and web technologies. In my most recent role as a Dotnet Developer at Cypha Interactive, I contributed to the development of a web-based game platform using C#, ASP.NET, and SQL. I worked with a team of developers and designers to deliver high-quality code, implement game features and logic, and debug and test the platform. Previously, I was a Game Developer at PIEX Education, where I developed educational games using C# and Unity, and integrated them with a learning management system. I also completed a certification in Agile Principles and Methodologies, and learned the basics of Machine Learning and Testing Approaches. I am a lifelong learner who thrives on solving complex problems and collaborating with creative teams.
          Let's connect and level up together in the world of digital innovation! Let's connect and level up together in the world of digital innovation!</span>
        <h6 style={{ color: 'white' }}>Skills</h6>
        <div className='skill'>
        <Box component="section" sx={{ p: 1, border: '1px dashed #c86ac7', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          HTML
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed #2ed681', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          CSS
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed  #c86ac7', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          JavaScript
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed #2ed681', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          MYSQL
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed  #c86ac7', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          React
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed #2ed681', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          Github
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed  #c86ac7', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          Material-UI
        </Box>
        <Box component="section" sx={{ p: 1, border: '1px dashed #2ed681', height:'20px' , width:'100px', color:'white', fontSize:'18px', textAlign:'center', fontWeight:'300'}}>
          Postman
        </Box>
        </div>
      </div>
      </section>

      <section id="work">
      <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 300,
          borderRadius: 1,
          bgcolor: '#1c1c1c',
          opacity: 0.3,
          marginTop:'100px',
          marginLeft:'50px',
          boxShadow:'0 2px 3px #0000003d',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
      </section>

    </div>

  );
}

export default App;
