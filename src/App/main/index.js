import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../components/api';

import Hero from '../../components/hero';
import Header from '../../components/header';
import Case from '../../components/case';

import './index.scss';

const Main = () => {
  const [heroData, setHeroData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [caseData, setCaseData] = useState([]);
    
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'header_component')
      )

      if (response) {
        setHeaderData(response.results);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'case_component')
      )

      if (response) {
        setCaseData(response.results);
      }
    }
    fetchData();
  }, []);

  let renderCases;

  if (caseData.length > 0) {
    renderCases = caseData.map((t, i) => {
      return (
        <Case key={t + i} caseData={t} />
      )
    });
  }
/* 
  console.log(caseData); */
  return (
    <div className="main">
      <Header headerData={headerData} />
      <Hero heroData={heroData} />
      <div className="showcase">
        <h2>Showcase</h2>
        {renderCases}
      </div>
    </div>
  )
}

export default Main;