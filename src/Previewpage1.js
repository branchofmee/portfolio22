import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


function Previewpage1() {
  return (
    <Route exact path="/preview1">
    <div className="rightbox2">
      <div className='rightbox2-1'>
        <Link to="/" className="btn1"><i class="fa-solid fa-arrow-rotate-left"></i>Return</Link>
      </div>
      <div className="rightbox2-img">
        <img src={require('./img/rightbox1-1.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-2.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-3.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-4.png')} alt="thumbnail" />
      </div>
      <a href={`https://branchofmee.github.io/portfolio22/index`} target='_blank' className="rightboxa nav-a "><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
    </div>
    </Route>
  )
}
export default Previewpage1;