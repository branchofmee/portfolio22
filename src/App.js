import { Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import portfolioData from './data.js';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [menu2, menu2change] = useState(false);
  let [portfolio, portfolioChange] = useState(portfolioData);
  let [preview1, preview1change] = useState(false);
  let [preview2, preview2change] = useState(false);
  let [preview3, preview3change] = useState(false);
  let [preview4, preview4change] = useState(false);
  let [preview5, preview5change] = useState(false);

  return (
    <div className="App">
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
                  <button onClick={() => { preview1change(true) }}>portfolio preview</button>
                  <button onClick={() => { preview2change(true) }}>propject1 preview</button>
                  <button onClick={() => { preview3change(true) }}>propject2 preview</button>
                  <button onClick={() => { preview4change(true) }}>propject3 preview</button>
                  <button onClick={() => { preview5change(true) }}>propject4 preview</button>
                </div>

                <div className="innerwrap">
                  {
                    portfolio.map((a, i) => {
                      return <Rightbox121 portfolio={a} i={i} key={i} preview2change={preview2change} />
                    })
                  }
                </div>

                {
                  preview1 === true
                    ? <div className="rightbox2 rightbox2-1">
                      <button className="rigthbox2-1-btn" onClick={() => { preview1change(false) }}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
                      <div className="rightbox2-img">
                        <img src={require('./img/rightbox1-1.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox1-2.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox1-3.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox1-4.png')} alt="thumbnail" />
                      </div>
                      <a href={`https://branchofmee.github.io/portfolio22/index`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
                    </div>
                    : null
                }
                {
                  preview2 === true
                    ? <div className="rightbox2 rightbox2-2">
                      <button className="rigthbox2-1-btn" onClick={() => { preview2change(false) }}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
                      <div className="rightbox2-img">
                        <img src={require('./img/rightbox2-1.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox2-2.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox2-3.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox2-4.png')} alt="thumbnail" />
                      </div>
                      <a href={`https://branchofmee.github.io/portfolio/millie/main.html`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
                    </div>
                    : null}

                {
                  preview3 === true
                    ? <div className="rightbox2 rightbox2-2">
                      <button className="rigthbox2-1-btn" onClick={() => { preview3change(false) }}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
                      <div className="rightbox2-img">
                        <img src={require('./img/rightbox3-1.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox3-2.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox3-3.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox3-4.png')} alt="thumbnail" />
                      </div>
                      <a href={`https://branchofmee.github.io/portfolio/confer/main.html`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
                    </div>
                    : null}

                {
                  preview4 === true
                    ? <div className="rightbox2 rightbox2-2">
                      <button className="rigthbox2-1-btn" onClick={() => { preview4change(false) }}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
                      <div className="rightbox2-img">
                        <img src={require('./img/rightbox4-1.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox4-2.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox4-3.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox4-4.png')} alt="thumbnail" />
                      </div>
                      <a href={`https://branchofmee.github.io/portfolio/SiamoNapoli/main.html`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
                    </div>
                    : null}

                {
                  preview5 === true
                    ? <div className="rightbox2 rightbox2-2">
                      <button className="rigthbox2-1-btn" onClick={() => { preview5change(false) }}><i class="fa-solid fa-arrow-rotate-left"></i>Return</button>
                      <div className="rightbox2-img">
                        <img src={require('./img/rightbox5-1.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox5-2.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox5-3.png')} alt="thumbnail" />
                        <img src={require('./img/rightbox5-4.png')} alt="thumbnail" />
                      </div>
                      <a href={`https://branchofmee.github.io/portfolio/LeWeekend/main.html`} target='_blank' className="nav-a"><i class="fa-solid fa-arrow-up-right-from-square"></i>사이트 가기!</a>
                    </div>
                    : null}

              </div>
              : null
          }
        </div>
      </div>
      
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
