// import App.css
import './App.css';
// import navigation.js
import Navigation from './components/navigation';
import Button from '@mui/material/Button';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import { useState, useEffect } from 'react';

function App() {


  const url = "https://res.cloudinary.com/dvmumi2mb/video/upload/v1715595333/happy-pop-2-185287_dvnrpj.mp3";
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

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


      <Navigation />
      <div className='title'>
        <h1 className='wrapper'>
          <span > Hello. I'm Pritam</span><br></br>
          <span> A Web Developer</span>
        </h1>
        <p className='description'> I am passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
        <Button onClick={handleDownload} style={{ background: 'linear-gradient(36deg, rgba(153,245,198,0.8183648459383753) 0%, rgba(247,173,246,0.6895133053221288) 99%)', border: '1px solid #bbbbbb', color: 'black', fontSize: '13px' }} variant="outlined" startIcon={<DocumentScannerOutlinedIcon />} >
          Resume
        </Button>

      </div>



    </div>
  );
}

export default App;
