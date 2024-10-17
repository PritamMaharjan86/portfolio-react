import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation'
import Loader from '../components/loader'
import { SocialIcon } from 'react-social-icons'


const Projects = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 500));

            } catch (error) {
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='App'>
            <div className='title'>
                <Navigation />
                {loading ? <Loader /> : <p></p>}

                <div className='projects-row'>
                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://signup-beryl-eta.vercel.app/login' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1726650516/Screenshot_2024-09-15_at_09.27.17_uqnunk.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>SignUp and Login</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/signup" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>A SignUp and Login form built with React.js, MongoDB, and Tailwind CSS enables user authentication with a responsive, modern design. React handles form inputs, MongoDB stores user data, and Tailwind CSS ensures a sleek interface across devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>  <a href='https://calculator-app-gray-pi.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1728294335/Screenshot_2024-10-07_at_20.44.30_2_znk6bf.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Calculator App</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/Calculator-App" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>A Calculator App built with React.js provides a responsive interface for basic calculations. Styled with CSS, it offers real-time results and smooth interactions, optimized for both mobile and desktop users.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://portfolio-pritammaharjan.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1726999577/Screenshot_2024-09-22_at_20.04.51_zcxqxa.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Portfolio</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/portfolio-react" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>
                                    A Personal Portfolio built with React.js showcases projects and skills through a responsive, modern design. Styled with CSS, it offers smooth navigation and adapts seamlessly to mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects-row'>
                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://weather-app-delta-umber-38.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1728018358/Screenshot_2024-10-04_at_15.04.15_2_bd5bmg.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Weather App</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/WeatherApp" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>A Weather App built with React.js fetches real-time weather data using an API. Styled with CSS, it offers a clean, responsive design, displaying current conditions and forecasts for any location on both mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://reminder-app-832r.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1727000462/Screenshot_2024-09-22_at_20.20.38_dldvpg.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Reminder App</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/Reminder-App" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>
                                    A Reminder App built with React.js helps users organize tasks and set reminders. Styled with CSS, it offers a simple, responsive interface, allowing users to manage tasks seamlessly on both mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://catering-menu.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1727001047/Screenshot_2024-09-22_at_20.29.49_ev7hhp.png' alt="Project Screenshot"></img></a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Menu Forecast</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/Menu-tracker" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>
                                    A Menu Forecast App built with React.js allows users to add menu items and calculates the required food quantity based on the number of people. Styled with CSS, it features a responsive design, making it easy to plan meals and portions for events on both mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='project'>
                        <div className='project-wrap'>
                            <a href='https://currency-converter-woad-pi.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1727758751/Screenshot_2024-10-01_at_14.58.15_j6lfjy.png' alt="Project Screenshot" />
                            </a>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Currency Converter App</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/currency_converter" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>The Currency Converter App is a fast and responsive application built with React.js and Vite, providing real-time currency exchange rates through API integration. With its clean design for both mobile and desktop, users can easily convert amounts between currencies and access the latest rates, making it an essential tool for travelers and businesses.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>
                            <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1727000462/Screenshot_2024-09-22_at_20.20.38_dldvpg.png' alt="Project Screenshot"></img>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Reminder App</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/Reminder-App" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>
                                    A Reminder App built with React.js helps users organize tasks and set reminders. Styled with CSS, it offers a simple, responsive interface, allowing users to manage tasks seamlessly on both mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='project-wrap'>
                            <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/v1727001047/Screenshot_2024-09-22_at_20.29.49_ev7hhp.png' alt="Project Screenshot"></img>
                            <div className='project-text'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>Menu Forecast</h3>
                                    <SocialIcon url="https://github.com/PritamMaharjan86/Menu-tracker" style={{ width: '30px', height: '30px' }} />
                                </span>
                                <p className='project-paragraph'>
                                    A Menu Forecast App built with React.js allows users to add menu items and calculates the required food quantity based on the number of people. Styled with CSS, it features a responsive design, making it easy to plan meals and portions for events on both mobile and desktop devices.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <footer class="footer">
                <p> Developed by Pritam</p>

            </footer>
        </div>
    )
}

export default Projects
