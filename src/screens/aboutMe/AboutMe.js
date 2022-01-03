import React from 'react'
import './aboutme.css'
import profile from '../../images/profile.jpg'

function AboutMe() {
    return (
        <div className="about_container" id="about-me">
            <div>
                <img src={profile} alt="profile pic" />
            </div>
            <div className="about_text">
                <h1>ABOUT ME</h1>
                <p> I am a freelance Front-End web developer based out of New Jersey, here for your development needs. I am a veteran of the United States Air Force where I served six years
                    in the 108th Security Forces Squadran. My main goal is to give back to the community by helping citizens and other veterans grow succesful businesses by creating web applications
                    for them. When I am not working I enjoy traveling, photography, and spending time with family and friends. If you have a project you need, please do not hesitate to reach out!
                    No matter how big or small!  </p>
            </div>
        </div>
    )
}

export default AboutMe
