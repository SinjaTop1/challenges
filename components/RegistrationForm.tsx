import React, { useState } from 'react';
import { Mail, User, CheckCircle, Loader, AlertCircle } from 'lucide-react';

interface RegistrationFormProps {
  onSuccess?: (email: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // TODO: Replace with your Formspree form ID
  // Get your form ID from https://formspree.io/forms
  // After creating a form, you'll get a form ID like 'xrgqyqyz'
  // Also set up email notifications in Formspree settings to send the grid link
  const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID'; // e.g., 'xrgqyqyz'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'Competence Grid Registration',
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Generate the grid link
        const gridLink = `${window.location.origin}${window.location.pathname}#grid`;
        
        // Note: In production, Formspree will send an email with this link
        // You can customize the email template in Formspree settings
        // For now, we'll redirect to the grid after a short delay
        setTimeout(() => {
          window.location.href = gridLink;
        }, 3000);
        
        if (onSuccess) {
          onSuccess(formData.email);
        }
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200 max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900 mb-2">Registration Successful!</h3>
          <p className="text-stone-600 mb-4">
            Check your email ({formData.email}) for your personalized Competence Grid link with the complete PDF and tracking table.
          </p>
          <p className="text-sm text-stone-500 mb-6">
            Redirecting to your grid in a moment...
          </p>
          <a
            href="#grid"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
          >
            Go to Your Grid Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-stone-900 mb-2">Get Your Complete PDF</h3>
        <p className="text-stone-600 text-sm">
          Sign up to receive the full Competence Grid PDF with detailed explanations, printable grid, and access to your personal tracking table.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            Sign Up & Get PDF
          </>
        )}
      </button>

      <p className="text-xs text-stone-500 text-center mt-4">
        By signing up, you'll receive the PDF and access to your personal tracking grid. We respect your privacy.
      </p>
    </form>
  );
};

export default RegistrationForm;

