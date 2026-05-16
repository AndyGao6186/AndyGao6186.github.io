---
layout: single
permalink: /
title: "Yuyang Gao | Academic Homepage"
author_profile: false
classes: wide
redirect_from:
  - /about/
  - /about.html
---

<style>
  :root {
    --ink: #172033;
    --muted: #6f7789;
    --line: rgba(23, 32, 51, 0.10);
    --mist: #f4f8f7;
    --jade: #0f766e;
    --jade-soft: #dff2ee;
    --wine: #8f1d34;
    --blue: #2d6f9f;
    --shadow: 0 22px 60px rgba(31, 49, 74, 0.10);
    --radius: 28px;
  }

  #main {
    max-width: 1180px !important;
    padding-left: 1.1rem !important;
    padding-right: 1.1rem !important;
  }

  .sidebar, .page__title, .page__meta, .breadcrumbs {
    display: none !important;
  }

  .page {
    width: 100% !important;
    padding-right: 0 !important;
    float: none !important;
  }

  .page__inner-wrap {
    margin: 0 auto !important;
    max-width: 1120px !important;
  }

  .page__content {
    font-size: 1rem;
    line-height: 1.72;
    color: var(--ink);
  }

  .page__content h2,
  .page__content h3 { margin-top: 0; }
  .page__content a { color: var(--jade); text-decoration: none; }

  .gao-home {
    position: relative;
    overflow: hidden;
    padding: 0.4rem 0 2.5rem;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .gao-home::before,
  .gao-home::after {
    content: "";
    position: fixed;
    z-index: -1;
    border-radius: 999px;
    filter: blur(8px);
    opacity: 0.72;
    pointer-events: none;
  }

  .gao-home::before {
    width: 430px;
    height: 430px;
    right: -160px;
    top: 90px;
    background: radial-gradient(circle, rgba(15, 118, 110, 0.15), transparent 68%);
  }

  .gao-home::after {
    width: 380px;
    height: 380px;
    left: -160px;
    bottom: 60px;
    background: radial-gradient(circle, rgba(143, 29, 52, 0.11), transparent 70%);
  }

  .deck-hero {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) 360px;
    gap: 2rem;
    align-items: stretch;
    padding: 2.2rem;
    border: 1px solid var(--line);
    border-radius: 34px;
    background:
      radial-gradient(circle at 12% 0%, rgba(15, 118, 110, 0.10), transparent 31%),
      radial-gradient(circle at 86% 18%, rgba(143, 29, 52, 0.10), transparent 26%),
      linear-gradient(135deg, rgba(255,255,255,0.96), rgba(246,250,248,0.92));
    box-shadow: var(--shadow);
  }

  .deck-hero::before {
    content: "♠";
    position: absolute;
    right: 30px;
    top: 20px;
    font-size: 5.4rem;
    color: rgba(23, 32, 51, 0.045);
    transform: rotate(-9deg);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    width: fit-content;
    margin-bottom: 1rem;
    padding: 0.38rem 0.72rem;
    border: 1px solid rgba(15, 118, 110, 0.18);
    border-radius: 999px;
    background: rgba(255,255,255,0.72);
    color: var(--jade);
    font-size: 0.78rem;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .hero-title {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.35rem, 6vw, 5rem);
    line-height: 0.92;
    letter-spacing: -0.055em;
    color: var(--ink);
  }

  .hero-title span {
    display: block;
    font-family: "Noto Serif SC", "Songti SC", serif;
    font-size: clamp(1.45rem, 3vw, 2.4rem);
    letter-spacing: 0.16em;
    margin-top: 0.55rem;
    color: var(--jade);
  }

  .hero-subtitle {
    max-width: 650px;
    margin: 1.1rem 0 0;
    color: #445066;
    font-size: 1.06rem;
  }

  .hero-actions, .tag-row, .card-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .hero-actions { margin-top: 1.45rem; }

  .pill-link, .suit-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border-radius: 999px;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .pill-link {
    padding: 0.68rem 0.95rem;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.78);
    color: var(--ink) !important;
  }

  .pill-link.primary {
    border-color: transparent;
    background: var(--ink);
    color: #fff !important;
  }

  .pill-link:hover, .suit-tag:hover, .project-card:hover, .journey-item:hover {
    transform: translateY(-2px);
  }

  .profile-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 430px;
    padding: 1.25rem;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,0.72);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.68)),
      radial-gradient(circle at 30% 10%, rgba(15, 118, 110, 0.18), transparent 45%);
    backdrop-filter: blur(18px);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.32), 0 18px 45px rgba(31,49,74,0.11);
  }

  .profile-card::after {
    content: "♦ ♥ ♣";
    position: absolute;
    right: 1.2rem;
    bottom: 1rem;
    color: rgba(23, 32, 51, 0.14);
    letter-spacing: 0.35em;
    font-size: 1.1rem;
  }

  .portrait-wrap {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 24px;
    background: linear-gradient(135deg, var(--jade-soft), #fff);
    border: 1px solid rgba(23, 32, 51, 0.08);
  }

  .portrait-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .profile-note {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 22px;
    background: rgba(255,255,255,0.76);
    border: 1px solid var(--line);
  }

  .profile-note strong { display: block; color: var(--ink); font-size: 1rem; }
  .profile-note span { display: block; margin-top: 0.25rem; color: var(--muted); font-size: 0.92rem; }

  .suit-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.2rem 0 2.2rem;
  }

  .suit-card, .project-card, .journey-item, .soft-panel, .visitor-panel {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: rgba(255,255,255,0.78);
    box-shadow: 0 12px 34px rgba(31, 49, 74, 0.06);
  }

  .suit-card { padding: 1.05rem; }

  .suit-symbol {
    display: inline-grid;
    place-items: center;
    width: 2.65rem;
    height: 2.65rem;
    margin-bottom: 0.82rem;
    border-radius: 16px;
    background: var(--mist);
    font-size: 1.45rem;
  }

  .red { color: var(--wine); }
  .black { color: var(--ink); }
  .green { color: var(--jade); }
  .blue { color: var(--blue); }

  .suit-card h3, .project-card h3, .journey-text h3 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
    color: var(--ink);
  }

  .suit-card p, .project-card p, .journey-text p, .soft-panel p {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
    margin: 2.4rem 0 1rem;
  }

  .section-kicker {
    color: var(--jade);
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-size: 0.78rem;
  }

  .section-head h2 {
    margin: 0.16rem 0 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.75rem, 3vw, 2.55rem);
    letter-spacing: -0.04em;
  }

  .section-head p {
    max-width: 410px;
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .soft-panel { padding: 1.35rem; }
  .soft-panel.about-vision p { font-size: 1.02rem; color: #445066; }
  .tag-row { margin-top: 1rem; }

  .suit-tag {
    padding: 0.52rem 0.76rem;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.78);
    color: var(--ink);
    font-size: 0.9rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .project-card {
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .project-body { padding: 1.2rem; }

  .project-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-card video {
    width: 100%;
    display: block;
    border-top: 1px solid var(--line);
    background: #f7faf9;
  }

  .card-links { margin-top: 0.85rem; }

  .mini-link {
    display: inline-flex;
    padding: 0.42rem 0.62rem;
    border-radius: 999px;
    background: var(--mist);
    color: var(--jade) !important;
    font-weight: 800;
    font-size: 0.82rem;
  }

  .journey-list { display: grid; gap: 0.9rem; }

  .journey-item {
    display: grid;
    grid-template-columns: 76px 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .school-logo {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    background: #fff;
    border: 1px solid var(--line);
  }

  .school-logo img {
    max-width: 46px;
    max-height: 46px;
    object-fit: contain;
    display: block;
  }

  .journey-meta {
    padding: 0.48rem 0.7rem;
    border-radius: 999px;
    background: var(--mist);
    color: var(--muted);
    white-space: nowrap;
    font-size: 0.85rem;
    font-weight: 700;
  }

  .two-col {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
  }

  .award-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.75rem;
  }

  .award-list li {
    padding: 0.86rem 0.95rem;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: rgba(255,255,255,0.65);
    color: #455166;
  }

  .visitor-panel {
    margin-top: 2.2rem;
    padding: 1.2rem;
    background:
      linear-gradient(135deg, rgba(23,32,51,0.96), rgba(28,61,74,0.92)),
      radial-gradient(circle at 90% 0%, rgba(255,255,255,0.18), transparent 30%);
    color: #fff;
  }

  .visitor-panel h2 {
    margin: 0;
    color: #fff;
    font-family: Georgia, "Times New Roman", serif;
    letter-spacing: -0.03em;
  }

  .visitor-panel p { margin: 0.2rem 0 1rem; color: rgba(255,255,255,0.68); }

  .visitor-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .visitor-stat {
    padding: 0.95rem;
    border-radius: 20px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
  }

  .visitor-stat strong { display: block; font-size: 1.5rem; color: #fff; }
  .visitor-stat span { display: block; margin-top: 0.15rem; color: rgba(255,255,255,0.62); font-size: 0.82rem; }

  .footer-note {
    margin-top: 1.1rem;
    color: var(--muted);
    text-align: center;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    .deck-hero, .project-grid, .two-col { grid-template-columns: 1fr; }
    .suit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .journey-item { grid-template-columns: 64px 1fr; }
    .journey-meta { grid-column: 2; width: fit-content; }
  }

  @media (max-width: 560px) {
    #main { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
    .deck-hero { padding: 1.25rem; border-radius: 26px; }
    .suit-grid, .visitor-stats { grid-template-columns: 1fr; }
    .section-head { display: block; }
    .profile-card { min-height: auto; }
  }
</style>

<div class="gao-home">
  <section class="deck-hero" aria-label="Yuyang Gao homepage hero">
    <div>
      <div class="eyebrow">♦ Embodied AI · Self-Driving Lab · Robotics</div>
      <h1 class="hero-title">Yuyang Gao<span>高瑀阳</span></h1>
      <p class="hero-subtitle">
        I am a senior undergraduate student in Automation at Dalian University of Technology and an incoming M.S. student in Computer Science at Peking University. My work centers on embodied AI, robot manipulation, and self-driving laboratories — building agents that can perceive, plan, execute, and reflect in real experimental environments.
      </p>
      <div class="hero-actions">
        <a class="pill-link primary" href="mailto:gaoyuyang6186@163.com">Email</a>
        <a class="pill-link" href="/assets/CV.pdf">CV</a>
        <a class="pill-link" href="/assets/Transcript.pdf">Transcript</a>
        <a class="pill-link" href="https://github.com/AndyGao6186" target="_blank" rel="noopener">GitHub</a>
        <a class="pill-link" href="/images/wechat.png">WeChat</a>
      </div>
    </div>

    <aside class="profile-card" aria-label="Profile card">
      <div class="portrait-wrap">
        <img src="/images/YuyangGao.png" alt="Portrait of Yuyang Gao">
      </div>
      <div class="profile-note">
        <strong>Research taste</strong>
        <span>Long-horizon autonomy, real-world feedback, and robots that learn while acting.</span>
      </div>
    </aside>
  </section>

  <section class="suit-grid" aria-label="Four-suit research tags">
    <div class="suit-card">
      <div class="suit-symbol red">♦</div>
      <h3>Embodied Intelligence</h3>
      <p>Turning language-level goals into grounded robotic execution.</p>
    </div>
    <div class="suit-card">
      <div class="suit-symbol red">♥</div>
      <h3>Closed-loop Science</h3>
      <p>Using physical feedback to make experiments measurable and adaptive.</p>
    </div>
    <div class="suit-card">
      <div class="suit-symbol black">♠</div>
      <h3>Robot Manipulation</h3>
      <p>Skill abstraction, precise pouring, grasping, and long-horizon operations.</p>
    </div>
    <div class="suit-card">
      <div class="suit-symbol green">♣</div>
      <h3>Agentic Systems</h3>
      <p>Planning, execution logs, reflection, and stateful replanning.</p>
    </div>
  </section>

  <section class="soft-panel about-vision">
    <div class="section-kicker">About</div>
    <p>
      I am interested in robotic systems that can live and operate in the real world for extended periods — not merely executing isolated instructions, but continuously interacting with their environments, accumulating experience from physical feedback, and improving their behavior over time. More broadly, I hope to study how robots can become long-horizon, self-improving embodied agents: systems that perceive changing environments, act with reliable skills, reflect on outcomes, and adapt across tasks. My current work uses wet-lab experimentation as a concrete testbed for this vision, building agent-based closed-loop robots that connect perception, planning, execution, and reflection into a repeatable pathway toward continual autonomy.
    </p>
    <div class="tag-row">
      <span class="suit-tag">♦ Long-Horizon Autonomy</span>
      <span class="suit-tag">♥ Real-World Learning</span>
      <span class="suit-tag">♠ Embodied Agents</span>
      <span class="suit-tag">♣ Closed-Loop Robotics</span>
    </div>
  </section>

  <div class="section-head">
    <div>
      <div class="section-kicker">Selected Projects</div>
      <h2>Cards on the table</h2>
    </div>
    <p>Projects are arranged like a small deck: each card highlights a concrete system, task, or research thread.</p>
  </div>

  <section class="project-grid" aria-label="Selected projects">
    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span>♥ Closed-loop Wet Lab</span><span>2026</span></div>
        <h3>Agent-Based Closed-Loop Embodied Experimental System</h3>
        <p>A robotic experimental platform built around perception, planning, execution, and reflection. It uses sensor feedback such as mass, pH, and conductivity to support adaptive long-horizon scientific workflows.</p>
        <div class="card-links"><span class="mini-link">Embodied AI</span><span class="mini-link">Self-Driving Lab</span></div>
      </div>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span>♠ Imitation Learning</span><span>Tsinghua</span></div>
        <h3>Dual-Arm Robot Manipulation with Imitation Learning</h3>
        <p>Tuned ACT-style policies with privileged simulation information, combined simulated and real-world data, and improved manipulation success through multi-source learning.</p>
        <div class="card-links"><span class="mini-link">ACT</span><span class="mini-link">Robot Learning</span></div>
      </div>
      <video controls preload="metadata">
        <source src="/assets/project1.mp4" type="video/mp4">
      </video>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span>♦ Autonomous Racing</span><span>National 2nd Prize</span></div>
        <h3>2D SLAM Autonomous Mapping and Racing</h3>
        <p>Processed LiDAR observations for cone detection, built occupancy-grid maps, and used TEB planning to support autonomous high-speed navigation.</p>
        <div class="card-links"><span class="mini-link">SLAM</span><span class="mini-link">TEB Planning</span></div>
      </div>
      <video controls preload="metadata">
        <source src="/assets/project2.mp4" type="video/mp4">
      </video>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span>♣ Perception Pipeline</span><span>Robotics</span></div>
        <h3>VLM–Pointing–SAM–Pose Pipeline</h3>
        <p>A multimodal perception chain that converts scene understanding into executable object poses, combining vision-language reasoning, pixel-level target localization, segmentation, and depth-based 3D pose solving.</p>
        <div class="card-links"><span class="mini-link">VLM</span><span class="mini-link">SAM</span><span class="mini-link">Pose</span></div>
      </div>
    </article>
  </section>

  <div class="section-head">
    <div>
      <div class="section-kicker">Academic Journey</div>
      <h2>Where the story unfolds</h2>
    </div>
    <p>A clean timeline with institutional emblems, designed to feel academic without becoming heavy.</p>
  </div>

  <section class="journey-list" aria-label="Academic experience">
    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Peking_University_seal.svg/250px-Peking_University_seal.svg.png" alt="Peking University logo"></div>
      <div class="journey-text">
        <h3>Peking University · School of Computer Science</h3>
        <p>Incoming M.S. student in Computer Science; research intern on robotic perception, manipulation, and closed-loop experimental systems.</p>
      </div>
      <div class="journey-meta">2025–Now</div>
    </article>

    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tsinghua_University_Logo.svg/250px-Tsinghua_University_Logo.svg.png" alt="Tsinghua University logo"></div>
      <div class="journey-text">
        <h3>Tsinghua University · AI Industry Research Institute</h3>
        <p>Research intern on dual-arm manipulation and imitation learning, combining simulation data with real-world robot demonstrations.</p>
      </div>
      <div class="journey-meta">Jan–Apr 2025</div>
    </article>

    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/DLUT_logo.png/250px-DLUT_logo.png" alt="Dalian University of Technology logo"></div>
      <div class="journey-text">
        <h3>Dalian University of Technology · Automation</h3>
        <p>Bachelor student; GPA 94.6; ranked 1st out of 162 students; national scholarship recipient.</p>
      </div>
      <div class="journey-meta">2022–2026</div>
    </article>
  </section>

  <div class="section-head">
    <div>
      <div class="section-kicker">Honors & Beyond</div>
      <h2>Signals beyond the page</h2>
    </div>
  </div>

  <section class="two-col">
    <div class="soft-panel">
      <h3>Honors & Awards</h3>
      <ul class="award-list">
        <li><strong>2025</strong> · National College Student Intelligent Vehicle Competition, ROS Group · National Second Prize</li>
        <li><strong>2025 & 2024</strong> · National Scholarship</li>
        <li><strong>2024</strong> · National College Student Mathematical Modeling Competition · National Second Prize</li>
        <li><strong>2024</strong> · Interdisciplinary Contest in Modeling · Finalist</li>
      </ul>
    </div>
    <div class="soft-panel">
      <h3>Beyond Research</h3>
      <p>
        Outside academia, I enjoy photography, outdoor exploration, music, hardware tinkering, and electronics. These hobbies keep me close to the physical world — the same world where robots eventually have to act.
      </p>
      <div class="tag-row">
        <a class="suit-tag" href="https://space.bilibili.com/260882142" target="_blank" rel="noopener">Bilibili</a>
        <span class="suit-tag">Photography</span>
        <span class="suit-tag">Saxophone</span>
        <span class="suit-tag">Hardware</span>
      </div>
    </div>
  </section>

  <section class="visitor-panel" aria-label="Visitor statistics">
    <h2>Visitor Record</h2>
    <p>A quieter trace of people who have stopped by — counted, but not over-decorated.</p>
    <div class="visitor-stats">
      <div class="visitor-stat"><strong id="busuanzi_value_site_pv">—</strong><span>Total page views</span></div>
      <div class="visitor-stat"><strong id="busuanzi_value_site_uv">—</strong><span>Unique visitors</span></div>
      <div class="visitor-stat"><strong id="busuanzi_value_page_pv">—</strong><span>This page</span></div>
    </div>
  </section>

  <p class="footer-note">© 2026 Yuyang Gao · Built with Academic Pages, reshuffled with a four-suit theme.</p>
</div>

<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
