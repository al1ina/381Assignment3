
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import flavors from "../data/flavors.js";
import reviews from "../data/reviews.js"

function MainSection() {
  const [featured, setFeatured] = useState([]);
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const shuffled = [...flavors].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    setFeatured(selected);
  }, []);

  useEffect(() => {
    const reviewsCopy = [...reviews]; // copy reviews array
    for (let i = reviewsCopy.length - 1; i > 0; i--) { // shuffle array
      const j = Math.floor(Math.random() * (i + 1));
      [reviewsCopy[i], reviewsCopy[j]] = [reviewsCopy[j], reviewsCopy[i]];
    }  
    setRandomReviews(reviewsCopy.slice(0, 2)); // taking the first 2
  }, []); // [] to run once on mount
  
  // function to convert numbersss to starsss
  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
      <section className="main-section">
        <div className="content">
        <h2>About Sweet Scoop Ice Cream</h2>
        <p>Sweet Scoop Ice Cream is a family-owned business that has been serving delicious ice cream since 1990. 
            We pride ourselves on using only the freshest ingredients to create our unique flavors. Whether you're in the 
            mood for a classic vanilla or something more adventurous like our signature "Chocolate Explosion," we have 
            something for everyone. Come visit us and treat yourself to a sweet scoop today!</p>
        <h2>Featured Flavors</h2>
        <div className="flavor-grid">
          {featured.map((flavor) => (
              <div className="flavor-card" key={flavor.id}>
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
                <p>Price: {flavor.price}</p>
                <img src={flavor.image} alt={flavor.name} />
              </div>
          ))}
        </div>
        <h2>Customer Reviews</h2>
        {randomReviews.map((r, index) => (
          <div key={index} style={{ marginBottom: "1em", paddingBottom: "0.5em" }}>
            <p><strong>{r.customerName}</strong></p>
            <p>Rating: {renderStars(r.rating)}</p>
            <p>{r.review}</p>
          </div>
        ))}
        </div>
      </section>
  );
}

export default MainSection;
