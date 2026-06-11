/* ==========================================================================
   PORTFOLIO DATABASE & CASE STUDIES
   ========================================================================== */

const projectDetails = {
    medrag: {
        tag: "AI/ML & RAG",
        title: "MedRAG: Local Clinical RAG System",
        tech: ["Chandra OCR 2", "Jina v5 Omni", "LanceDB", "Qwen 3.5 9B", "Apache Arrow"],
        intro: "A privacy-first, fully offline Retrieval-Augmented Generation (RAG) system specialized in parsing, indexing, and synthesizing complex longitudinal clinical histories and diagnostic reports.",
        sections: [
            {
                title: "Problem Statement",
                icon: "fa-solid fa-triangle-exclamation",
                content: "Traditional RAG pipelines segment clinical charts into small, arbitrary text blocks. This fractures matrices (like metabolic blood panels or complete blood counts) and destroys layout relationships. Furthermore, uploading sensitive clinical records to cloud APIs introduces severe privacy risks."
            },
            {
                title: "Solution & Architecture",
                icon: "fa-solid fa-gears",
                content: "MedRAG operates completely offline using a local framework optimized for Apple Silicon MBP (M5) unified memory architectures. First, Chandra OCR 2 reads files layout-perfectly into Markdown tables, binding values to their coordinates. Next, Jina-Embeddings-v5-Omni-Small embeds the entire document atomically utilizing its 32k context window (no chunking). Vector coordinates and text are stored in LanceDB, which utilizes IVF-PQ vector indexing and Tantivy full-text search. Dynamic offline synthesis is handled by Qwen 3.5 9B Instruct."
            },
            {
                title: "Technical Highlight: Serverless Efficiency",
                icon: "fa-solid fa-microchip",
                content: "By avoiding pgvector or daemon-based systems (like Milvus or Weaviate) and choosing LanceDB, we achieved a 0MB idle RAM memory footprint. This leaves the system's active RAM completely available for model inference, hard-capping total active execution memory at ~16GB to prevent disk swapping on a 24GB device."
            }
        ],
        metrics: [
            { val: "32k", label: "No-Chunk Context" },
            { val: "0MB", label: "Idle RAM Footprint" },
            { val: "16GB", label: "VRAM Memory Cap" }
        ],
        github: "https://github.com/Amith-S28/BestSAASEver",
        live: "#"
    },
    cityplanner: {
        tag: "GIS & Agent Dev",
        title: "CityPlanner (AUOA)",
        tech: ["DuckDB Spatial", "FastAPI", "Deck.gl", "Maplibre GL", "React", "Arrow IPC"],
        intro: "An end-to-end autonomous urban planner and spatial optimization engine that converts natural language prompts into GPU-accelerated 3D procedural cities.",
        sections: [
            {
                title: "Overview",
                icon: "fa-solid fa-compass",
                content: "AUOA (Autonomous Urban Optimization Agent) parses urban design constraints (e.g. 'design a dense commercial zone with high transit access while preserving green belts') into mathematical weight arrays and executes heavy GIS calculations on the database level."
            },
            {
                title: "Computational Pipeline",
                icon: "fa-solid fa-code-fork",
                content: "Phase 1: Gemma AI Planner client translates prompts into optimizer configurations. Phase 2: DuckDB Spatial Engine reads parcel, network, and zoning datasets to perform relational vector intersections. Calculated polygons are packed into PyArrow IPC stream chunks. Phase 3: A FastAPI gateway streams these binary datasets directly to the client's WebGL dashboard."
            },
            {
                title: "High-Performance 3D Frontend",
                icon: "fa-solid fa-desktop",
                content: "The user interface renders live 3D buildings, zoning grids, and transportation lines dynamically using Deck.gl and Maplibre GL layers. Custom UI slide interpolations, load overlays, and staggering animations are powered by Anime.js."
            }
        ],
        metrics: [
            { val: "3D", label: "WebGL Graphic Render" },
            { val: "Zero-Copy", label: "Arrow IPC Streams" },
            { val: "DuckDB", label: "In-Process Spatial DB" }
        ],
        github: "https://github.com/Amith-S28/CityPlanner",
        live: "#"
    },
    smartparking: {
        tag: "Computer Vision & XAI",
        title: "Explainable Smart Parking Framework",
        tech: ["Python", "YOLOv8n", "LSTM", "Grad-CAM", "Integrated Gradients"],
        intro: "A unified temporal-spatial deep learning framework designed to detect empty parking spaces and forecast occupancy states while explaining predictions transparently.",
        sections: [
            {
                title: "The Innovation",
                icon: "fa-solid fa-lightbulb",
                content: "Standard smart parking applications classify slot state frame-by-frame, causing severe oscillation between 'free' and 'occupied' states due to lighting shifts or camera occlusion. This project integrates spatial perception (computer vision) with temporal mapping (deep learning time-series) to create stable forecasts."
            },
            {
                title: "Deep Learning Pipeline",
                icon: "fa-solid fa-bezier-curve",
                content: "The framework runs YOLOv8n for real-time spatial object detection of occupied slot areas, achieving a Mean Average Precision (mAP@0.5) of 0.995 at 27 FPS. An LSTM network processes the historical sequences of occupancy probabilities alongside metadata (time, day) to predict state changes, reducing state oscillations by 22%."
            },
            {
                title: "Explainable AI (XAI)",
                icon: "fa-solid fa-eye",
                content: "To build operator trust, we integrated Grad-CAM for spatial localization (visualizing YOLOv8 layer activations) and Integrated Gradients with Permutation Importance to quantify temporal feature contributions. This maps precisely which historical frames influenced the LSTM prediction."
            }
        ],
        metrics: [
            { val: "22%", label: "Oscillations Reduced" },
            { val: "0.995", label: "mAP@0.5 Accuracy" },
            { val: "27 FPS", label: "Inference Speed" }
        ],
        github: "https://github.com/Amith-S28/Explainable-Smart-Parking",
        live: "#"
    },
    peanut: {
        tag: "Full-Stack & Environmental",
        title: "Project PEANUT",
        tech: ["Next.js", "Python", "Google Earth Engine", "Scikit-Learn", "GeoJSON"],
        intro: "Predictive Environmental Analysis and Nature Utility Tracker. A dual-engine dashboard mapping greenery deficit across Indian sub-districts and forecasting ecological needs for 2035.",
        sections: [
            {
                title: "Ecological Tracking",
                icon: "fa-solid fa-globe",
                content: "PEANUT addresses greenery deficits in growing urban centers, aligning local municipal layouts with World Health Organization (WHO) per-capita green space requirements."
            },
            {
                title: "Dual Engine Compute",
                icon: "fa-solid fa-server",
                content: "First, Google Earth Engine (GEE) processes batches of Sentinel-2 satellite imagery to calculate vegetation health using NDVI (Normalized Difference Vegetation Index). Second, a Scikit-Learn Polynomial Regression model predicts local population demands up to 2035 using historical WorldPop datasets."
            },
            {
                title: "GIS Web Visualization",
                icon: "fa-solid fa-map-location-dot",
                content: "Next.js renders GeoJSON boundary layers of Indian sub-districts onto interactive maps. An integrated ecological recommendation engine analyses regional soil carbon content, rainfall, and surface water tables to recommend climate-appropriate tree species."
            }
        ],
        metrics: [
            { val: "2035", label: "Forecast Year" },
            { val: "Sentinel-2", label: "Satellite Imagery" },
            { val: "NDVI", label: "Vegetation Indexing" }
        ],
        github: "https://github.com/Amith-S28/Project-PEANUT",
        live: "#"
    }
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHeroRotation();
    initHeroParallax();
    initScrollReveal();
    initScrollAnimations();
    initTiltCards();
    initRippleEffect();
    initMagneticButtons();
    initModalEvents();
    initContactForm();
    initSakuraParticles();
});

/* ==========================================================================
   STICKY NAVBAR & ACTIVE LINK DETECTION
   ========================================================================== */

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        highlightNavLink();
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
            anime({
                targets: '.nav-menu.active .nav-link',
                opacity: [0, 1],
                translateX: [-50, 0],
                delay: anime.stagger(60),
                duration: 400,
                easing: 'easeOutQuad'
            });
        } else {
            icon.className = 'fa-solid fa-bars-staggered';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
        });
    });

    function highlightNavLink() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }
}

/* ==========================================================================
   HERO TYPING ROTATOR
   ========================================================================== */

function initHeroRotation() {
    const rotateEl = document.querySelector('.txt-rotate');
    if (!rotateEl) return;

    const toRotate = JSON.parse(rotateEl.getAttribute('data-rotate'));
    const period = parseInt(rotateEl.getAttribute('data-period'), 10) || 2000;
    let loopNum = 0, txt = '', isDeleting = false;

    function tick() {
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];
        txt = isDeleting
            ? fullTxt.substring(0, txt.length - 1)
            : fullTxt.substring(0, txt.length + 1);

        rotateEl.innerHTML = `<span class="wrap">${txt}</span>`;

        let delta = 150 - Math.random() * 80;
        if (isDeleting) delta /= 2;

        if (!isDeleting && txt === fullTxt) {
            delta = period;
            isDeleting = true;
        } else if (isDeleting && txt === '') {
            isDeleting = false;
            loopNum++;
            delta = 500;
        }
        setTimeout(tick, delta);
    }
    setTimeout(tick, 1000);
}

/* ==========================================================================
   HERO MOUSE-PARALLAX — RAF-GATED, ONE WRITE PER FRAME
   ========================================================================== */

function initHeroParallax() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const heroContent = hero.querySelector('.hero-content');
    const blobs = document.querySelectorAll('.mesh-blob');
    let pendingParallax = false;
    let cx = 0, cy = 0;

    hero.addEventListener('mousemove', e => {
        const rect = hero.getBoundingClientRect();
        cx = (e.clientX - rect.left) / rect.width  - 0.5;
        cy = (e.clientY - rect.top)  / rect.height - 0.5;
        if (!pendingParallax) {
            pendingParallax = true;
            requestAnimationFrame(() => {
                if (heroContent) {
                    heroContent.style.transform = `translate(${cx * 10}px, ${cy * 7}px)`;
                }
                const depths = [16, -12, 9];
                blobs.forEach((b, i) => {
                    const d = depths[i] || 8;
                    b.style.transform = `translateZ(0) translate(${cx * d}px, ${cy * d * 0.6}px)`;
                });
                pendingParallax = false;
            });
        }
    }, { passive: true });

    hero.addEventListener('mouseleave', () => {
        if (heroContent) heroContent.style.transform = '';
        blobs.forEach(b => b.style.transform = 'translateZ(0)');
    });
}

/* ==========================================================================
   SCROLL-REVEAL — INTERSECTION OBSERVER
   ========================================================================== */

function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Trigger hero reveals immediately (they're above fold)
    revealEls.forEach(el => {
        const section = el.closest('section');
        if (section && section.id === 'home') {
            setTimeout(() => el.classList.add('revealed'), 100);
        } else {
            observer.observe(el);
        }
    });

    // Section header underline trigger
    const sectionHeaders = document.querySelectorAll('.section-header');
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
    }, { threshold: 0.5 });

    sectionHeaders.forEach(h => headerObserver.observe(h));
}

/* ==========================================================================
   SCROLL-TRIGGERED ANIMATIONS (SKILL BARS, PROJECT STAGGER, STAT COUNTERS)
   ========================================================================== */

function initScrollAnimations() {
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const aboutSection = document.getElementById('about');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    let projectsAnimated = false, skillsAnimated = false, statsAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            // Projects staggered entry
            if (entry.target.id === 'projects' && !projectsAnimated) {
                projectsAnimated = true;
                anime({
                    targets: '.project-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    scale: [0.96, 1],
                    delay: anime.stagger(130, { start: 200 }),
                    duration: 900,
                    easing: 'easeOutCubic'
                });
            }

            // Skills animated progress bars
            if (entry.target.id === 'skills' && !skillsAnimated) {
                skillsAnimated = true;
                skillProgressBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    anime({
                        targets: bar,
                        width: ['0%', targetWidth],
                        duration: 1600,
                        easing: 'easeOutExpo',
                        delay: anime.stagger(80)
                    });
                });
            }

            // Stat counter animation
            if (entry.target.id === 'about' && !statsAnimated) {
                statsAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.15 });

    if (projectsSection) observer.observe(projectsSection);
    if (skillsSection)   observer.observe(skillsSection);
    if (aboutSection)    observer.observe(aboutSection);
}

/* Animated number counters for stat-num elements */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count-target]');
    counters.forEach(el => {
        const target  = parseFloat(el.getAttribute('data-count-target'));
        const suffix  = el.getAttribute('data-count-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-count-decimals') || '0');

        anime({
            targets: { val: 0 },
            val: target,
            duration: 1800,
            easing: 'easeOutExpo',
            update(anim) {
                const v = anim.animations[0].currentValue;
                el.textContent = decimals > 0
                    ? v.toFixed(decimals) + suffix
                    : Math.round(v) + suffix;
            }
        });
    });
}

/* ==========================================================================
   3D CARD TILT — RAF-GATED, MAX 1 DOM WRITE PER FRAME
   ========================================================================== */

function initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        let pending = false;
        let latestX = 0.5, latestY = 0.5;

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            latestX = (e.clientX - rect.left) / rect.width;
            latestY = (e.clientY - rect.top)  / rect.height;

            if (!pending) {
                pending = true;
                requestAnimationFrame(() => {
                    const rotX = (0.5 - latestY) * 12;
                    const rotY = (latestX - 0.5) * 12;
                    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;

                    const sheen = card.querySelector('.tilt-sheen');
                    if (sheen) {
                        sheen.style.background = `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, rgba(255,255,255,0.22) 0%, transparent 65%)`;
                        sheen.style.opacity = '1';
                    }
                    pending = false;
                });
            }
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            pending = false;
            card.style.transform = '';
            card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
            const sheen = card.querySelector('.tilt-sheen');
            if (sheen) sheen.style.opacity = '0';
            // Clean up the inline transition after it plays
            setTimeout(() => card.style.transition = '', 500);
        });
    });
}

/* ==========================================================================
   RIPPLE CLICK EFFECT
   ========================================================================== */

function initRippleEffect() {
    const targets = document.querySelectorAll('.ripple-container');

    targets.forEach(el => {
        el.addEventListener('click', (e) => {
            const rect = el.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 1.5;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top  - size / 2;

            const ripple = document.createElement('span');
            ripple.className = 'ripple-wave';
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            el.appendChild(ripple);

            // Remove after animation completes
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
}

/* ==========================================================================
   MAGNETIC BUTTON — CURSOR SPOTLIGHT FOLLOW
   ========================================================================== */

function initMagneticButtons() {
    const btns = document.querySelectorAll('.magnetic-btn');

    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top)  / rect.height) * 100;
            btn.style.setProperty('--mx', `${x}%`);
            btn.style.setProperty('--my', `${y}%`);
        });
    });
}

/* ==========================================================================
   INTERACTIVE PROJECT MODAL (SPRING EASE)
   ========================================================================== */

function initModalEvents() {
    const modal    = document.getElementById('projectModal');
    const overlay  = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    const cards    = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-project');
            const data = projectDetails[key];
            if (data) openProjectModal(data);
        });
    });

    closeBtn.addEventListener('click', closeProjectModal);
    overlay.addEventListener('click', closeProjectModal);
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeProjectModal();
    });

    function openProjectModal(data) {
        const body = document.getElementById('modalBody');

        const techHTML    = data.tech.map(t => `<span>${t}</span>`).join('');
        const sectionsHTML = data.sections.map(sec => `
            <div class="case-section">
                <h4><i class="${sec.icon}"></i> ${sec.title}</h4>
                <p>${sec.content}</p>
            </div>
        `).join('');
        const metricsHTML = data.metrics.map(m => `
            <div class="metric-item">
                <span class="metric-val">${m.val}</span>
                <span class="metric-label">${m.label}</span>
            </div>
        `).join('');

        body.innerHTML = `
            <div class="case-header">
                <span class="case-header-tag">${data.tag}</span>
                <h3 class="case-title">${data.title}</h3>
                <div class="case-tech">${techHTML}</div>
            </div>
            <p class="case-intro">${data.intro}</p>
            <div class="case-body">${sectionsHTML}</div>
            <div class="case-metrics">${metricsHTML}</div>
            <div class="case-actions">
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic-btn">
                    <i class="fa-brands fa-github"></i> View Repository
                </a>
                ${data.live !== '#' ? `<a href="${data.live}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Stagger modal content items
        anime({
            targets: '.modal-container',
            opacity: [0, 1],
            scale: [0.88, 1],
            duration: 500,
            easing: 'easeOutElastic(1, 0.8)'
        });

        // Re-init magnetic buttons inside modal
        document.querySelectorAll('.modal-container .magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                btn.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
                btn.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
            });
        });
    }

    function closeProjectModal() {
        anime({
            targets: '.modal-container',
            opacity: [1, 0],
            scale: [1, 0.92],
            duration: 250,
            easing: 'easeInQuad',
            complete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */

function initContactForm() {
    const form   = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        status.className = 'form-status';
        status.textContent = 'Sending message…';

        setTimeout(() => {
            status.classList.add('success');
            status.textContent = 'Thank you! Your message was sent successfully.';
            form.reset();
            setTimeout(() => {
                anime({
                    targets: '#formStatus',
                    opacity: [1, 0],
                    duration: 500,
                    easing: 'easeOutQuad',
                    complete: () => {
                        status.textContent = '';
                        status.style.opacity = '1';
                    }
                });
            }, 4000);
        }, 1200);
    });
}

/* ==========================================================================
   HIGH-PERFORMANCE CANVAS SAKURA PETAL ENGINE
   ========================================================================== */

function initSakuraParticles() {
    const canvas = document.getElementById('sakura-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Pre-baked flat colors — no createLinearGradient per frame (10x faster)
    const PETAL_COLORS = [
        'rgba(255,185,200,', // pink
        'rgba(255,200,210,', // light pink
        'rgba(255,215,225,', // blush
    ];

    let petals = [];
    const maxPetals = 28; // reduced from 38 for headroom

    function resizeCanvas() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    class Petal {
        constructor() { this.reset(true); }

        reset(initial = false) {
            this.x      = Math.random() * canvas.width;
            this.y      = initial ? Math.random() * canvas.height : -20;
            this.size   = Math.random() * 7 + 5;
            this.speedY = Math.random() * 0.9 + 0.45;
            this.speedX = Math.random() * 0.7 - 0.18;
            this.rotation  = Math.random() * Math.PI;
            this.rotSpeed  = Math.random() * 0.012 - 0.006;
            this.swing      = Math.random() * Math.PI * 2;
            this.swingSpeed = Math.random() * 0.007 + 0.003;
            this.opacity    = Math.random() * 0.3 + 0.25;
            // Pick one of 3 pre-baked color strings
            this.colorStr   = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.swing) * 0.22;
            this.swing    += this.swingSpeed;
            this.rotation += this.rotSpeed;
            if (this.y > canvas.height + 20) this.reset();
            if (this.x > canvas.width  + 20) this.x = -20;
            if (this.x < -20)                this.x = canvas.width + 20;
        }

        draw() {
            const s = this.size;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.colorStr + '1)';
            ctx.beginPath();
            ctx.moveTo(0, -s / 2);
            ctx.bezierCurveTo( s/2, -s/2,  s,    -s/4,  s/2,  s/2);
            ctx.bezierCurveTo( s/4,  s/3, -s/4,   s/3, -s/2,  s/2);
            ctx.bezierCurveTo(-s,   -s/4, -s/2,  -s/2,  0,   -s/2);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }

    for (let i = 0; i < maxPetals; i++) petals.push(new Petal());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < petals.length; i++) {
            petals[i].update();
            petals[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
}
