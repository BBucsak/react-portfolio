import React from 'react'
import './contactMe.css'



function ContactMe() {
  return (
    <div className="contactMe_container" id="contact">
      <div className="contactMe_data_links">
        <div>
          <p>Brett Bucsak</p>
          <p>Carteret NJ</p>
          <p><a href="mailto:bbucsak@gmail.com?
          subject=subject text">bbucsak@gmail.com</a> </p>
          </div>
      </div>
      <div style={{ textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
