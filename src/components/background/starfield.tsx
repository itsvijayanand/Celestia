"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; opacity: number; speedX: number; speedY: number; twinkleSpeed: number; twinkleDir: number }[] = [];
    let shootingStar: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean; delay: number } = {
      x: 0, y: 0, length: 0, speed: 0, opacity: 0, active: false, delay: 5000
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 6000); 
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.5,
          opacity: Math.random() * 0.06 + 0.02, 
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          twinkleSpeed: Math.random() * 0.003 + 0.001,
          twinkleDir: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw regular stars (dark blue to contrast ivory background)
      ctx.fillStyle = "#1F2D5A"; 
      
      stars.forEach(star => {
        // Twinkle
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 0.1) star.twinkleDir = -1;
        if (star.opacity <= 0.02) star.twinkleDir = 1;

        // Drift
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.globalAlpha = Math.max(0, star.opacity);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting star logic
      if (!shootingStar.active) {
        shootingStar.delay -= 16; 
        if (shootingStar.delay <= 0) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * canvas.width + canvas.width * 0.2; // Start more to the right
          shootingStar.y = 0;
          shootingStar.length = Math.random() * 80 + 60;
          shootingStar.speed = Math.random() * 10 + 15;
          shootingStar.opacity = 1;
        }
      } else {
        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed;
        shootingStar.opacity -= 0.012;

        if (shootingStar.opacity <= 0) {
          shootingStar.active = false;
          shootingStar.delay = Math.random() * 20000 + 10000; // 10-30s
        } else {
          ctx.globalAlpha = Math.max(0, shootingStar.opacity * 0.4);
          ctx.strokeStyle = "#B89BEA";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(shootingStar.x + shootingStar.length, shootingStar.y - shootingStar.length);
          ctx.stroke();
        }
      }
      
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(drawStars);
    };

    window.addEventListener("resize", resize);
    resize();
    drawStars();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute top-[30%] -right-[15%] w-[50%] h-[70%] bg-secondary/30 blur-[140px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '13s', animationDelay: '2s' }} />
        <div className="absolute -bottom-[20%] left-[10%] w-[70%] h-[60%] bg-primary/10 blur-[130px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '11s', animationDelay: '1s' }} />
      </div>
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
