import React, { useState } from 'react';
import imgLeft from './img/gradient-top-left.avif'; 
import Item from './Item';
import itemsData from './itemData';
import SelectedItem from './SelectedItem';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className={selectedItem ? 'selected-item-active' : ''}>
      <div className={`bg-imgs ${selectedItem ? 'hide' : ''}`}>
        <div className="img left"><img alt="Gradient top left" width="664" height="424" src={imgLeft} /></div>
        <div className="img right"></div>
      </div>
      <nav className="navbar">
        <div className="container">
          <h1>ETHGUN</h1>
        </div>
      </nav>
      <div className="container content">
        {selectedItem ? (
          <SelectedItem item={selectedItem} onBackClick={handleBackClick} />
        ) : (
          <>
            <h1>Select your party, mint your ticket !</h1>
            <div className="items-grid">
              {itemsData.map((item, index) => (
                <Item 
                  key={index}
                  imageSrc={item.imageSrc} 
                  title={item.title} 
                  organizer={item.organizer} 
                  date={item.date}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          </>
        )}
      </div>
        {selectedItem && <div className="full-screen-bg" style={{ backgroundImage: `url(${selectedItem.imageSrc})` }}></div>}
    </div>
  );
}

export default App;
