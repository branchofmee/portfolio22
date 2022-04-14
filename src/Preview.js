import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Preview (props){
  let yourHistory = useHistory();
  return(
    <div className="rightbox2 rightbox2-1">
      <button className="rigthbox2-1-btn" onClick={()=>{ yourHistory.goBack();}}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
      <div className="rightbox2-img">
        <img src={props.previewdata.img1} alt="thumbnail" />
        <img src={props.previewdata.img2} alt="thumbnail" />
        <img src={props.previewdata.img3} alt="thumbnail" />
        <img src={props.previewdata.img4} alt="thumbnail" />
      </div>
      <a href={props.previewdata.url} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
    </div>

  );
};

export default Preview(Preview);
