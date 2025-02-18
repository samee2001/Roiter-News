import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img 
        src={src} 
        className="card-img-top" 
        alt="News" 
        style={{ height: "200px", objectFit: "cover", width: "360px" }}
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
