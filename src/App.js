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
import { TypeAnimation } from 'react-type-animation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';



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

            <TypeAnimation
              sequence={[
                'Hello !!!',
                2000,
                'I am Pritam',
                2000,
                'A Web Developer',
                2000,
                () => {
                  console.log('Animation completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </h1>
          <p className='description'> Web Developer skilled in HTML, CSS, JavaScript, and modern frameworks. Experienced in creating responsive websites and web applications with clean, efficient code.</p>
          <Button onClick={handleDownload} style={{ background: 'linear-gradient(36deg, rgba(153,245,198,0.8183648459383753) 0%, rgba(247,173,246,0.6895133053221288) 99%)', border: '1px solid #bbbbbb', color: 'black', fontSize: '13px' }} variant="outlined" startIcon={<DocumentScannerOutlinedIcon />} >
            Resume
          </Button>
          {loading ? <Loader /> : <h1>{ }</h1>}
        </div>
      </section>

      <section id="about"><div className='about-container'>
        <span className='about-me'>Passionate Web Developer with expertise in front-end and back-end technologies. Skilled in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React and Angular. Proficient in server-side languages such as Node.js and Python, with experience in database management and cloud services. Committed to writing clean, efficient code and staying updated with the latest industry trends to deliver top-notch digital solutions.
          Let's connect and level up together in the world of digital innovation! Let's connect and level up together in the world of digital innovation!</span>
        <h6 style={{ color: 'white', display: 'flex', justifyContent: 'left' }}>Skills</h6>
        <div className='skill'>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            HTML
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            CSS
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            JavaScript
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            MYSQL
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            React
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Github
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Material-UI
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Postman
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Node
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Bitbucket
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Umbraco
          </Box>
          <Box component="section" sx={{ p: 1, border: '1px solid #ededed', height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
            Wordpress
          </Box>
        </div>
        <h6 style={{ color: 'white', display: 'flex', justifyContent: 'left' }}>Experience</h6>
        <div className='experience'>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{}}
                align="right"
                color="white"
                variant='h6'
                marginBottom='40px'
              >
                <Typography variant='h6' component="span">Cypha Interactive
                </Typography>
                <Typography style={{ marginBottom: '30px' }}> November 2023</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color='info' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'white' }}><Typography variant='h6' component="span">Junior .Net Developer
              </Typography>
                <Typography style={{ marginBottom: '30px' }}>Within my position, I maintained the website using Umbraco CMS, ensuring it remained functional and up-to-date. I actively collaborated with other team members to solve problems, streamline processes, and improve the overall performance of the site. My responsibilities included troubleshooting issues, implementing updates, and optimizing content management to enhance user experience and site efficiency.
                </Typography></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{}}
                align="right"
                color="white"
                variant='h6'
                marginBottom='40px'
              >
                <Typography variant='h6' component="span">Global Odds Holiding
                </Typography>
                <Typography style={{ marginBottom: '30px' }}> July 2023</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot variant="outlined" color='info' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'white' }}><Typography variant='h6' component="span">Junior Software Developer
              </Typography>
                <Typography style={{ marginBottom: '30px' }}>In my capacity as a team member, I tested, diagnosed, and fixed web application issues, contributing significantly to full stack development. I ensured website translations met i18n standards, performed cross-browser compatibility testing, and implemented responsive designs using media queries. Collaborating with my team using Jira, Bitbucket, and Confluence, I effectively managed tasks, version control, and documentation. Additionally, I used Postman to test and validate REST API responses, ensuring our APIs were reliable and efficient.</Typography></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{}}
                align="right"
                color="white"
                variant='h6'
                marginBottom='40px'
              > <Typography variant='h6' component="span">Piex Education
                </Typography>
                <Typography style={{ marginBottom: '5px' }}> September 2022</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color='info' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'white' }}><Typography variant='h6' component="span">3D Unity Developer
              </Typography>
                <Typography>In my role, I developed a 3D environment that was both educational and fun, designed engaging game levels, and programmed various game functions. I collaborated closely with the manager to resolve workflow issues and regularly reported updates and bugs to the head, ensuring smooth project progress.</Typography></TimelineContent>
            </TimelineItem>

          </Timeline>
        </div>

      </div>
      </section>

      <section id="work">
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#007FFF',
                dark: 'grey',
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
              marginTop: '100px',
              marginLeft: '50px',
              boxShadow: '0 2px 3px #0000003d',
              '&:hover': {
                bgcolor: 'white',
              },
            }}
          />
        </ThemeProvider>
      </section>

    </div>

  );
}

export default App;
