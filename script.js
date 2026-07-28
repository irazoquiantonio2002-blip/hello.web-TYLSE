(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  document.body.classList.add("loading");

  const loader = $("#loader");
  const nav = $("#nav");
  const ham = $("#ham");
  const mob = $("#mob");

  const hideLoader = () => {
    setTimeout(() => {
      loader?.classList.add("done");
      document.body.classList.remove("loading");
      $$(".rev").slice(0, 8).forEach((el) => el.classList.add("in"));
    }, 1150);
  };

  window.addEventListener("load", hideLoader);
  setTimeout(hideLoader, 2600);

  const setNav = () => {
    nav?.classList.toggle("scrolled", window.scrollY > 24);
  };

  setNav();
  window.addEventListener("scroll", setNav, { passive: true });

  ham?.addEventListener("click", () => {
    const open = ham.classList.toggle("active");
    mob?.classList.toggle("open", open);
    ham.setAttribute("aria-expanded", String(open));
  });

  $$("#mob a").forEach((link) => {
    link.addEventListener("click", () => {
      ham?.classList.remove("active");
      mob?.classList.remove("open");
      ham?.setAttribute("aria-expanded", "false");
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

  $$(".rev").forEach((el) => revealObserver.observe(el));

  const countTo = (el) => {
    if (el.dataset.counted) return;
    const target = Number(el.dataset.count || el.dataset.heroCount || 0);
    if (!target) return;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    el.dataset.counted = "true";

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countTo(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  $$("[data-count], [data-hero-count]").forEach((el) => countObserver.observe(el));

  const words = [
    "techos curvos",
    "laminados sin estructura",
    "naves industriales",
    "estructuras metálicas",
    "renta de grúa"
  ];
  const twText = $("#twText");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    if (!twText) return;
    const word = words[wordIndex];
    twText.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
      setTimeout(type, 70);
      return;
    }

    if (!deleting && charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1250);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 36);
      return;
    }

    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 180);
  };
  type();

  const makeParticles = (canvas, options = {}) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    const count = options.count || 56;
    const color = options.color || "rgba(155, 231, 185, .72)";

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: Math.max(18, Math.floor((width / 1280) * count)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .28,
        vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.8 + .6
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.strokeStyle = "rgba(155, 231, 185, .16)";
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.globalAlpha = 1 - dist / 130;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
  };

  makeParticles($("#pcanvas"), { count: 72 });
  makeParticles($("#pcanvasWhy"), { count: 50 });
  makeParticles($("#pcanvasNumbers"), { count: 38 });
  makeParticles($("#pcanvasGaleria"), { count: 48 });

  const heroBg = $(".hero-bg");
  const whyBg = $(".why-bg");
  const numbersBg = $(".numbers-bg");
  const parallax = () => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    const y = window.scrollY;
    if (heroBg) heroBg.style.transform = `scale(1.04) translateY(${y * 0.08}px)`;
    if (whyBg) whyBg.style.transform = `scale(1.04) translateY(${(y - whyBg.parentElement.offsetTop) * 0.05}px)`;
    if (numbersBg) numbersBg.style.transform = `scale(1.04) translateY(${(y - numbersBg.parentElement.offsetTop) * 0.05}px)`;
  };
  window.addEventListener("scroll", parallax, { passive: true });

  $("#cForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = [
      "Hola TYLSE, quiero solicitar una cotización.",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Servicio: ${data.get("servicio")}`,
      `Mensaje: ${data.get("mensaje") || "Sin mensaje adicional"}`
    ].join("\n");

    window.open(`https://wa.me/522225234901?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
})();
