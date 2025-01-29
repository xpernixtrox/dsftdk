import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slide2 from "./assets/hi.jpg";
import slide1 from "./assets/ip.jpg";
import slide0 from "./assets/s.jpg";
import slide9 from "./assets/t.jpg";
import "./styles/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const images = [slide2, slide9, slide1, slide2, slide0, slide9];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const trendingProducts = [
    {
      id: 1,
      name: "IPHONE16 PRO MAX",
      description: "A high-performance smartphone with a sleek design.",
      shopName: "Tech Store",
      location: "9.656700, 76.777233",
      contact: "9876543210",
      quantity: 5,
      price: "₹89999",
      image: slide1,
    },
    {
      id: 2,
      name: "SUGAR MONITOR",
      description: "Dr Trust (USA) Fully Automatic Blood Sugar Testing Glucometer Machine with 60 Strips.",
      shopName: "Med-Hub",
      location: "Brigade Road, Bangalore",
      contact: "8765432109",
      quantity: 3,
      price: "₹2000",
      image: slide0,
    },
    {
      id: 3,
      name: "SAMSUNG SMART TV",
      description: "4K UHD smart TV with built-in streaming apps.",
      shopName: "Home Electronics",
      location: "Jayanagar, Bangalore",
      contact: "7654321098",
      quantity: 2,
      price: "₹12999",
      image: slide9,
    },
  ];

  const filteredProducts = trendingProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">STOCKHIVE</h1>
        <div className="auth-buttons">
          <button className="btn login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="btn signup-btn" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>

      {/* Sliding Carousel */}
      <div className="carousel-container">
        <button className="prev-btn" onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)}>❮</button>
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index}`} className={index === currentSlide ? "active" : "hidden"} />
              <img src={image} alt={`Slide ${index}`} className={index === currentSlide ? "active" : "hidden"} />
              <img src={image} alt={`Slide ${index}`} className={index === currentSlide ? "active" : "hidden"} />
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}>❯</button>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Trending Products */}
      <section className="trending-products">
        <h2>TOP-SELLING</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`, { state: product })}>
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p><strong>Shop:</strong> {product.shopName}</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>
    </div>
  );
}