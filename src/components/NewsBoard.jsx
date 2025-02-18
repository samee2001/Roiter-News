import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'; // Ensure correct import path

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
                let response = await fetch(url);
                let data = await response.json();

                setArticles(data?.articles || []); // Handle undefined case
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news:", error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="row">
                    {articles.map((news, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <NewsItem 
                                title={news.title || "No Title"} 
                                description={news.description || "No Description Available"} 
                                imageUrl={news.urlToImage || "https://via.placeholder.com/150"} 
                                newsUrl={news.url} 
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewsBoard;
