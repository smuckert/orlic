import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../components/api';

import Hero from '../../components/hero';
import Header from '../../components/header';

import './index.scss';

const Main = () => {
  const [heroData, setHeroData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'hero_component')
      )

      if (response) {
        setHeroData(response.results);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="main">
      <Header />
      <Hero heroData={heroData} />
    </div>
  )
}

export default Main;