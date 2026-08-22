import TermsModal from "@/components/TermsModal";

export const translations = {
  en: {
    nav: {
      primaryAria: 'Primary',
      logoAria: 'Dentlora — home',
      home: 'Home',
      features: 'Features',
      forPatients: 'For Patients',
      about: 'About Us',
      howItWorks: 'How It Works',
      TermsModal: 'Terms Model',
      contact: 'Contact',
      findDentist: 'Find a Dentist',
      mobileNavAria: 'Mobile navigation',
    },
    hero: {
      badge: 'All your dental care in one place',
      roleToggleAria: 'Choose your role',
      rolePatients: 'For patients',
      roleClinics: 'For doctors & clinics',
      headline: {
        patients: 'Care for<br />your smile.<br /><span class="accent">Confidently.</span>',
        clinics: 'Run your<br /> whole practice.<br /> <span class="accent">Confidently.</span>',
      },
      sub: {
        patients:
          'Find trusted dentists, book appointments, follow your treatment plan, and keep all your dental records organized.',
        clinics:
          'Manage sessions, prescriptions, treatment plans, and follow-ups all from one connected workspace built for dental teams.',
      },
      ctaPrimary: { patients: 'Find a Dentist', clinics: 'Book a Demo' },
      ctaSecondary: { patients: 'How Dentlora Works', clinics: 'See How It Works' },
      trust: [
        { title: 'Secure & Private', desc: 'Your data is protected' },
        { title: 'Trusted Professionals', desc: 'Verified dentists & clinics' },
        { title: 'Personalized Care', desc: 'Tailored to your needs' },
      ],
    },
    appShowcase: {
      badge: 'Patient app',
      titlePrefix: 'Dentlora, right in ',
      titleAccent: 'your pocket.',
      sub: 'Book appointments, track your treatment, and view your prescriptions anytime, anywhere.',
      tabsAria: 'Patient app screens',
      tabs: { book: 'Book', track: 'Track', records: 'Records', download: 'Download' },
      bookingAlt: 'A hand holding a phone showing the Dentlora patient app booking screen',
      notes: {
        book: [
          { title: 'Appointment confirmed', desc: 'Dr. Ahmed Tue, 10:30 AM' },
          { title: '3 clinics near you', desc: 'Closest is 2.4 km away' },
          { title: 'Reminder set', desc: "We'll nudge you a day before" },
          { title: 'Verified dentist', desc: '4.9 from 210 patients' },
        ],
        track: [
          { title: 'Session 3 of 5 complete', desc: 'Treatment 75% done' },
          { title: 'Next visit in 12 days', desc: 'Mar 24 4:00 PM' },
          { title: 'On track', desc: '2 days ahead of plan' },
          { title: 'Aligner change due', desc: 'Switch to tray 8 tonight' },
        ],
        records: [
          { title: 'X-ray uploaded', desc: 'Panoramic 12 Mar' },
          { title: 'Prescription ready', desc: 'Amoxicillin 500mg PDF' },
          { title: '12 documents stored', desc: 'All in one place' },
          { title: 'Shared securely', desc: 'Visible to Dr. Ahmed only' },
        ],
        download: [
          { title: 'App Store', desc: 'iPhone & iPad' },
          { title: 'Google Play', desc: 'Android 9 and up' },
          { title: 'Set up in minutes', desc: "Sign in and you're ready" },
          { title: 'Private by default', desc: 'Only you and your dentist' },
        ],
      },
      soon: 'Soon',
    },
    features: {
      badge: 'Features',
      title: {
        patients: { line1: 'Designed around', accent: 'your dental journey.' },
        clinics: { line1: 'Designed around', accent: 'your day-to-day practice.' },
      },
      sub: {
        patients: 'From your first visit to your last follow-up everything stays connected.',
        clinics: 'From the first session to the last follow-up everything stays in one workspace.',
      },
      card1: {
        title: { patients: 'Treatment Plans', clinics: 'Session & Notes' },
        body: {
          patients: 'Personalized plans designed by your dentist, tailored to your needs.',
          clinics: 'Document every session and connect it instantly to a prescription or treatment plan.',
        },
        mock: {
          label: 'Orthodontic Braces',
          steps: [
            'Initial Consultation Completed',
            'Braces Installation Completed',
            'Adjustment In Progress',
            'Retainer Phase Pending',
          ],
        },
      },
      card2: {
        title: { patients: 'Session Tracking', clinics: 'Practice Overview' },
        body: {
          patients: 'Track every visit, procedure, and progress in one beautiful timeline.',
          clinics: 'Track appointments, payment confirmations, and schedules from one dashboard.',
        },
        mock: {
          timeline: [
            { date: 'May 12, 2025', label: 'Teeth Cleaning' },
            { date: 'Apr 16, 2025', label: 'Filling' },
            { date: 'Mar 10, 2025', label: 'Consultation' },
          ],
        },
      },
      card3: {
        title: { patients: 'Medical Portfolio', clinics: 'Patient Records, Simplified' },
        body: {
          patients: 'All your records, prescriptions, and reports securely stored and easily accessible.',
          clinics: 'Access complete, read-only patient history securely, whenever you need it.',
        },
        mock: {
          files: ['X-ray Report', 'Prescription', 'Treatment Plan'],
          fileType: 'PDF',
        },
      },
    },
    journey: {
      pills: [
        { patients: 'Book Appointments', clinics: 'Manage Sessions' },
        { patients: 'Treatment Plans', clinics: 'Treatment Plans' },
        { patients: 'Track Progress', clinics: 'Prescriptions' },
        { patients: 'Follow-up Care', clinics: 'Follow-Up Decisions' },
        { patients: 'All Records in One Place', clinics: 'Patient Records' },
      ],
      tag: { patients: 'All-in-one care experience', clinics: 'One connected workflow' },
      title: {
        patients: { line1: 'One journey.', line2Prefix: 'Every step, ', accent: 'connected.' },
        clinics: { line1: 'One workflow.', line2Prefix: 'Every step, ', accent: 'connected.' },
      },
      sub: {
        patients:
          'Dentlora brings every part of your dental care together so you can focus on what matters most: your health and your smile.',
        clinics:
          'Every session, plan and follow-up in one workspace so your team can focus on care instead of chasing paperwork.',
      },
      rows: [
        {
          title: { patients: 'Book Appointments', clinics: 'Manage Sessions' },
          desc: {
            patients: 'Find and book appointments with trusted dentists.',
            clinics: 'View, confirm and document each session as your day runs.',
          },
        },
        {
          title: { patients: 'Treatment Plans', clinics: 'Treatment Plans' },
          desc: {
            patients: 'View your personalized plans and track each step.',
            clinics: 'Build and update plans, and share each step with the patient.',
          },
        },
        {
          title: { patients: 'Track Progress', clinics: 'Prescriptions' },
          desc: {
            patients: 'Monitor your treatment journey in real time.',
            clinics: 'Issue prescriptions and attach them to the right session.',
          },
        },
        {
          title: { patients: 'Prescriptions', clinics: 'Follow-Up Decisions' },
          desc: {
            patients: 'Access prescriptions and medications anytime.',
            clinics: 'Decide on follow-ups and schedule them in the same flow.',
          },
        },
        {
          title: { patients: 'All Records in One Place', clinics: 'Patient Records' },
          desc: {
            patients: 'Your X-rays, reports, and documents always secure.',
            clinics: 'Complete, read-only patient history whenever you need it.',
          },
        },
        {
          title: { patients: 'Follow-up Care', clinics: 'Templates' },
          desc: {
            patients: 'Get reminders and stay on top of your follow-ups.',
            clinics: 'Reuse your common notes and plans instead of retyping them.',
          },
        },
      ],
    },
    problem: {
      overline: 'The problem',
      title: { line1: "Dental care shouldn't", line2Prefix: 'feel this ', accent: 'scattered.' },
      sub:
        "A missed reminder. A lost prescription. A treatment plan you can't quite remember. Dental care often lives in too many places at once and patients are the ones left piecing it together.",
      photoAlt: 'A dentist in full protective gear carefully treating a patient',
      cards: [
        { title: 'Appointment Reminder', date: 'May 22, 2026', time: '10:30 AM', desc: 'Upcoming visit with Dr. Ahmed' },
        { title: 'Prescription Ready', desc: 'Antibiotic Gel', chip: 'PDF' },
        { title: 'Treatment Plan', desc: 'Step 2 of 4', chip: 'In Progress' },
        { title: 'Patient Record', line1: 'X-ray uploaded', line2: 'May 2026' },
        { title: 'Follow-Up Needed', desc: 'Submit your symptoms' },
      ],
      items: [
        { title: 'Missed Appointment Details', desc: 'Dates, times, and visit info are easy to lose track of.' },
        { title: 'Lost Prescriptions', desc: "Important prescription details aren't always easy to find later." },
        { title: 'Unclear Treatment Steps', desc: "It's hard to remember what comes next in the plan." },
        { title: 'Scattered Records', desc: 'Reports, files, and notes often live in separate places.' },
        { title: 'No Follow-Up Visibility', desc: 'Patients can struggle to see what follow-up is needed next.' },
      ],
    },
    howItWorks: {
      badge: 'How it works',
      title: {
        patients: { line1: 'From booking to follow-up,', line2Prefix: 'in ', accent: 'five simple steps.' },
        clinics: { line1: 'From onboarding to follow-up,', line2Prefix: 'in ', accent: 'five simple steps.' },
      },
      sub: {
        patients:
          'Dentlora keeps every part of your dental care in one clear, connected flow from booking to follow-up.',
        clinics:
          'Dentlora keeps your practice in one clear, connected flow from setting up your profile to tracking patient progress.',
      },
      steps: [
        {
          title: { patients: 'Choose your country', clinics: 'Set up your profile' },
          desc: {
            patients: 'Find and book visits with trusted dentists in just a few taps.',
            clinics: 'Join through your clinic and set your availability.',
          },
        },
        {
          title: { patients: 'Find the right dentist', clinics: 'Manage your day' },
          desc: {
            patients: 'Get a personalized plan tailored to your dental needs and goals.',
            clinics: 'View and manage appointments in real time.',
          },
        },
        {
          title: { patients: 'Book your appointment', clinics: 'Document each session' },
          desc: {
            patients: 'Monitor your progress, upcoming visits, and updates in one place.',
            clinics: 'Add notes, prescriptions, and treatment plans.',
          },
        },
        {
          title: { patients: 'Attend your session', clinics: 'Decide on follow-ups' },
          desc: {
            patients: 'Access and manage prescriptions and medication instructions anytime.',
            clinics: 'Create follow-up sessions when they are needed.',
          },
        },
        {
          title: { patients: 'Track your care afterward', clinics: 'Track patient progress' },
          desc: {
            patients: 'Stay on top of reminders, follow-ups, and next steps after each visit.',
            clinics: 'See the full care history in one place.',
          },
        },
      ],
      cta: {
        title: {
          patients: { prefix: 'Ready for ', accent: 'calmer dental care?' },
          clinics: { prefix: 'Ready for a ', accent: 'calmer practice?' },
        },
        sub: {
          patients:
            'Find trusted dentists, book appointments, follow your treatment plan, and keep all your dental records organized.',
          clinics:
            'Manage sessions, prescriptions, treatment plans, and follow-ups all from one connected workspace built for dental teams.',
        },
        primary: { patients: 'Find a Dentist', clinics: 'Book a Demo' },
        secondary: { patients: 'How Dentlora Works', clinics: 'See How It Works' },
      },
    },
    footer: {
      tagline: 'Your smile, our care',
      description: 'Connected dental care for patients, doctors, and clinics from booking to follow-up.',
      footerNavAria: 'Footer',
      followUs: 'Follow us',
      copyright: '© 2026 Dentlora. All rights reserved.',
      social: {
        instagram: 'Dentlora on Instagram',
        linkedin: 'Dentlora on LinkedIn',
        facebook: 'Dentlora on Facebook',
        tiktok: 'Dentlora on TikTok',
      },
      termsLink: 'Terms & Conditions',
      terms: {
        modalTitle: 'Terms & Conditions',
        closeAria: 'Close terms and conditions',
        version: 'Version 1.0 · August 2026',
        sections: [
          {
            heading: '1. Introduction and Acceptance',
            blocks: [
              { type: 'p', text: 'These Terms and Conditions (the "Terms") govern your access to and use of the Dentlora dental platform, including the Dentlora website, the patient mobile application, the doctor application, the clinic dashboard, and the administration dashboard (together, the "Platform"). Dentlora is a digital dental ecosystem that connects patients, dentists, and dental clinics through one integrated system covering the full care journey, from discovery and booking through treatment, prescription, follow-up, and ongoing care tracking.' },
              { type: 'p', text: 'By downloading, accessing, registering for, or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and by the Dentlora Privacy Policy. If you do not agree, you must not use the Platform.' },
              { type: 'p', text: 'The Platform operates in Egypt, Canada, and the United States. Certain features are country-specific and may not be available everywhere. Where local law imposes requirements that differ from these Terms, the applicable local law prevails for users in that country.' },
            ],
          },
          {
            heading: '2. Definitions',
            blocks: [
              {
                type: 'ul',
                items: [
                  '"Patient" means an individual who uses the Platform to discover doctors, book appointments, and manage their dental care journey.',
                  '"Doctor" means a licensed dental practitioner registered on the Platform who manages appointments, sessions, prescriptions, treatment plans, and follow-up care.',
                  '"Clinic" means a dental clinic whose staff use the clinic dashboard to confirm payments, monitor sessions, and manage operational records.',
                  '"Administrator" means a platform administrator or a country and regional administrator who manages master data, access, and operational oversight within an assigned scope.',
                  '"Appointment" means a booking made by a Patient with a Doctor at a Clinic for a specific service, date, and time slot.',
                  '"Treatment Plan" means a structured, multi-session course of care created by a Doctor following a completed appointment session.',
                  '"Content" means any text, notes, images, X-rays, documents, ratings, or other material submitted to or generated on the Platform.',
                ],
              },
            ],
          },
          {
            heading: '3. Eligibility and Accounts',
            blocks: [
              { type: 'h4', text: '3.1 Eligibility' },
              { type: 'p', text: 'You must be at least 18 years old, or the age of majority in your country of residence, to hold an account. A minor may receive care only through an account held and managed by a parent or legal guardian, who accepts these Terms on the minor\u2019s behalf and remains responsible for use of that account.' },
              { type: 'h4', text: '3.2 Registration and Authentication' },
              { type: 'p', text: 'Patients register and log in using a mobile phone number and a one-time passcode delivered by SMS. New patients complete their registration details, including name, nationality, and an optional email address, after the number is verified, and must accept these Terms during registration. Visitors may browse parts of the Platform without an account, but restricted features require verification.' },
              { type: 'p', text: 'Doctors, clinic users, and administrators access their respective applications using credentials issued by an administrator. Doctor accounts are created and approved through an administrative review process rather than by open self-registration, so that professional credentials can be verified before a doctor becomes visible to patients.' },
              { type: 'h4', text: '3.3 Account Responsibility' },
              {
                type: 'ul',
                items: [
                  'You are responsible for keeping your phone number, device, and credentials secure, and for all activity carried out through your account.',
                  'You must provide accurate, current, and complete information and keep it up to date.',
                  'You must not share, sell, or transfer your account, or impersonate any other person or professional.',
                  'You must notify Dentlora promptly of any unauthorised use of your account.',
                ],
              },
            ],
          },
          {
            heading: '4. The Services',
            blocks: [
              { type: 'p', text: 'Depending on your role and country, the Platform provides:' },
              {
                type: 'ul',
                items: [
                  'Discovery and search of doctors and clinics, including symptom-based doctor matching where that feature is enabled.',
                  'Appointment booking with a transparent pricing summary shown before confirmation.',
                  'Session management, clinical notes, and issuance of prescriptions by Doctors.',
                  'Creation and tracking of multi-session treatment plans, with a visible plan timeline and session progress.',
                  'Follow-up decisions, patient symptom submission, and follow-up sessions.',
                  'Prescription viewing and PDF download, ratings, notifications, and management of your profile and medical history.',
                ],
              },
              { type: 'p', text: 'Dentlora is a facilitation and management platform. It does not itself provide dental or medical care, diagnosis, or treatment, and all clinical decisions are made by the treating Doctor.' },
            ],
          },
          {
            heading: '5. Medical Disclaimer',
            blocks: [
              { type: 'p', text: 'The Platform connects you with independent Doctors and Clinics. Dentlora does not provide medical advice, does not practise dentistry or medicine, and is not a substitute for professional in-person examination. Information displayed on the Platform, including symptom-based matching results, is intended to help you find and organise care and must not be relied upon as a diagnosis.' },
              { type: 'p', text: 'The professional relationship for any diagnosis, prescription, or treatment exists between you and your Doctor and Clinic, who are solely responsible for the care they deliver. In a medical emergency, do not use the Platform. Contact your local emergency services immediately.' },
            ],
          },
          {
            heading: '6. Booking, Fees, and Payment',
            blocks: [
              { type: 'h4', text: '6.1 Pricing' },
              { type: 'p', text: 'The total price of a booking is the sum of the Doctor Fee and the Clinic Fee, each defined per doctor per clinic. Before you confirm a booking, the Platform displays the Doctor Fee, the Clinic Fee, and the Total Price. Any platform commission applies to the Clinic Fee only and does not increase the Total Price shown to you.' },
              { type: 'h4', text: '6.2 Payment Confirmation' },
              { type: 'p', text: 'Payment is arranged directly with the Clinic and confirmed by clinic staff, typically once the Patient attends. An appointment becomes ready for the session only after the Clinic confirms payment, and each treatment plan session likewise requires payment confirmation by the Clinic before it proceeds. Dentlora does not hold, collect, or settle patient payments on behalf of Clinics under the current release.' },
              { type: 'h4', text: '6.3 Cancellations and Refunds' },
              { type: 'p', text: 'Cancellation and refund arrangements are handled directly between the Patient and the Clinic, in accordance with the Clinic\u2019s own policy and applicable local law. Dentlora does not process, adjudicate, or guarantee refunds. Where cancellation or refund functionality is introduced to the Platform in future, these Terms will be updated accordingly.' },
            ],
          },
          {
            heading: '7. Prescriptions, Treatment Plans, and Follow-Up',
            blocks: [
              { type: 'p', text: 'A prescription may be issued only in connection with a completed session and must include at least one medication. Prescriptions are made available to the Patient for viewing and PDF download.' },
              { type: 'p', text: 'A treatment plan may be created only after a completed appointment session and consists of one or more sessions, each with its own title, description, and price. A completed plan is archived in the patient\u2019s care record.' },
              { type: 'p', text: 'After any completed session, the Doctor decides whether follow-up is required. If it is, the Patient receives a notification, submits their current symptoms through the follow-up form, and the Doctor reviews them, conducts the follow-up session, and closes it with notes.' },
              { type: 'p', text: 'You are responsible for using medications and following any treatment plan strictly as directed by your Doctor and the accompanying professional guidance.' },
            ],
          },
          {
            heading: '8. Ratings and Reviews',
            blocks: [
              { type: 'p', text: 'Patients may submit ratings about their care experience. To keep the Platform fair and trustworthy, ratings are moderated before they become publicly visible. You agree that your ratings and reviews will be truthful, based on genuine experience, and free of unlawful, defamatory, offensive, or misleading content. Dentlora may decline to publish, or may remove, content that breaches these Terms.' },
            ],
          },
          {
            heading: '9. Acceptable Use',
            blocks: [
              { type: 'p', text: 'You agree that you will not:' },
              {
                type: 'ul',
                items: [
                  'Use the Platform for any unlawful, fraudulent, or harmful purpose, or in breach of any applicable healthcare or data protection law.',
                  'Access, attempt to access, or interfere with data belonging to other patients, doctors, or clinics, or with data outside your authorised country scope.',
                  'Submit content that is false, misleading, infringing, defamatory, obscene, or that contains malicious code.',
                  'Reverse engineer, scrape, overload, disrupt, or circumvent any security or access control feature of the Platform.',
                  'Use the Platform to provide or solicit care in a manner that violates professional licensing requirements.',
                  'Misrepresent professional qualifications, licensing status, clinic affiliation, or availability.',
                ],
              },
            ],
          },
          {
            heading: '10. Doctors, Clinics, and Administrators',
            blocks: [
              { type: 'p', text: 'Doctors and Clinics are independent providers, responsible for the accuracy of their profiles, availability, fees, clinical records, and the care they deliver. A Doctor operates within a single country and may be assigned to multiple clinics within that country, and a Clinic belongs to a single country. Administrators manage master data within an assigned scope, and country and regional administrators may view and manage only data belonging to their assigned countries. Each party must comply with these Terms and with all professional, licensing, and legal obligations applicable to it.' },
            ],
          },
          {
            heading: '11. Intellectual Property',
            blocks: [
              { type: 'p', text: 'The Platform, including its software, design, name, logo, trademarks, and the content Dentlora creates, is owned by Dentlora or its licensors and protected by intellectual property law. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Platform for its intended purpose. You retain ownership of the Content you submit and grant Dentlora a licence to host, process, and display that Content solely to operate and provide the Platform. You may not copy, modify, distribute, or create derivative works from the Platform except as expressly permitted.' },
            ],
          },
          {
            heading: '12. Third-Party Services',
            blocks: [
              { type: 'p', text: 'The Platform depends on third-party services to function, including SMS and one-time-passcode delivery, push notifications, email delivery, mapping and external location data, file storage, and PDF generation. These services are provided by third parties under their own terms, and Dentlora is not responsible for their availability, accuracy, or performance. Your use of features that rely on them is also subject to those providers\u2019 terms.' },
            ],
          },
          {
            heading: '13. Privacy and Data Protection',
            blocks: [
              { type: 'p', text: 'Dentlora processes personal and health-related information to operate the Platform, as described in the Dentlora Privacy Policy, which forms part of these Terms. Data is organised with country-based isolation and role-based access control, so that each user reaches only the data within their permitted scope. By using the Platform, you agree to receive service communications, including verification codes, appointment updates, treatment plan and follow-up notifications, and administrative messages.' },
            ],
          },
          {
            heading: '14. Availability, Language, and Changes',
            blocks: [
              { type: 'p', text: 'The Platform is offered on an as-available basis. Dentlora may modify, suspend, or discontinue features, and may add or remove supported countries. Where a change materially affects your rights, notice will be given in the app, by email, or by another prominent means before it takes effect, and continued use after that date constitutes acceptance.' },
              { type: 'p', text: 'The Platform and these Terms are provided in Arabic and English. Both versions are intended to carry the same meaning; if a discrepancy arises, the English version is used to resolve interpretation, except where local law requires the Arabic version to prevail.' },
            ],
          },
          {
            heading: '15. Limitation of Liability',
            blocks: [
              { type: 'p', text: 'To the maximum extent permitted by law, Dentlora is not liable for the acts, omissions, or clinical decisions of any Doctor or Clinic, for any medical outcome, or for indirect, incidental, special, or consequential loss arising from your use of the Platform. Nothing in these Terms excludes liability that cannot be excluded under applicable law, including liability for death or personal injury caused by proven negligence. Where liability cannot be fully excluded, it is limited to the maximum extent permitted by the law applicable in your country.' },
            ],
          },
          {
            heading: '16. Indemnification',
            blocks: [
              { type: 'p', text: 'You agree to indemnify and hold harmless Dentlora, its affiliates, and their personnel against claims, damages, losses, and reasonable expenses arising from your breach of these Terms, your misuse of the Platform, or your violation of any law or of the rights of any third party.' },
            ],
          },
          {
            heading: '17. Suspension and Termination',
            blocks: [
              { type: 'p', text: 'You may stop using the Platform at any time and may request deletion of your account. Dentlora, or an administrator acting within scope, may suspend or terminate access where these Terms are breached, where required by law, or where necessary to protect the safety, integrity, or lawful operation of the Platform. Clinical records are retained after termination for the period required by applicable medical record-keeping rules. Provisions that by their nature survive termination, including intellectual property, disclaimers, limitation of liability, and governing law, continue to apply.' },
            ],
          },
          {
            heading: '18. Governing Law and Disputes',
            blocks: [
              { type: 'p', text: 'These Terms are governed by the laws of the country in which you access and use the Platform, being Egypt, Canada, or the United States, and disputes are subject to the courts or competent authorities of that jurisdiction. This is without prejudice to any mandatory consumer or healthcare law protections available to you locally. Complaints about care are addressed first with the treating Doctor or Clinic, and complaints about the Platform are addressed with Dentlora.' },
            ],
          },
          {
            heading: '19. Contact',
            blocks: [
              { type: 'p', text: 'Questions about these Terms, and reports of misuse or of content that breaches them, can be submitted through the contact channels published on the Dentlora website and in the support section of the Dentlora applications.' },
            ],
          },
        ],
      },

    },
    privacyPolicy: {
      title: 'Privacy Policy',
      backHome: 'Back to home',
      meta: [
        { text: 'At Dentlora, we take the confidentiality of your health data and personal information seriously. This policy describes what we collect, how it is used, and how your data is protected.', strong: true },
        { text: 'Last updated: February 2026' },
      ],
      sections: [
        {
          heading: '1. Overview & Scope',
          paragraphs: [
            [{ text: 'This Privacy Policy applies to the Dentlora mobile applications (available on iOS and Android), websites, and related healthcare services (collectively, the "Platform").' }],
            [{ text: 'By creating an account, downloading the Dentlora app, or using our services, you agree to the collection and handling of your information as outlined in this policy.' }],
          ],
        },
        {
          heading: '2. Information We Collect',
          paragraphs: [
            [{ text: 'We only collect data necessary to deliver secure, personalized dental and healthcare coordination services:' }],
          ],
          list: [
            [{ text: 'Account Information: Name, phone number, email address, date of birth, and password.' }],
            [{ text: 'Dental & Health Records: Medical history questionnaires, dental treatment plans, past appointments, prescribed medications, dental notes, and clinical history shared with your consent.' }],
            [{ text: 'Images & Diagnostics: Optional dental photos, X-rays, or scan files you or your dentist upload to your treatment journey.' }],
            [{ text: 'Appointment & Clinic Data: Booking dates, selected clinics, treating dental practitioners, and visit notes.' }],
            [{ text: 'Technical & Device Information: Device model, operating system version, unique device identifiers, IP address, and crash analytics to maintain app reliability.' }],
          ],
        },
        {
          heading: '3. How We Use Your Information',
          paragraphs: [
            [{ text: 'Your data is utilized strictly for the following purposes:' }],
          ],
          list: [
            [{ text: 'To enable scheduling and management of dental appointments with verified clinics and practitioners.' }],
            [{ text: 'To maintain your connected dental history and treatment milestones across participating providers.' }],
            [{ text: 'To send vital appointment reminders, medication reminders, and follow-up care alerts.' }],
            [{ text: 'To provide responsive patient support and troubleshoot technical issues.' }],
            [{ text: 'To uphold platform security, prevent unauthorized access, and comply with applicable health regulations.' }],
            [{ text: 'We will NEVER sell your personal data, contact information, or medical records to third-party advertisers or data brokers.', strong: true }],
          ],
        },
        {
          heading: '4. Data Protection & Security Standards',
          paragraphs: [
            [{ text: 'Dentlora employs industry-standard security protocols designed to protect sensitive health information:' }],
          ],
          list: [
            [{ text: 'Encryption: All data is encrypted in transit using TLS/SSL (HTTPS) and at rest using modern AES-256 cryptographic standards.' }],
            [{ text: 'Strict Access Controls: Only you and dental practitioners whom you explicitly authorize have access to your clinical treatment timeline and records.' }],
            [{ text: 'Infrastructure Security: Cloud servers are housed in certified, high-security data centers with 24/7 monitoring and regular vulnerability assessments.' }],
          ],
        },
        {
          heading: '5. Sharing of Information',
          paragraphs: [
            [{ text: 'We share your information solely in the following defined scenarios:' }],
          ],
          list: [
            [{ text: 'With Your Dental Clinics & Doctors: Your chosen healthcare providers receive your profile, appointment details, and relevant dental history to provide treatment.' }],
            [{ text: 'Trusted Service Providers: Secure third-party services (such as cloud hosting, transactional SMS/email services, and crash logging) that assist in operating the platform under strict confidentiality agreements.' }],
            [{ text: 'Legal Requirements: If compelled by lawful court order, subpoena, or applicable health authority regulations.' }],
          ],
        },
        {
          heading: '6. Account Deletion & Your Rights',
          paragraphs: [
            [{ text: 'In compliance with App Store and Google Play guidelines, you retain full ownership and control over your personal data:' }],
          ],
          list: [
            [{ text: 'In-App Account Deletion: You can delete your account at any time directly inside the Dentlora App by navigating to Settings > Profile > Delete Account.' }],
            [{ text: 'Direct Request via Email: You may also request complete account deletion and data removal by emailing us at Support@dentlora.com.' }],
            [{ text: 'Data Export & Correction: You can request a copy of your stored records or request corrections to inaccurate personal info at any time.' }],
          ],
        },
        {
          heading: 'Children\u2019s Privacy',
          paragraphs: [
            [{ text: 'Dentlora is not intended for unsupervised use by children under the age of 13. Minors may have their dental records managed via the platform only through a parent or legal guardian\u2019s authorized family profile.' }],
          ],
        },
        {
          heading: '8. Changes to This Privacy Policy',
          paragraphs: [
            [{ text: 'We may periodically update this policy to reflect enhancements in our services or legal requirements. When updates occur, we will notify you through the app or by updating the "Last updated" date at the top of this page.' }],
          ],
        },
        {
          heading: '9. Contact & Support',
          paragraphs: [
            [{ text: 'If you have questions, feedback, or concerns regarding your privacy or data handling, our privacy team is here to assist you:' }],
            [{ text: 'Email: ', strong: true }, { text: 'Support@dentlora.com', link: 'mailto:Support@dentlora.com' }],
          ],
        },
      ],
      footer: '© 2026 Dentlora. All rights reserved.',
    },
  },

  ar: {
    nav: {
      primaryAria: 'التنقل الرئيسي',
      logoAria: 'دنتلورا — الصفحة الرئيسية',
      home: 'الرئيسية',
      features: 'المميزات',
      forPatients: 'للمرضى',
      about: 'من نحن',
      howItWorks: 'كيف يعمل',
      TermsModal: "الشروط والأحكام",
      contact: 'تواصل معنا',
      findDentist: 'ابحث عن طبيب أسنان',
      mobileNavAria: 'قائمة التنقل للجوال',
    },
    hero: {
      badge: 'كل رعايتك السنية في مكان واحد',
      roleToggleAria: 'اختر دورك',
      rolePatients: 'للمرضى',
      roleClinics: 'للأطباء والعيادات',
      headline: {
        patients: 'اعتنِ<br />بابتسامتك.<br /><span class="accent">بثقة.</span>',
        clinics: 'أدر<br /> عيادتك بالكامل.<br /> <span class="accent">بثقة.</span>',
      },
      sub: {
        patients:
          'ابحث عن أطباء أسنان موثوقين، احجز مواعيدك، تابع خطة علاجك، واحتفظ بجميع سجلاتك السنية منظمة في مكان واحد.',
        clinics:
          'أدر الجلسات والوصفات الطبية وخطط العلاج والمتابعات كل ذلك من مساحة عمل واحدة متصلة مصممة لفرق طب الأسنان.',
      },
      ctaPrimary: { patients: 'ابحث عن طبيب أسنان', clinics: 'احجز عرضًا توضيحيًا' },
      ctaSecondary: { patients: 'كيف تعمل دنتلورا', clinics: 'شاهد كيف تعمل' },
      trust: [
        { title: 'آمن وخاص', desc: 'بياناتك محمية' },
        { title: 'متخصصون موثوقون', desc: 'أطباء وعيادات موثقون' },
        { title: 'رعاية مخصصة', desc: 'مصممة حسب احتياجاتك' },
      ],
    },
    appShowcase: {
      badge: 'تطبيق المريض',
      titlePrefix: 'دنتلورا، مباشرة في ',
      titleAccent: 'جيبك.',
      sub: 'احجز مواعيدك، تابع علاجك، واطّلع على وصفاتك الطبية في أي وقت ومن أي مكان.',
      tabsAria: 'شاشات تطبيق المريض',
      tabs: { book: 'الحجز', track: 'المتابعة', records: 'السجلات', download: 'التحميل' },
      bookingAlt: 'يد تحمل هاتفًا يعرض شاشة حجز المواعيد في تطبيق دنتلورا للمرضى',
      notes: {
        book: [
          { title: 'تم تأكيد الموعد', desc: 'د. أحمد الثلاثاء، 10:30 ص' },
          { title: '3 عيادات بالقرب منك', desc: 'أقرب عيادة على بعد 2.4 كم' },
          { title: 'تم ضبط التذكير', desc: 'سنذكّرك قبل يوم من الموعد' },
          { title: 'طبيب موثّق', desc: '4.9 من 210 مريض' },
        ],
        track: [
          { title: 'اكتملت الجلسة 3 من 5', desc: 'اكتمل العلاج بنسبة 75%' },
          { title: 'الزيارة القادمة خلال 12 يومًا', desc: '24 مارس 4:00 م' },
          { title: 'على المسار الصحيح', desc: 'متقدم بيومين عن الخطة' },
          { title: 'حان وقت تغيير المقوّم', desc: 'بدّل إلى القالب رقم 8 الليلة' },
        ],
        records: [
          { title: 'تم رفع الأشعة', desc: 'بانورامية 12 مارس' },
          { title: 'الوصفة جاهزة', desc: 'أموكسيسيلين 500 ملغم PDF' },
          { title: '12 مستندًا مخزّنًا', desc: 'كل شيء في مكان واحد' },
          { title: 'مشاركة آمنة', desc: 'مرئي لـ د. أحمد فقط' },
        ],
        download: [
          { title: 'متجر آب ستور', desc: 'آيفون وآيباد' },
          { title: 'متجر جوجل بلاي', desc: 'أندرويد 9 وما فوق' },
          { title: 'إعداد خلال دقائق', desc: 'سجّل الدخول وأنت جاهز' },
          { title: 'خاص افتراضيًا', desc: 'أنت وطبيبك فقط' },
        ],
      },
      soon: 'قريبًا',
    },
    features: {
      badge: 'المميزات',
      title: {
        patients: { line1: 'مصمم حول', accent: 'رحلتك السنية.' },
        clinics: { line1: 'مصمم حول', accent: 'عملك اليومي في العيادة.' },
      },
      sub: {
        patients: 'من أول زيارة إلى آخر متابعة  يبقى كل شيء متصلاً.',
        clinics: 'من أول جلسة إلى آخر متابعة  يبقى كل شيء في مساحة عمل واحدة.',
      },
      card1: {
        title: { patients: 'خطط العلاج', clinics: 'الجلسات والملاحظات' },
        body: {
          patients: 'خطط مخصصة يصممها طبيبك بما يناسب احتياجاتك.',
          clinics: 'وثّق كل جلسة واربطها فورًا بوصفة طبية أو خطة علاج.',
        },
        mock: {
          label: 'تقويم الأسنان',
          steps: [
            'الاستشارة الأولية مكتملة',
            'تركيب التقويم مكتمل',
            'الضبط  قيد التنفيذ',
            'مرحلة المثبّت  قيد الانتظار',
          ],
        },
      },
      card2: {
        title: { patients: 'متابعة الجلسات', clinics: 'نظرة عامة على العيادة' },
        body: {
          patients: 'تابع كل زيارة وإجراء وتقدم في جدول زمني واحد أنيق.',
          clinics: 'تابع المواعيد وتأكيدات الدفع والجداول من لوحة تحكم واحدة.',
        },
        mock: {
          timeline: [
            { date: '12 مايو 2025', label: 'تنظيف الأسنان' },
            { date: '16 أبريل 2025', label: 'حشو الأسنان' },
            { date: '10 مارس 2025', label: 'استشارة' },
          ],
        },
      },
      card3: {
        title: { patients: 'الملف الطبي', clinics: 'سجلات المرضى، بكل سهولة' },
        body: {
          patients: 'جميع سجلاتك ووصفاتك وتقاريرك مخزنة بأمان ويسهل الوصول إليها.',
          clinics: 'اطّلع على السجل الكامل للمريض للقراءة فقط بأمان، وقتما تحتاج.',
        },
        mock: {
          files: ['تقرير الأشعة', 'الوصفة الطبية', 'خطة العلاج'],
          fileType: 'PDF',
        },
      },
    },
    journey: {
      pills: [
        { patients: 'حجز المواعيد', clinics: 'إدارة الجلسات' },
        { patients: 'خطط العلاج', clinics: 'خطط العلاج' },
        { patients: 'تتبع التقدم', clinics: 'الوصفات الطبية' },
        { patients: 'رعاية المتابعة', clinics: 'قرارات المتابعة' },
        { patients: 'كل السجلات في مكان واحد', clinics: 'سجلات المرضى' },
      ],
      tag: { patients: 'تجربة رعاية شاملة متكاملة', clinics: 'سير عمل واحد متصل' },
      title: {
        patients: { line1: 'رحلة واحدة.', line2Prefix: 'كل خطوة، ', accent: 'متصلة.' },
        clinics: { line1: 'سير عمل واحد.', line2Prefix: 'كل خطوة، ', accent: 'متصلة.' },
      },
      sub: {
        patients:
          'تجمع دنتلورا كل جوانب رعايتك السنية في مكان واحد لتتمكن من التركيز على الأهم: صحتك وابتسامتك.',
        clinics:
          'كل جلسة وخطة ومتابعة في مساحة عمل واحدة ليتمكن فريقك من التركيز على الرعاية بدلاً من ملاحقة الأوراق.',
      },
      rows: [
        {
          title: { patients: 'حجز المواعيد', clinics: 'إدارة الجلسات' },
          desc: {
            patients: 'ابحث واحجز مواعيدك مع أطباء أسنان موثوقين.',
            clinics: 'اعرض وأكّد ووثّق كل جلسة على مدار يومك.',
          },
        },
        {
          title: { patients: 'خطط العلاج', clinics: 'خطط العلاج' },
          desc: {
            patients: 'اطّلع على خططك المخصصة وتابع كل خطوة.',
            clinics: 'أنشئ الخطط وحدّثها وشارك كل خطوة مع المريض.',
          },
        },
        {
          title: { patients: 'تتبع التقدم', clinics: 'الوصفات الطبية' },
          desc: {
            patients: 'راقب رحلة علاجك لحظة بلحظة.',
            clinics: 'أصدر الوصفات الطبية واربطها بالجلسة الصحيحة.',
          },
        },
        {
          title: { patients: 'الوصفات الطبية', clinics: 'قرارات المتابعة' },
          desc: {
            patients: 'اطّلع على الوصفات والأدوية في أي وقت.',
            clinics: 'قرر بشأن المتابعات وجدولها في نفس السير.',
          },
        },
        {
          title: { patients: 'كل السجلات في مكان واحد', clinics: 'سجلات المرضى' },
          desc: {
            patients: 'أشعتك وتقاريرك ومستنداتك آمنة دائمًا.',
            clinics: 'السجل الكامل للمريض للقراءة فقط وقتما تحتاج.',
          },
        },
        {
          title: { patients: 'رعاية المتابعة', clinics: 'القوالب الجاهزة' },
          desc: {
            patients: 'احصل على تذكيرات وابقَ على اطلاع بمتابعاتك.',
            clinics: 'أعد استخدام ملاحظاتك وخططك الشائعة بدلاً من إعادة كتابتها.',
          },
        },
      ],
    },
    problem: {
      overline: 'المشكلة',
      title: { line1: 'لا ينبغي أن تكون رعاية الأسنان', line2Prefix: 'بهذا ', accent: 'التشتت.' },
      sub:
        'تذكير فاتك. وصفة طبية ضائعة. خطة علاج لا تتذكرها بوضوح. غالبًا ما تكون رعاية الأسنان موزّعة في أماكن كثيرة في آن واحد ويترك المرضى ليجمعوا كل هذا بأنفسهم.',
      photoAlt: 'طبيب أسنان بكامل معدات الحماية يعالج مريضًا بعناية',
      cards: [
        { title: 'تذكير بالموعد', date: '22 مايو 2026', time: '10:30 ص', desc: 'زيارة قادمة مع د. أحمد' },
        { title: 'الوصفة جاهزة', desc: 'جل مضاد حيوي', chip: 'PDF' },
        { title: 'خطة العلاج', desc: 'الخطوة 2 من 4', chip: 'قيد التنفيذ' },
        { title: 'سجل المريض', line1: 'تم رفع الأشعة', line2: 'مايو 2026' },
        { title: 'متابعة مطلوبة', desc: 'أرسل أعراضك' },
      ],
      items: [
        { title: 'تفاصيل مواعيد مفقودة', desc: 'من السهل أن تفقد تتبّع التواريخ والأوقات ومعلومات الزيارات.' },
        { title: 'وصفات طبية مفقودة', desc: 'تفاصيل الوصفات المهمة ليست دائمًا سهلة الإيجاد لاحقًا.' },
        { title: 'خطوات علاج غير واضحة', desc: 'من الصعب تذكّر الخطوة التالية في الخطة.' },
        { title: 'سجلات متناثرة', desc: 'غالبًا ما تكون التقارير والملفات والملاحظات في أماكن منفصلة.' },
        { title: 'غياب وضوح المتابعة', desc: 'قد يواجه المرضى صعوبة في معرفة المتابعة المطلوبة تاليًا.' },
      ],
    },
    howItWorks: {
      badge: 'كيف يعمل',
      title: {
        patients: { line1: 'من الحجز إلى المتابعة،', line2Prefix: 'في ', accent: 'خمس خطوات بسيطة.' },
        clinics: { line1: 'من التسجيل إلى المتابعة،', line2Prefix: 'في ', accent: 'خمس خطوات بسيطة.' },
      },
      sub: {
        patients:
          'تحافظ دنتلورا على كل جزء من رعايتك السنية في مسار واحد واضح ومتصل من الحجز إلى المتابعة.',
        clinics:
          'تحافظ دنتلورا على عيادتك في مسار عمل واحد واضح ومتصل من إعداد ملفك الشخصي إلى متابعة تقدم المرضى.',
      },
      steps: [
        {
          title: { patients: 'اختر بلدك', clinics: 'أعدّ ملفك الشخصي' },
          desc: {
            patients: 'ابحث واحجز زياراتك مع أطباء أسنان موثوقين بضغطات قليلة.',
            clinics: 'انضم من خلال عيادتك وحدّد أوقات توفرك.',
          },
        },
        {
          title: { patients: 'ابحث عن الطبيب المناسب', clinics: 'أدر يومك' },
          desc: {
            patients: 'احصل على خطة مخصصة تناسب احتياجاتك وأهدافك السنية.',
            clinics: 'اعرض وأدر المواعيد لحظة بلحظة.',
          },
        },
        {
          title: { patients: 'احجز موعدك', clinics: 'وثّق كل جلسة' },
          desc: {
            patients: 'راقب تقدمك وزياراتك القادمة وتحديثاتك في مكان واحد.',
            clinics: 'أضف الملاحظات والوصفات الطبية وخطط العلاج.',
          },
        },
        {
          title: { patients: 'احضر جلستك', clinics: 'قرر بشأن المتابعات' },
          desc: {
            patients: 'اطّلع على الوصفات وتعليمات الأدوية وأدرها في أي وقت.',
            clinics: 'أنشئ جلسات متابعة عند الحاجة إليها.',
          },
        },
        {
          title: { patients: 'تابع رعايتك لاحقًا', clinics: 'تابع تقدم المريض' },
          desc: {
            patients: 'ابقَ على اطلاع بالتذكيرات والمتابعات والخطوات التالية بعد كل زيارة.',
            clinics: 'اطّلع على سجل الرعاية الكامل في مكان واحد.',
          },
        },
      ],
      cta: {
        title: {
          patients: { prefix: 'مستعد لرعاية سنية ', accent: 'أكثر هدوءًا؟' },
          clinics: { prefix: 'مستعد لعيادة ', accent: 'أكثر هدوءًا؟' },
        },
        sub: {
          patients:
            'ابحث عن أطباء أسنان موثوقين، احجز مواعيدك، تابع خطة علاجك، واحتفظ بجميع سجلاتك السنية منظمة في مكان واحد.',
          clinics:
            'أدر الجلسات والوصفات الطبية وخطط العلاج والمتابعات كل ذلك من مساحة عمل واحدة متصلة مصممة لفرق طب الأسنان.',
        },
        primary: { patients: 'ابحث عن طبيب أسنان', clinics: 'احجز عرضًا توضيحيًا' },
        secondary: { patients: 'كيف تعمل دنتلورا', clinics: 'شاهد كيف تعمل' },
      },
    },
    footer: {
      tagline: 'ابتسامتك، رعايتنا',
      description: 'رعاية سنية متصلة للمرضى والأطباء والعيادات من الحجز إلى المتابعة.',
      footerNavAria: 'روابط الفوتر',
      followUs: 'تابعنا',
      copyright: '© 2026 دنتلورا. جميع الحقوق محفوظة.',
      social: {
        instagram: 'دنتلورا على إنستغرام',
        linkedin: 'دنتلورا على لينكدإن',
        facebook: 'دنتلورا على فيسبوك',
        tiktok: 'دنتلورا على تيك توك',
      },
      termsLink: 'الشروط والأحكام',
      terms: {
        modalTitle: 'الشروط والأحكام',
        closeAria: 'إغلاق الشروط والأحكام',
        version: 'الإصدار 1.0 · أغسطس 2026',
        sections: [
          {
            heading: '1. المقدمة والموافقة',
            blocks: [
              { type: 'p', text: 'تحكم هذه الشروط والأحكام ("الشروط") وصولك إلى منصة دنتلورا لطب الأسنان واستخدامك لها، بما في ذلك موقع دنتلورا الإلكتروني، وتطبيق المريض على الهاتف المحمول، وتطبيق الطبيب، ولوحة تحكم العيادة، ولوحة تحكم الإدارة (يُشار إليها مجتمعة بـ"المنصة"). دنتلورا هي منظومة رقمية متكاملة لطب الأسنان تربط بين المرضى وأطباء الأسنان والعيادات من خلال نظام واحد متكامل يغطي رحلة الرعاية بأكملها، بدءًا من الاكتشاف والحجز مرورًا بالعلاج والوصفات الطبية والمتابعة وتتبّع الرعاية المستمرة.' },
              { type: 'p', text: 'من خلال تحميل المنصة أو الوصول إليها أو التسجيل فيها أو استخدامها، فإنك تقر بأنك قد قرأت هذه الشروط وسياسة الخصوصية الخاصة بدنتلورا وفهمتهما، وتوافق على الالتزام بهما. في حال عدم موافقتك، يجب عليك عدم استخدام المنصة.' },
              { type: 'p', text: 'تعمل المنصة في مصر وكندا والولايات المتحدة الأمريكية. بعض الميزات مخصصة لدول معينة وقد لا تكون متاحة في كل مكان. وفي حال فرض القانون المحلي متطلبات تختلف عن هذه الشروط، تكون الغلبة للقانون المحلي المعمول به بالنسبة للمستخدمين في تلك الدولة.' },
            ],
          },
          {
            heading: '2. التعريفات',
            blocks: [
              {
                type: 'ul',
                items: [
                  '«المريض» يعني الفرد الذي يستخدم المنصة للبحث عن الأطباء وحجز المواعيد وإدارة رحلة رعايته السنية.',
                  '«الطبيب» يعني ممارس طب أسنان مرخّصًا ومسجّلاً على المنصة، يدير المواعيد والجلسات والوصفات الطبية وخطط العلاج ورعاية المتابعة.',
                  '«العيادة» تعني عيادة أسنان يستخدم طاقمها لوحة تحكم العيادة لتأكيد المدفوعات ومتابعة الجلسات وإدارة السجلات التشغيلية.',
                  '«المسؤول» يعني مسؤول منصة أو مسؤول دولة أو منطقة يتولى إدارة البيانات الأساسية والصلاحيات والإشراف التشغيلي ضمن النطاق المخصص له.',
                  '«الموعد» يعني حجزًا يقوم به مريض مع طبيب في عيادة لخدمة محددة وتاريخ ووقت معينين.',
                  '«خطة العلاج» تعني مسار رعاية منظّمًا متعدد الجلسات ينشئه الطبيب بعد اكتمال جلسة الموعد.',
                  '«المحتوى» يعني أي نصوص أو ملاحظات أو صور أو أشعة أو مستندات أو تقييمات أو أي مواد أخرى يتم تقديمها إلى المنصة أو إنشاؤها عليها.',
                ],
              },
            ],
          },
          {
            heading: '3. الأهلية والحسابات',
            blocks: [
              { type: 'h4', text: '3.1 الأهلية' },
              { type: 'p', text: 'يجب أن يكون عمرك 18 عامًا على الأقل، أو سن الرشد القانوني في بلد إقامتك، لامتلاك حساب. لا يجوز للقاصر الحصول على الرعاية إلا من خلال حساب يملكه ويديره أحد الوالدين أو الوصي القانوني، الذي يقبل هذه الشروط نيابة عن القاصر ويظل مسؤولاً عن استخدام ذلك الحساب.' },
              { type: 'h4', text: '3.2 التسجيل والتحقق' },
              { type: 'p', text: 'يسجّل المرضى الدخول ويستخدمون المنصة باستخدام رقم الهاتف المحمول ورمز مرور لمرة واحدة يُرسل عبر رسالة نصية قصيرة. يقوم المرضى الجدد بإكمال بيانات التسجيل، بما في ذلك الاسم والجنسية وعنوان بريد إلكتروني اختياري، بعد التحقق من الرقم، ويجب عليهم قبول هذه الشروط أثناء التسجيل. يمكن للزوار تصفح أجزاء من المنصة دون حساب، إلا أن الميزات المقيّدة تتطلب التحقق من الهوية.' },
              { type: 'p', text: 'يصل الأطباء ومستخدمو العيادات والمسؤولون إلى تطبيقاتهم الخاصة باستخدام بيانات دخول يصدرها أحد المسؤولين. يتم إنشاء حسابات الأطباء واعتمادها من خلال عملية مراجعة إدارية بدلاً من التسجيل الذاتي المفتوح، وذلك للتحقق من المؤهلات المهنية قبل ظهور الطبيب للمرضى.' },
              { type: 'h4', text: '3.3 مسؤولية الحساب' },
              {
                type: 'ul',
                items: [
                  'أنت مسؤول عن الحفاظ على أمان رقم هاتفك وجهازك وبيانات الدخول الخاصة بك، وعن جميع الأنشطة التي تتم من خلال حسابك.',
                  'يجب عليك تقديم معلومات دقيقة وحديثة وكاملة، والحفاظ على تحديثها.',
                  'يُحظر عليك مشاركة حسابك أو بيعه أو نقله، أو انتحال شخصية أي شخص أو مختص آخر.',
                  'يجب عليك إخطار دنتلورا فورًا بأي استخدام غير مصرح به لحسابك.',
                ],
              },
            ],
          },
          {
            heading: '4. الخدمات',
            blocks: [
              { type: 'p', text: 'توفر المنصة، وفقًا لدورك وبلدك، ما يلي:' },
              {
                type: 'ul',
                items: [
                  'اكتشاف والبحث عن الأطباء والعيادات، بما في ذلك مطابقة الطبيب بناءً على الأعراض حيثما تكون هذه الميزة مفعّلة.',
                  'حجز المواعيد مع عرض ملخص أسعار شفاف قبل التأكيد.',
                  'إدارة الجلسات والملاحظات السريرية وإصدار الوصفات الطبية من قبل الأطباء.',
                  'إنشاء ومتابعة خطط العلاج متعددة الجلسات، مع جدول زمني واضح للخطة وتقدّم الجلسات.',
                  'قرارات المتابعة، وتقديم المريض لأعراضه، وجلسات المتابعة.',
                  'عرض الوصفات الطبية وتحميلها بصيغة PDF، والتقييمات، والإشعارات، وإدارة ملفك الشخصي وسجلك الطبي.',
                ],
              },
              { type: 'p', text: 'دنتلورا هي منصة تسهيل وإدارة. وهي لا تقدّم بذاتها رعاية أو تشخيصًا أو علاجًا سنيًا أو طبيًا، وجميع القرارات السريرية تُتخذ من قبل الطبيب المعالج.' },
            ],
          },
          {
            heading: '5. إخلاء المسؤولية الطبية',
            blocks: [
              { type: 'p', text: 'تربطك المنصة بأطباء وعيادات مستقلين. لا تقدّم دنتلورا استشارات طبية، ولا تمارس طب الأسنان أو الطب، وهي ليست بديلاً عن الفحص الشخصي المتخصص. الغرض من المعلومات المعروضة على المنصة، بما في ذلك نتائج المطابقة القائمة على الأعراض، هو مساعدتك في إيجاد وتنظيم الرعاية، ولا يجوز الاعتماد عليها كتشخيص.' },
              { type: 'p', text: 'العلاقة المهنية الخاصة بأي تشخيص أو وصفة طبية أو علاج قائمة بينك وبين طبيبك وعيادتك، وهما المسؤولان وحدهما عن الرعاية التي يقدّمانها. في حالات الطوارئ الطبية، لا تستخدم المنصة، بل تواصل فورًا مع خدمات الطوارئ المحلية.' },
            ],
          },
          {
            heading: '6. الحجز والرسوم والدفع',
            blocks: [
              { type: 'h4', text: '6.1 التسعير' },
              { type: 'p', text: 'السعر الإجمالي للحجز هو مجموع رسوم الطبيب ورسوم العيادة، ويتم تحديد كل منهما لكل طبيب وعيادة على حدة. قبل تأكيد الحجز، تعرض المنصة رسوم الطبيب ورسوم العيادة والسعر الإجمالي. تُطبَّق أي عمولة للمنصة على رسوم العيادة فقط، ولا تؤدي إلى زيادة السعر الإجمالي المعروض عليك.' },
              { type: 'h4', text: '6.2 تأكيد الدفع' },
              { type: 'p', text: 'يتم ترتيب الدفع مباشرة مع العيادة، ويتم تأكيده من قبل طاقم العيادة، وذلك عادةً عند حضور المريض. لا يصبح الموعد جاهزًا للجلسة إلا بعد تأكيد العيادة للدفع، وكذلك الحال بالنسبة لكل جلسة من جلسات خطة العلاج، التي تتطلب تأكيد الدفع من العيادة قبل المتابعة. لا تقوم دنتلورا، في الإصدار الحالي، بحيازة أو تحصيل أو تسوية مدفوعات المرضى نيابة عن العيادات.' },
              { type: 'h4', text: '6.3 الإلغاء والاسترداد' },
              { type: 'p', text: 'تُدار ترتيبات الإلغاء والاسترداد مباشرة بين المريض والعيادة، وفقًا لسياسة العيادة الخاصة والقانون المحلي المعمول به. لا تقوم دنتلورا بمعالجة أو الفصل في طلبات الاسترداد أو ضمانها. وفي حال إضافة وظيفة الإلغاء أو الاسترداد إلى المنصة مستقبلاً، سيتم تحديث هذه الشروط وفقًا لذلك.' },
            ],
          },
          {
            heading: '7. الوصفات الطبية وخطط العلاج والمتابعة',
            blocks: [
              { type: 'p', text: 'لا يجوز إصدار الوصفة الطبية إلا بالارتباط مع جلسة مكتملة، ويجب أن تتضمن دواءً واحدًا على الأقل. تُتاح الوصفات الطبية للمريض للاطلاع عليها وتحميلها بصيغة PDF.' },
              { type: 'p', text: 'لا يجوز إنشاء خطة العلاج إلا بعد اكتمال جلسة الموعد، وتتكون من جلسة واحدة أو أكثر، لكل منها عنوانها ووصفها وسعرها الخاص. تُؤرشف الخطة المكتملة في سجل رعاية المريض.' },
              { type: 'p', text: 'بعد اكتمال أي جلسة، يقرر الطبيب ما إذا كانت المتابعة مطلوبة. وإذا كانت كذلك، يتلقى المريض إشعارًا ويقدّم أعراضه الحالية عبر نموذج المتابعة، ويقوم الطبيب بمراجعتها وإجراء جلسة المتابعة وإغلاقها مع تدوين الملاحظات.' },
              { type: 'p', text: 'أنت مسؤول عن استخدام الأدوية واتباع أي خطة علاج بدقة وفقًا لتوجيهات طبيبك والإرشادات المهنية المرافقة.' },
            ],
          },
          {
            heading: '8. التقييمات والمراجعات',
            blocks: [
              { type: 'p', text: 'يمكن للمرضى تقديم تقييمات حول تجربة رعايتهم. وللحفاظ على عدالة المنصة وموثوقيتها، تخضع التقييمات للمراجعة قبل ظهورها للعامة. أنت توافق على أن تكون تقييماتك ومراجعاتك صادقة ومبنية على تجربة حقيقية وخالية من أي محتوى غير قانوني أو تشهيري أو مسيء أو مضلل. يجوز لدنتلورا رفض نشر أي محتوى يخالف هذه الشروط أو إزالته.' },
            ],
          },
          {
            heading: '9. الاستخدام المقبول',
            blocks: [
              { type: 'p', text: 'توافق على عدم القيام بما يلي:' },
              {
                type: 'ul',
                items: [
                  'استخدام المنصة لأي غرض غير قانوني أو احتيالي أو ضار، أو بما يخالف أي قانون رعاية صحية أو حماية بيانات معمول به.',
                  'الوصول أو محاولة الوصول إلى بيانات تخص مرضى أو أطباء أو عيادات آخرين، أو التدخل فيها، أو الوصول إلى بيانات خارج نطاق بلدك المصرح به.',
                  'تقديم محتوى زائف أو مضلل أو منتهك للحقوق أو تشهيري أو فاحش، أو يحتوي على برمجيات ضارة.',
                  'إجراء هندسة عكسية للمنصة أو استخراج بياناتها آليًا أو إثقالها أو تعطيلها أو الالتفاف على أي ميزة أمان أو تحكم في الوصول بها.',
                  'استخدام المنصة لتقديم أو طلب رعاية بطريقة تخالف متطلبات الترخيص المهني.',
                  'تقديم معلومات مضللة حول المؤهلات المهنية أو حالة الترخيص أو الانتماء إلى عيادة أو التوافر.',
                ],
              },
            ],
          },
          {
            heading: '10. الأطباء والعيادات والمسؤولون',
            blocks: [
              { type: 'p', text: 'الأطباء والعيادات مزوّدون مستقلون، مسؤولون عن دقة ملفاتهم الشخصية وتوافرهم ورسومهم وسجلاتهم السريرية والرعاية التي يقدّمونها. يعمل الطبيب ضمن دولة واحدة، ويمكن تعيينه في عدة عيادات داخل تلك الدولة، بينما تنتمي كل عيادة إلى دولة واحدة. يدير المسؤولون البيانات الأساسية ضمن النطاق المخصص لهم، ولا يجوز لمسؤولي الدول والمناطق الاطلاع على البيانات أو إدارتها إلا ضمن الدول المخصصة لهم. يجب على كل طرف الالتزام بهذه الشروط وبجميع الالتزامات المهنية والترخيصية والقانونية المعمول بها عليه.' },
            ],
          },
          {
            heading: '11. الملكية الفكرية',
            blocks: [
              { type: 'p', text: 'المنصة، بما في ذلك برمجياتها وتصميمها واسمها وشعارها وعلاماتها التجارية والمحتوى الذي تنشئه دنتلورا، مملوكة لدنتلورا أو للجهات المرخِّصة لها، ومحمية بموجب قانون الملكية الفكرية. تُمنح ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابلًا للإلغاء لاستخدام المنصة للغرض المخصص لها. تحتفظ بملكية المحتوى الذي تقدّمه، وتمنح دنتلورا ترخيصًا لاستضافة ذلك المحتوى ومعالجته وعرضه فقط لغرض تشغيل المنصة وتقديمها. لا يجوز لك نسخ المنصة أو تعديلها أو توزيعها أو إنشاء أعمال مشتقة منها إلا بالقدر المسموح به صراحةً.' },
            ],
          },
          {
            heading: '12. خدمات الأطراف الثالثة',
            blocks: [
              { type: 'p', text: 'تعتمد المنصة في عملها على خدمات مقدَّمة من أطراف ثالثة، بما في ذلك إرسال الرسائل النصية القصيرة ورموز المرور لمرة واحدة، والإشعارات الفورية، وإرسال البريد الإلكتروني، وبيانات الخرائط والمواقع الخارجية، وتخزين الملفات، وإنشاء ملفات PDF. تُقدَّم هذه الخدمات من قبل أطراف ثالثة بموجب شروطها الخاصة، ولا تتحمل دنتلورا مسؤولية توافرها أو دقتها أو أدائها. كما يخضع استخدامك للميزات المعتمدة عليها لشروط هؤلاء المزوّدين.' },
            ],
          },
          {
            heading: '13. الخصوصية وحماية البيانات',
            blocks: [
              { type: 'p', text: 'تقوم دنتلورا بمعالجة المعلومات الشخصية والصحية لتشغيل المنصة، وذلك على النحو الموضح في سياسة الخصوصية الخاصة بدنتلورا، والتي تشكّل جزءًا من هذه الشروط. تُنظَّم البيانات وفق مبدأ العزل حسب الدولة والتحكم في الوصول حسب الدور، بحيث لا يصل كل مستخدم إلا إلى البيانات ضمن النطاق المسموح له به. باستخدامك للمنصة، فإنك توافق على تلقي رسائل الخدمة، بما في ذلك رموز التحقق، وتحديثات المواعيد، وإشعارات خطط العلاج والمتابعة، والرسائل الإدارية.' },
            ],
          },
          {
            heading: '14. التوافر واللغة والتعديلات',
            blocks: [
              { type: 'p', text: 'تُقدَّم المنصة على أساس "كما هي متاحة". يجوز لدنتلورا تعديل الميزات أو تعليقها أو إيقافها، وإضافة دول مدعومة أو إزالتها. وفي حال كان التغيير يؤثر جوهريًا على حقوقك، سيتم إشعارك عبر التطبيق أو البريد الإلكتروني أو أي وسيلة بارزة أخرى قبل سريانه، ويُعد استمرارك في استخدام المنصة بعد ذلك التاريخ بمثابة قبول له.' },
              { type: 'p', text: 'تُقدَّم المنصة وهذه الشروط باللغتين العربية والإنجليزية. يُقصد بالنسختين أن تحملا المعنى ذاته؛ وفي حال وجود أي تعارض بينهما، تُعتمد النسخة الإنجليزية لحل التفسير، إلا في الحالات التي يقتضي فيها القانون المحلي أن تكون الغلبة للنسخة العربية.' },
            ],
          },
          {
            heading: '15. تحديد المسؤولية',
            blocks: [
              { type: 'p', text: 'إلى أقصى حد يسمح به القانون، لا تتحمل دنتلورا المسؤولية عن أفعال أو تقصير أو قرارات سريرية صادرة عن أي طبيب أو عيادة، ولا عن أي نتيجة طبية، ولا عن أي خسارة غير مباشرة أو عرضية أو خاصة أو تبعية تنشأ عن استخدامك للمنصة. لا يستثني أي بند من هذه الشروط أي مسؤولية لا يجوز استثناؤها بموجب القانون المعمول به، بما في ذلك المسؤولية عن الوفاة أو الإصابة الشخصية الناتجة عن إهمال مثبت. وحيثما يتعذر استبعاد المسؤولية بالكامل، تكون محدودة إلى أقصى حد يسمح به القانون المعمول به في بلدك.' },
            ],
          },
          {
            heading: '16. التعويض',
            blocks: [
              { type: 'p', text: 'توافق على تعويض دنتلورا والشركات التابعة لها وموظفيها وإبرائهم من أي مطالبات أو أضرار أو خسائر أو نفقات معقولة تنشأ عن مخالفتك لهذه الشروط، أو إساءة استخدامك للمنصة، أو انتهاكك لأي قانون أو لحقوق أي طرف ثالث.' },
            ],
          },
          {
            heading: '17. التعليق والإنهاء',
            blocks: [
              { type: 'p', text: 'يمكنك التوقف عن استخدام المنصة في أي وقت وطلب حذف حسابك. يجوز لدنتلورا، أو لأحد المسؤولين الذي يتصرف ضمن نطاقه، تعليق الوصول أو إنهاءه في حال مخالفة هذه الشروط، أو عند اقتضاء القانون ذلك، أو عند الضرورة لحماية سلامة المنصة أو نزاهتها أو تشغيلها القانوني. يُحتفظ بالسجلات السريرية بعد الإنهاء للمدة التي تقتضيها قواعد حفظ السجلات الطبية المعمول بها. تستمر الأحكام التي تقتضي طبيعتها البقاء سارية بعد الإنهاء، بما في ذلك الملكية الفكرية وإخلاءات المسؤولية وتحديد المسؤولية والقانون الحاكم، في السريان.' },
            ],
          },
          {
            heading: '18. القانون الحاكم والنزاعات',
            blocks: [
              { type: 'p', text: 'تخضع هذه الشروط لقوانين الدولة التي تصل من خلالها إلى المنصة وتستخدمها، سواء كانت مصر أو كندا أو الولايات المتحدة الأمريكية، وتخضع النزاعات لمحاكم أو السلطات المختصة في تلك الولاية القضائية. ولا يُخل ذلك بأي حماية إلزامية لقوانين حماية المستهلك أو الرعاية الصحية المتاحة لك محليًا. تُوجَّه الشكاوى المتعلقة بالرعاية أولاً إلى الطبيب المعالج أو العيادة، بينما تُوجَّه الشكاوى المتعلقة بالمنصة إلى دنتلورا.' },
            ],
          },
          {
            heading: '19. التواصل',
            blocks: [
              { type: 'p', text: 'يمكن تقديم الأسئلة المتعلقة بهذه الشروط، والإبلاغ عن إساءة الاستخدام أو المحتوى الذي يخالفها، من خلال قنوات التواصل المنشورة على موقع دنتلورا الإلكتروني وفي قسم الدعم بتطبيقات دنتلورا.' },
            ],
          },
        ],
      },
    },
    privacyPolicy: {
      title: 'سياسة الخصوصية',
      backHome: 'العودة للصفحة الرئيسية',
      meta: [
        { text: 'في دنتلورا، نحن نأخذ سرية بياناتك الصحية ومعلوماتك الشخصية على محمل الجد. توضح هذه السياسة ما الذي نجمعه، وكيف يتم استخدامه، وكيف يتم حماية بياناتك.', strong: true },
        { text: 'آخر تحديث: فبراير 2026' },
      ],
      sections: [
        {
          heading: '1. نظرة عامة ونطاق التطبيق',
          paragraphs: [
            [{ text: 'تنطبق سياسة الخصوصية هذه على تطبيقات دنتلورا للهواتف المحمولة (المتوفرة على iOS وAndroid)، والمواقع الإلكترونية، والخدمات الصحية ذات الصلة (يُشار إليها مجتمعة باسم "المنصة").' }],
            [{ text: 'من خلال إنشاء حساب، أو تحميل تطبيق دنتلورا، أو استخدام خدماتنا، فإنك توافق على جمع ومعالجة معلوماتك على النحو الموضح في هذه السياسة.' }],
          ],
        },
        {
          heading: '2. المعلومات التي نجمعها',
          paragraphs: [
            [{ text: 'نجمع فقط البيانات اللازمة لتقديم خدمات تنسيق رعاية سنية وصحية آمنة ومخصصة:' }],
          ],
          list: [
            [{ text: 'معلومات الحساب: الاسم، رقم الهاتف، البريد الإلكتروني، تاريخ الميلاد، وكلمة المرور.' }],
            [{ text: 'السجلات السنية والصحية: استبيانات التاريخ الطبي، خطط العلاج السني، المواعيد السابقة، الأدوية الموصوفة، الملاحظات السنية، والتاريخ السريري الذي تتم مشاركته بموافقتك.' }],
            [{ text: 'الصور والتشخيصات: صور الأسنان الاختيارية، الأشعة السينية، أو ملفات المسح التي تقوم أنت أو طبيب أسنانك برفعها لمتابعة رحلة علاجك.' }],
            [{ text: 'بيانات المواعيد والعيادات: تواريخ الحجز، العيادات المختارة، أطباء الأسنان المعالجين، وملاحظات الزيارة.' }],
            [{ text: 'المعلومات التقنية وبيانات الجهاز: طراز الجهاز، إصدار نظام التشغيل، معرّفات الجهاز الفريدة، عنوان IP، وبيانات تحليل الأعطال للحفاظ على موثوقية التطبيق.' }],
          ],
        },
        {
          heading: '3. كيف نستخدم معلوماتك',
          paragraphs: [
            [{ text: 'يتم استخدام بياناتك حصريًا للأغراض التالية:' }],
          ],
          list: [
            [{ text: 'لتمكين جدولة وإدارة مواعيد الأسنان مع عيادات وأطباء موثّقين.' }],
            [{ text: 'للحفاظ على سجلك السني المتصل ومراحل العلاج عبر مقدمي الخدمة المشاركين.' }],
            [{ text: 'لإرسال تذكيرات المواعيد الأساسية، وتذكيرات الأدوية، وتنبيهات رعاية المتابعة.' }],
            [{ text: 'لتقديم دعم سريع للمرضى وحل المشكلات التقنية.' }],
            [{ text: 'للحفاظ على أمان المنصة، ومنع الوصول غير المصرح به، والامتثال للوائح الصحية المعمول بها.' }],
            [{ text: 'لن نقوم أبدًا ببيع بياناتك الشخصية أو معلومات الاتصال أو السجلات الطبية إلى معلنين خارجيين أو وسطاء بيانات.', strong: true }],
          ],
        },
        {
          heading: '4. حماية البيانات ومعايير الأمان',
          paragraphs: [
            [{ text: 'يعتمد تطبيق دنتلورا بروتوكولات أمان بمعايير الصناعة مصممة لحماية المعلومات الصحية الحساسة:' }],
          ],
          list: [
            [{ text: 'التشفير: يتم تشفير جميع البيانات أثناء النقل باستخدام TLS/SSL (HTTPS) وأثناء التخزين باستخدام معايير تشفير AES-256 الحديثة.' }],
            [{ text: 'ضوابط وصول صارمة: أنت فقط وأطباء الأسنان الذين تصرّح لهم صراحةً يمكنهم الوصول إلى الجدول الزمني لعلاجك السريري وسجلاتك.' }],
            [{ text: 'أمان البنية التحتية: يتم استضافة الخوادم السحابية في مراكز بيانات معتمدة وعالية الأمان مع مراقبة على مدار الساعة وتقييمات دورية للثغرات الأمنية.' }],
          ],
        },
        {
          heading: '5. مشاركة المعلومات',
          paragraphs: [
            [{ text: 'نشارك معلوماتك فقط في السيناريوهات المحددة التالية:' }],
          ],
          list: [
            [{ text: 'مع عيادات وأطباء أسنانك: يتلقى مقدمو الرعاية الصحية الذين تختارهم ملفك الشخصي وتفاصيل المواعيد وسجلك السني ذي الصلة لتقديم العلاج.' }],
            [{ text: 'مقدمو الخدمات الموثوقون: خدمات طرف ثالث آمنة (مثل الاستضافة السحابية، وخدمات الرسائل النصية والبريد الإلكتروني التبادلية، وتسجيل الأعطال) تساعد في تشغيل المنصة بموجب اتفاقيات سرية صارمة.' }],
            [{ text: 'المتطلبات القانونية: إذا طُلب منا ذلك بموجب أمر قضائي، أو استدعاء قانوني، أو لوائح صحية معمول بها.' }],
          ],
        },
        {
          heading: '6. حذف الحساب وحقوقك',
          paragraphs: [
            [{ text: 'امتثالًا لإرشادات App Store وGoogle Play، تحتفظ بالملكية والسيطرة الكاملة على بياناتك الشخصية:' }],
          ],
          list: [
            [{ text: 'حذف الحساب داخل التطبيق: يمكنك حذف حسابك في أي وقت مباشرة من داخل تطبيق دنتلورا عبر الانتقال إلى الإعدادات > الملف الشخصي > حذف الحساب.' }],
            [{ text: 'طلب مباشر عبر البريد الإلكتروني: يمكنك أيضًا طلب حذف كامل للحساب وإزالة البيانات عبر مراسلتنا على Support@dentlora.com.' }],
            [{ text: 'تصدير البيانات وتصحيحها: يمكنك طلب نسخة من سجلاتك المخزنة أو طلب تصحيح المعلومات الشخصية غير الدقيقة في أي وقت.' }],
          ],
        },
        {
          heading: '7. خصوصية الأطفال',
          paragraphs: [
            [{ text: 'لا يهدف تطبيق دنتلورا للاستخدام دون إشراف من قبل الأطفال دون سن 13 عامًا. يمكن إدارة السجلات السنية للقُصّر عبر المنصة فقط من خلال ملف عائلي معتمد يديره أحد الوالدين أو الوصي القانوني.' }],
          ],
        },
        {
          heading: '8. التغييرات على سياسة الخصوصية هذه',
          paragraphs: [
            [{ text: 'قد نقوم بتحديث هذه السياسة بشكل دوري لتعكس تحسينات في خدماتنا أو المتطلبات القانونية. عند حدوث تحديثات، سنُخطرك عبر التطبيق أو من خلال تحديث تاريخ "آخر تحديث" أعلى هذه الصفحة.' }],
          ],
        },
        {
          heading: '9. التواصل والدعم',
          paragraphs: [
            [{ text: 'إذا كانت لديك أي أسئلة أو ملاحظات أو استفسارات بخصوص خصوصيتك أو التعامل مع بياناتك، فريق الخصوصية لدينا جاهز لمساعدتك:' }],
            [{ text: 'البريد الإلكتروني: ', strong: true }, { text: 'Support@dentlora.com', link: 'mailto:Support@dentlora.com' }],
          ],
        },
      ],
      footer: '© 2026 دنتلورا. جميع الحقوق محفوظة.',
    },
  },
};