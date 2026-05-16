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
    --shadow: 0 22px 60px rgba(31, 49, 74, 0.10);
    --radius: 28px;
  }

  #main { max-width: 1180px !important; padding-left: 1.1rem !important; padding-right: 1.1rem !important; }
  .sidebar, .page__title, .page__meta, .breadcrumbs { display: none !important; }
  .page { width: 100% !important; padding-right: 0 !important; float: none !important; }
  .page__inner-wrap { margin: 0 auto !important; max-width: 1120px !important; }
  .page__content { font-size: 1rem; line-height: 1.72; color: var(--ink); }
  .page__content h2, .page__content h3 { margin-top: 0; }
  .page__content a { color: var(--jade); text-decoration: none; }

  .gao-home {
    position: relative;
    overflow: hidden;
    padding: 0.4rem 0 2.5rem;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .gao-home::before, .gao-home::after {
    content: "";
    position: fixed;
    z-index: -1;
    border-radius: 999px;
    filter: blur(8px);
    opacity: 0.72;
    pointer-events: none;
  }

  .gao-home::before {
    width: 430px; height: 430px; right: -160px; top: 90px;
    background: radial-gradient(circle, rgba(15, 118, 110, 0.15), transparent 68%);
  }

  .gao-home::after {
    width: 380px; height: 380px; left: -160px; bottom: 60px;
    background: radial-gradient(circle, rgba(143, 29, 52, 0.11), transparent 70%);
  }

  .lang-switch {
    position: sticky;
    top: 0.75rem;
    z-index: 30;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0.8rem;
    pointer-events: none;
  }

  .lang-switch-inner {
    display: inline-flex;
    gap: 0.25rem;
    padding: 0.25rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid var(--line);
    box-shadow: 0 10px 30px rgba(31, 49, 74, 0.10);
    backdrop-filter: blur(16px);
    pointer-events: auto;
  }

  .lang-btn {
    border: 0;
    border-radius: 999px;
    padding: 0.44rem 0.72rem;
    background: transparent;
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 800;
    cursor: pointer;
    transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
  }

  .lang-btn:hover { transform: translateY(-1px); }
  .lang-btn.active { background: var(--ink); color: #fff; }

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

  .hero-subtitle { max-width: 650px; margin: 1.1rem 0 0; color: #445066; font-size: 1.06rem; }
  .hero-actions, .tag-row, .card-links { display: flex; flex-wrap: wrap; gap: 0.7rem; }
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

  .pill-link.primary { border-color: transparent; background: var(--ink); color: #fff !important; }
  .pill-link:hover, .suit-tag:hover, .project-card:hover, .journey-item:hover { transform: translateY(-2px); }

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

  .portrait-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .profile-note { margin-top: 1rem; padding: 1rem; border-radius: 22px; background: rgba(255,255,255,0.76); border: 1px solid var(--line); }
  .profile-note strong { display: block; color: var(--ink); font-size: 1rem; }
  .profile-note span { display: block; margin-top: 0.25rem; color: var(--muted); font-size: 0.92rem; }

  .suit-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin: 1.2rem 0 2.2rem; }
  .suit-card, .project-card, .journey-item, .soft-panel, .visitor-panel { border: 1px solid var(--line); border-radius: var(--radius); background: rgba(255,255,255,0.78); box-shadow: 0 12px 34px rgba(31, 49, 74, 0.06); }
  .suit-card { padding: 1.05rem; }
  .suit-symbol { display: inline-grid; place-items: center; width: 2.65rem; height: 2.65rem; margin-bottom: 0.82rem; border-radius: 16px; background: var(--mist); font-size: 1.45rem; }
  .red { color: var(--wine); } .black { color: var(--ink); } .green { color: var(--jade); }
  .suit-card h3, .project-card h3, .journey-text h3 { margin: 0 0 0.35rem; font-size: 1.05rem; color: var(--ink); }
  .suit-card p, .project-card p, .journey-text p, .soft-panel p { margin: 0; color: var(--muted); font-size: 0.95rem; }

  .section-head { display: flex; justify-content: space-between; align-items: end; gap: 1rem; margin: 2.4rem 0 1rem; }
  .section-kicker { color: var(--jade); font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; font-size: 0.78rem; }
  .section-head h2 { margin: 0.16rem 0 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.75rem, 3vw, 2.55rem); letter-spacing: -0.04em; }
  .section-head p { max-width: 430px; margin: 0; color: var(--muted); font-size: 0.95rem; }
  .soft-panel { padding: 1.35rem; }
  .soft-panel.about-vision p { font-size: 1.02rem; color: #445066; }
  .tag-row { margin-top: 1rem; }
  .suit-tag { padding: 0.52rem 0.76rem; border: 1px solid var(--line); background: rgba(255,255,255,0.78); color: var(--ink); font-size: 0.9rem; }

  .project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .project-card { overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .project-body { padding: 1.2rem; }
  .project-label { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 0.7rem; color: var(--muted); font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
  .project-card video { width: 100%; display: block; border-top: 1px solid var(--line); background: #f7faf9; }
  .card-links { margin-top: 0.85rem; }
  .mini-link { display: inline-flex; padding: 0.42rem 0.62rem; border-radius: 999px; background: var(--mist); color: var(--jade) !important; font-weight: 800; font-size: 0.82rem; }

  .journey-list { display: grid; gap: 0.9rem; }
  .journey-item { display: grid; grid-template-columns: 76px 1fr auto; gap: 1rem; align-items: center; padding: 1rem; transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .school-logo { width: 60px; height: 60px; border-radius: 20px; display: grid; place-items: center; background: #fff; border: 1px solid var(--line); }
  .school-logo img { max-width: 46px; max-height: 46px; object-fit: contain; display: block; }
  .journey-meta { padding: 0.48rem 0.7rem; border-radius: 999px; background: var(--mist); color: var(--muted); white-space: nowrap; font-size: 0.85rem; font-weight: 700; }
  .two-col { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1rem; }
  .award-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.75rem; }
  .award-list li { padding: 0.86rem 0.95rem; border: 1px solid var(--line); border-radius: 18px; background: rgba(255,255,255,0.65); color: #455166; }

  .visitor-panel {
    margin-top: 2.2rem;
    padding: 1.25rem;
    background:
      radial-gradient(circle at 92% 6%, rgba(255,255,255,0.16), transparent 28%),
      linear-gradient(135deg, rgba(23,32,51,0.96), rgba(28,61,74,0.92));
    color: #fff;
    overflow: hidden;
  }

  .visitor-top { display: flex; justify-content: space-between; align-items: end; gap: 1rem; margin-bottom: 1rem; }
  .visitor-panel h2 { margin: 0; color: #fff; font-family: Georgia, "Times New Roman", serif; letter-spacing: -0.03em; }
  .visitor-panel p { margin: 0.2rem 0 0; color: rgba(255,255,255,0.68); }
  .visitor-mode { padding: 0.42rem 0.66rem; border-radius: 999px; background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.16); color: rgba(255,255,255,0.72); font-size: 0.78rem; font-weight: 800; white-space: nowrap; }
  .visitor-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; margin-bottom: 0.85rem; }
  .visitor-stat { padding: 0.95rem; border-radius: 20px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); }
  .visitor-stat strong { display: block; font-size: 1.5rem; color: #fff; }
  .visitor-stat span { display: block; margin-top: 0.15rem; color: rgba(255,255,255,0.62); font-size: 0.82rem; }
  .visitor-dashboard { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; }
  .visitor-card { min-height: 128px; padding: 1rem; border-radius: 22px; background: rgba(255,255,255,0.075); border: 1px solid rgba(255,255,255,0.14); }
  .visitor-card h3 { margin: 0 0 0.35rem; color: #fff; font-size: 1.02rem; }

  .footer-note { margin-top: 1.1rem; color: var(--muted); text-align: center; font-size: 0.9rem; }

  @media (max-width: 900px) {
    .deck-hero, .project-grid, .two-col, .visitor-dashboard { grid-template-columns: 1fr; }
    .suit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .journey-item { grid-template-columns: 64px 1fr; }
    .journey-meta { grid-column: 2; width: fit-content; }
  }

  @media (max-width: 560px) {
    #main { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
    .deck-hero { padding: 1.25rem; border-radius: 26px; }
    .suit-grid, .visitor-stats { grid-template-columns: 1fr; }
    .section-head, .visitor-top { display: block; }
    .profile-card { min-height: auto; }
    .visitor-mode { display: inline-flex; margin-top: 0.65rem; }
    .lang-switch { top: 0.5rem; }
  }
</style>

<div class="gao-home">
  <div class="lang-switch" aria-label="Language switch">
    <div class="lang-switch-inner">
      <button class="lang-btn active" type="button" data-lang="en">EN</button>
      <button class="lang-btn" type="button" data-lang="zh">中文</button>
    </div>
  </div>

  <section class="deck-hero" aria-label="Yuyang Gao homepage hero">
    <div>
      <div class="eyebrow" data-i18n="eyebrow">♦ Embodied AI · Self-Driving Lab · Robotics</div>
      <h1 class="hero-title">Yuyang Gao<span>高瑀阳</span></h1>
      <p class="hero-subtitle" data-i18n="heroSubtitle">
        I am a senior undergraduate student in Automation at Dalian University of Technology and an incoming M.S. student in Computer Science at Peking University. My work centers on embodied AI, robot manipulation, and self-driving laboratories — building agents that can perceive, plan, execute, and reflect in real experimental environments.
      </p>
      <div class="hero-actions">
        <a class="pill-link primary" href="mailto:gaoyuyang6186@163.com" data-i18n="email">Email</a>
        <a class="pill-link" href="/assets/CV.pdf" data-i18n="cv">CV</a>
        <a class="pill-link" href="/assets/Transcript.pdf" data-i18n="transcript">Transcript</a>
        <a class="pill-link" href="https://github.com/AndyGao6186" target="_blank" rel="noopener">GitHub</a>
        <a class="pill-link" href="/images/wechat.png" data-i18n="wechat">WeChat</a>
      </div>
    </div>

    <aside class="profile-card" aria-label="Profile card">
      <div class="portrait-wrap"><img src="/images/YuyangGao.png" alt="Portrait of Yuyang Gao"></div>
      <div class="profile-note">
        <strong data-i18n="researchTaste">Research taste</strong>
        <span data-i18n="researchTasteText">Long-horizon autonomy, real-world feedback, and robots that learn while acting.</span>
      </div>
    </aside>
  </section>

  <section class="suit-grid" aria-label="Research interests">
    <div class="suit-card"><div class="suit-symbol red">♦</div><h3 data-i18n="suit1Title">Embodied Intelligence</h3><p data-i18n="suit1Text">Turning language-level goals into grounded robotic execution.</p></div>
    <div class="suit-card"><div class="suit-symbol red">♥</div><h3 data-i18n="suit2Title">Closed-loop Science</h3><p data-i18n="suit2Text">Using physical feedback to make experiments measurable and adaptive.</p></div>
    <div class="suit-card"><div class="suit-symbol black">♠</div><h3 data-i18n="suit3Title">Robot Manipulation</h3><p data-i18n="suit3Text">Skill abstraction, precise pouring, grasping, and long-horizon operations.</p></div>
    <div class="suit-card"><div class="suit-symbol green">♣</div><h3 data-i18n="suit4Title">Agentic Systems</h3><p data-i18n="suit4Text">Planning, execution logs, reflection, and stateful replanning.</p></div>
  </section>

  <section class="soft-panel about-vision">
    <div class="section-kicker" data-i18n="aboutKicker">About</div>
    <p data-i18n="aboutText">
      I am interested in robotic systems that can live and operate in the real world for extended periods — not merely executing isolated instructions, but continuously interacting with their environments, accumulating experience from physical feedback, and improving their behavior over time. More broadly, I hope to study how robots can become long-horizon, self-improving embodied agents: systems that perceive changing environments, act with reliable skills, reflect on outcomes, and adapt across tasks. My current work uses wet-lab experimentation as a concrete testbed for this vision, building agent-based closed-loop robots that connect perception, planning, execution, and reflection into a repeatable pathway toward continual autonomy.
    </p>
    <div class="tag-row">
      <span class="suit-tag" data-i18n="tag1">♦ Long-Horizon Autonomy</span>
      <span class="suit-tag" data-i18n="tag2">♥ Real-World Learning</span>
      <span class="suit-tag" data-i18n="tag3">♠ Embodied Agents</span>
      <span class="suit-tag" data-i18n="tag4">♣ Closed-Loop Robotics</span>
    </div>
  </section>

  <div class="section-head">
    <div><div class="section-kicker" data-i18n="projectsKicker">Selected Projects</div><h2 data-i18n="projectsTitle">Research in action</h2></div>
    <p data-i18n="projectsIntro">Selected work on embodied agents, robot manipulation, multimodal perception, and closed-loop experimental systems.</p>
  </div>

  <section class="project-grid" aria-label="Selected projects">
    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span data-i18n="project1Label">♥ Closed-loop Wet Lab</span><span>2026</span></div>
        <h3 data-i18n="project1Title">Agent-Based Closed-Loop Embodied Experimental System</h3>
        <p data-i18n="project1Text">A robotic experimental platform built around perception, planning, execution, and reflection. It uses sensor feedback such as mass, pH, and conductivity to support adaptive long-horizon scientific workflows.</p>
        <div class="card-links"><span class="mini-link" data-i18n="miniEmbodied">Embodied AI</span><span class="mini-link" data-i18n="miniSdl">Self-Driving Lab</span></div>
      </div>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span data-i18n="project2Label">♠ Imitation Learning</span><span data-i18n="tsinghuaShort">Tsinghua</span></div>
        <h3 data-i18n="project2Title">Dual-Arm Robot Manipulation with Imitation Learning</h3>
        <p data-i18n="project2Text">Tuned ACT-style policies with privileged simulation information, combined simulated and real-world data, and improved manipulation success through multi-source learning.</p>
        <div class="card-links"><span class="mini-link">ACT</span><span class="mini-link" data-i18n="miniRobotLearning">Robot Learning</span></div>
      </div>
      <video controls preload="metadata"><source src="/assets/project1.mp4" type="video/mp4"></video>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span data-i18n="project3Label">♦ Autonomous Racing</span><span data-i18n="nationalSecond">National 2nd Prize</span></div>
        <h3 data-i18n="project3Title">2D SLAM Autonomous Mapping and Racing</h3>
        <p data-i18n="project3Text">Processed LiDAR observations for cone detection, built occupancy-grid maps, and used TEB planning to support autonomous high-speed navigation.</p>
        <div class="card-links"><span class="mini-link">SLAM</span><span class="mini-link">TEB Planning</span></div>
      </div>
      <video controls preload="metadata"><source src="/assets/project2.mp4" type="video/mp4"></video>
    </article>

    <article class="project-card">
      <div class="project-body">
        <div class="project-label"><span data-i18n="project4Label">♣ Perception Pipeline</span><span data-i18n="robotics">Robotics</span></div>
        <h3 data-i18n="project4Title">VLM–Pointing–SAM–Pose Pipeline</h3>
        <p data-i18n="project4Text">A multimodal perception chain that converts scene understanding into executable object poses, combining vision-language reasoning, pixel-level target localization, segmentation, and depth-based 3D pose solving.</p>
        <div class="card-links"><span class="mini-link">VLM</span><span class="mini-link">SAM</span><span class="mini-link">Pose</span></div>
      </div>
    </article>
  </section>

  <div class="section-head">
    <div><div class="section-kicker" data-i18n="journeyKicker">Academic Journey</div><h2 data-i18n="journeyTitle">Education & research experience</h2></div>
    <p data-i18n="journeyIntro">My academic path across automation, artificial intelligence, computer science, and robotics.</p>
  </div>

  <section class="journey-list" aria-label="Academic experience">
    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Peking_University_seal.svg/250px-Peking_University_seal.svg.png" alt="Peking University logo"></div>
      <div class="journey-text"><h3 data-i18n="pkuTitle">Peking University · School of Computer Science</h3><p data-i18n="pkuText">Incoming M.S. student in Computer Science; research intern on robotic perception, manipulation, and closed-loop experimental systems.</p></div>
      <div class="journey-meta" data-i18n="pkuTime">2025–Now</div>
    </article>

    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tsinghua_University_Logo.svg/250px-Tsinghua_University_Logo.svg.png" alt="Tsinghua University logo"></div>
      <div class="journey-text"><h3 data-i18n="thuTitle">Tsinghua University · AI Industry Research Institute</h3><p data-i18n="thuText">Research intern on dual-arm manipulation and imitation learning, combining simulation data with real-world robot demonstrations.</p></div>
      <div class="journey-meta" data-i18n="thuTime">Jan–Apr 2025</div>
    </article>

    <article class="journey-item">
      <div class="school-logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/DLUT_logo.png/250px-DLUT_logo.png" alt="Dalian University of Technology logo"></div>
      <div class="journey-text"><h3 data-i18n="dlutTitle">Dalian University of Technology · Automation</h3><p data-i18n="dlutText">Bachelor student; GPA 94.6; ranked 1st out of 162 students; national scholarship recipient.</p></div>
      <div class="journey-meta">2022–2026</div>
    </article>
  </section>

  <div class="section-head"><div><div class="section-kicker" data-i18n="honorsKicker">Honors & Beyond</div><h2 data-i18n="honorsTitle">Honors, interests, and life</h2></div></div>

  <section class="two-col">
    <div class="soft-panel">
      <h3 data-i18n="awardsTitle">Honors & Awards</h3>
      <ul class="award-list">
        <li data-i18n="award1"><strong>2025</strong> · National College Student Intelligent Vehicle Competition, ROS Group · National Second Prize</li>
        <li data-i18n="award2"><strong>2025 & 2024</strong> · National Scholarship</li>
        <li data-i18n="award3"><strong>2024</strong> · National College Student Mathematical Modeling Competition · National Second Prize</li>
        <li data-i18n="award4"><strong>2024</strong> · Interdisciplinary Contest in Modeling · Finalist</li>
      </ul>
    </div>
    <div class="soft-panel">
      <h3 data-i18n="beyondTitle">Beyond Research</h3>
      <p data-i18n="beyondText">Outside academia, I enjoy photography, outdoor exploration, music, hardware tinkering, and electronics. These hobbies keep me close to the physical world — the same world where robots eventually have to act.</p>
      <div class="tag-row">
        <a class="suit-tag" href="https://space.bilibili.com/260882142" target="_blank" rel="noopener">Bilibili</a>
        <span class="suit-tag" data-i18n="photography">Photography</span><span class="suit-tag" data-i18n="saxophone">Saxophone</span><span class="suit-tag" data-i18n="hardware">Hardware</span>
      </div>
    </div>
  </section>

  <section class="visitor-panel" aria-label="Visitor statistics">
    <div class="visitor-top">
      <div>
        <h2 data-i18n="visitorTitle">Visitor Record</h2>
        <p data-i18n="visitorIntro">Thank you for visiting my academic homepage.</p>
      </div>
      <span class="visitor-mode" data-i18n="welcome">Welcome</span>
    </div>

    <div class="visitor-stats">
      <div class="visitor-stat"><strong id="busuanzi_value_site_pv">—</strong><span data-i18n="totalPv">Total page views</span></div>
      <div class="visitor-stat"><strong id="busuanzi_value_site_uv">—</strong><span data-i18n="uniqueVisitors">Unique visitors</span></div>
      <div class="visitor-stat"><strong id="busuanzi_value_page_pv">—</strong><span data-i18n="thisPage">This page</span></div>
    </div>

    <div class="visitor-dashboard">
      <article class="visitor-card">
        <h3 data-i18n="dailyVisits">Daily Visits</h3>
        <p data-i18n="dailyVisitsText">Visit trends are recorded to understand how this page reaches readers over time.</p>
      </article>
      <article class="visitor-card">
        <h3 data-i18n="visitorRegions">Visitor Regions</h3>
        <p data-i18n="visitorRegionsText">Regional footprints help me learn where visitors come from and how this page connects with a broader research community.</p>
      </article>
    </div>
  </section>

  <p class="footer-note">© 2026 Yuyang Gao</p>
</div>

<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
  const translations = {
    en: {
      eyebrow: '♦ Embodied AI · Self-Driving Lab · Robotics',
      heroSubtitle: 'I am a senior undergraduate student in Automation at Dalian University of Technology and an incoming M.S. student in Computer Science at Peking University. My work centers on embodied AI, robot manipulation, and self-driving laboratories — building agents that can perceive, plan, execute, and reflect in real experimental environments.',
      email: 'Email', cv: 'CV', transcript: 'Transcript', wechat: 'WeChat',
      researchTaste: 'Research taste', researchTasteText: 'Long-horizon autonomy, real-world feedback, and robots that learn while acting.',
      suit1Title: 'Embodied Intelligence', suit1Text: 'Turning language-level goals into grounded robotic execution.',
      suit2Title: 'Closed-loop Science', suit2Text: 'Using physical feedback to make experiments measurable and adaptive.',
      suit3Title: 'Robot Manipulation', suit3Text: 'Skill abstraction, precise pouring, grasping, and long-horizon operations.',
      suit4Title: 'Agentic Systems', suit4Text: 'Planning, execution logs, reflection, and stateful replanning.',
      aboutKicker: 'About',
      aboutText: 'I am interested in robotic systems that can live and operate in the real world for extended periods — not merely executing isolated instructions, but continuously interacting with their environments, accumulating experience from physical feedback, and improving their behavior over time. More broadly, I hope to study how robots can become long-horizon, self-improving embodied agents: systems that perceive changing environments, act with reliable skills, reflect on outcomes, and adapt across tasks. My current work uses wet-lab experimentation as a concrete testbed for this vision, building agent-based closed-loop robots that connect perception, planning, execution, and reflection into a repeatable pathway toward continual autonomy.',
      tag1: '♦ Long-Horizon Autonomy', tag2: '♥ Real-World Learning', tag3: '♠ Embodied Agents', tag4: '♣ Closed-Loop Robotics',
      projectsKicker: 'Selected Projects', projectsTitle: 'Research in action', projectsIntro: 'Selected work on embodied agents, robot manipulation, multimodal perception, and closed-loop experimental systems.',
      project1Label: '♥ Closed-loop Wet Lab', project1Title: 'Agent-Based Closed-Loop Embodied Experimental System', project1Text: 'A robotic experimental platform built around perception, planning, execution, and reflection. It uses sensor feedback such as mass, pH, and conductivity to support adaptive long-horizon scientific workflows.', miniEmbodied: 'Embodied AI', miniSdl: 'Self-Driving Lab',
      project2Label: '♠ Imitation Learning', tsinghuaShort: 'Tsinghua', project2Title: 'Dual-Arm Robot Manipulation with Imitation Learning', project2Text: 'Tuned ACT-style policies with privileged simulation information, combined simulated and real-world data, and improved manipulation success through multi-source learning.', miniRobotLearning: 'Robot Learning',
      project3Label: '♦ Autonomous Racing', nationalSecond: 'National 2nd Prize', project3Title: '2D SLAM Autonomous Mapping and Racing', project3Text: 'Processed LiDAR observations for cone detection, built occupancy-grid maps, and used TEB planning to support autonomous high-speed navigation.',
      project4Label: '♣ Perception Pipeline', robotics: 'Robotics', project4Title: 'VLM–Pointing–SAM–Pose Pipeline', project4Text: 'A multimodal perception chain that converts scene understanding into executable object poses, combining vision-language reasoning, pixel-level target localization, segmentation, and depth-based 3D pose solving.',
      journeyKicker: 'Academic Journey', journeyTitle: 'Education & research experience', journeyIntro: 'My academic path across automation, artificial intelligence, computer science, and robotics.',
      pkuTitle: 'Peking University · School of Computer Science', pkuText: 'Incoming M.S. student in Computer Science; research intern on robotic perception, manipulation, and closed-loop experimental systems.', pkuTime: '2025–Now',
      thuTitle: 'Tsinghua University · AI Industry Research Institute', thuText: 'Research intern on dual-arm manipulation and imitation learning, combining simulation data with real-world robot demonstrations.', thuTime: 'Jan–Apr 2025',
      dlutTitle: 'Dalian University of Technology · Automation', dlutText: 'Bachelor student; GPA 94.6; ranked 1st out of 162 students; national scholarship recipient.',
      honorsKicker: 'Honors & Beyond', honorsTitle: 'Honors, interests, and life', awardsTitle: 'Honors & Awards',
      award1: '<strong>2025</strong> · National College Student Intelligent Vehicle Competition, ROS Group · National Second Prize',
      award2: '<strong>2025 & 2024</strong> · National Scholarship',
      award3: '<strong>2024</strong> · National College Student Mathematical Modeling Competition · National Second Prize',
      award4: '<strong>2024</strong> · Interdisciplinary Contest in Modeling · Finalist',
      beyondTitle: 'Beyond Research', beyondText: 'Outside academia, I enjoy photography, outdoor exploration, music, hardware tinkering, and electronics. These hobbies keep me close to the physical world — the same world where robots eventually have to act.',
      photography: 'Photography', saxophone: 'Saxophone', hardware: 'Hardware',
      visitorTitle: 'Visitor Record', visitorIntro: 'Thank you for visiting my academic homepage.', welcome: 'Welcome', totalPv: 'Total page views', uniqueVisitors: 'Unique visitors', thisPage: 'This page',
      dailyVisits: 'Daily Visits', dailyVisitsText: 'Visit trends are recorded to understand how this page reaches readers over time.', visitorRegions: 'Visitor Regions', visitorRegionsText: 'Regional footprints help me learn where visitors come from and how this page connects with a broader research community.'
    },
    zh: {
      eyebrow: '♦ 具身智能 · 自驱动实验室 · 机器人',
      heroSubtitle: '我目前就读于大连理工大学自动化专业，即将进入北京大学计算机科学与技术专业攻读硕士学位。我的研究聚焦于具身智能、机器人操作与自驱动实验室，致力于构建能够在真实实验环境中感知、规划、执行并反思的智能体系统。',
      email: '邮箱', cv: '简历', transcript: '成绩单', wechat: '微信',
      researchTaste: '研究取向', researchTasteText: '长时程自主、真实世界反馈，以及在行动中学习的机器人。',
      suit1Title: '具身智能', suit1Text: '将语言层面的目标转化为真实世界中的机器人执行。',
      suit2Title: '闭环科学', suit2Text: '利用物理反馈，使实验过程可测量、可调整、可自适应。',
      suit3Title: '机器人操作', suit3Text: '面向长时程任务的技能抽象、精确倾倒、抓取与操作。',
      suit4Title: '智能体系统', suit4Text: '面向真实执行日志、结果反思与状态化重规划的自主系统。',
      aboutKicker: '关于我',
      aboutText: '我感兴趣的是能够在真实世界中长时间运行的机器人系统：它们不只是执行孤立的预定义指令，而是能够持续与环境交互，从物理反馈中积累经验，并随着时间不断改进行为。更宏观地说，我希望研究机器人如何成为长时程、自我改进的具身智能体：能够感知变化的环境，依靠可靠技能完成行动，反思执行结果，并在不同任务中持续适应。当前，我以湿实验场景作为这一愿景的具体试验场，构建基于智能体的闭环机器人系统，将感知、规划、执行与反思连接为一条可重复、可扩展的自主实验路径。',
      tag1: '♦ 长时程自主', tag2: '♥ 真实世界学习', tag3: '♠ 具身智能体', tag4: '♣ 闭环机器人',
      projectsKicker: '代表项目', projectsTitle: '研究实践', projectsIntro: '以下工作围绕具身智能体、机器人操作、多模态感知与闭环实验系统展开。',
      project1Label: '♥ 闭环湿实验', project1Title: '基于智能体的闭环具身实验系统', project1Text: '一个围绕感知、规划、执行与反思构建的机器人实验平台。系统利用质量、pH、电导率等传感反馈，支持自适应的长时程科学实验流程。', miniEmbodied: '具身智能', miniSdl: '自驱动实验室',
      project2Label: '♠ 模仿学习', tsinghuaShort: '清华', project2Title: '基于模仿学习的双臂机器人操作', project2Text: '调试 ACT 风格策略，引入仿真中的特权信息，结合仿真数据与真实机器人数据，通过多源学习提升真实操作成功率。', miniRobotLearning: '机器人学习',
      project3Label: '♦ 自主竞速', nationalSecond: '国家二等奖', project3Title: '二维 SLAM 自主建图与竞速', project3Text: '处理激光雷达观测以检测锥桶位置，构建占据栅格地图，并利用 TEB 规划支持高速自主导航。',
      project4Label: '♣ 感知链路', robotics: '机器人', project4Title: 'VLM–Pointing–SAM–Pose 感知与位姿解算链路', project4Text: '一个将场景理解转化为可执行物体位姿的多模态感知链路，结合视觉语言推理、像素级目标定位、分割与基于深度的三维位姿求解。',
      journeyKicker: '学术经历', journeyTitle: '教育与科研经历', journeyIntro: '我的学术经历横跨自动化、人工智能、计算机科学与机器人方向。',
      pkuTitle: '北京大学 · 计算机学院', pkuText: '即将攻读计算机科学与技术硕士；曾围绕机器人感知、操作与闭环实验系统开展科研实习。', pkuTime: '2025–至今',
      thuTitle: '清华大学 · 人工智能产业研究院', thuText: '围绕双臂机器人操作与模仿学习开展科研实习，结合仿真数据与真实机器人示教数据进行多源学习。', thuTime: '2025.01–2025.04',
      dlutTitle: '大连理工大学 · 自动化', dlutText: '本科生；GPA 94.6；专业排名 1/162；曾获国家奖学金。',
      honorsKicker: '荣誉与生活', honorsTitle: '荣誉、兴趣与生活', awardsTitle: '荣誉奖项',
      award1: '<strong>2025</strong> · 全国大学生智能汽车竞赛 ROS 组 · 国家二等奖',
      award2: '<strong>2025 & 2024</strong> · 国家奖学金',
      award3: '<strong>2024</strong> · 全国大学生数学建模竞赛 · 国家二等奖',
      award4: '<strong>2024</strong> · 美国大学生数学建模竞赛 ICM · Finalist',
      beyondTitle: '科研之外', beyondText: '科研之外，我喜欢摄影、户外、音乐、硬件与电子制作。这些兴趣让我始终与真实的物理世界保持连接，而这也正是机器人最终需要行动的世界。',
      photography: '摄影', saxophone: '萨克斯', hardware: '硬件',
      visitorTitle: '访客记录', visitorIntro: '感谢你访问我的学术主页。', welcome: '欢迎', totalPv: '总浏览量', uniqueVisitors: '独立访客', thisPage: '本页浏览',
      dailyVisits: '每日访问', dailyVisitsText: '访问趋势可以帮助我了解主页如何随着时间触达更多读者。', visitorRegions: '访客地区', visitorRegionsText: '地区足迹可以帮助我了解访问者来自哪里，以及这个主页如何连接更广泛的研究社区。'
    }
  };

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dictionary[key]) node.innerHTML = dictionary[key];
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('homepage-language', lang);
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  setLanguage(localStorage.getItem('homepage-language') || 'en');
</script>
