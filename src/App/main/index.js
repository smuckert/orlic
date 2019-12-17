import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../components/api';

import Hero from '../../components/hero';
import Header from '../../components/header';
import Case from '../../components/case';
import ImageWithText from '../../components/image-with-text';

import './index.scss';

const Main = () => {
  const [heroData, setHeroData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [caseData, setCaseData] = useState([]);
  const [imageWithTextData, setImageWithTextData] = useState([]);
    
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'imagewithtext_component')
      )

      if (response) {
        setImageWithTextData(response.results);
      }
    }
    fetchData();
  }, []);

  let renderCases;
  let renderImageWithText;

  if (caseData.length > 0) {
    renderCases = caseData.map((t, i) => {
      return (
        <Case key={t + i} caseData={t} />
      )
    });
  }

  if (imageWithTextData.length > 0) {
    renderImageWithText = imageWithTextData.map((t, i) => {
      return (
        <ImageWithText key={t + i} imageWithTextData={t} /> 
      )
    })
  }

  console.log(imageWithTextData);
  return (
    <div className="main">
      <Header headerData={headerData} />
      <Hero heroData={heroData} />
      <div className="content-container">
        <div className="showcase">
          <h2>Showcase</h2>
          <div className="case-wrapper">
            {renderCases}
          </div>
        </div>
        {renderImageWithText}
      </div>
    </div>
  )
}

export default Main;