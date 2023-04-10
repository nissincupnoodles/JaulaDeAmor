import { useState, useEffect } from 'react';
import App1 from "../../public/Screenshot_20230410_164201.jpg"
import App2 from "../../public/Screenshot_20230410_164205.jpg"
import App3 from "../../public/Screenshot_20230410_164224.jpg"
export default function Slideshow () {

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % 3);
    }, 2000);

    return () => clearTimeout(slideshowTimer);
  }, [slideIndex]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>

      <div className="slideshow-container">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`mySlides fade ${slideIndex === i - 1 ? 'active' : ''}`}>
            <div className="numbertext">{i} / 3</div>
            <img src={`img_${i}.jpg`} style={{ width: '100%' }} />
            <div className="text">Caption Text</div>
          </div>
        ))}
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`dot ${slideIndex === i - 1 ? 'active' : ''}`}
            onClick={() => handleDotClick(i - 1)}
          ></span>
        ))}
      </div>
    </>
  );
};

