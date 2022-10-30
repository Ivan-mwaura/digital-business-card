import React from 'react'
import {Linkedin, Mailbox2} from 'react-bootstrap-icons'

function About(){
    return(
        <div>
            <div>
                <h1 className='about_h1'>FrontEnd web developer</h1>
                <h1 className='about_h2'>Data analyst</h1>
            </div>
            <div className='button'>
                <button className='btn_1'><Mailbox2/> Email</button>
                <span  className='btn_2'><button className='linked_in'><Linkedin/> LinkedIn</button></span>
            </div>
       </div>
    )
}
export default About;