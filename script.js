/* ==========================================================================
   PORTFOLIO DATABASE & CASE STUDIES
   ========================================================================== */

const projectDetails = {
    medrag: {
        tag: "AI/ML & RAG",
        title: "MedRAG: Local Clinical RAG System",
        tech: ["Chandra OCR 2", "Jina Embeddings v5", "LanceDB", "FastAPI", "Qwen 3.5 9B"],
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
        tech: ["Next.js", "Google Earth Engine", "Scikit-Learn", "Supabase", "Tailwind CSS"],
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
    },
    mercorama: {
        tag: "AI & Trade Intelligence",
        title: "Mercorama: AI-Powered Trade Intelligence",
        tech: ["Next.js 16", "Supabase", "TypeScript", "Claude 4.5", "Stripe"],
        intro: "An AI-powered trade intelligence platform designed for Canadian SMEs to automate complex regulatory, classification, and research workflows.",
        sections: [
            {
                title: "Business Problem",
                icon: "fa-solid fa-triangle-exclamation",
                content: "SMEs entering international trade face heavy regulatory burdens, tariff classification complexity (HS codes), and expensive consulting fees. Automating these classifications while keeping high precision is critical for commercial shipping."
            },
            {
                title: "AI Integration & Classification",
                icon: "fa-solid fa-gears",
                content: "Mercorama leverages Claude 4.5 and local models via Ollama to automate trade document parsing, HS code mapping, and country-specific export regulations. The platform maps inputs to high-dimensional vectors stored in Supabase with pgvector for fast semantic lookup."
            },
            {
                title: "Commercialization",
                icon: "fa-solid fa-credit-card",
                content: "Integrated Stripe billing to process metered charges on lead queries and standard subscription plans, deployed via clustered PM2 configurations on VPS architectures."
            }
        ],
        metrics: [
            { val: "Next.js 16", label: "Framework" },
            { val: "pgvector", label: "Semantic Search" },
            { val: "Stripe", label: "Billing Gateway" }
        ],
        github: "https://github.com/Amith-S28/Mercorama",
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
    initThemeToggle();
    initStarfield();
});

/* ==========================================================================
   THEME TOGGLE (LIGHT / DARK MODE)
   ========================================================================== */

function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-sun';
    }
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        
        anime({
            targets: toggleBtn,
            rotate: '+=360',
            duration: 500,
            easing: 'easeOutBack'
        });
    });
}

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
   HIGH-PERFORMANCE CANVAS STARFIELD PHYSICS ENGINE
   ========================================================================== */

function initStarfield() {
    const canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let stars = [];
    let shootingStars = [];
    const maxStars = 360; // Increased count
    let mouse = { x: -1000, y: -1000, active: false };

    function resizeCanvas() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    // Mouse tracking for interactive physics
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    }, { passive: true });

    // Initialize deep space stars with varied size, brightness, and colors
    for (let i = 0; i < maxStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseX: 0,
            baseY: 0,
            size: Math.random() * 2.2 + 0.3, // Varied sizes (tiny to larger)
            alpha: Math.random() * 0.7 + 0.1, // Varied initial brightness
            twinkleSpeed: Math.random() * 0.015 + 0.003,
            twinkleDir: Math.random() > 0.5 ? 1 : -1,
            colorIndex: Math.floor(Math.random() * 4), // 0: White, 1: Blue, 2: Orange, 3: Gold
            vx: Math.random() * 0.04 - 0.02,
            vy: Math.random() * 0.04 - 0.02,
            ox: 0,
            oy: 0
        });
        stars[i].baseX = stars[i].x;
        stars[i].baseY = stars[i].y;
    }

    class ShootingStar {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width * 0.6;
            this.y = Math.random() * canvas.height * 0.4;
            this.length = Math.random() * 160 + 500; // Increased tail length
            this.speed = Math.random() * 10 + 6;
            this.angle = Math.PI / 6 + Math.random() * (Math.PI / 12);
            this.opacity = 1;
            this.active = true;
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.opacity -= 0.008; // Muted tail decay for longer visibility
            if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
                this.active = false;
            }
        }
        draw(isLight) {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.vx * 3, this.y - this.vy * 3);
            
            if (isLight) {
                grad.addColorStop(0, 'rgba(30, 40, 50, 1)');
                grad.addColorStop(0.1, 'rgba(50, 100, 160, 0.7)');
                grad.addColorStop(1, 'rgba(50, 100, 160, 0)');
            } else {
                grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
                grad.addColorStop(0.1, 'rgba(130, 180, 255, 0.7)');
                grad.addColorStop(1, 'rgba(130, 180, 255, 0)');
            }
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
            ctx.stroke();
            ctx.restore();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isLight = document.body.classList.contains('light-theme');

        // Color palettes mapped for light vs dark theme
        const darkThemeColors = [
            'rgba(255, 255, 255, ',  // White
            'rgba(130, 180, 255, ',  // Light blue
            'rgba(255, 190, 140, ',  // Soft orange
            'rgba(255, 220, 150, '   // Faint gold
        ];

        const lightThemeColors = [
            'rgba(30, 40, 50, ',     // Charcoal
            'rgba(50, 100, 160, ',   // Slate blue
            'rgba(140, 70, 40, ',    // Earth brown
            'rgba(130, 100, 40, '    // Muted ochre
        ];

        const colors = isLight ? lightThemeColors : darkThemeColors;

        // Draw and update stars
        for (let i = 0; i < stars.length; i++) {
            const s = stars[i];

            // Drift
            s.baseX += s.vx;
            s.baseY += s.vy;

            // Wrap
            if (s.baseX < 0) s.baseX = canvas.width;
            if (s.baseX > canvas.width) s.baseX = 0;
            if (s.baseY < 0) s.baseY = canvas.height;
            if (s.baseY > canvas.height) s.baseY = 0;

            // Twinkle
            s.alpha += s.twinkleSpeed * s.twinkleDir;
            if (s.alpha >= 0.85) {
                s.alpha = 0.85;
                s.twinkleDir = -1;
            } else if (s.alpha <= 0.1) {
                s.alpha = 0.1;
                s.twinkleDir = 1;
            }

            // Mouse physics (repulsion)
            if (mouse.active) {
                const dx = mouse.x - s.baseX;
                const dy = mouse.y - s.baseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxInfluence = 120;

                if (dist < maxInfluence) {
                    const force = (maxInfluence - dist) / maxInfluence;
                    s.ox -= (dx / dist) * force * 15;
                    s.oy -= (dy / dist) * force * 15;
                }
            }

            s.ox *= 0.92;
            s.oy *= 0.92;

            const finalX = s.baseX + s.ox;
            const finalY = s.baseY + s.oy;

            ctx.beginPath();
            ctx.arc(finalX, finalY, s.size, 0, Math.PI * 2);
            ctx.fillStyle = colors[s.colorIndex] + s.alpha + ')';
            ctx.fill();
        }

        // Draw constellation lines
        if (mouse.active) {
            ctx.beginPath();
            for (let i = 0; i < stars.length; i++) {
                const s1 = stars[i];
                const x1 = s1.baseX + s1.ox;
                const y1 = s1.baseY + s1.oy;
                
                const dxMouse = mouse.x - x1;
                const dyMouse = mouse.y - y1;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < 100) {
                    for (let j = i + 1; j < stars.length; j++) {
                        const s2 = stars[j];
                        const x2 = s2.baseX + s2.ox;
                        const y2 = s2.baseY + s2.oy;

                        const dx = x1 - x2;
                        const dy = y1 - y2;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 80) {
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                        }
                    }
                }
            }
            ctx.strokeStyle = isLight ? 'rgba(50, 100, 160, 0.04)' : 'rgba(130, 180, 255, 0.04)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
        }

        // Shooting Stars (Increased frequency)
        if (Math.random() < 0.008 && shootingStars.length < 3) {
            shootingStars.push(new ShootingStar());
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const ss = shootingStars[i];
            ss.update();
            if (ss.active) {
                ss.draw(isLight);
            } else {
                shootingStars.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }
    animate();
}
