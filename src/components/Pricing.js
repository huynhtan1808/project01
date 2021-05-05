import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { Link } from 'react-router-dom';
import logo1 from '../images/amazon.png'

function Pricing() {
  return (
    <table className="projects">
      <thead></thead>
      <tbody>
        <tr>
          <td><img src={logo1} alt=""/></td>
          <td className="company company_and_position"><h3>Vaan Group</h3></td>
          <td className="tags"><div rel="follow" className="tag"><h3>react</h3></div></td>
          <td className="time"><a target="_blank" href="/remote-jobs/103856-remote-senior-frontend-engineer-vaan-group"><time datetime="2021-05-05T13:49:31+00:00">📌	2h</time></a></td>
          <td className="source"><a rel="noindex nofollow" class="no-border tooltip" target="_blank" href="/l/103856"><div target="_blank" class="apply_button no-logo"><p>Apply</p></div></a></td>
        </tr>
      </tbody>    
    </table> 
  );
}
export default Pricing;
