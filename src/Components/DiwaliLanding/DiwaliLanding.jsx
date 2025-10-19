import { useEffect, useRef } from 'react';
import './DiwaliLanding.css';
import diyaImage from '../../assets/diya.jpg' ;

export default function DiwaliLanding({ onEnter }) {
  const canvasRef = useRef(null);
  const fireworks = useRef([]);
  const rockets = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize(); // initial resize
    window.addEventListener('resize', resize); // handle window resize

    const colors = ['#FFD700', '#FF4500', '#FF69B4', '#1E90FF', '#32CD32'];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
        this.color = color;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.alpha = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.015;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Rocket {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.speedY = Math.random() * 2 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.exploded = false;
      }
      update() {
        this.y -= this.speedY;
        if (this.y < canvas.height / 2 && !this.exploded) {
          this.explode();
          this.exploded = true;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      explode() {
        for (let i = 0; i < 100; i++) {
          fireworks.current.push(
            new Particle(this.x, this.y, colors[Math.floor(Math.random() * colors.length)])
          );
        }
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(13,13,13,0.25)'; // trailing effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.02) rockets.current.push(new Rocket());

      rockets.current.forEach((r, i) => {
        r.update();
        r.draw();
        if (r.exploded) rockets.current.splice(i, 1);
      });

      fireworks.current.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) fireworks.current.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="landing" onClick={onEnter}>
      <canvas ref={canvasRef} className="fireworks-canvas"></canvas>

      <div className="overlay">
        <h1>
         Let this Diwali light up your world with joy and opportunities.
        </h1>
        <p><span style={{ color: '#FF4500' }}>Brand Karo</span> team wishes you a khushiya waali Diwali</p>
        {/* <p>Celebrate the festival of lights with joy and happiness!</p> */}
        <img src={diyaImage} alt="Diya" className="diya-image" />
        <img src={diyaImage} alt="Diya" className="diya-image" />
        <img src={diyaImage} alt="Diya" className="diya-image" />
      </div>
    </div>
  );
}
