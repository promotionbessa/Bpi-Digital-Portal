import React from 'react';
import './Hover.css';
const Hover = ({ name, description, state, accessibility }) => {
  return (
    <div className='hover-main'>
      <div className='hover-name'>
      {name}
      </div>
      <hr className='hover-hr'></hr>
      <div className='hover-description'>
        {description}
      </div>
      <div className='hover-info'>
      {
        accessibility ?
        <p> accessible globalement  </p>:
        <p> accessible localement  </p>
      }
      <span className='hover-dot'></span>
      {state ?
      <p> Disponible </p>:
      <p> Indisponible </p>
      }
      </div>
    </div>
  )
}

export default Hover
