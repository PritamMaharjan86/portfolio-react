// import App.css
import './App.css';
// import navigation.js
import Navigation from './components/navigation';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
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
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';




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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));

  return (
    <div className="App">
      <section id="home">

        <div className='title'>
          <Navigation />
          <h1 className='wrapper'>

            <TypeAnimation
              sequence={[
                'Hello There!',
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
          <Button onClick={handleDownload} style={{ border: '1px solid #bbbbbb', color: '#bbbbbb', fontSize: '18px', height: '40px' }} variant="outlined" startIcon={<DownloadIcon />} >
            Resume
          </Button>
          {loading ? <Loader /> : <h1>{ }</h1>}
        </div>
      </section>

      <section id="about"><div className='about-container'>
        <span className='about-me'>Passionate Web Developer with expertise in front-end and back-end technologies. Skilled in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React and Angular. Proficient in server-side languages such as Node.js and Python, with experience in database management and cloud services. Committed to writing clean, efficient code and staying updated with the latest industry trends to deliver top-notch digital solutions.
          Let's connect and level up together in the world of digital innovation! Let's connect and level up together in the world of digital innovation!</span>
        <h6 style={{ color: '#bbbbbb', display: 'flex', justifyContent: 'left' }}>Skills</h6>
        <div className='skill'>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 0.5,
              bgcolor: '#5754a8',
              color: 'black',
              '& svg': {
                m: 1,
              },
            }}
          >



            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              HTML
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              CSS
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              JavaScript
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              MYSQL
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              React
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Github
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Material-UI
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Postman
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Node
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Bitbucket
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Umbraco
            </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
            <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '18px', textAlign: 'center', fontWeight: '300' }}>
              Wordpress
            </Box>
          </Box>
        </div>
        <h6 style={{ color: 'var(--text)', display: 'flex', justifyContent: 'left' }}>Experience</h6>
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
                <Typography variant='h6' component="span" style={{ color: 'var(--text)' }}>Cypha Interactive
                </Typography><Link href="https://www.cyphainteractive.com.au/" target="_blank" style={{ padding: '2px', color: '#5754a8', margin: '2px', alignItems: 'center' }}>< LinkIcon /></Link>
                <Typography style={{ marginBottom: '30px', color: 'var(--text)' }}> November 2023</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'var(--text)' }}><Typography variant='h6' component="span">Junior .Net Developer
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
                <Typography variant='h6' component="span" style={{ color: 'var(--text)' }}>Global Odds Holiding
                </Typography><Link href="https://globalodds.com/#!/" target="_blank" style={{ padding: '2px', color: '#5754a8', margin: '2px', alignItems: 'center' }}>< LinkIcon /></Link>
                <Typography style={{ marginBottom: '30px', color: 'var(--text)' }}> July 2023</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'var(--text)' }}><Typography variant='h6' component="span">Junior Software Developer
              </Typography>
                <Typography style={{ marginBottom: '30px', color: 'var(--text)' }}>In my capacity as a team member, I tested, diagnosed, and fixed web application issues, contributing significantly to full stack development. I ensured website translations met i18n standards, performed cross-browser compatibility testing, and implemented responsive designs using media queries. Collaborating with my team using Jira, Bitbucket, and Confluence, I effectively managed tasks, version control, and documentation. Additionally, I used Postman to test and validate REST API responses, ensuring our APIs were reliable and efficient.</Typography></TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{}}
                align="right"
                color="white"
                variant='h6'
                marginBottom='40px'
              > <Typography variant='h6' component="span" style={{ color: 'var(--text)' }}>Piex Education
                </Typography><Link href="https://www.piexeducation.com/" target="_blank" style={{ padding: '2px', color: '#5754a8', margin: '2px', alignItems: 'center' }}>< LinkIcon /></Link>
                <Typography style={{ marginBottom: '1px', color: 'var(--text)' }}> September 2022</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ color: 'var(--text)' }}><Typography variant='h6' component="span">3D Unity Developer
              </Typography>
                <Typography>In my role, I developed a 3D environment that was both educational and fun, designed engaging game levels, and programmed various game functions. I collaborated closely with the manager to resolve workflow issues and regularly reported updates and bugs to the head, ensuring smooth project progress.</Typography></TimelineContent>
            </TimelineItem>

          </Timeline>
        </div>

      </div>
      </section>

      <section id="work">

        <div className='work'>
          <Box sx={{ width: 1200, margin: '0 auto', display: 'flex'}}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
              <Item style={{ padding: '0px', width: '500px', height: '350px', border: '1px solid #bbbbbb', borderRadius:'0px 0px 0px 0px'  }}>
                <p style={{ fontSize: '25px', color: '#bbbbbb' }}>Weather App</p>
                <div className='links'>
                  <a href='https://github.com/PritamMaharjan86/Weather-App' target="_blank" style={{ color: '#5754a8' }}><GitHubIcon /></a>
                </div>
                <div className='tech'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: 0.5,
                      bgcolor: '#5754a8',
                      color: 'black',
                      '& svg': {
                        m: 1,
                      },
                    }}
                  >
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      HTML
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      CSS
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      React
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      MYSQL
                    </Box>
                  </Box>
                </div>

              </Item>
              <Item style={{ padding: '0px', width: '500px', height: '350px', border: '1px solid #bbbbbb', borderRadius:'0px 0px 0px 0px' }}>
                <p style={{ fontSize: '25px', color: '#bbbbbb' }}>Reminder App</p>
                <div className='links'>
                  <a href='https://github.com/PritamMaharjan86/Reminder-App' target="_blank" style={{ color: '#5754a8' }}><GitHubIcon /></a>
                </div>
                <div className='tech'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: 0.5,
                      bgcolor: '#5754a8',
                      color: 'black',
                      '& svg': {
                        m: 1,
                      },
                    }}
                  >
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      HTML
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      CSS
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      React
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      MYSQL
                    </Box>
                  </Box>
                </div>

              </Item>
              <Item style={{ padding: '0px', width: '500px', height: '350px', border: '1px solid #bbbbbb' , borderRadius:'0px 0px 0px 0px', background:'hsla(160, 52%, 71%, .05)'}}>
                <p style={{ fontSize: '25px', color: '#bbbbbb' }}>Recipe App</p>
                <div className='links'>
                  <a href='https://github.com/PritamMaharjan86/Recipe-app' target="_blank" style={{ color: '#5754a8' }}><GitHubIcon /></a>
                </div>
                <div className='tech'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: 0.5,
                      bgcolor: '#5754a8',
                      color: 'black',
                      '& svg': {
                        m: 1,
                      },
                    }}
                  >
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      HTML
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      CSS
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      JavaScript
                    </Box><Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      MYSQL
                    </Box>
                    <Divider orientation="vertical" variant="middle" style={{ border: '1px solid #bbbbbb ' }} flexItem />
                    <Box component="section" sx={{ p: 1, height: '20px', minWidth: '100px', color: '#bbbbbb', fontSize: '14px', textAlign: 'center', fontWeight: '300' }}>
                      Material-UI
                    </Box>
                  </Box>

                </div>

              </Item>
            </Stack>
          </Box>
        </div>
        <div className='foot'>

        </div>

      </section>

    </div>

  );
}

export default App;
