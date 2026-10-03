import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sparkles,
  BrainCircuit, Code2, Database, Rocket, ExternalLink,
  ChevronRight, Download, Terminal, Layers3
} from "lucide-react";
import "./styles.css";

const linkedin = "https://www.linkedin.com/in/shourya-gour-7125b0380/";

const projects = [
  {
    title: "SafePin",
    tag: "SIH • GovTech",
    description:
      "A centralized post-death document coordination platform designed to reduce paperwork, coordinate departmental actions, and help protect a deceased person's digital identity.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "AI"],
    accent: "cyan"
  },
  {
    title: "Deep Learning Optimization",
    tag: "Deep Learning",
    description:
      "A PyTorch-based classification workflow focused on reproducible training, optimization, model evaluation and experimentation on the KU-HAR dataset.",
    stack: ["Python", "PyTorch", "CNN", "Adam", "Optimization"],
    accent: "violet"
  },
  {
    title: "AI / ML Learning Lab",
    tag: "Machine Learning",
    description:
      "Hands-on experiments across data preprocessing, classification, anomaly detection, model evaluation and practical ML workflows.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML"],
    accent: "blue"
  }
];

const skills = [
  ["Machine Learning", "ML", BrainCircuit],
  ["Deep Learning", "DL", Layers3],
  ["Python", "PY", Terminal],
  ["React / Web", "WEB", Code2],
  ["Data & SQL", "DATA", Database],
  ["MLOps", "OPS", Rocket]
];

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <span className="brand-mark">SG</span>
          <span>SHOURYA<span className="muted">.DEV</span></span>
        </button>

        <nav className={open ? "nav-links mobile-open" : "nav-links"}>
          {["about", "skills", "projects", "contact"].map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item}
            </button>
          ))}
          <a href={linkedin} target="_blank" rel="noreferrer" className="nav-cta">
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </nav>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> OPEN TO BUILD & LEARN</div>
            <h1>
              Building with <span>data.</span><br />
              Learning with <span>purpose.</span>
            </h1>
            <p className="hero-text">
              I'm <strong>Shourya Gour</strong>, a Computer Science & Data Science
              undergraduate at MITS Gwalior exploring Machine Learning, Deep Learning,
              intelligent systems and modern web development.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>
                Explore my work <ChevronRight size={18} />
              </button>
              <a className="secondary" href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="quick-stats">
              <div><b>ML</b><span>Machine Learning</span></div>
              <div><b>DL</b><span>Deep Learning</span></div>
              <div><b>CSD</b><span>Computer Science</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="grid-card">
              <div className="card-top">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                <span className="terminal-title">shourya@lab:~</span>
              </div>
              <div className="code">
                <div><i>01</i><span><em>const</em> <b>focus</b> = [</span></div>
                <div><i>02</i><span className="indent">"machine-learning",</span></div>
                <div><i>03</i><span className="indent">"deep-learning",</span></div>
                <div><i>04</i><span className="indent">"data-science",</span></div>
                <div><i>05</i><span className="indent">"building"</span></div>
                <div><i>06</i><span>];</span></div>
                <div className="spacer"><i>07</i><span /></div>
                <div><i>08</i><span><em>while</em> (learning) {"{"}</span></div>
                <div><i>09</i><span className="indent">build();</span></div>
                <div><i>10</i><span className="indent">experiment();</span></div>
                <div><i>11</i><span className="indent">improve();</span></div>
                <div><i>12</i><span>{"}"}</span></div>
              </div>
              <div className="terminal-bottom">
                <span className="status-dot" /> system.ready()
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Curious by nature.<br /><span>Builder by habit.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                My interests sit at the intersection of <strong>software, data and AI</strong>.
                I enjoy taking an idea from a rough concept to a working prototype,
                especially when the project solves a practical problem.
              </p>
              <p>
                Right now, I'm strengthening my foundations in ML and Deep Learning while
                continuing to build full-stack and data-driven projects. I also enjoy
                experimenting with MLOps, recommendation systems and forecasting ideas.
              </p>
              <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">
                View full profile <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 — TOOLKIT</div>
          <div className="section-heading">
            <h2>Things I like <span>building with.</span></h2>
            <p>Technologies and areas I'm actively learning and using.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, short, Icon]) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon"><Icon size={22} /></div>
                <div><small>{short}</small><h3>{name}</h3></div>
                <ArrowUpRight className="skill-arrow" size={17} />
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 — SELECTED WORK</div>
          <div className="section-heading">
            <h2>Projects with a <span>purpose.</span></h2>
            <p>A few directions I've been exploring through hands-on development.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project-card ${p.accent}`} key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <div className="project-line" />
                <span className="project-link">View concept <ArrowUpRight size={17} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey">
          <div className="journey-box">
            <div>
              <div className="section-label">CURRENT DIRECTION</div>
              <h2>Learn. Build. <span>Ship.</span></h2>
              <p>
                From college projects to hackathons and ML experiments, the goal is simple:
                keep turning what I learn into something useful.
              </p>
            </div>
            <div className="journey-orbit">
              <div className="orbit-ring ring-1" />
              <div className="orbit-ring ring-2" />
              <div className="orbit-core">SG</div>
              <span className="orbit-label one">AI</span>
              <span className="orbit-label two">ML</span>
              <span className="orbit-label three">WEB</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">04 — CONTACT</div>
          <div className="contact-box">
            <div>
              <h2>Let's build something <span>interesting.</span></h2>
              <p>Have an idea, collaboration, internship opportunity, or just want to connect?</p>
            </div>
            <div className="contact-actions">
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="mailto:shourya.gour@example.com"><Mail size={18} /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Shourya Gour</span>
        <span>Built with React · Curiosity · Caffeine</span>
        <a href={linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
