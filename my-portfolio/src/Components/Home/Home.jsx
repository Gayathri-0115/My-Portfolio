import React from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div>
      <div className="container" id='home'>
        <h2>Hi, I'm <b>Gayathri</b></h2>
        <p>An Aspiring <b className='main'>MERN Full Stack Developer </b>passionate about building clean, Responsive and user-friendly Web Applications.</p>
        <div className="btns">
          <a href="https://github.com/Gayathri-0115/">
            <button className='github'><i className="fa-brands fa-github "></i></button>
          </a>
          
          <button className='linkedin'><i className="fa-brands fa-linkedin"></i></button>
          <AnchorLink href='#contact' className='anchorlink'><button className="connect">Connect with me </button></AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Home