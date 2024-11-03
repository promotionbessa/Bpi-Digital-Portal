import React from 'react'
import odoo from '../../static/odoo.png';
import odooTest from '../../static/odooTest.png';
import Biotime from '../../static/Biotime.png';
import Glpi from '../../static/Glpi.png';
import BessaPro from '../../static/BessaPro.png';
import Simonto from '../../static/Simonto.png';
import odoosupport from '../../static/odoosupport.png';
import './Card.css'; // Import the CSS file for styling
import { useState } from 'react';
import Hover from '../Hover/Hover';

const services = [
  { 
    name: "Odoo", 
    description : "Odoo production base",
    logo: odoo,
    state : true,
    accessibility :true
  },
  { 
    name: "Biotime", 
    description: "Time management software",
    logo: Biotime,
    state : true,
    accessibility :true
  },
  { 
    name: "Glpi", 
    description: "IT asset management system",
    logo: Glpi,
    state : true,
    accessibility :true,
  },
  { 
    name: "Bessa promotion", 
    logo: BessaPro,
    description : "Bessa Promotion Immobiliére",
    state : true,
    accessibility :true,  
  },
  { 
    name: "Odoo Test", 
    logo: odooTest ,
    description: "Testing environment for Odoo",
    state : true,
    accessibility :true,      
  },
  { 
    name: "ODOO Simonto", 
    logo: Simonto ,
    description: "Simonto management in Odoo",
    state : true,
    accessibility :true,      
  },
  { 
    name: "Assistance IT/ODOO", 
    logo: odoosupport ,
    description: "IT and Odoo support service",
    state : true,
    accessibility :true,        
  },
]

const Card = ({ name, description,  link, state, accessibility }) => {
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
