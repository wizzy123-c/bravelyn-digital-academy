import '@/app/globals.css';
import { programmes } from '@/data/programmes';
import { ContactForm } from '@/components/contact-form';

const faqs = [
  {
    question: 'Who are the programmes for?',
    answer:
      'Programmes are intended for graduates, early-career professionals, career changers, aspiring virtual assistants, freelancers, small business owners and creators who want practical digital skills.'
  },
  {
    question: 'Are the courses online?',
    answer:
      'Yes. Bravelyn is positioned as an online academy. Delivery format, live sessions, recordings and support options will be confirmed before enrolment.'
  },
  {
    question: 'How much do courses cost?',
    answer:
      'Each listed programme is priced at GHS 50. The price can be converted in the website pricing selector for convenience, but the final amount may vary by exchange rate and provider fees.'
  },
  {
    question: 'Will I complete practical projects?',
    answer:
      'Yes. The learning model is designed around guided practice, assignments, feedback and portfolio-ready outcomes.'
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Bravelyn Digital Academy home">
            <span className="brand-mark">B</span>
            <span className="brand-text">Bravelyn</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#programmes">Programmes</a>
            <a href="#about">About</a>
            <a href="#learning">How it works</a>
            <a href="#faq">FAQs</a>
            <a href="#contact" className="primary-link">Enquire now</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Practical online learning</span>
            <h1>
              Learn practical skills.<br />
              <span>Build real proof.</span>
            </h1>
            <p className="lead">
              Build confidence in digital work with guided training, hands-on assignments and
              portfolio-ready projects. Learn practical skills you can demonstrate, not just course content you can describe.
            </p>
            <div className="hero-actions">
              <a href="#programmes" className="btn btn-primary">Explore programmes</a>
              <a href="#contact" className="btn btn-secondary">Talk to the academy</a>
            </div>
            <p className="small-note">Online learning for aspiring digital professionals, career changers, freelancers and business owners.</p>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <span className="mini-label">Skills that become evidence</span>
              <h2>Learn it. Practise it. Show it.</h2>
              <div className="pill-list">
                <span>Digital admin</span>
                <span>AI & websites</span>
                <span>Career branding</span>
                <span>Creative media</span>
                <span>Online growth</span>
              </div>
            </div>
            <div className="floating-tag">Your skills. Your work. Your proof.</div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container trust-grid">
          <div><strong>Hands-on assignments</strong><span>Practise with purposeful tasks</span></div>
          <div><strong>Guided learning</strong><span>Build skills with feedback</span></div>
          <div><strong>Portfolio-focused</strong><span>Create work you can demonstrate</span></div>
        </div>
      </div>

      <section id="programmes" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Explore our programmes</span>
            <h2>Practical skills for a digital world</h2>
            <p>Choose a learning track that matches your goals. Each programme is designed around practical work and a tangible project you can use to show your learning.</p>
          </div>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article key={programme.name} className={`programme-card ${programme.featured ? 'featured' : ''}`}>
                <div className="programme-icon" aria-hidden="true">{programme.icon}</div>
                <h3>{programme.name}</h3>
                <div className="price-row">
                  <strong>GH₵{programme.price.toFixed(2)}</strong>
                  <span>GHS</span>
                  <span>per programme</span>
                </div>
                <p>{programme.description}</p>
                <div className="outcome-box">
                  <strong>Practical outcome:</strong> {programme.outcome}
                </div>
                <a href="#contact" className="programme-link">Enquire about this course →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="about">
        <div className="container two-col">
          <div className="mission-panel">
            <h3>Our promise to learners</h3>
            <p className="mission-quote">“Every learner should leave with more than notes: a skill they have practised, feedback they can use and work they can show.”</p>
            <p>Bravelyn is built around practical learning, supportive guidance and honest communication about outcomes.</p>
          </div>

          <div className="about-copy">
            <span className="section-kicker">About Bravelyn</span>
            <h2>Turn curiosity into capability.</h2>
            <p>
              Bravelyn Digital Academy is an online learning brand focused on practical digital,
              creative, AI-enabled and career-development skills. We help learners build confidence
              through structured learning, guided projects and portfolio-focused practice.
            </p>
            <div className="value-grid">
              <div><strong>Practicality</strong><span>Skills learners can apply.</span></div>
              <div><strong>Integrity</strong><span>Honest outcomes.</span></div>
              <div><strong>Accessibility</strong><span>Clear, supportive guidance.</span></div>
              <div><strong>Creativity</strong><span>Original thinking and exploration.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="learning">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">How learning works</span>
            <h2>Learn with a clear path from lesson to portfolio</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card"><span>STEP 01</span><h3>Learn the essentials</h3><p>Build a foundation with structured lessons and demonstrations.</p></article>
            <article className="step-card"><span>STEP 02</span><h3>Practise with purpose</h3><p>Apply concepts to realistic tasks and assignments.</p></article>
            <article className="step-card"><span>STEP 03</span><h3>Use feedback</h3><p>Refine your work through clear guidance and improvement loops.</p></article>
            <article className="step-card"><span>STEP 04</span><h3>Show what you can do</h3><p>Create a portfolio piece that demonstrates your learning.</p></article>
          </div>
        </div>
      </section>

      <section className="section soft" id="faq">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Good to know</span>
            <h2>Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="section-kicker">Contact us</span>
            <h2>Let’s talk about your learning goals.</h2>
            <p>Ask about a programme, request course information or tell us the skills you want to develop.</p>

            <div className="contact-row">
              <span className="symbol">@</span>
              <div><strong>Email</strong><a href="mailto:wisdomkwametorku123@gmail.com">wisdomkwametorku123@gmail.com</a></div>
            </div>
            <div className="contact-row">
              <span className="symbol">☎</span>
              <div><strong>Phone</strong><a href="tel:+233541235232">+233 54 123 5232</a></div>
            </div>
            <div className="contact-row">
              <span className="symbol">⌖</span>
              <div><strong>Address</strong><span>GW-0578-8249, Accra, Ghana</span></div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
