import React from 'react';
import "./About.css";

const About = () => {
    return (
        <>
            <div className='main-div about vh-100 d-flex justify-content-center flex-column '>
                <div className="mian-hiding-home  about-hiding mt-5">
                    <h1 className='text-white'>START FRAMEWORK</h1>
                </div>
                <div className='container'>
                    <div className='info d-flex gap-6 text-white'>
                        <div className='myInfo'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className='myInfo'>
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
