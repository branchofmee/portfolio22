import React, { useState } from 'react';

function Rightbox121(props) {
  return (
    <div className="rightbox1-2-1">
      <img src={require('./img/portfolio' + (props.i + 1) + '.png')} alt="img" />
      <div>
        <h3>
          {props.portfolio.title}
        </h3>

        <p className='fontstyle5'>
          {props.portfolio.skill}
        </p>
        <p className='fontstyle5'>
          {props.portfolio.skill2}
        </p>

        <p className='fontstyle6' >
          {props.portfolio.content1}<br />
          {props.portfolio.content2}<br />
          {props.portfolio.content3}
        </p>
      </div>
    </div>
  )
}
export default Rightbox121;