import React, { useState } from 'react';
import { Mail, User, CheckCircle, Loader, AlertCircle, Instagram, FileText, ChevronDown, ChevronUp, X } from 'lucide-react';

interface RegistrationFormProps {
  onSuccess?: (email: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    desiredResult: '',
    skillLevel: '',
    foundUs: '',
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showTerms, setShowTerms] = useState(false);

  // TODO: Replace with your Formspree form ID
  // Get your form ID from https://formspree.io/forms
  // After creating a form, you'll get a form ID like 'xrgqyqyz'
  // Also set up email notifications in Formspree settings to send the grid link
  const FORMSPREE_FORM_ID = 'mgvgroyo'; // Just the form ID, not the full URL

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
          instagram: formData.instagram || 'Not provided',
          desiredResult: formData.desiredResult,
          skillLevel: formData.skillLevel,
          foundUs: formData.foundUs,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
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
            Name <span className="text-red-500">*</span>
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
            Email <span className="text-red-500">*</span>
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

        <div>
          <label htmlFor="instagram" className="block text-sm font-semibold text-stone-700 mb-2">
            <Instagram className="w-4 h-4 inline mr-1" />
            Instagram Handle <span className="text-stone-400 text-xs">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400">@</span>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full pl-8 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="yourhandle"
            />
          </div>
        </div>

        <div>
          <label htmlFor="desiredResult" className="block text-sm font-semibold text-stone-700 mb-2">
            What's your desired result from completing these challenges? <span className="text-red-500">*</span>
          </label>
          <select
            id="desiredResult"
            name="desiredResult"
            required
            value={formData.desiredResult}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="">Select an option...</option>
            <option value="personal-growth">Personal growth and self-reliance</option>
            <option value="physical-prizes">Earn physical prizes (complete all at Operator level)</option>
            <option value="elite-retreat">Compete for elite retreat (complete all at Survivor level)</option>
            <option value="skill-building">Build practical skills for emergencies</option>
            <option value="adventure">Adventure and outdoor experiences</option>
            <option value="community">Join a community of like-minded people</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="skillLevel" className="block text-sm font-semibold text-stone-700 mb-2">
            What's your prior skill level in this sort of stuff? <span className="text-red-500">*</span>
          </label>
          <select
            id="skillLevel"
            name="skillLevel"
            required
            value={formData.skillLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="">Select an option...</option>
            <option value="complete-beginner">Complete beginner - First time doing this</option>
            <option value="some-experience">Some experience - Done a few things before</option>
            <option value="moderate">Moderate - Comfortable with basic skills</option>
            <option value="experienced">Experienced - Regular outdoor/survival activities</option>
            <option value="expert">Expert - Advanced skills and training</option>
          </select>
        </div>

        <div>
          <label htmlFor="foundUs" className="block text-sm font-semibold text-stone-700 mb-2">
            How did you find us? <span className="text-red-500">*</span>
          </label>
          <select
            id="foundUs"
            name="foundUs"
            required
            value={formData.foundUs}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="">Select an option...</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend/Word of mouth</option>
            <option value="search">Google/Search engine</option>
            <option value="youtube">YouTube</option>
            <option value="reddit">Reddit</option>
            <option value="podcast">Podcast</option>
            <option value="other-social">Other social media</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="pt-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agreedToTerms"
              name="agreedToTerms"
              required
              checked={formData.agreedToTerms}
              onChange={handleCheckboxChange}
              className="mt-1 w-5 h-5 text-orange-600 border-stone-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
            />
            <label htmlFor="agreedToTerms" className="text-sm text-stone-700 cursor-pointer flex-1">
              I agree to the{' '}
              <button
                type="button"
                onClick={() => setShowTerms(!showTerms)}
                className="text-orange-600 hover:text-orange-700 font-semibold underline inline-flex items-center gap-1"
              >
                Terms and Conditions
                {showTerms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <span className="text-red-500"> *</span>
            </label>
          </div>

          {showTerms && (
            <div className="mt-4 p-4 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 space-y-3">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-stone-900">Terms and Conditions</h4>
                <button
                  type="button"
                  onClick={() => setShowTerms(false)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold">1. Assumption of Risk</p>
                <p>
                  By participating in The Competence Grid challenges, you acknowledge that these activities involve inherent risks, including but not limited to physical injury, property damage, and other risks associated with outdoor activities, tool use, and physical challenges.
                </p>

                <p className="font-semibold">2. Personal Responsibility</p>
                <p>
                  You are solely responsible for your own safety and well-being. You agree to assess your own physical condition, skill level, and the safety of any activity before attempting any challenge. If you have any health concerns or limitations, consult with a medical professional before participating.
                </p>

                <p className="font-semibold">3. Release of Liability</p>
                <p>
                  You hereby release, waive, discharge, and covenant not to sue The Competence Grid, its creators, operators, affiliates, or any associated parties from any and all liability, claims, demands, actions, or causes of action whatsoever arising out of or related to any loss, damage, or injury, including death, that may be sustained by you while participating in any challenge or activity related to The Competence Grid.
                </p>

                <p className="font-semibold">4. Safety First</p>
                <p>
                  Safety is your responsibility. Always follow local laws, regulations, and safety guidelines. Adapt challenges to your environment, health, and skill level. If a challenge feels dangerous, scale it back or skip it. No challenge is mandatory.
                </p>

                <p className="font-semibold">5. Legal Compliance</p>
                <p>
                  You agree to comply with all applicable local, state, and federal laws and regulations while participating in challenges. The Competence Grid is not responsible for any legal consequences resulting from your participation.
                </p>

                <p className="font-semibold">6. Voluntary Participation</p>
                <p>
                  Your participation in The Competence Grid is entirely voluntary. You may stop participating at any time without penalty.
                </p>

                <p className="text-xs text-stone-500 mt-4">
                  By checking this box, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </p>
              </div>
            </div>
          )}
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
        disabled={isSubmitting || !formData.agreedToTerms}
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

