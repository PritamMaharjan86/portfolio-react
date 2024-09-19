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
                console.error('Error fetching data:', error);
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

                <div className='project'>
                    <div className='project-wrap'>

                        <img className='project-img' src='https://res.cloudinary.com/dedpvue13/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1726650516/Screenshot_2024-09-15_at_09.27.17_uqnunk.png'></img>
                        <div className='project-text'>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <h3 style={{ marginRight: '20px', color: '#5c27b2' }}>SignUp and Login</h3>
                                <SocialIcon url="https://github.com/PritamMaharjan86/signup" style={{ width: '30px', height: '30px' }} />
                            </span>

                            <p className='project-paragraph'>A SignUp and Login form built with React.js, MongoDB, and Tailwind CSS enables user authentication with a responsive, modern design. React handles form inputs, MongoDB stores user data, and Tailwind CSS ensures a sleek interface across devices.






                            </p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Projects
