// import App.css
import './App.css';
// import navigation.js
import Navigation from './components/navigation';
import Button from '@mui/material/Button';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import { useState, useEffect } from 'react';
import Loader from './components/loader';
import Scroll from './components/scroll';


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

      <section id="about"><div></div>
        <p style={{ color: 'white' }}>iahsdfaofhaoifh oafafn alfshao fsh aisdh oah </p>


      </section>

      <section id="work">Work</section>

    </div>

  );
}

export default App;
