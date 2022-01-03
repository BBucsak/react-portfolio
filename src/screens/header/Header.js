import React from 'react'
import TypeAnimation from 'react-type-animation';
import './header.css'

function Header() {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
     
    <TypeAnimation 
        cursor={false}
        sequence={[
            'A Software Engineer', 1000,
            'Also known as', 1000,
            'Front End Web Developer', 1000,
            'Or!', 1000,
            'A Coder!', 2000,
            '',
            ''   
        ]}
        wrapper="h3"
        repeat={Infinity}
        />
    </div>
  )
}

export default Header
