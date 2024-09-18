import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation'
import Loader from '../components/loader'


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
                        <h3>SignUp</h3>
                        <p className='project-paragraph'>Domposer is a website builder which has a UI that allows you to quickly add and rearrange HTML and CSS, upload and download created projects and files, login to save up to 5 projects and can be installed as a progressive web application. The stack is Laravel for the backend/API's and vanilla JS for the frontend. The Github repository for this is private at the moment.</p>
                    </div>
                </div>

                
            </div>
            
            
            </div>
        </div>
    )
}

export default Projects
