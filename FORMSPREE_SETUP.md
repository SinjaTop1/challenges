# Formspree Setup Guide

## Overview

The registration form uses Formspree to collect user information and send them their personalized Competence Grid link via email.

## Setup Steps

1. **Create a Formspree Account**
   - Go to https://formspree.io/
   - Sign up for a free account (or upgrade for more submissions)

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Name it "Competence Grid Registration" or similar
   - Copy the Form ID (it will look like `xrgqyqyz`)

3. **Update the Form ID**
   - Open `components/RegistrationForm.tsx`
   - Find the line: `const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';`
   - Replace `YOUR_FORMSPREE_FORM_ID` with your actual Form ID

4. **Configure Email Notifications**
   - In Formspree dashboard, go to your form's settings
   - Set up email notifications
   - Customize the email template to include:
     - A welcome message
     - The grid link: `{{site_url}}#grid`
     - Instructions on how to use the tracking table
     - Link to download the PDF (if hosting separately)

5. **Email Template Example**

   ```
   Subject: Welcome to The Competence Grid!

   Hi {{name}},

   Thank you for signing up! Here's your personalized Competence Grid tracking link:

   {{site_url}}#grid

   This link gives you access to:
   - Interactive tracking table (saves automatically)
   - All 28 challenges
   - Progress tracking with points and ranks
   - Export/import functionality

   You'll also receive the complete PDF with detailed explanations for all challenges via a separate email.

   Start tracking your progress today!

   - The Competence Grid Team
   ```

6. **Test the Form**
   - Submit a test registration
   - Verify you receive the email with the correct link
   - Test the grid link to ensure it works

## How It Works

1. User fills out registration form on the website
2. Formspree receives the submission
3. Formspree sends an email to the user with:
   - Welcome message
   - Link to their personal grid: `https://yoursite.com#grid`
4. User clicks the link and accesses their tracking table
5. The table saves progress automatically to localStorage
6. User can export/import their progress as needed

## Grid Link Format

The grid is accessible via hash routing:
- Main site: `https://yoursite.com`
- Grid tracker: `https://yoursite.com#grid`

The grid automatically loads when the URL contains `#grid`.

## Local Storage

The tracking table saves progress to browser localStorage with the key `competenceGridState`. This means:
- Progress is saved automatically
- Progress is device/browser specific
- Users can export their data to backup or transfer

## PDF Distribution

You have two options for PDF distribution:

1. **Via Email Attachment** (Formspree Pro feature)
   - Upload PDF to Formspree
   - Attach to email notifications

2. **Via Separate Service**
   - Host PDF on your server or cloud storage
   - Include download link in Formspree email template
   - Or use a service like Mailchimp/SendGrid for more control

3. **Via Direct Link** (Simplest)
   - Host PDF on your server or cloud storage (e.g., Vercel public folder, S3, etc.)
   - Include direct download link in email template

## Troubleshooting

- **Form not submitting**: Check Formspree form ID is correct
- **No email received**: Check Formspree email settings and spam folder
- **Grid link not working**: Ensure hash routing is working (`#grid` in URL)
- **Local storage not saving**: Check browser console for errors, ensure localStorage is enabled

