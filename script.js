:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-soft: #edf5fb;
  --navy: #0f172a;
  --navy-soft: #1e293b;
  --teal: #1ab4bf;
  --teal-soft: rgba(26, 180, 191, 0.12);
  --amber: #f4c96d;
  --text: #172033;
  --muted: #5b6b7d;
  --border: rgba(15, 23, 42, 0.08);
  --shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #f8fafc 0%, #eef3f9 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, 92%);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-text strong {
  font-size: 1.08rem;
  font-weight: 800;
  color: var(--navy);
}

.brand-text small {
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.nav-links a {
  font-size: 0.96rem;
  font-weight: 600;
  color: var(--navy);
}

.nav-signin {
  color: var(--navy-soft);
}

.nav-cta {
  background: var(--navy);
  color: #fff !important;
  padding: 0.72rem 1.1rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--navy);
  cursor: pointer;
}

.hero {
  padding: 72px 0 52px;
  background: radial-gradient(circle at top right, rgba(26, 180, 191, 0.12), transparent 24%), linear-gradient(180deg, #f9fbfd 0%, #f3f7fb 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow,
.kicker {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  font-weight: 800;
}

.hero-copy h1 {
  margin: 0.7rem 0 1rem;
  font-size: clamp(2.7rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  color: var(--navy);
}

.hero-copy h1 span {
  color: var(--teal);
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.06rem;
}

.hero-actions {
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.35rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--navy);
  color: #fff;
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: #fff;
  color: var(--navy);
  border: 1px solid var(--border);
}

.btn-block {
  width: 100%;
}

.full-width {
  width: 100%;
}

.hero-meta {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.hero-meta div {
  display: flex;
  flex-direction: column;
}

.hero-meta strong {
  font-size: 1.45rem;
  color: var(--navy);
}

.hero-meta span {
  font-size: 0.8rem;
  color: var(--muted);
}

.hero-card {
  position: relative;
  min-height: 330px;
  padding: 1.8rem;
  background: linear-gradient(180deg, #f4f8fc 0%, #edf8fb 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tag {
  display: inline-block;
  background: var(--teal-soft);
  color: var(--navy);
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-card-top h3 {
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  line-height: 1.2;
  color: var(--navy);
}

.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
}

.mini-tags span {
  display: inline-block;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--navy);
}

.hero-badge {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: var(--navy);
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.trust-bar {
  background: linear-gradient(90deg, #0f172a, #102a43);
  color: #fff;
  padding: 1.15rem 0;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.trust-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
}

.trust-item strong {
  font-size: 1rem;
}

.trust-item span {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
}

.section {
  padding: 88px 0;
}

.section-head {
  max-width: 760px;
  margin: 0 auto 2.2rem;
  text-align: center;
}

.section-head.left {
  text-align: left;
  margin: 0 0 1.25rem;
}

.section-head h2 {
  margin: 0.7rem 0 0.5rem;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  color: var(--navy);
}

.section-head p {
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
}

.programmes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.programme-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.6rem;
  box-shadow: var(--shadow);
}

.programme-card.featured {
  background: linear-gradient(180deg, #ebfbfd, #f6f9fc);
  border-color: rgba(26, 180, 191, 0.18);
}

.programme-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: var(--teal-soft);
  color: var(--teal);
  font-size: 1.7rem;
  font-weight: 900;
}

.programme-card h3 {
  margin: 1rem 0 0.8rem;
  color: var(--navy);
  font-size: 1.42rem;
}

.price {
  display: flex;
  align-items: end;
  gap: 0.45rem;
  margin-bottom: 0.8rem;
}

.price strong {
  font-size: 2rem;
  color: var(--navy);
  line-height: 1;
}

.price span {
  color: var(--muted);
  margin-bottom: 0.2rem;
  font-weight: 700;
}

.programme-card p {
  margin: 0;
  color: var(--muted);
}

.programme-outcome {
  margin-top: 1rem;
  color: var(--navy);
  line-height: 1.5;
}

.card-link {
  display: inline-block;
  margin-top: 1.2rem;
  color: var(--navy);
  font-weight: 800;
}

.split-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.mission-panel {
  background: linear-gradient(180deg, #f4fbff, #eef5ff);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.8rem;
  box-shadow: var(--shadow);
}

.mission-panel h3 {
  margin: 0.8rem 0 0.9rem;
  color: var(--navy);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.2;
}

.mission-panel p {
  margin: 0;
  color: var(--muted);
}

.about-content p {
  color: var(--muted);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.list-dot {
  width: 12px;
  height: 12px;
  background: var(--teal);
  border-radius: 50%;
  margin-top: 0.45rem;
  flex-shrink: 0;
}

.feature-list strong {
  color: var(--navy);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.step-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.4rem;
  box-shadow: var(--shadow);
}

.step-label {
  display: inline-block;
  background: var(--teal-soft);
  color: var(--navy);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 0.8rem;
}

.step-card h3 {
  margin: 0 0 0.75rem;
  color: var(--navy);
  font-size: 1.28rem;
}

.step-card p {
  margin: 0;
  color: var(--muted);
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.faq-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.1rem 1.2rem;
  box-shadow: var(--shadow);
}

.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
  color: var(--navy);
  font: inherit;
  font-weight: 800;
  padding: 0;
}

.faq-toggle {
  color: var(--teal);
  font-size: 1.5rem;
}

.faq-answer {
  display: none;
  margin-top: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
}

.faq-item.active .faq-answer {
  display: block;
}

.cta-band {
  background: linear-gradient(135deg, var(--navy), #143c67);
  border-radius: var(--radius);
  padding: 2rem;
  color: var(--panel);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: var(--shadow);
}

.kicker.light {
  color: rgba(255, 255, 255, 0.82);
}

.cta-band h2 {
  margin: 0.7rem 0 0.5rem;
  color: #fff;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
}

.cta-band p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.site-footer {
  background: #0d1d30;
  color: #fff;
  padding: 3rem 0 1.2rem;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-brand {
  max-width: 460px;
}

.footer-brand p {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.72);
}

.footer-links {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.footer-links h3 {
  margin: 0 0 1rem;
  font-size: 1rem;
  color: #fff;
}

.footer-links a {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.78);
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.back-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background: var(--navy);
  color: #fff;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
  display: none;
}

.back-top.show {
  display: grid;
  place-items: center;
}

.auth-page {
  min-height: calc(100vh - 82px);
  display: grid;
  place-items: center;
  padding: 60px 0;
}

.auth-shell {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.auth-visual {
  background: linear-gradient(135deg, var(--navy), #173a5c);
  color: #fff;
  padding: 52px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-kicker {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: #dfeef5;
  margin-bottom: 12px;
}

.auth-visual h1 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.auth-visual p,
.auth-visual li {
  color: rgba(255, 255, 255, 0.8);
}

.auth-visual ul {
  margin: 0;
  padding-left: 18px;
}

.auth-card {
  padding: 40px 32px;
  background: #fff;
}

.auth-header {
  margin-bottom: 1.5rem;
}

.auth-header h2 {
  margin: 0.7rem 0 0;
  color: var(--navy);
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.google-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #dfe7ef;
  background: #fff;
  color: var(--navy);
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(13, 32, 56, 0.02);
}

.google-icon {
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #f0f4f8;
  font-weight: 900;
  font-size: 0.7rem;
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.divider::before,
.divider::after {
  content: "";
  display: block;
  height: 1px;
  background: var(--border);
  flex: 1;
}

#signinForm,
#signupForm {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--navy);
}

.field input,
.field textarea,
.field select {
  width: 100%;
  border: 1px solid #dfe7ef;
  border-radius: 12px;
  background: #f9fbfd;
  padding: 12px 14px;
  color: var(--text);
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: 2px solid rgba(26, 180, 191, 0.15);
  border-color: var(--teal);
}

.auth-row,
.terms-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--muted);
}

.auth-row a,
.auth-switch a {
  color: var(--teal);
  font-weight: 700;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}

.terms-row {
  justify-content: flex-start;
  margin-top: 4px;
}

.auth-switch {
  margin: 20px 0 0;
  text-align: center;
  color: var(--muted);
}

.status {
  min-height: 24px;
  font-size: 0.92rem;
  font-weight: 700;
  margin-top: 0.25rem;
}

.status.success {
  color: #0d8b58;
}

.status.error {
  color: #c53a32;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.2rem;
}

.field.full {
  grid-column: 1 / -1;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

.contact-copy h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.1;
  color: var(--navy);
}

.contact-copy p {
  color: var(--muted);
}

.contact-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.contact-card h3 {
  margin: 0;
  color: var(--navy);
  font-size: 1.5rem;
}

.contact-card > p {
  margin: 0.5rem 0 1.2rem;
  color: var(--muted);
}

.contact-meta {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 1rem;
}

.contact-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--teal-soft);
  color: var(--navy);
  font-weight: 800;
}

.consent {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--muted);
}

.submit-row {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-note {
  color: var(--muted);
  font-size: 0.82rem;
}

.form-status {
  grid-column: 1 / -1;
  display: none;
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  font-size: 0.92rem;
  font-weight: 700;
}

.form-status.show {
  display: block;
}

.form-status.success {
  background: rgba(13, 139, 88, 0.1);
  color: #0d8b58;
}

.form-status.error {
  background: rgba(197, 58, 50, 0.1);
  color: #c53a32;
}

.page-shell {
  min-height: calc(100vh - 82px);
}

.page-hero {
  padding: 72px 0 32px;
  background: linear-gradient(180deg, #f9fbfd 0%, #f3f7fb 100%);
}

.narrow {
  max-width: 760px;
  text-align: center;
  margin: 0 auto;
}

.narrow h1 {
  margin: 0.7rem 0 0.7rem;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  color: var(--navy);
}

.narrow p {
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
}

.dashboard-page {
  background: #f4f7fb;
}

.dashboard-header {
  position: sticky;
}

.dashboard-user {
  background: var(--teal-soft);
  color: var(--navy);
  border: 1px solid rgba(26, 180, 191, 0.2);
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  font-weight: 700;
}

.dashboard-shell {
  padding: 40px 0 80px;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.5rem;
}

.dashboard-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-panel,
.panel-card,
.welcome-panel,
.stat-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.nav-panel {
  padding: 1rem;
}

.panel-label {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  font-weight: 800;
  margin-bottom: 0.8rem;
}

.nav-panel nav {
  display: grid;
  gap: 0.5rem;
}

.nav-panel a {
  padding: 0.75rem 0.8rem;
  border-radius: 12px;
  color: var(--navy);
  font-weight: 600;
}

.nav-panel a.active,
.nav-panel a:hover {
  background: var(--teal-soft);
}

.dashboard-main {
  display: grid;
  gap: 1.5rem;
}

.welcome-panel {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.welcome-panel h1 {
  margin: 0.5rem 0 0;
  color: var(--navy);
  font-size: clamp(2rem, 3vw, 2.6rem);
  letter-spacing: -0.05em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.stat-card {
  padding: 1.2rem;
}

.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 0.85rem;
}

.stat-card strong {
  display: block;
  margin-top: 0.45rem;
  font-size: 1.9rem;
  color: var(--navy);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
}

.panel-card {
  padding: 1.4rem;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.panel-head h3 {
  margin: 0;
  color: var(--navy);
  font-size: 1.1rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 800;
}

.chip.success {
  background: rgba(13, 139, 88, 0.12);
  color: #0d8b58;
}

.chip.neutral {
  background: rgba(15, 23, 42, 0.06);
  color: var(--navy);
}

.course-summary {
  display: grid;
  gap: 1rem;
}

.mini-label {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 800;
}

.task-list {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
  line-height: 2;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .hero-grid,
  .split-layout,
  .auth-shell,
  .dashboard-layout,
  .dashboard-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .programmes-grid,
  .process-grid,
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cta-band {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav {
    position: relative;
  }

  .nav-links {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 72px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 14px;
    box-shadow: var(--shadow);
    flex-direction: column;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 10px;
  }

  .hero-actions,
  .hero-meta,
  .auth-row,
  .terms-row,
  .footer-row,
  .footer-bottom,
  .welcome-panel,
  .submit-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-actions .btn,
  .btn-block,
  .welcome-panel .btn {
    width: 100%;
  }

  .trust-grid,
  .programmes-grid,
  .process-grid,
  .feature-list,
  .stats-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .auth-card,
  .auth-visual {
    padding: 28px 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}





























