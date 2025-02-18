import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card" style={{ maxWidth: "345px" }}>
      <img 
        src={src || "https://via.placeholder.com/345x200"} 
        className="card-img-top" 
        alt="News" 
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">{description || "No description provided for this news article."}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
