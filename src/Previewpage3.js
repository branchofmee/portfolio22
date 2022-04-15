import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


function Previewpage3() {
  return (
    <Route exact path="/preview3">
    <div className="rightbox2">
      <div className='rightbox2-1'>
        <Link to="/preview0" className="btn1"><i class="fa-solid fa-arrow-rotate-left"></i>Return</Link>
      </div>
      <div className="rightbox2-img">
        <img src={require('./img/rightbox3-1.png')} alt="thumbnail" />
        <img src={require('./img/rightbox3-2.png')} alt="thumbnail" />
        <img src={require('./img/rightbox3-3.png')} alt="thumbnail" />
        <img src={require('./img/rightbox3-4.png')} alt="thumbnail" />
        <img src={require('./img/rightbox3-5.png')} alt="thumbnail" />
        <img src={require('./img/rightbox3-6.png')} alt="thumbnail" />
      </div>
      <div className="rightbox2-3">
        <a href={`https://branchofmee.github.io/portfolio/confer/main.html`} target='_blank' className="rightboxa nav-a "><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
        </div>
    </div>
    </Route>
  )
}
export default Previewpage3;