import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About project</h2>
            <p className='fs-17'>This project is a web application that allows users to search for books using the Open Library API. It provides information about books, including titles, authors, cover images, edition counts, and first publish years. The project was developed using React.js and incorporates features like dynamic searching, book details display, and responsive design.</p>
            <p className='fs-20'>Thank you for your attention!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
