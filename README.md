# Bravelyn Digital Academy

Bravelyn Digital Academy is a modern learning brand website for digital, creative, and AI-enabled skills. The project includes a marketing site, accessible course pages, sign-in and sign-up flows, and Firebase-powered authentication for a production-ready learner experience.

## Highlights

- Responsive landing page and course marketing pages
- Clear navigation for Home, Programmes, About, Learning, FAQs, and Contact
- Email/password and Google sign-in flows powered by Firebase Auth
- Dashboard experience for signed-in learners
- Enquiry form that opens a prefilled email draft
- Production-oriented styling and copy for a polished launch-ready experience

## Project structure

- `index.html` – landing page
- `about.html` – brand story and mission
- `programmes.html` – programme overview
- `learning.html` – learning journey and process
- `faq.html` – frequently asked questions
- `contact.html` – contact and enquiry page
- `signin.html` – sign-in page
- `signup.html` – sign-up page
- `dashboard.html` – authenticated learner dashboard
- `styles.css` – global styling and layout
- `script.js` – interaction logic, navigation, auth, and UI behaviour

## Local development

1. Clone the repository.
2. Open the project in a local web server, for example:
   ```bash
   cd bravelyn-digital-academy
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your browser.

## Firebase production setup checklist

Before launch, complete the following:

- Create or verify the Firebase project in the Firebase Console
- Enable Authentication
- Enable Email/Password and Google sign-in providers
- Add your app domain to the authorized domains list
- Confirm the Firebase web config values match the active project
- Ensure the project is connected to the correct app ID and project ID
- Test sign-up, sign-in, Google auth, and protected route flow in production mode
- Remove any development-only or mock auth logic before deployment

For a detailed production checklist, see `docs/firebase-production-checklist.md`.

## Launch checklist

Use the launch checklist in `docs/launch-checklist.md` before making the site public.

## Production notes

- This project is intended for real Firebase authentication and a live public deployment.
- Use official contact details and approved branding only.
- Keep copy consistent, clear, and professional across all pages.
- Do not ship with demo content, mock auth flows, or placeholder credentials.

## Branding

The brand name should remain consistent throughout the site:

Bravelyn Digital Academy

## Support and contact

For enquiries, use the official contact route or business email configured in the project.
