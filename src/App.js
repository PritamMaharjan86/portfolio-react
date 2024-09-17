import './App.css';
import Navigation from './components/navigation';
import { useState, useEffect } from 'react';
import Loader from './components/loader';
import { TypeAnimation } from 'react-type-animation';
import { ThemeProvider, Box, Typography } from '@mui/material';



function App() {

  const [loading, setLoading] = useState(false);

  const userDetails = {
    lastLogin: "Sun Sep 17 14:32:16 on ttys001",
    username: "Pritam",
    computerName: "Pritam's-MacBook-Pro",
  };



  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


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
              style={{ fontSize: '50px', display: 'inline-block', fontFamily: 'CustomFont', maxWidth: '100%'}}
            />
          </h1>

          <p style={{ fontSize: '20px', color: 'black', fontFamily: 'textFont', width: '60%' }}> I am passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
          {loading ? <Loader /> : <p></p>}

        </div>


        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#202020',
                dark: '#0066CC',
              },
              background: {
                default: '#fcc01a',
              },
            },
            typography: {
              fontFamily: 'monospace',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
              bgcolor: 'background.default'
            }}
          >
            <Box
              sx={{
                width: 1000,
                height: 600,
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 5,
                border: '1px solid #333',
                borderRadius: '15px'
              }}
            >

              <Box
                sx={{
                  bgcolor: '#2d2d2d',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  justifyContent: 'space-between',
                  borderRadius: '15px 15px 0 0'
                }}
              >

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: '#FF5F57',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 4,
                        bgcolor: 'black',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: '#FFBD2E',
                      borderRadius: '50%',
                    }}
                  />
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: '#28C840',
                      borderRadius: '50%',
                    }}
                  />
                </Box>

                <Typography sx={{ color: '#808080', position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '15px' }}>pritam@Pritams-MacBook-Pro:~/Users</Typography>
              </Box>


              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: 'black',
                  color: 'limegreen',
                  p: 2,
                  overflowY: 'auto',
                  fontFamily: 'monospace',
                  borderRadius: '0 0 15px 15px'
                }}
              >
                <Typography sx={{ fontSize: '15px', textAlign: 'left' }}>
                  Last Login: {userDetails.lastLogin}
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box component="span" sx={{ color: 'red', display: 'inline-block', mt: '10px' }}>
                    Users/location
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'yellow', display: 'inline-block', mt: '10px' }}>
                    ➜ 'Sydney, Australia'
                  </Box>


                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box component="span" sx={{ color: 'red', display: 'inline-block', mt: '10px' }}>
                    Users/contactInfo
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'yellow', display: 'inline-block', mt: '10px' }}>
                    ➜ ['<a href="mailto:primgdev@gmail.com" style={{ color: 'cyan', textDecoration: 'none' }}>primgdev@gmail.com</a>',
                    '<a href="https://www.linkedin.com/in/pritammaharjan/" target="_blank" rel="noopener noreferrer" style={{ color: 'cyan', textDecoration: 'none' }}>LinkedIn</a>',
                    '<a href="https://github.com/PritamMaharjan86/" target="_blank" rel="noopener noreferrer" style={{ color: 'cyan', textDecoration: 'none' }}>GitHub</a>']
                  </Box>
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box component="span" sx={{ color: 'red', display: 'inline-block', mt: '10px' }}>
                    Users/educationQualification
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'yellow', display: 'inline-block', mt: '10px' }}>
                    ➜ 'Bachelor's in Information Technology (Game Programming) - Academy of Interactive Technology, Sydney'
                  </Box>


                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box component="span" sx={{ color: 'red', display: 'inline-block', mt: '10px' }}>
                    Users/skills
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'yellow', display: 'inline-block', mt: '10px' }}>
                    ➜ ['HTML', 'CSS', 'JavaScript', 'git', 'React', 'MySQL', 'MongoDB']
                  </Box>


                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box component="span" sx={{ color: 'red', display: 'inline-block', mt: '10px' }}>
                    Users/downloadResume
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: 'yellow', display: 'inline-block', mt: '10px' }}>
                    ➜ '<a href="/resume.pdf" download="pritam_resume.pdf" style={{ color: 'cyan', textDecoration: 'none' }}>Resume.pdf</a>'
                  </Box>

                </Typography>

                <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'left', marginTop: '20px' }}>
                  {userDetails.username}@{userDetails.computerName} $ <></>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: '3px',
                      height: '1.4em',
                      backgroundColor: 'white',
                      verticalAlign: 'text-bottom',
                      animation: 'blinking 1s step-start infinite',
                      '@keyframes blinking': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0 },
                        '100%': { opacity: 1 },
                      },
                    }}
                  />
                </Typography>



              </Box>
            </Box>
          </Box>

        </ThemeProvider>

      </section>


    </div>

  );
}

export default App;
