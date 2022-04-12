import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Preview (props){
  let yourHistory = useHistory();
  return(
    <div className="rightbox2 rightbox2-1">
      <button className="rigthbox2-1-btn" onClick={()=>{ yourHistory.goBack();}}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
      <div className="rightbox2-img">
        <img src={require('./img/rightbox1-1.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-2.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-3.png')} alt="thumbnail" />
        <img src={require('./img/rightbox1-4.png')} alt="thumbnail" />
      </div>
      <a href={`https://branchofmee.github.io/portfolio22/index`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
    </div>

  );
};

export default Preview(Preview);
