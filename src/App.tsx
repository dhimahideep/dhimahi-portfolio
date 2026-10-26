const builds = [
  { id: "01", title: "First PR Copilot", tags: ["UI/UX", "DEV TOOL"], tone: "dark", label: "OPEN-SOURCE ISSUE INTELLIGENCE", image: "/projects/first-pr-copilot.png" },
  { id: "02", title: "Bread Pitt", tags: ["WEB DESIGN", "BRANDING"], tone: "rose", label: "PLAYFUL FOOD LANDING PAGE", image: "/projects/bread-pitt.png" },
  { id: "03", title: "SIFLens", tags: ["FIGMA", "DASHBOARD"], tone: "volt", label: "SAFETY INTELLIGENCE SYSTEM", image: "/projects/siflens.png" },
  { id: "04", title: "AI Security Field Guide", tags: ["EDITORIAL", "UI/UX"], tone: "dark", label: "POST-ASSESSMENT SECURITY BRIEF", image: "/projects/ai-security-field-guide-final.png" },
];

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 18 18 6M8 6h10v10" /></svg>
);

function BrowserArt({ build }: { build: (typeof builds)[number] }) {
  return (
    <div className={`browser-art ${build.tone}`}>
      <div className="browser-bar"><span className="dots"><i /><i /><i /></span><code>dhimahi.local/{build.id}</code><b>+</b></div>
      <div className="screen">
        <span className="screen-index">BUILD_{build.id}</span>
        {build.image && (
          <figure className={`artifact-frame artifact-${build.id}`}>
            <img src={build.image} alt={`${build.title} interface design`} />
            <figcaption>ORIGINAL UI ARTIFACT / 0{build.id}</figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <nav className="pill-nav">
        <a className="brand" href="#top">dhimahi deep<span>.</span></a>
        <div className="nav-center"><a href="#work">// WORK</a><a href="#leadership">// LEADERSHIP</a><a href="#studio">// THE ARCHIVE</a><a href="#about">// ABOUT</a></div>
        <div className="nav-right"><a className="talk" href="#contact">LET’S TALK <Arrow /></a></div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-meta"><span>CREATIVE TECHNOLOGIST</span><span>PUNE, INDIA</span></div>
        <h1><span>CODE.</span><span>DESIGN.</span><span className="outlined">MIC.</span><span className="canvas-word">CANVAS.</span></h1>
        <div className="hero-bottom">
          <div className="hero-lower">
            <p>First-Year Computer Science Undergrad at Fergusson College. Building bold web interfaces, leading campus operations, commanding the stage, and painting custom gear.</p>
            <a href="#work" className="round-arrow" aria-label="Explore work"><Arrow /></a>
          </div>
          <figure className="hero-portrait">
            <img src="/photos/professional.jpeg" alt="Dhimahi at a formal college event" />
            <figcaption>IN THE ROOM / 2025</figcaption>
          </figure>
        </div>
        <div className="sticker">EXTROVERTED BUILDER ✦<br />CURIOUS STORYTELLER</div>
        <span className="scribble">ideas with volume!</span>
      </header>

      <div className="marquee" aria-label="Areas of focus"><div>
        <span>FERGUSSON ORATORY CLUB ★ SOEC CORE MANAGEMENT ★ CUSTOM SNEAKERS &amp; WEARABLE ART ★ FRONTEND BUILDS ★ </span>
        <span>FERGUSSON ORATORY CLUB ★ SOEC CORE MANAGEMENT ★ CUSTOM SNEAKERS &amp; WEARABLE ART ★ FRONTEND BUILDS ★ </span>
      </div></div>

      <section className="leadership section" id="leadership">
        <div className="section-label"><span>[ 01 ]</span><p>LEADERSHIP<br />POWERHOUSES</p></div>
        <div className="lead-grid">
          <article className="lead-card lilac-card">
            <div className="card-top"><code>ROLE_01 / SPEAK</code><div className="icon-mic">●<i /></div></div>
            <div><p className="role">JUNIOR CLUB HEAD</p><h2>Fergusson<br />Oratory Club <em>(FOC)</em></h2><p className="desc">Turning nervous energy into stage presence—and ideas into conversations worth remembering.</p></div>
            <div className="tags"><span>PUBLIC SPEAKING</span><span>DEBATE MODERATION</span><span>STAGE ELOQUENCE</span></div>
          </article>
          <article className="lead-card volt-card">
            <div className="card-top"><code>ROLE_02 / OPERATE</code><div className="nodes"><i /><i /><i /></div></div>
            <div><p className="role">CORE MANAGEMENT TEAM</p><h2>Social Outreach &amp;<br />Enabling Centre <em>(SOEC)</em></h2><p className="desc">Making impact operational through people, planning, partnerships, and boots on the ground.</p></div>
            <div className="tags"><span>GROUND LOGISTICS</span><span>NGO TIE-UPS</span><span>COMMUNITY DRIVES</span></div>
          </article>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="work-title"><p>[ 02 ] SELECTED BUILDS</p><h2>&amp; RAW<br /><span>ARTIFACTS.</span></h2><p className="side-note">not just case studies—<br />the actual messy stuff ↗</p></div>
        <div className="build-grid">
          {builds.map((build, index) => (
            <article className={`build-card card-${index + 1}`} key={build.id}>
              <BrowserArt build={build} />
              <div className="build-info"><div><div className="tags">{build.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{build.title}</h3><p>{build.label}</p></div><a href="#contact">EXPAND <Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio section" id="studio">
        <div className="studio-head">
          <div><code>[ 03 ] TANGIBLE STUDIO</code><h2>WEARABLE ART &amp;<br /><span>CANVAS ARCHIVE.</span></h2></div>
          <p>// HAND-PAINTED SNEAKERS,<br />HOODIES, TEES &amp; CANVASES</p>
        </div>
        <div className="specimen-grid">
          <article className="specimen sneaker-specimen"><span className="spec-code">CRAFT_01 / CUSTOM</span><h3>HAND-PAINTED<br />SNEAKERS</h3><p>custom concepts / acrylic / wearable stories</p><i className="corner-tape" /></article>
          <article className="specimen textile-specimen"><span className="spec-code">CRAFT_02 / TEXTILE</span><h3>HOODIES<br />&amp; TEES</h3><p>one-of-one graphics / painted by hand</p><i className="corner-tape" /></article>
          <article className="specimen canvas-specimen"><span className="spec-code">CRAFT_03 / PHYSICAL</span><h3>CANVAS<br />STUDIES</h3><p>color experiments / mixed-media explorations</p><i className="corner-tape" /></article>
        </div>
        <p className="studio-note">documentation coming when<br />the next piece is ready ↗</p>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <code>[ 04 ] THE PERSON IN THE PROCESS</code>
          <h2>I BUILD LOUD.<br /><span>I LISTEN HARD.</span></h2>
          <p>I’m an extroverted builder, plant parent, flavor hunter, and lifelong collector of stories. Some are told on stage, some in code, and some painted straight onto a pair of sneakers.</p>
          <p>Six years of Bharatnatyam taught me rhythm, precision, and presence. Oratory made me fearless in a room. Community work made me practical. Together, they shape how I build: structured like choreography, expressive like a speech, and always made for real people.</p>
          <div className="curiosities">
            <div className="curiosity stamp-card"><b>STAMP<br />COLLECTOR</b><span>PHILATELY / 01</span></div>
            <div className="curiosity dance-card"><b>6 YRS OF<br />BHARATNATYAM</b><span>DISCIPLINE / 02</span></div>
            <div className="curiosity plant-card"><b>PLANT &amp;<br />GARDEN CARE</b><span>GROWTH / 03</span></div>
            <div className="curiosity food-card"><b>PROFESSIONAL<br />FOODIE</b><span>FLAVOR / 04</span></div>
          </div>
        </div>
        <div className="scrapbook">
          <div className="polaroid photo-b"><i className="tape" /><div><img src="/photos/casual-campus.jpeg" alt="Dhimahi beneath flowering trees on campus" /><span>01 / CAMPUS</span></div><p>between classes & ideas</p></div>
          <div className="polaroid photo-c"><i className="tape" /><div><img src="/photos/semi-professional.jpeg" alt="Dhimahi dressed for an evening event" /><span>02 / AFTER HOURS</span></div><p>showing up, always</p></div>
          <div className="polaroid photo-d"><i className="tape" /><div><img src="/photos/casual-closeup.jpeg" alt="A candid close-up of Dhimahi" /><span>03 / CANDID</span></div><p>desk mess energy</p></div>
          <span className="photo-note">three modes,<br />same energy ↗</span>
        </div>
      </section>

      <section className="skills section">
        <div className="skill-head"><code>[ 05 ] CAPABILITY MATRIX</code><h2>WHAT I BRING<br />TO THE <span>TABLE.</span></h2></div>
        <div className="bento">
          <article className="bento-ui"><span>01 / DESIGN + EDIT</span><h3>CREATIVE<br />SYSTEMS</h3><div className="tags"><b>FIGMA</b><b>WIREFRAMING</b><b>DAVINCI RESOLVE</b><b>ADOBE STUDIO</b><b>MICRO-INTERACTIONS</b></div></article>
          <article className="bento-code"><span>02 / FRONTEND + CORE CS</span><h3>&lt;BUILD /&gt;</h3><div className="code-list"><p>HTML5</p><p>MODERN CSS</p><p>JAVASCRIPT BASICS</p><p>C++ FUNDAMENTALS</p></div></article>
          <article className="bento-human"><span>03 / HUMAN + STAGE STACK</span><h3>PEOPLE.<br />ENERGY.<br /><em>IMPACT.</em></h3><div className="tags"><b>ORATORY</b><b>EVENT LOGISTICS</b><b>PUBLIC RELATIONS</b><b>GROUND OPERATIONS</b></div></article>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-kicker"><span>YOUR MOVE ↘</span><code>OPEN FOR COLLABORATIONS / PROJECTS / CONVERSATIONS</code></div>
        <h2>HAVE A VISION?<br /><span>DON’T BE A STRANGER.</span></h2>
        <a className="email-pill" href="https://mail.google.com/mail/?view=cm&fs=1&to=deepdhimahi@gmail.com" target="_blank" rel="noreferrer"><span>deepdhimahi@gmail.com</span><b>EMAIL ME ↗</b></a>
        <div className="footer-bottom"><div><a href="https://www.linkedin.com/in/dhimahideep/" target="_blank" rel="noreferrer">[ LINKEDIN ]</a><a href="https://github.com/dhimahideep" target="_blank" rel="noreferrer">[ GITHUB ]</a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhatt.pragya01@gmail.com" target="_blank" rel="noreferrer">[ ALT EMAIL ]</a></div><code>BASED IN PUNE, MH — 18.5204° N, 73.8567° E</code><p>© 2025 DHIMAHI DEEP</p></div>
      </footer>
    </main>
  );
}
