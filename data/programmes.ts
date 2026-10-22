import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus('Sending your enquiry...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/wisdomkwametorku123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('fullName'),
          email: formData.get('email'),
          programme: formData.get('programme'),
          message: formData.get('message'),
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      form.reset();
      setStatus('Your enquiry has been sent successfully. We will be in touch soon.');
    } catch (error) {
      const name = String(formData.get('fullName') || '');
      const email = String(formData.get('email') || '');
      const programme = String(formData.get('programme') || '');
      const message = String(formData.get('message') || '');
      const subject = 'Programme enquiry — ' + programme;
      const body =
        'Hello Bravelyn Digital Academy,\n\n' +
        'I would like to enquire about your programme.\n\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Programme: ' + programme + '\n\n' +
        'Enquiry:\n' + message + '\n\n' +
        'Kind regards,\n' + name;

      setStatus('The form endpoint is unavailable, so your email app will open instead.');
      window.location.href =
        'mailto:wisdomkwametorku123@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send an enquiry</h3>
      <p>Complete the details below. Your email app will open with your enquiry ready to send.</p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full name *</label>
          <input id="fullName" name="fullName" required maxLength={100} placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input id="email" name="email" type="email" required maxLength={150} placeholder="you@example.com" />
        </div>
        <div className="field full">
          <label htmlFor="programme">Programme of interest *</label>
          <select id="programme" name="programme" required>
            <option value="">Choose a programme</option>
            <option>Virtual Administrative Assistant</option>
            <option>AI Automation, Prompt Writing & Website Building</option>
            <option>Graphic Design</option>
            <option>Social Media Management & SEO</option>
            <option>Content Writing, Content Creation & Copywriting</option>
            <option>Video Editing</option>
            <option>Not sure yet — please advise me</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">What would you like to know? *</label>
          <textarea id="message" name="message" required maxLength={2000} placeholder="Tell us about your learning goals or the information you need." />
        </div>
      </div>

      <label className="consent">
        <input type="checkbox" required />
        <span>I agree that Bravelyn Digital Academy may use the details I provide to respond to this enquiry.</span>
      </label>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Prepare my enquiry'}
      </button>

      {status ? <div className="form-status">{status}</div> : null}
    </form>
  );
}
