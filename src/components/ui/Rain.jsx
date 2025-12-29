import { useRef, useEffect } from "react";

const Rain = () => {
  const canvasRef = useRef(null);

  // CONFIGURATION
  const num_drops = 200; // Increased count since drops are thinner
  const wind = 2; // Positive = Rain falls to the right. 0 = Straight down.
  const speed_multiplier = 1;
  const rain_color = "rgba(174, 194, 224, 0.8)";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Helper to handle High-DPI screens (Retina) for crisp 1px lines
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      // Set internal resolution to match device pixels
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale drawing operations so 1 unit = 1 CSS pixel
      ctx.scale(dpr, dpr);
      
      // Reset context styles after resize clears them
      ctx.strokeStyle = rain_color;
      ctx.lineWidth = 2; // Thickness: 1 is very thin, 2 is retro-crisp
      ctx.lineCap = "square"; // Square edges for pixel look
    };

    resizeCanvas();

    const rain_drops = [];
    
    // Initialize drops
    for (let i = 0; i < num_drops; i++) {
      rain_drops[i] = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: (4 + Math.random() * 4) * speed_multiplier,
        length: 8 + Math.random() * 5,
      };
    }

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Clear with the scaled dimensions
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      ctx.beginPath();
      
      rain_drops.forEach((drop) => {
        // We do NOT floor/round coordinates here. 
        // Sub-pixel rendering prevents the "shaking/jittering" effect.
        ctx.moveTo(drop.x, drop.y);
        
        // Calculate diagonal end point
        // The 'wind' variable determines the X offset of the bottom of the drop
        ctx.lineTo(drop.x + wind, drop.y + drop.length);

        // Update positions
        drop.y += drop.speed;
        drop.x += drop.speed * (wind * 0.1); // Move sideways slightly based on wind

        // Reset if off screen
        const isOffBottom = drop.y > window.innerHeight;
        const isOffRight = wind > 0 && drop.x > window.innerWidth;
        const isOffLeft = wind < 0 && drop.x < 0;

        if (isOffBottom || isOffRight || isOffLeft) {
          drop.y = -drop.length;
          
          // If wind is blowing right, spawn drops more to the left so they fly in
          if (wind > 0) {
            drop.x = Math.random() * window.innerWidth - 100;
          } else if (wind < 0) {
            drop.x = Math.random() * window.innerWidth + 100;
          } else {
            drop.x = Math.random() * window.innerWidth;
          }
          
          drop.speed = (4 + Math.random() * 4) * speed_multiplier;
        }
      });

      ctx.stroke();
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
      // Removed the 'pixelated' CSS property to ensure smooth rendering
    />
  );
};

export default Rain;