import React from 'react';
import { Button } from './Button';
import './Project.css';
import { Link } from 'react-router-dom';
import logo1 from '../images/amazon.png'

function Project() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <section className="basic-grid">
        <div className="card">
          <a>
            <div className="card-content">
              <div className="text-center"><img src={ logo1 }/></div>
              <h3>React Firebase Full Course</h3>
              <p>Build a fullstack server-rendered webapp with React, Next.js, and Firebase </p>
              <Link to='/myworks' className="">
                <Button buttonStyle="btn--outline" buttonColor='black' buttonSize="btn--wide">Detail</Button>
              </Link>
            </div>
          </a>
        </div>
        <div class="card">
          <a>
            <div className="card-content">
              <div className="text-center"><img src={ logo1 }/></div>
              <h3>React Firebase Full Course</h3>
              <p>Build a fullstack server-rendered webapp with React, Next.js, and Firebase </p>
              <Link to='/sign-up' className="">
                <Button buttonStyle="btn--outline" buttonColor='black' buttonSize="btn--wide">Detail</Button>
              </Link>
            </div>
          </a>
        </div>
        <div class="card">
          <a>
            <div className="card-content">
              <div className="text-center"><img src={ logo1 }/></div>
              <h3>React Firebase Full Course</h3>
              <p>Build a fullstack server-rendered webapp with React, Next.js, and Firebase </p>
              <Link to='/sign-up' className="">
                <Button buttonStyle="btn--outline" buttonColor='black' buttonSize="btn--wide">Detail</Button>
              </Link>
            </div>
          </a>
        </div>
      </section>
  </div>
  );
}
export default Project;
