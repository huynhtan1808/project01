import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import './Box.css';


function Box() {   
    return (
        <div className="box">
            <div className="box-container">
            <ul className='box-items'>
                    <li className="box-item">
                        <Link to='/' className="box-links" >
                        <a><p><i>🏝</i>REMOTE JOBS</p></a>
                        </Link>
                    </li>
                    <li className="box-item">
                        <Link to='/' className="box-links" >
                        <a>
                        <p><i>💻</i>SOFTWARE DEVELOPMENT</p>
                        </a>
                        </Link>
                    </li>
                    <li className="box-item">
                        <Link to='/' className="box-links" >
                        <a><p><i>🎧</i>CUSTOMER SUPPORT</p></a>
                        </Link>
                    </li>
                    <li className="box-item">
                        <Link to='/' className="box-links" >
                        <a><p><i>📈</i>MARKETING</p></a>
                        </Link>
                    </li>
                    <li className="box-item">
                        <Link to='/' className="box-links" >
                        <a><p><i>🎨</i>DESIGN</p></a>
                        </Link>
                    </li><li className="box-item">
                        <Link to='/' className="box-links" >
                        <a><p><i>👩‍💻</i>FREELANCERS DIRECTORY</p></a>
                        </Link>
                    </li>
                    </ul>
            </div>
        </div>
    )
}

export default Box