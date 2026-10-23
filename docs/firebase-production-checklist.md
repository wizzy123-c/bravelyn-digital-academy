# Bravelyn Digital Academy – Firebase Production Checklist

Use this checklist before launching the site publicly.

## 1. Firebase project setup

- [ ] Create the Firebase project in the Firebase Console
- [ ] Confirm the correct Google Cloud / Firebase project is selected
- [ ] Enable Authentication
- [ ] Enable Email/Password sign-in
- [ ] Enable Google sign-in if required for launch
- [ ] Add the production domain to the Authorized Domains list
- [ ] Verify the Firebase web config values in the app match the active project
- [ ] Confirm the `apiKey`, `authDomain`, `projectId`, `storageBucket`, and `appId` are correct
- [ ] Ensure the project is not using placeholder or test Firebase values

## 2. App configuration

- [ ] Confirm `firebaseConfig` is the actual production config
- [ ] Remove any mock, temporary, or demo Firebase setup values
- [ ] Validate the sign-up flow works with real users
- [ ] Validate the sign-in flow works with real users
- [ ] Validate Google sign-in works after enabling the provider
- [ ] Verify redirects work correctly after login
- [ ] Verify the dashboard is protected when no user is signed in
- [ ] Verify unauthenticated users are redirected to the sign-in page

## 3. QA and launch readiness

- [ ] Review all page titles and metadata
- [ ] Confirm branding is consistent across the site
- [ ] Confirm all links work and lead to the intended pages
- [ ] Check contact details are accurate and official
- [ ] Remove any outdated demo wording or test copy
- [ ] Test on desktop and mobile
- [ ] Test the site over HTTPS in the production environment
- [ ] Confirm there are no broken form actions or fallback logic left behind

## 4. Final launch sign-off

- [ ] Firebase auth is live and tested
- [ ] User flows are working in production
- [ ] The live site uses the real configuration only
- [ ] No mock auth flows remain
- [ ] The site is ready to publish

## Final production statement

The project is ready for production use when Firebase authentication is enabled, the live configuration is confirmed, and all user journeys have been tested with real credentials and real app settings.
