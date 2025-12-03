import { useRef, useEffect } from "react";
import Snowflake from "../../assets/sprites/snowflake.png";

const Snow = () => {
  // Number of snowflakes we want on the screen
  const num_snowflakes = 50;
  // Create ref to access the DOM element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = Snowflake;

    const snowflakes = [];
    for (let i = 0; i < num_snowflakes; i++) {
      snowflakes[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        size: 7 + Math.random() * 4
      };
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        ctx.drawImage(image, flake.x, flake.y, flake.size, flake.size);
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
          flake.y = -20;
          flake.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animate);
    };

    image.onload = () => {
      animate();
    };

    // CLEANUP FUNCTION (The Fix)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
    >
      Snow effect.
    </canvas>
  );
};

export default Snow;
