import React from 'react'
import Card from '../Card/Card'
import data from '../../data/data.json';
import './Main.css'; 
import Explanation from '../Explanation/Explanation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../navBar/navBar';

const Main = () => {
  return (
    <div>
      <NavBar/>
      <Header />
      <div className='main'>
        {data.map(row => (
          <Card
            key={row.id}
            name={row.name}
            description={row.description}
            link={row.link}
            image={row.image}
            state={row.state}
            accessibility={row.accessibility}
          />
        ))}
      </div>

      <Explanation />
      {/* <Footer /> */}
    </div>
  )
}

export default Main
