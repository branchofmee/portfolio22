import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


function Previewpage2() {
  return (
    <Route exact path="/preview2">
      <div className="rightbox2">
        <div className='rightbox2-1'>
          <Link to="/preview0" className="btn1"><i class="fa-solid fa-arrow-rotate-left"></i>Return</Link>
        </div>
        <div className="rightbox2-img">
          <img src={require('./img/rightbox2-1.png')} alt="thumbnail" />
          <img src={require('./img/rightbox2-2.png')} alt="thumbnail" />
          <img src={require('./img/rightbox2-3.png')} alt="thumbnail" />
          <img src={require('./img/rightbox2-4.png')} alt="thumbnail" />
        </div>
        <a href={`https://branchofmee.github.io/portfolio/millie/main.html`} target='_blank' className="rightboxa nav-a "><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
      </div>
    </Route>
  )
}
export default Previewpage2;