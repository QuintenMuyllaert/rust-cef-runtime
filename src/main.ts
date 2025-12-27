window.addEventListener("DOMContentLoaded", () => {
  const fps = document.getElementById("fps") as HTMLElement;

  const boxCount = 100; // more boxes, more fun
  const boxes: {
    el: HTMLElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
  }[] = [];

  const boxSize = 120;

  // Create boxes
  for (let i = 0; i < boxCount; i++) {
    const el = document.createElement("div");
    el.className = "box";
    el.style.width = `${boxSize}px`;
    el.style.height = `${boxSize}px`;
    el.style.position = "absolute";
    el.style.borderRadius = "16px";
    el.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
    document.body.appendChild(el);

    boxes.push({
      el,
      x: Math.random() * (window.innerWidth - boxSize),
      y: Math.random() * (window.innerHeight - boxSize),
      vx: Math.random() * 6 - 3, // speed -3 to 3
      vy: Math.random() * 6 - 3,
    });
  }

  let lastFps = performance.now();
  let frames = 0;

  function animate(time: number) {
    frames++;

    if (time - lastFps >= 1000) {
      fps.textContent = `FPS: ${frames}`;
      frames = 0;
      lastFps = time;
    }

    for (const box of boxes) {
      box.x += box.vx;
      box.y += box.vy;

      // Bounce off edges
      if (box.x <= 0 || box.x + boxSize >= window.innerWidth) box.vx *= -1;
      if (box.y <= 0 || box.y + boxSize >= window.innerHeight) box.vy *= -1;

      box.el.style.transform = `translate(${box.x}px, ${box.y}px)`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
