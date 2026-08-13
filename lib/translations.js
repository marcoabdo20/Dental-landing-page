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
          'Manage sessions, prescriptions, treatment plans, and follow-ups — all from one connected workspace built for dental teams.',
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
      sub: 'Book appointments, track your treatment, and view your prescriptions — anytime, anywhere.',
      tabsAria: 'Patient app screens',
      tabs: { book: 'Book', track: 'Track', records: 'Records', download: 'Download' },
      bookingAlt: 'A hand holding a phone showing the Dentlora patient app booking screen',
      notes: {
        book: [
          { title: 'Appointment confirmed', desc: 'Dr. Ahmed — Tue, 10:30 AM' },
          { title: '3 clinics near you', desc: 'Closest is 2.4 km away' },
          { title: 'Reminder set', desc: "We'll nudge you a day before" },
          { title: 'Verified dentist', desc: '4.9 from 210 patients' },
        ],
        track: [
          { title: 'Session 3 of 5 complete', desc: 'Treatment 75% done' },
          { title: 'Next visit in 12 days', desc: 'Mar 24 — 4:00 PM' },
          { title: 'On track', desc: '2 days ahead of plan' },
          { title: 'Aligner change due', desc: 'Switch to tray 8 tonight' },
        ],
        records: [
          { title: 'X-ray uploaded', desc: 'Panoramic — 12 Mar' },
          { title: 'Prescription ready', desc: 'Amoxicillin 500mg — PDF' },
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
        patients: 'From your first visit to your last follow-up — everything stays connected.',
        clinics: 'From the first session to the last follow-up — everything stays in one workspace.',
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
            'Initial Consultation — Completed',
            'Braces Installation — Completed',
            'Adjustment — In Progress',
            'Retainer Phase — Pending',
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
          clinics: 'Access complete, read-only patient history — securely, whenever you need it.',
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
          'Dentlora brings every part of your dental care together — so you can focus on what matters most: your health and your smile.',
        clinics:
          'Every session, plan and follow-up in one workspace — so your team can focus on care instead of chasing paperwork.',
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
            patients: 'Your X-rays, reports, and documents — always secure.',
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
        "A missed reminder. A lost prescription. A treatment plan you can't quite remember. Dental care often lives in too many places at once — and patients are the ones left piecing it together.",
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
          'Dentlora keeps every part of your dental care in one clear, connected flow — from booking to follow-up.',
        clinics:
          'Dentlora keeps your practice in one clear, connected flow — from setting up your profile to tracking patient progress.',
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
            'Manage sessions, prescriptions, treatment plans, and follow-ups — all from one connected workspace built for dental teams.',
        },
        primary: { patients: 'Find a Dentist', clinics: 'Book a Demo' },
        secondary: { patients: 'How Dentlora Works', clinics: 'See How It Works' },
      },
    },
    footer: {
      tagline: 'Your smile, our care',
      description: 'Connected dental care for patients, doctors, and clinics — from booking to follow-up.',
      footerNavAria: 'Footer',
      followUs: 'Follow us',
      copyright: '© 2026 Dentlora. All rights reserved.',
      social: {
        instagram: 'Dentlora on Instagram',
        linkedin: 'Dentlora on LinkedIn',
        facebook: 'Dentlora on Facebook',
        tiktok: 'Dentlora on TikTok',
      },
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
          'أدر الجلسات والوصفات الطبية وخطط العلاج والمتابعات — كل ذلك من مساحة عمل واحدة متصلة مصممة لفرق طب الأسنان.',
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
      sub: 'احجز مواعيدك، تابع علاجك، واطّلع على وصفاتك الطبية — في أي وقت ومن أي مكان.',
      tabsAria: 'شاشات تطبيق المريض',
      tabs: { book: 'الحجز', track: 'المتابعة', records: 'السجلات', download: 'التحميل' },
      bookingAlt: 'يد تحمل هاتفًا يعرض شاشة حجز المواعيد في تطبيق دنتلورا للمرضى',
      notes: {
        book: [
          { title: 'تم تأكيد الموعد', desc: 'د. أحمد — الثلاثاء، 10:30 ص' },
          { title: '3 عيادات بالقرب منك', desc: 'أقرب عيادة على بعد 2.4 كم' },
          { title: 'تم ضبط التذكير', desc: 'سنذكّرك قبل يوم من الموعد' },
          { title: 'طبيب موثّق', desc: '4.9 من 210 مريض' },
        ],
        track: [
          { title: 'اكتملت الجلسة 3 من 5', desc: 'اكتمل العلاج بنسبة 75%' },
          { title: 'الزيارة القادمة خلال 12 يومًا', desc: '24 مارس — 4:00 م' },
          { title: 'على المسار الصحيح', desc: 'متقدم بيومين عن الخطة' },
          { title: 'حان وقت تغيير المقوّم', desc: 'بدّل إلى القالب رقم 8 الليلة' },
        ],
        records: [
          { title: 'تم رفع الأشعة', desc: 'بانورامية — 12 مارس' },
          { title: 'الوصفة جاهزة', desc: 'أموكسيسيلين 500 ملغم — PDF' },
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
        patients: 'من أول زيارة إلى آخر متابعة — يبقى كل شيء متصلاً.',
        clinics: 'من أول جلسة إلى آخر متابعة — يبقى كل شيء في مساحة عمل واحدة.',
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
            'الاستشارة الأولية — مكتملة',
            'تركيب التقويم — مكتمل',
            'الضبط — قيد التنفيذ',
            'مرحلة المثبّت — قيد الانتظار',
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
          clinics: 'اطّلع على السجل الكامل للمريض للقراءة فقط — بأمان، وقتما تحتاج.',
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
          'تجمع دنتلورا كل جوانب رعايتك السنية في مكان واحد — لتتمكن من التركيز على الأهم: صحتك وابتسامتك.',
        clinics:
          'كل جلسة وخطة ومتابعة في مساحة عمل واحدة — ليتمكن فريقك من التركيز على الرعاية بدلاً من ملاحقة الأوراق.',
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
            patients: 'أشعتك وتقاريرك ومستنداتك — آمنة دائمًا.',
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
        'تذكير فاتك. وصفة طبية ضائعة. خطة علاج لا تتذكرها بوضوح. غالبًا ما تكون رعاية الأسنان موزّعة في أماكن كثيرة في آن واحد — ويترك المرضى ليجمعوا كل هذا بأنفسهم.',
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
          'تحافظ دنتلورا على كل جزء من رعايتك السنية في مسار واحد واضح ومتصل — من الحجز إلى المتابعة.',
        clinics:
          'تحافظ دنتلورا على عيادتك في مسار عمل واحد واضح ومتصل — من إعداد ملفك الشخصي إلى متابعة تقدم المرضى.',
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
            'أدر الجلسات والوصفات الطبية وخطط العلاج والمتابعات — كل ذلك من مساحة عمل واحدة متصلة مصممة لفرق طب الأسنان.',
        },
        primary: { patients: 'ابحث عن طبيب أسنان', clinics: 'احجز عرضًا توضيحيًا' },
        secondary: { patients: 'كيف تعمل دنتلورا', clinics: 'شاهد كيف تعمل' },
      },
    },
    footer: {
      tagline: 'ابتسامتك، رعايتنا',
      description: 'رعاية سنية متصلة للمرضى والأطباء والعيادات — من الحجز إلى المتابعة.',
      footerNavAria: 'روابط الفوتر',
      followUs: 'تابعنا',
      copyright: '© 2026 دنتلورا. جميع الحقوق محفوظة.',
      social: {
        instagram: 'دنتلورا على إنستغرام',
        linkedin: 'دنتلورا على لينكدإن',
        facebook: 'دنتلورا على فيسبوك',
        tiktok: 'دنتلورا على تيك توك',
      },
    },
  },
};
