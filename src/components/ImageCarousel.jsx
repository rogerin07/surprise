import { useState, useRef, useEffect } from "react";

import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";
import img7 from "/images/img7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const SWIPE_THRESHOLD = 50;
const AUTO_PLAY_DELAY = 4000;

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoPlayRef = useRef();
  const containerRef = useRef(null);
  const isPaused = useRef(false);

  // Navegação circular
  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    pauseAutoPlay();
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
    resumeAutoPlay();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    if (distance > SWIPE_THRESHOLD) {
      nextImage();
    } else if (distance < -SWIPE_THRESHOLD) {
      prevImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto play setup
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (!isPaused.current) {
        nextImage();
      }
    }, AUTO_PLAY_DELAY);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const pauseAutoPlay = () => {
    isPaused.current = true;
  };

  const resumeAutoPlay = () => {
    isPaused.current = false;
  };

  // Pause autoplay on hover (desktop)
  const onMouseEnter = () => {
    pauseAutoPlay();
  };
  const onMouseLeave = () => {
    resumeAutoPlay();
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-[2.5rem] shadow-lg touch-pan-x
                 w-64 h-80
                 sm:w-80 sm:h-96
                 lg:w-96 lg:h-[32rem]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Faixa de imagens */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full rounded-[2.5rem]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagem ${i + 1}`}
            className="w-full flex-shrink-0 object-cover rounded-[2.5rem]"
            draggable={false}
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              pauseAutoPlay();
              setTimeout(resumeAutoPlay, 3000);
            }}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
