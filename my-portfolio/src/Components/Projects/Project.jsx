import React from 'react'
import './Project.css'
import pianoe from '../../assets/pianoedit.png'
import cal from '../../assets/calculator.png'
import agecal from '../../assets/agecal.png'
import weather from '../../assets/weatherapp.png'
import fact from '../../assets/fact.png'
import quote from '../../assets/quote.png'
import digi from '../../assets/digitalclock.png'
import bmi from '../../assets/bmical.png'
import todo from '../../assets/todo.png'

const Project = () => {
    return (
        <div>
            <div className="container-pro" id='project'>
                <h2>Projects</h2>
                <div className="project-list">
                    <div className='project-item'>
                        <img src={pianoe} alt="" />
                        <p className='head'>Simple Piano </p>
                     
                        <a href="https://simple-piano-clone.netlify.app/"><button>Check Out Now on Live <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={weather} alt="" />
                        <p className='head'>Weather App</p>
                        <a href="https://weather-dashboard-4545.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={fact} alt="" />
                        <p className='head'>Facts Generator</p>
                        <a href="https://ran-facts-gen.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={cal} alt="" />
                        <p className='head'>Calculator</p>                         
                        <a href="https://simpl-calculator-9787.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={agecal} alt="" />
                        <p className='head'>Age Calculator</p>
                        
                        <a href="https://age-calc-98.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    
                    <div className='project-item'>
                        <img src={quote} alt="" />
                        <p className='head'>Quotes Generator</p>
                        <a href=" https://quotes-gen-845.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={digi} alt="" />
                        <p className='head'>Digital Clock</p>
                        <a href="https://digi-clock-67.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={bmi} alt="" />
                        <p className='head'>BMI Calculator</p>
                        <a href="https://bmi-calculator-hw.netlify.app/"><button>Check Out Now on Live  <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                    <div className='project-item'>
                        <img src={todo} alt="" />
                        <p className='head'>To-Do List</p>
                        <a href="#"><button>Check Out Now on Live <i className="fa-solid fa-arrow-right"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project