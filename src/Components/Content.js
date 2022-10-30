import React from 'react'
import card from './images/card.png'
import {Linkedin, Mailbox2} from 'react-bootstrap-icons'

const Content = () => {
  return (
    <div>
            <div>
                <img src={card} alt="missing"/>
            </div>
           <div className='title'>
                <h1 className='heading'>Evan Mwaura</h1>
           </div>
            <div className='button'>
                <button className='btn_1'><Mailbox2/> Email</button>
                <span  className='btn_2'><button className='linked_in'><Linkedin/> LinkedIn</button></span>
            </div>
        </div>
  )
}

export default Content