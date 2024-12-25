import React from 'react'
import odoo from '../../static/odoo.png';
import odooTest from '../../static/odooTest.png';
import Biotime from '../../static/Biotime.png';
import Glpi from '../../static/Glpi.png';
import BessaPro from '../../static/BessaPro.png';
import Simonto from '../../static/Simonto.png';
import odooSupport from '../../static/odoosupport.png';
import postgre from '../../static/postgre.png';
import google from '../../static/google.png';
import hubspot from '../../static/hubspot.png';
import issabel1 from '../../static/issabel1.jpeg';
import helpDesk from '../../static/helpDesk.png';
import './Card.css'; 
import { useState } from 'react';
import Hover from '../Hover/Hover';

const services = [
  {
    name: "Odoo",
    description: "Odoo production base",
    logo: odoo,
    state: true,
    accessibility: true
  },
  {
    name: "Biotime",
    description: "Time management software",
    logo: Biotime,
    state: true,
    accessibility: true
  },
  {
    name: "Glpi",
    description: "IT asset management system",
    logo: Glpi,
    state: false,
    accessibility: true,
  },
  {
    name: "Bessa promotion",
    logo: BessaPro,
    description: "Bessa Promotion Immobiliére",
    state: true,
    accessibility: true,
  },
  {
    name: "Odoo Test",
    logo: odooTest,
    description: "Testing environment for Odoo",
    state: false,
    accessibility: true,
  },
  {
    name: "ReportingDB",
    logo: postgre,
    description: "Reporting DataBase",
    state: false,
    accessibility: false,
  },
  {
    name: "ODOO Simonto",
    logo: Simonto,
    description: "Simonto management in Odoo",
    state: true,
    accessibility: true,
  },
  {
    name: "Assistance IT/ODOO",
    logo: odooSupport,
    description: "IT and Odoo support service",
    state: true,
    accessibility: true,
  },
  {
    name: "Google",
    logo: google,
    description: "Lien vers google",
    state: true,
    accessibility: true,
  },
  {
    name: "Hubspot",
    logo: hubspot,
    description: "Lien vers hubspot",
    state: true,
    accessibility: true,
  },
  {
    name: "Issabel",
    logo: issabel1,
    description: "Lien vers issabel",
    state: false,
    accessibility: true,
  },
  {
    name: "odooSupport",
    logo: odooSupport,
    description: "Lien vers issabel",
    state: false,
    accessibility: true,
  },
  {
    name: "helpDesk",
    logo: helpDesk,
    description: "Lien vers helpDesk",
    state: true,
    accessibility: true,
  }

]

const Card = ({ name, description, link, state, accessibility }) => {
  const foundService = services.find((item) => (item.name === name));
  const [hidden, setHidden] = useState(true);

  return (
    <div
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">

        <div className="card" >


          <div className='card-test'>
            <img src={foundService.logo} alt={`${foundService.name} logo`} className="card-image" />
            {
              state === true ?
                <div className="card-badge-bg-success"></div>
                :
                <div className="card-badge-bg-danger"></div>
            }
            <div class="hover-down-arrow"></div>
          </div>

        </div>
        {hidden ? null :
          <Hover
            name={name}
            description={description}
            state={state}
            accessibility={accessibility}
          />
        }

      </a>

    </div>

  )
}

export default Card
