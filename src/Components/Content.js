import React from 'react'
import card from './images/card.png'

const Content = () => {
  return (
    <div>
            <div>
                <img src={card} alt="missing"/>
            </div>
           <div className='title'>
                <h1 className='heading'>Evan Mwaura</h1>
           </div>
            
        </div>
  )
}

export default Content