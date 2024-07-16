import React from 'react';
import './css/Item.css'; // Assurez-vous que le chemin est correct

const Item = ({ imageSrc, title, organizer, date, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <img src={imageSrc} alt={title} className="item-image" />
      <div className="item-content">
        <h2 className="event-title">{title}</h2>
        <p className="event-organizer">{organizer}</p>
        <p className="event-date">{date}</p>
      </div>
    </div>
  );
}

export default Item;