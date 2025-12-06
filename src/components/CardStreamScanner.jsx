"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './CardStreamScanner.css';

export const CardStreamScanner = ({ 
  cardImages = [{
    src: "/card1.png"
  },{
    src: "/card1.png"
  },
], 
  cardCount = 500 
}) => {
  const containerRef = useRef(null);
  const cardLineRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const scannerCanvasRef = useRef(null);
  const speedValueRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !cardLineRef.current || !particleCanvasRef.current || !scannerCanvasRef.current) return;

    // Initialize all systems
    const cardStream = new CardStreamController(
      containerRef.current,
      cardLineRef.current,
      speedValueRef.current,
      cardImages,
      cardCount
    );
    
    const particleSystem = new ParticleSystem(particleCanvasRef.current);
    const scanner = new ParticleScanner(scannerCanvasRef.current);

    // Set up scanner callback
    window.setScannerScanning = (active) => {
      scanner.setScanningActive(active);
    };

    return () => {
      cardStream.destroy();
      particleSystem.destroy();
      scanner.destroy();
      delete window.setScannerScanning;
    };
  }, [cardImages, cardCount]);

  return (
    <div className="card-scanner-container" ref={containerRef}>
      <canvas ref={particleCanvasRef} id="particleCanvas" />
      <canvas ref={scannerCanvasRef} id="scannerCanvas" />
      
      <div className="scanner" />
      
      <div className="card-stream">
        <div className="card-line" ref={cardLineRef} />
      </div>
      
      <div className="speed-indicator">
        <span ref={speedValueRef} id="speedValue"></span>
      </div>
    </div>
  );
};

// Card Stream Controller Class
class CardStreamController {
  constructor(
    container,
    cardLine,
    speedIndicator,
    cardImages,
    cardCount
  ) {
    this.container = container;
    this.cardLine = cardLine;
    this.speedIndicator = speedIndicator;
    this.cardImages = cardImages;
    
    this.position = 0;
    this.velocity = 120;
    this.direction = -1;
    this.isAnimating = true;
    this.isDragging = false;
    this.lastTime = 0;
    this.lastMouseX = 0;
    this.mouseVelocity = 0;
    this.friction = 0.95;
    this.minVelocity = 30;
    this.containerWidth = 0;
    this.cardLineWidth = 0;
    this.animationId = null;
    this.updateInterval = null;

    this.init(cardCount);
  }

  init(cardCount) {
    this.populateCardLine(cardCount);
    this.calculateDimensions();
    this.setupEventListeners();
    this.updateCardPosition();
    this.animate();
    this.startPeriodicUpdates();
  }

  calculateDimensions() {
    this.containerWidth = this.container.offsetWidth;
    const cardWidth = 400;
    const cardGap = 60;
    const cardCountVal = this.cardLine.children.length;
    this.cardLineWidth = (cardWidth + cardGap) * cardCountVal;
  }

  setupEventListeners() {
    const handleMouseDown = (e) => this.startDrag(e);
    const handleMouseMove = (e) => this.onDrag(e);
    const handleMouseUp = () => this.endDrag();
    const handleTouchStart = (e) => this.startDrag(e.touches[0]);
    const handleTouchMove = (e) => this.onDrag(e.touches[0]);
    const handleTouchEnd = () => this.endDrag();
    const handleWheel = (e) => this.onWheel(e);
    const handleResize = () => this.calculateDimensions();

    this.cardLine.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    this.cardLine.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    this.cardLine.addEventListener('wheel', handleWheel);
    window.addEventListener('resize', handleResize);

    // Store for cleanup
    this.listeners = {
      handleMouseDown, handleMouseMove, handleMouseUp,
      handleTouchStart, handleTouchMove, handleTouchEnd,
      handleWheel, handleResize
    };
  }

  startDrag(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    this.isDragging = true;
    this.isAnimating = false;
    this.lastMouseX = e.clientX;
    this.mouseVelocity = 0;

    const transform = window.getComputedStyle(this.cardLine).transform;
    if (transform !== 'none') {
      const matrix = new DOMMatrix(transform);
      this.position = matrix.m41;
    }

    this.cardLine.classList.add('dragging');
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  }

  onDrag(e) {
    if (!this.isDragging) return;
    if (e.preventDefault) {
      e.preventDefault();
    }

    const deltaX = e.clientX - this.lastMouseX;
    this.position += deltaX;
    this.mouseVelocity = deltaX * 60;
    this.lastMouseX = e.clientX;

    this.cardLine.style.transform = `translateX(${this.position}px)`;
    this.updateCardClipping();
  }

  endDrag() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.cardLine.classList.remove('dragging');

    if (Math.abs(this.mouseVelocity) > this.minVelocity) {
      this.velocity = Math.abs(this.mouseVelocity);
      this.direction = this.mouseVelocity > 0 ? 1 : -1;
    } else {
      this.velocity = 120;
    }

    this.isAnimating = true;
    this.updateSpeedIndicator();

    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  }

  animate = () => {
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    if (this.isAnimating && !this.isDragging) {
      if (this.velocity > this.minVelocity) {
        this.velocity *= this.friction;
      } else {
        this.velocity = Math.max(this.minVelocity, this.velocity);
      }

      this.position += this.velocity * this.direction * deltaTime;
      this.updateCardPosition();
      this.updateSpeedIndicator();
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  updateCardPosition() {
    const containerWidth = this.containerWidth;
    const cardLineWidth = this.cardLineWidth;

    if (this.position < -cardLineWidth) {
      this.position = containerWidth;
    } else if (this.position > containerWidth) {
      this.position = -cardLineWidth;
    }

    this.cardLine.style.transform = `translateX(${this.position}px)`;
    this.updateCardClipping();
  }

  updateSpeedIndicator() {
    this.speedIndicator.textContent = Math.round(this.velocity).toString();
  }

  onWheel(e) {
    e.preventDefault();
    const scrollSpeed = 20;
    const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
    this.position += delta;
    this.updateCardPosition();
    this.updateCardClipping();
  }

  generateCode(width, height) {
    const codeChars = "asanpayewallet";
    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const pick = (arr) => arr[randInt(0, arr.length - 1)];

    const library = [
      "A S A N P A Y E W A L L E T",
      "| A S A N P A Y E W A L L E T",
      "| A S A N P A Y E W A L L E T",
      "function clamp(A, S, A) { return Math.max(A, Math.min(A, N)); }",
      "function lerp(E, W, A) { return E + (W - E) * T; }",
    ];

    let flow = library.join(' ');
    const totalChars = width * height;
    
    while (flow.length < totalChars + width) {
      flow += ' ' + pick(library.join(' '));
    }

    let out = '';
    let offset = 0;
    for (let row = 0; row < height; row++) {
      let line = flow.slice(offset, offset + width);
      if (line.length < width) line = line + ' '.repeat(width - line.length);
      out += line + (row < height - 1 ? '\n' : '');
      offset += width;
    }
    return out;
  }

  createCardWrapper(index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';

    const normalCard = document.createElement('div');
    normalCard.className = 'card card-normal';

    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    
    if (this.cardImages.length > 0) {
      cardImage.src = this.cardImages[index % this.cardImages.length].src;
      console.log(cardImage.src, "this is source of card image")
    } else {
      // Create gradient fallback
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 180;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 400, 250);
      gradient.addColorStop(0, '#C6DA89');
      gradient.addColorStop(1, '#20958B');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 250);
      cardImage.src = canvas.toDataURL();
    }

    normalCard.appendChild(cardImage);

    const asciiCard = document.createElement('div');
    asciiCard.className = 'card card-ascii';

    const asciiContent = document.createElement('div');
    asciiContent.className = 'ascii-content';
    asciiContent.style.fontSize = '11px';
    asciiContent.style.lineHeight = '13px';
    asciiContent.textContent = this.generateCode(66, 19);

    asciiCard.appendChild(asciiContent);
    wrapper.appendChild(normalCard);
    wrapper.appendChild(asciiCard);

    return wrapper;
  }

  updateCardClipping() {
    const scannerX = window.innerWidth / 2;
    const scannerWidth = 8;
    const scannerLeft = scannerX - scannerWidth / 2;
    const scannerRight = scannerX + scannerWidth / 2;
    let anyScanningActive = false;

    document.querySelectorAll('.card-wrapper').forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const cardLeft = rect.left;
      const cardRight = rect.right;
      const cardWidth = rect.width;

      const normalCard = wrapper.querySelector('.card-normal');
      const asciiCard = wrapper.querySelector('.card-ascii');

      if (cardLeft < scannerRight && cardRight > scannerLeft) {
        anyScanningActive = true;
        const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
        const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);

        const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
        const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

        normalCard.style.setProperty('--clip-right', `${normalClipRight}%`);
        asciiCard.style.setProperty('--clip-left', `${asciiClipLeft}%`);
      } else {
        if (cardRight < scannerLeft) {
          normalCard.style.setProperty('--clip-right', '100%');
          asciiCard.style.setProperty('--clip-left', '100%');
        } else if (cardLeft > scannerRight) {
          normalCard.style.setProperty('--clip-right', '0%');
          asciiCard.style.setProperty('--clip-left', '0%');
        }
      }
    });

    if (window.setScannerScanning) {
      window.setScannerScanning(anyScanningActive);
    }
  }

  populateCardLine(cardCount) {
    this.cardLine.innerHTML = '';
    for (let i = 0; i < cardCount; i++) {
      const cardWrapper = this.createCardWrapper(i);
      this.cardLine.appendChild(cardWrapper);
    }
  }

  startPeriodicUpdates() {
    this.updateInterval = window.setInterval(() => {
      document.querySelectorAll('.ascii-content').forEach((content) => {
        if (Math.random() < 0.15) {
          content.textContent = this.generateCode(66, 19);
        }
      });
    }, 200);

    const updateClipping = () => {
      this.updateCardClipping();
      requestAnimationFrame(updateClipping);
    };
    updateClipping();
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.updateInterval) clearInterval(this.updateInterval);
    
    const listeners = this.listeners;
    if (listeners) {
      this.cardLine.removeEventListener('mousedown', listeners.handleMouseDown);
      document.removeEventListener('mousemove', listeners.handleMouseMove);
      document.removeEventListener('mouseup', listeners.handleMouseUp);
      this.cardLine.removeEventListener('touchstart', listeners.handleTouchStart);
      document.removeEventListener('touchmove', listeners.handleTouchMove);
      document.removeEventListener('touchend', listeners.handleTouchEnd);
      this.cardLine.removeEventListener('wheel', listeners.handleWheel);
      window.removeEventListener('resize', listeners.handleResize);
    }
  }
}

// Particle System using Three.js
class ParticleSystem {
  constructor(canvas) {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      125,
      -125,
      1,
      1000
    );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, 250);
    this.renderer.setClearColor(0x000000, 0);

    this.particleCount = 400;
    this.particles = null;
    this.velocities = new Float32Array(this.particleCount);
    this.animationId = null;

    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => this.onWindowResize());
  }

  createParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const alphas = new Float32Array(this.particleCount);

    // Create gradient texture
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    const half = canvas.width / 2;
    const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
    gradient.addColorStop(0.025, '#fff');
    gradient.addColorStop(0.1, 'hsl(217, 61%, 33%)');
    gradient.addColorStop(0.25, 'hsl(217, 64%, 6%)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(half, half, half, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    for (let i = 0; i < this.particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
      positions[i * 3 + 2] = 0;

      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;

      const orbitRadius = Math.random() * 200 + 100;
      sizes[i] = (Math.random() * (orbitRadius - 60) + 60) / 8;
      this.velocities[i] = Math.random() * 60 + 30;
      alphas[i] = (Math.random() * 8 + 2) / 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: texture },
        size: { value: 15.0 },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float size;
        
        void main() {
          vAlpha = alpha;
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vAlpha;
        varying vec3 vColor;
        
        void main() {
          gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      const alphas = this.particles.geometry.attributes.alpha.array;
      const time = Date.now() * 0.001;

      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] += this.velocities[i] * 0.016;

        if (positions[i * 3] > window.innerWidth / 2 + 100) {
          positions[i * 3] = -window.innerWidth / 2 - 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
        }

        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;

        const twinkle = Math.floor(Math.random() * 10);
        if (twinkle === 1 && alphas[i] > 0) {
          alphas[i] -= 0.05;
        } else if (twinkle === 2 && alphas[i] < 1) {
          alphas[i] += 0.05;
        }
        alphas[i] = Math.max(0, Math.min(1, alphas[i]));
      }

      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.geometry.attributes.alpha.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  };

  onWindowResize() {
    this.camera.left = -window.innerWidth / 2;
    this.camera.right = window.innerWidth / 2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, 250);
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer) this.renderer.dispose();
    if (this.particles) {
      this.scene.remove(this.particles);
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}

// Particle Scanner
class ParticleScanner {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.animationId = null;
    this.w = window.innerWidth;
    this.h = 300;
    this.particles = [];
    this.count = 0;
    this.maxParticles = 800;
    this.intensity = 0.8;
    this.lightBarX = this.w / 2;
    this.lightBarWidth = 3;
    this.fadeZone = 60;
    this.scanningActive = false;
    this.currentGlowIntensity = 1;

    this.gradientCanvas = document.createElement('canvas');
    this.gradientCtx = this.gradientCanvas.getContext('2d');

    this.setupCanvas();
    this.createGradientCache();
    this.initParticles();
    this.animate();

    window.addEventListener('resize', () => this.onResize());
  }

  setupCanvas() {
    this.canvas.width = this.w;
    this.canvas.height = this.h;
  }

  onResize() {
    this.w = window.innerWidth;
    this.lightBarX = this.w / 2;
    this.setupCanvas();
  }

  createGradientCache() {
    this.gradientCanvas.width = 16;
    this.gradientCanvas.height = 16;
    const half = this.gradientCanvas.width / 2;
    const gradient = this.gradientCtx.createRadialGradient(half, half, 0, half, half, half);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(196, 181, 253, 0.8)');
    gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.4)');
    gradient.addColorStop(1, 'transparent');
    this.gradientCtx.fillStyle = gradient;
    this.gradientCtx.beginPath();
    this.gradientCtx.arc(half, half, half, 0, Math.PI * 2);
    this.gradientCtx.fill();
  }

  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  createParticle() {
    return {
      x: this.lightBarX + this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2),
      y: this.randomFloat(0, this.h),
      vx: this.randomFloat(0.2, 1.0),
      vy: this.randomFloat(-0.15, 0.15),
      radius: this.randomFloat(0.4, 1),
      alpha: this.randomFloat(0.6, 1),
      decay: this.randomFloat(0.005, 0.025),
      originalAlpha: 0,
      life: 1.0,
      time: 0,
    };
  }

  initParticles() {
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      this.count++;
      this.particles[this.count] = particle;
    }
  }

  updateParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.time++;
    particle.alpha = particle.originalAlpha * particle.life;
    particle.life -= particle.decay;

    if (particle.x > this.w + 10 || particle.life <= 0) {
      particle.x = this.lightBarX + this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2);
      particle.y = this.randomFloat(0, this.h);
      particle.life = 1.0;
      particle.time = 0;
    }
  }

  drawParticle(particle) {
    if (particle.life <= 0) return;

    let fadeAlpha = 1;
    if (particle.y < this.fadeZone) {
      fadeAlpha = particle.y / this.fadeZone;
    } else if (particle.y > this.h - this.fadeZone) {
      fadeAlpha = (this.h - particle.y) / this.fadeZone;
    }

    this.ctx.globalAlpha = particle.alpha * fadeAlpha;
    this.ctx.drawImage(
      this.gradientCanvas,
      particle.x - particle.radius,
      particle.y - particle.radius,
      particle.radius * 2,
      particle.radius * 2
    );
  }

  drawLightBar() {
    // Create vertical fade gradient
    const verticalGradient = this.ctx.createLinearGradient(0, 0, 0, this.h);
    verticalGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    verticalGradient.addColorStop(this.fadeZone / this.h, 'rgba(255, 255, 255, 1)');
    verticalGradient.addColorStop(1 - this.fadeZone / this.h, 'rgba(255, 255, 255, 1)');
    verticalGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this.ctx.globalCompositeOperation = 'lighter';

    const targetGlowIntensity = this.scanningActive ? 3.5 : 1;
    if (!this.currentGlowIntensity) this.currentGlowIntensity = 1;
    
    this.currentGlowIntensity += (targetGlowIntensity - this.currentGlowIntensity) * 0.05;

    const glowIntensity = this.currentGlowIntensity;
    const lineWidth = this.lightBarWidth;
    const glow1Alpha = this.scanningActive ? 1.0 : 0.8;
    const glow2Alpha = this.scanningActive ? 0.8 : 0.6;
    const glow3Alpha = this.scanningActive ? 0.6 : 0.4;

    // Core white light
    const coreGradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth / 2, 0,
      this.lightBarX + lineWidth / 2, 0
    );
    coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    coreGradient.addColorStop(0.3, `rgba(255, 255, 255, ${0.9 * glowIntensity})`);
    coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${1 * glowIntensity})`);
    coreGradient.addColorStop(0.7, `rgba(255, 255, 255, ${0.9 * glowIntensity})`);
    coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = coreGradient;
    
    const radius = 15;
    this.ctx.beginPath();
    this.ctx.roundRect(this.lightBarX - lineWidth / 2, 0, lineWidth, this.h, radius);
    this.ctx.fill();

    // First glow layer (purple/teal)
    const glow1Gradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth * 2, 0,
      this.lightBarX + lineWidth * 2, 0
    );
    glow1Gradient.addColorStop(0, 'rgba(139, 92, 246, 0)');
    glow1Gradient.addColorStop(0.5, `rgba(196, 181, 253, ${0.8 * glowIntensity})`);
    glow1Gradient.addColorStop(1, 'rgba(32, 152, 142, 0)');

    this.ctx.globalAlpha = glow1Alpha;
    this.ctx.fillStyle = glow1Gradient;

    const glow1Radius = 25;
    this.ctx.beginPath();
    this.ctx.roundRect(this.lightBarX - lineWidth * 2, 0, lineWidth * 4, this.h, glow1Radius);
    this.ctx.fill();

    // Second glow layer (teal)
    const glow2Gradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth * 4, 0,
      this.lightBarX + lineWidth * 4, 0
    );
    glow2Gradient.addColorStop(0, 'rgba(32, 152, 142, 0)');
    glow2Gradient.addColorStop(0.5, `rgba(32, 152, 142, ${0.4 * glowIntensity})`);
    glow2Gradient.addColorStop(1, 'rgba(32, 152, 142, 0)');

    this.ctx.globalAlpha = glow2Alpha;
    this.ctx.fillStyle = glow2Gradient;

    const glow2Radius = 35;
    this.ctx.beginPath();
    this.ctx.roundRect(this.lightBarX - lineWidth * 4, 0, lineWidth * 8, this.h, glow2Radius);
    this.ctx.fill();

    // Third glow layer (only when scanning)
    if (this.scanningActive) {
      const glow3Gradient = this.ctx.createLinearGradient(
        this.lightBarX - lineWidth * 8, 0,
        this.lightBarX + lineWidth * 8, 0
      );
      glow3Gradient.addColorStop(0, 'rgba(32, 152, 142, 0)');
      glow3Gradient.addColorStop(0.5, 'rgba(32, 152, 142, 0.2)');
      glow3Gradient.addColorStop(1, 'rgba(32, 152, 142, 0)');

      this.ctx.globalAlpha = glow3Alpha;
      this.ctx.fillStyle = glow3Gradient;

      const glow3Radius = 45;
      this.ctx.beginPath();
      this.ctx.roundRect(this.lightBarX - lineWidth * 8, 0, lineWidth * 16, this.h, glow3Radius);
      this.ctx.fill();
    }

    // Apply vertical fade mask
    this.ctx.globalCompositeOperation = 'destination-in';
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = verticalGradient;
    this.ctx.fillRect(0, 0, this.w, this.h);
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.clearRect(0, 0, this.w, this.h);

    this.drawLightBar();

    this.ctx.globalCompositeOperation = 'lighter';
    for (let i = 1; i <= this.count; i++) {
      if (this.particles[i]) {
        this.updateParticle(this.particles[i]);
        this.drawParticle(this.particles[i]);
      }
    }

    if (Math.random() < this.intensity && this.count < this.maxParticles) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      this.count++;
      this.particles[this.count] = particle;
    }
  };

  setScanningActive(active) {
    this.scanningActive = active;
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}
