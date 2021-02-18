import React, { useState, useEffect } from 'react';

import './main.css';

const url = 'https://course-api.com/react-tabs-project';

function TabsApp() {
  const [index, setIndex] = useState(0);

  const [tabsInfo, setTabsInfo] = useState([]);

  useEffect(() => {
    const getTabInformation = async () => {
      const res = await fetch(url);

      const data = await res.json();

      setTabsInfo(data[index]);
    };

    getTabInformation();
  }, [index]);

  console.log(tabsInfo.duties);

  const setButtonIndex = () => {
    setIndex((oldIndex) => {
      let nextIndex = oldIndex + 1;

      if (nextIndex > 2) {
        nextIndex = 0;
      }

      return nextIndex;
    });
  };

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
          <h2>{tabsInfo.title}</h2>
          <button className="tabs__main--btn">{tabsInfo.company}</button>
          <h3>{tabsInfo.dates}</h3>
          <p>{tabsInfo.duties}</p>
        </div>
        ;
      </div>
    </>
  );
}

export default TabsApp;
