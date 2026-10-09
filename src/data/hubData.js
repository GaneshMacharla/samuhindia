/**
 * SAMUH INDIA Learning & Training (SILT) Hub - Structured Data & Assets
 * Verified details from official launch flyer, location maps, and Google Form.
 */

export const GOOGLE_FORM_URL = "https://forms.gle/ECdK7qZhB1R6WVP29";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/2ySS4EZ3b8gARGgz8?g_st=ac";

export const businessInfo = {
  name: "Samuh India Learning & Training (SILT) Hub",
  shortName: "SILT Hub",
  brandName: "SAMUH INDIA",
  acronym: "SILT",
  tagline: "Learn | Train | Grow | Build Your Future",
  motto: "Better Teachers, Brighter Futures!",
  heroPunchline: "Learn Better, Score Higher!",
  missionTagline: "Your Success is Our Mission!",
  futureTagline: "Right Guidance Today... A Brighter Future Tomorrow!",
  supportingText:
    "An Education & Career Development initiative expanding Teaching, Training, Skill Development & Placement activities across School, Intermediate, Degree, Technical & Competitive exams in Hyderabad.",
  category: "Education & Career Development Hub",
  
  // Contact & Channels
  phone: "9849228757",
  phoneDisplay: "+91 98492 28757",
  phoneTel: "tel:9849228757",
  whatsappNumber: "919849228757",
  whatsappLink:
    "https://wa.me/919849228757?text=Hi%20SILT%20Hub%2C%20I%20would%20like%20to%20enquire%20about%20admissions%2C%20courses%2C%20and%20faculty%20opportunities.",
  
  // Official Links
  googleFormUrl: GOOGLE_FORM_URL,
  googleMapsUrl: GOOGLE_MAPS_URL,

  // Free Initiative
  freeCourseOffer: {
    title: "Free Skilling & Placement Course for Graduates",
    badge: "100% Free of Cost",
    description:
      "A zero-cost skilling and corporate placement training course for fresh & recent graduates to build job-ready digital, communication, and soft skills.",
    targetAudience: "Graduates & Final Year Students",
  },

  // Address
  address: {
    line1: "Near New Market Metro Station Exit-D",
    line2: "Beside Gunj, Saleem Nagar Colony, Gate - 4",
    line3: "Malakpet Extension",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500036",
    full: "Near New Market Metro Station Exit-D, Beside Gunj, Saleem Nagar, Malakpet, Hyderabad, Telangana 500036",
    landmark: "Beside Gunj, Gate - 4, Saleem Nagar, Exit-D of New Market Metro Station"
  },

  // Rating
  googleRating: {
    score: 4.8,
    reviewCount: 4,
    stars: 5,
  },

  // Operating Hours
  hours: {
    summary: "Mon – Sat: 10:00 AM – 7:00 PM",
  }
};

/**
 * Course Categories formatted with the vibrant color coding from the flyer
 */
export const programs = [
  {
    id: "school-education",
    category: "School Education",
    badge: "Class 1 – 10",
    name: "School Education (Class 1 – 10)",
    tagline: "All Subjects • CBSE / ICSE / State Board",
    description: "Strong conceptual base in Mathematics, Science, Social, and Languages. Daily practice, homework guidance, and exam preparation with caring mentors.",
    branches: ["Class 1 – 10 (All Subjects)", "CBSE Board", "ICSE Board", "State Board", "Maths & Science Clinics"],
    theme: {
      accent: "from-amber-500 to-orange-600",
      badgeBg: "bg-amber-100 text-amber-900",
      border: "border-amber-300 hover:border-amber-500",
      iconBg: "bg-amber-500 text-white",
      highlight: "text-amber-600"
    },
    highlights: [
      "Simplified concept explanations with real examples",
      "Regular unit tests & board revision sessions",
      "Special attention for difficult topics and maths",
      "Doubt clearing & personal academic care"
    ]
  },
  {
    id: "intermediate",
    category: "Intermediate (11 & 12)",
    badge: "Junior College",
    name: "Intermediate (11 & 12) Coaching",
    tagline: "MPC | BiPC | MEC | CEC and more...",
    description: "Rigorous academic coaching for Plus 2 students. Focuses on in-depth syllabus mastery, numerical derivations, board theory, and entrance readiness.",
    branches: ["MPC (Maths, Physics, Chem)", "BiPC (Biology, Physics, Chem)", "MEC (Maths, Econ, Commerce)", "CEC (Civics, Econ, Commerce)"],
    theme: {
      accent: "from-purple-600 to-indigo-700",
      badgeBg: "bg-purple-100 text-purple-900",
      border: "border-purple-300 hover:border-purple-500",
      iconBg: "bg-purple-600 text-white",
      highlight: "text-purple-600"
    },
    highlights: [
      "Experienced subject-specialist faculty",
      "Extensive chapter-wise problem banks",
      "Board exam score enhancement strategy",
      "Personalized doubt clearance & review"
    ]
  },
  {
    id: "engineering",
    category: "Engineering (B.E / Diploma)",
    badge: "B.E / Diploma",
    name: "Engineering & Polytechnic Tutoring",
    tagline: "Mechanical | Civil | ECE | CSE | EEE | IT & more...",
    description: "Comprehensive subject tuition for engineering and polytechnic students struggling with difficult university subjects, mathematics, and core concepts.",
    branches: ["Computer Science (CSE)", "Information Tech (IT)", "Electronics & Comm (ECE)", "Electrical & Electronics (EEE)", "Mechanical Engg", "Civil Engg", "Polytechnic Diploma"],
    theme: {
      accent: "from-blue-600 to-cyan-700",
      badgeBg: "bg-blue-100 text-blue-900",
      border: "border-blue-300 hover:border-blue-500",
      iconBg: "bg-blue-600 text-white",
      highlight: "text-blue-600"
    },
    highlights: [
      "Coaching for M1, M2, M3, Engineering Mechanics & Circuits",
      "Backlog clearance & semester score booster",
      "Clear conceptual instruction on core engineering topics",
      "Flexible evening and weekend batches"
    ]
  },
  {
    id: "medical-allied",
    category: "Medical (MBBS / Allied)",
    badge: "Medical Sciences",
    name: "Medical & Allied Health Sciences",
    tagline: "MBBS | BDS | Nursing | Paramedical | Allied Health",
    description: "Dedicated coaching for healthcare and nursing students tackling challenging pre-clinical and para-clinical curricula, anatomy, physiology, and pathology.",
    branches: ["MBBS (Pre-clinical & Clinical)", "BDS (Dental)", "B.Sc Nursing & GNM", "Paramedical Disciplines", "Allied Health Sciences"],
    theme: {
      accent: "from-rose-500 to-pink-600",
      badgeBg: "bg-rose-100 text-rose-900",
      border: "border-rose-300 hover:border-rose-500",
      iconBg: "bg-rose-500 text-white",
      highlight: "text-rose-600"
    },
    highlights: [
      "Specialist medical faculty guidance",
      "Clinical correlation and high-yield concept review",
      "Personalized doubt clearance & viva prep",
      "Small focused study batches"
    ]
  },
  {
    id: "pharmacy",
    category: "Pharmacy (D.Pharm / B.Pharm)",
    badge: "Pharmacy Degree & Diploma",
    name: "Pharmacy (D.Pharm / B.Pharm / M.Pharm)",
    tagline: "D.Pharm | B.Pharm | M.Pharm & more...",
    description: "Focused coaching in pharmaceutical chemistry, pharmaceutics, pharmacology, pharmacognosy, and jurisprudence with university exam focus.",
    branches: ["D.Pharm (Diploma)", "B.Pharm (Degree)", "M.Pharm (Post-Grad)", "GPAT Guidance"],
    theme: {
      accent: "from-emerald-600 to-teal-700",
      badgeBg: "bg-emerald-100 text-emerald-900",
      border: "border-emerald-300 hover:border-emerald-500",
      iconBg: "bg-emerald-600 text-white",
      highlight: "text-emerald-600"
    },
    highlights: [
      "Pharmaceutical chemistry & pharmacology depth",
      "Semester question paper solving & tips",
      "Lab practical concept clearance",
      "Personalized guidance by senior faculty"
    ]
  },
  {
    id: "competitive-exams",
    category: "Competitive Exams",
    badge: "Rank Oriented",
    name: "Competitive Exams Coaching",
    tagline: "JEE | NEET | EAPCET | POLYCET | UPSC | SSC | Bank",
    description: "Results-focused entrance and government exam preparation with time-tested shortcut tricks, speed building, and comprehensive test series.",
    branches: ["JEE (Main & Advanced)", "NEET (Medical Entrance)", "TG/AP EAPCET", "POLYCET (Diploma)", "UPSC & SSC Exams", "Bank PO & Clerical"],
    theme: {
      accent: "from-teal-600 to-emerald-700",
      badgeBg: "bg-teal-100 text-teal-900",
      border: "border-teal-300 hover:border-teal-500",
      iconBg: "bg-teal-600 text-white",
      highlight: "text-teal-600"
    },
    highlights: [
      "Extensive chapter-wise practice question banks",
      "Timed mock exams with rank analysis",
      "Shortcut tricks for speed and accuracy",
      "Strategic mentoring from top educators"
    ]
  },
  {
    id: "graduation-degree",
    category: "Undergraduate Degrees",
    badge: "Graduation",
    name: "Degree Courses (BCA, B.Com, BBA, B.Sc, BA)",
    tagline: "BCA | B.Com | BBA | BA | B.Sc.",
    description: "Semester coaching across Commerce, Computer Applications, Management, and Science for university students across Hyderabad.",
    branches: ["BCA (Computer Applications)", "B.Com (General & Computers)", "BBA (Business Admin)", "B.Sc (Comp Sci / Maths / Stats)", "BA (Humanities)"],
    theme: {
      accent: "from-indigo-600 to-blue-700",
      badgeBg: "bg-indigo-100 text-indigo-900",
      border: "border-indigo-300 hover:border-indigo-500",
      iconBg: "bg-indigo-600 text-white",
      highlight: "text-indigo-600"
    },
    highlights: [
      "Financial accounting, taxation & cost finance",
      "Programming, databases & web technologies",
      "Semester exam question paper analysis",
      "Regular revision batches"
    ]
  },
  {
    id: "free-placement",
    category: "Free Placement Initiative",
    badge: "★ FREE for Graduates",
    name: "Free Skilling & Placement Course for Graduates",
    tagline: "Digital Skills | Spoken English | Soft Skills | Placement",
    description: "Empowering fresh graduates with essential employability skills, digital literacy, conversational English, personality development, and placement support — 100% free of cost!",
    branches: ["100% Free of Cost", "Spoken English & Communication", "Personality Development & Soft Skills", "Computer Courses (Basic to Advanced)", "Interview & Resume Mastery"],
    theme: {
      accent: "from-amber-500 via-amber-600 to-emerald-600",
      badgeBg: "bg-amber-400 text-slate-950 font-black",
      border: "border-amber-400 ring-2 ring-amber-400/30",
      iconBg: "bg-gradient-to-r from-amber-500 to-emerald-600 text-white",
      highlight: "text-amber-600 font-extrabold"
    },
    highlights: [
      "Completely Free of Cost for all graduates",
      "Daily interactive conversational English drills",
      "Resume building, group discussions & mock interviews",
      "Industry-ready digital proficiency certificate"
    ],
    isFeatured: true
  }
];

/**
 * 6 Core Pillars from Flyer
 */
export const corePillars = [
  {
    id: "faculty",
    title: "Expert Faculty & Subject Experts",
    tagline: "Learn from experienced professionals",
    description: "Passionate teachers and industry trainers with deep subject mastery dedicated to every student's growth.",
    badge: "Top Mentors",
    color: "blue"
  },
  {
    id: "concepts",
    title: "Simplified Concepts",
    tagline: "Easy learning with clear explanations",
    description: "Complex formulas and difficult theories broken down into intuitive, step-by-step visual lessons.",
    badge: "Clear Basics",
    color: "amber"
  },
  {
    id: "personal",
    title: "Personalised Attention",
    tagline: "Doubt clearing & individual support",
    description: "Small interactive groups and dedicated 1-on-1 discussion desks ensuring no learner is left behind.",
    badge: "Individual Care",
    color: "purple"
  },
  {
    id: "exam",
    title: "Exam-Oriented Training",
    tagline: "Practice, revision & mock tests",
    description: "Targeted question banks, mock test papers, and systematic revision to maximize test performance.",
    badge: "Score Booster",
    color: "rose"
  },
  {
    id: "career",
    title: "Career Guidance",
    tagline: "Right path for your future",
    description: "Strategic academic roadmaps, career counseling, and industry mentorship to navigate future milestones.",
    badge: "Future Ready",
    color: "teal"
  },
  {
    id: "results",
    title: "Excellent Results",
    tagline: "High scores, better grades, bright career",
    description: "Proven student improvement, higher semester scores, entrance qualifications, and placement outcomes.",
    badge: "Proven Success",
    color: "emerald"
  }
];

/**
 * Center Photos & Flyer Assets
 */
export const centerPhotos = [
  {
    src: "/images/silt-hub-flyer.jpg",
    alt: "Official Samuh India Learning & Training (SILT) Hub Announcement Flyer",
    caption: "Official SILT Hub Launch Flyer",
    tag: "Announcement Flyer",
    isFlyer: true
  },
  {
    src: "/images/classroom-front.png",
    alt: "SAMUH INDIA Classroom with whiteboard and student seating desks",
    caption: "Interactive Classroom Setup",
    tag: "Classroom"
  },
  {
    src: "/images/counseling-desk.png",
    alt: "SAMUH INDIA Counseling and consultation meeting table",
    caption: "One-on-One Discussion Hub",
    tag: "Mentorship"
  },
  {
    src: "/images/classroom-overview.png",
    alt: "SAMUH INDIA Classroom view showing partitioned learning cabins",
    caption: "Quiet, Disciplined Study Environment",
    tag: "Facility"
  },
  {
    src: "/images/google-maps-card.png",
    alt: "SAMUH INDIA Google Maps listing showing 4.8 rating and verified address",
    caption: "Google Verified Business (4.8 ★)",
    tag: "Verification"
  }
];
