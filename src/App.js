import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import portfolioData from './data.js';
import Previewpage1 from './Previewpage1.js';
import Previewpage2 from './Previewpage2.js';
import Previewpage3 from './Previewpage3.js';
import Previewpage4 from './Previewpage4.js';
import Previewpage5 from './Previewpage5.js';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [menu2, menu2change] = useState(false);
  let [portfolio, portfolioChange] = useState(portfolioData);

  return (
    <div className="App">
      <Route exact path="/">
      <div className="leftbox">
        <div className="leftbox-0">
          <div className="leftbox-1">
            <img src={require('./img/pic.jpg')} alt="photo" />
          </div>
          <div className="leftbox-2">
            <p className="fontstyle1">배미경<br /><span> Bae Mee Gyung</span></p>
            <div className="leftbox2-1">
              <p className="fontstyle2">BIRTH</p>
              <p className="fontstyle3">1990.05.02</p>
              <p className="fontstyle2">E-MAIL</p>
              <p className="fontstyle3">branchofmee@gmail.com</p>
              <p className="fontstyle2">EDUCATION</p>
              <p className="fontstyle3">숙명여자대학교 문헌정보학과 졸업</p>
            </div>

          </div>
        </div>
      </div>

      <div className="rightbox">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <button onClick={() => { menu2change(false) }}><i class="fa-solid fa-code"></i>About Me</button>
          </Nav.Item>
          <Nav.Item>
            <button onClick={() => { menu2change(true) }}><i class="fa-solid fa-floppy-disk"></i>Work</button>
          </Nav.Item>
          <Nav.Item><a href={`https://github.com/branchofmee/portfolio22`} target='_blank' className="nav-a"><i class="fab fa-github"></i>Go portfolio github</a></Nav.Item>
          <Nav.Item><a href={`https://github.com/branchofmee/portfolio`} target='_blank' className="nav-a"><i class="fab fa-github"></i>Go project github</a></Nav.Item>
        </Nav>
        <div className="rightbox-1">
          <div className="innerwrap">
            <div className="rightbox1-1">

              <div className="rb1-1-1-1">
                <div className="rb1-1-title">
                  <h5>About Me</h5>
                </div>
                <div className="rb1-1-textbox">
                  <p className="fontstyle4">
                    Hi!<br />
                    My name is<br />
                    BAE MeeGyung<br />
                    I'm Getting Better All The Time!
                  </p>
                </div>
              </div>

              <div className="rb1-1-1-1">
                <div className="rb1-1-title">
                  <h5>LICENCE</h5>
                </div>
                <div className="rb1-1-textbox">
                  <p className="fontstyle4">웹디자인 기능사(필기 합격)</p>
                </div>
              </div>

              <div className="rb1-1-1-1">
                <div className="rb1-1-title">
                  <h5>TRAINING</h5>
                </div>
                <div className="rb1-1-textbox">
                  <p className="fontstyle4">이젠컴퓨터학원 웹퍼블리셔 UI/UX 프론트엔드 양성과정 수료(2022년 3월)</p>
                </div>
              </div>

              <div className="rb1-1-1-1">
                <div className="rb1-1-title">
                  <h5>SKILL</h5>
                </div>
                <div className="rb1-1-textbox">
                  <img src={require('./img/html.png')} alt="skillicon" />
                  <img src={require('./img/css.png')} alt="skillicon" />
                  <img src={require('./img/js.png')} alt="skillicon" />
                  <img src={require('./img/jquery.png')} alt="skillicon" />
                  <img src={require('./img/json.png')} alt="skillicon" />
                  <img src={require('./img/ajax.png')} alt="skillicon" />
                  <img src={require('./img/react.png')} alt="skillicon" />
                  <img src={require('./img/bootstrap.png')} alt="skillicon" />
                </div>
              </div>

            </div>
          </div>

          {
            menu2 === true
              ? <div className="rightbox1-2">

                <div className="btnbox">
                  <Link to="/preview1" className="btnlink">portfolio preview</Link>
                  <Link to="/preview2" className="btnlink">propject1 preview</Link>
                  <Link to="/preview3" className="btnlink">propject2 preview</Link>
                  <Link to="/preview4" className="btnlink">propject3 preview</Link>
                  <Link to="/preview5" className="btnlink">propject4 preview</Link>
                </div>
                
                  <div className="innerwrap">
                    {
                      portfolio.map((a, i) => {
                        return <Rightbox121 portfolio={a} i={i} key={i} />
                      })
                    }
                  </div>
                

              </div>

              : null
          }
        </div>
      </div>
      </Route>
      <Previewpage1 />
      <Previewpage2 />
      <Previewpage3 />
      <Previewpage4 />
      <Previewpage5 />

    </div>
  );
}

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

export default App;
