import { useRef, useEffect } from "react";

const Rain = () => {
  // Create ref to access the DOM element
  const canvasRef = useRef(null);

  const num_drops = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";    
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    const rain_drops = [];
    for (let i = 0; i < num_drops; i++) {
      rain_drops[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 3 + Math.random() * 3,
        length: 15 + Math.random() * 2,
      };
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();

      rain_drops.forEach((drop) => {
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
      ctx.stroke();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
    >
      Rain effect.
    </canvas>
  );
};

export default Rain;
