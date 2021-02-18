import React, { useState, useEffect } from 'react';

import './main.css';

const url = 'https://course-api.com/react-tabs-project';

function TabsApp() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [tabsInfo, setTabsInfo] = useState([]);

  const getTabInformation = async () => {
    const res = await fetch(url);

    const data = await res.json();

    setTabsInfo(data);
  };

  useEffect(() => {
    getTabInformation();

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [index]);

  const setButtonIndex = () => {
    setIndex((oldIndex) => {
      let nextIndex = oldIndex + 1;

      if (nextIndex > 2) {
        nextIndex = 0;
      }

      return nextIndex;
    });
  };

  if (loading) {
    const { company, title, dates, duties } = tabsInfo[index];

    return (
      <>
        <h1 className="tabs__main--title">Expierence</h1>
        <div className="tabs">
          <div className="tabs__buttons">
            <button onClick={setButtonIndex} className="btn">
              Cukker
            </button>
            <button onClick={setButtonIndex} className="btn">
              Tommy
            </button>
            <button onClick={setButtonIndex} className="btn">
              BigDrop
            </button>
          </div>
          <div className="tabs__main">
            <h2>{title}</h2>
            <button className="tabs__main--btn">{company}</button>
            <h3>{dates}</h3>
            {duties.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
          ;
        </div>
      </>
    );
  } else {
    return <h1 className="text-center">Loading ...</h1>;
  }
}

export default TabsApp;
