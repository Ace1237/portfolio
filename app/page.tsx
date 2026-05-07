const featuredWork = [
  {
    title: 'The Liquidity Gravity Thesis',
    category: 'Deep-Dive Thread',
    outcome: '58k+ impressions · 1.9k saves',
    year: '2026',
  },
  {
    title: 'Narrative vs. Fundamentals in Alt-L1 Cycles',
    category: 'Research Essay',
    outcome: 'Referenced by 7 ecosystem teams',
    year: '2026',
  },
  {
    title: 'A Practical Framework for Token Utility',
    category: 'Educational Thread',
    outcome: 'Used by founders for token design reviews',
    year: '2025',
  },
];

const pillars = [
  {
    heading: 'Research',
    text: 'On-chain evidence, protocol design analysis, and market structure context.',
  },
  {
    heading: 'Writing',
    text: 'High-clarity threads engineered for retention, shares, and actionable insight.',
  },
  {
    heading: 'Strategy',
    text: 'Narrative positioning for founders, teams, and ecosystem communication.',
  },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="hero block">
        <p className="meta">Web3 Researcher · Thread Writer</p>
        <h1>Signals over noise.</h1>
        <p className="intro">
          I translate complex crypto ecosystems into elegant, data-backed stories that help people
          think better and move faster.
        </p>
      </header>

      <section className="block statement">
        <p>
          My work sits at the intersection of on-chain research, narrative design, and educational
          writing. Every piece is built for <span>clarity</span>, <span>conviction</span>, and <span>action</span>.
        </p>
      </section>

      <section className="block">
        <div className="section-top">
          <p className="meta">Core Pillars</p>
        </div>
        <div className="pillars">
          {pillars.map((pillar) => (
            <article key={pillar.heading} className="pillar">
              <h2>{pillar.heading}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="section-top spaced">
          <p className="meta">Selected Work</p>
          <p className="caption">Case studies in signal-rich storytelling.</p>
        </div>
        <div className="work-list">
          {featuredWork.map((item) => (
            <article key={item.title} className="work-item">
              <div>
                <p className="meta">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="caption">{item.outcome}</p>
              </div>
              <p className="year">{item.year}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block contact">
        <p className="meta">Let’s Build Signal Together</p>
        <p className="intro">Available for research partnerships, advisory, and writing collaborations.</p>
        <a href="mailto:you@domain.com">you@domain.com</a>
      </section>
    </main>
  );
}
