import React from 'react'
import './About.css'   
import imga from '../../assets/images_2-removebg-preview.png'

const About = () => {
  return (
    <div className='container-about' id='about'>
      <h2>About Me</h2>
      <div className="about-con">
      <div className="img">
        <img src={imga} alt="" />
      </div>
      <div className="content">
        <h3>I'm <b>Gayathri</b>,</h3>
        <p>A <b>BCA graduate with 85%</b> from Krishnasamy College, Cuddalore.</p>
        <p> I've completed a <b>MERN Full Stack Web Development Course</b> at Nativeva Learning and also done an <b>Internship in Front-End Development</b> at Assistlana, Pondicherry.</p>
        <p>I built <b>10+ Projects </b> using HTML, CSS, Javascript, React.js, MongoDB, Node.js, and Express.js.</p>
        <p>I'm passionate about creating clean, responsive, and user-friendly web applications.</p>
      </div>
      </div>
    </div>
  )
}

export default About