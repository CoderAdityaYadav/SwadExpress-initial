import React, { useEffect } from "react";
import VendorCard from "../components/VendorCard";
import { useNavigate } from "react-router-dom";
import { vendors } from "../vendorsData";
import FullScreenImage from "../components/FullScreenImage";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById("fullscreen-image");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > windowHeight) {
        imageElement.style.opacity = 0;
        imageElement.style.transform = 'translateY(-100vh)'; // Ensure image is fully out of view
      } else {
        const opacity = 1 - scrollY / windowHeight;
        imageElement.style.opacity = opacity;
        imageElement.style.transform = `translateY(0)`; // Keep image fixed in place
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <FullScreenImage />
      <main>
        <div className="container mx-auto px-4 py-6">
          <div className="grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                name={vendor.name}
                logo={vendor.logo}
                onClick={() => navigate(`/vendor/${vendor.id}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
