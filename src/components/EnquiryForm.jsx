import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare, User, BookOpen, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { businessInfo, programs, facultyRecruitment } from '../data/hubData';

export default function EnquiryForm({ selectedProgram, onClearSelectedProgram }) {
  const [inquiryType, setInquiryType] = useState('student'); // 'student' or 'faculty'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgram || (programs[0] ? programs[0].name : 'Free Skilling & Placement Course for Graduates'),
    contactMethod: 'Phone',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync if selectedProgram changes from external clicks
  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  const validate = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone (Indian 10-digit format)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    // Email (optional or valid format)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Program
    if (!formData.program) {
      newErrors.program = 'Please select a course or track';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData, inquiryType });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      program: programs[0] ? programs[0].name : '',
      contactMethod: 'Phone',
      message: ''
    });
    if (onClearSelectedProgram) {
      onClearSelectedProgram();
    }
  };

  const constructWhatsAppEnquiry = () => {
    if (!submittedData) return businessInfo.whatsappLink;
    const text = encodeURIComponent(
      `Hello SILT Hub Hyderabad! I have submitted an enquiry:\n\nType: ${submittedData.inquiryType === 'faculty' ? 'Faculty / Mentor Partnership' : 'Student / Course Admission'}\nName: ${submittedData.name}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email || 'N/A'}\nCourse/Interest: ${submittedData.program}\nPreferred Contact: ${submittedData.contactMethod}\nMessage: ${submittedData.message || 'N/A'}`
    );
    return `https://wa.me/919849228757?text=${text}`;
  };

  return (
    <section id="enquire" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-200 text-brand-teal-900 text-xs sm:text-sm font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-teal-600" />
            Admissions &amp; Counselor Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
            Connect With SILT Hub Today
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have questions about upcoming batches, syllabus tracks, free graduate course enrollment, or faculty openings? Get in touch below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Inquiry Type Toggle Pills */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => {
                setInquiryType('student');
                setFormData(prev => ({ ...prev, program: programs[0]?.name }));
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                inquiryType === 'student'
                  ? 'bg-brand-navy-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-brand-teal-300" />
              <span>Student / Course Admission</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setInquiryType('faculty');
                setFormData(prev => ({ ...prev, program: 'Faculty / Mentor Application' }));
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                inquiryType === 'faculty'
                  ? 'bg-brand-navy-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Faculty / Mentor Opportunity</span>
            </button>
          </div>

          {/* Quick Notice for Faculty Google Form */}
          {inquiryType === 'faculty' && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-left">
              <div>
                <p className="text-xs sm:text-sm font-bold text-amber-900">
                  Prefer direct Google Form registration?
                </p>
                <p className="text-xs text-amber-700">
                  You can also fill our official Faculty &amp; Mentor Google Form directly with your complete CV and details.
                </p>
              </div>
              <a
                href={facultyRecruitment.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-brand-navy-950 transition-colors flex items-center gap-1.5"
              >
                <span>Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Success State View */}
          {isSubmitted ? (
            <div className="bg-slate-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 shadow-card text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-brand-navy-900">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  Thank you, <strong className="text-slate-900">{submittedData?.name}</strong>. Our counselors at <strong>SILT Hub Hyderabad</strong> have received your request and will contact you via <strong>{submittedData?.contactMethod}</strong> shortly.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm text-slate-600 space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="font-semibold text-slate-500">Program / Category:</span>
                  <span className="font-bold text-brand-navy-900">{submittedData?.program}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="font-semibold text-slate-500">Phone:</span>
                  <span className="font-medium text-slate-900">{submittedData?.phone}</span>
                </div>
                {submittedData?.email && (
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="font-semibold text-slate-500">Email:</span>
                    <span className="font-medium text-slate-900">{submittedData?.email}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Location:</span>
                  <span className="font-medium text-slate-900 text-right">Near New Market Metro Exit-D, Malakpet</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={constructWhatsAppEnquiry()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>
                
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-card text-left">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* 2-Column Row: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="enquiry-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number (10 digits) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="enquiry-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98492 28757"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* 2-Column Row: Email & Course Interested In */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="enquiry-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. student@example.com"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Program / Track Select */}
                  <div>
                    <label htmlFor="enquiry-program" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {inquiryType === 'faculty' ? 'Teaching Stream / Area' : 'Course Interested In'} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <select
                        id="enquiry-program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none transition-all appearance-none ${
                          errors.program
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600'
                        }`}
                      >
                        {inquiryType === 'student' ? (
                          <>
                            <option value="Free Skilling & Placement Course for Graduates">
                              ★ Free Skilling &amp; Placement Course for Graduates (Zero Cost)
                            </option>
                            {programs.map((prog) => (
                              <option key={prog.id} value={prog.name}>
                                {prog.name}
                              </option>
                            ))}
                            <option value="School Tuition (Class 1-10)">School Tuition (Class 1-10 All Subjects)</option>
                            <option value="Intermediate Coaching (MPC/BiPC/MEC/CEC)">Intermediate Coaching (MPC/BiPC/MEC/CEC)</option>
                            <option value="Competitive Exam Prep (JEE/NEET/EAPCET/Govt)">Competitive Exam Prep (JEE/NEET/EAPCET/Govt)</option>
                            <option value="Engineering & Diploma Tuitions">Engineering &amp; Diploma Tuitions (ECE, CSE, Mech, Civil)</option>
                            <option value="Medical & Allied Subjects">Medical &amp; Allied Subjects (MBBS, BDS, Nursing)</option>
                            <option value="Pharmacy Tuitions">Pharmacy Tuitions (B.Pharm, D.Pharm)</option>
                            <option value="General Academic Consultation">General Academic Consultation</option>
                          </>
                        ) : (
                          <>
                            <option value="Faculty: School Education (Class 1-10)">Faculty: School Education (Class 1-10)</option>
                            <option value="Faculty: Intermediate (MPC / BiPC / MEC / CEC)">Faculty: Intermediate (MPC / BiPC / MEC / CEC)</option>
                            <option value="Faculty: Engineering & Polytechnic">Faculty: Engineering &amp; Polytechnic Disciplines</option>
                            <option value="Faculty: Medical & Allied Sciences">Faculty: Medical &amp; Allied Sciences</option>
                            <option value="Faculty: Pharmacy Subjects">Faculty: Pharmacy Subjects</option>
                            <option value="Faculty: Competitive Exams (JEE/NEET/UPSC/SSC)">Faculty: Competitive Exams (JEE/NEET/UPSC/SSC)</option>
                            <option value="Faculty: Degree Courses (BCA/B.Com/BBA/B.Sc)">Faculty: Degree Courses (BCA/B.Com/BBA/B.Sc)</option>
                            <option value="Trainer: Spoken English & Soft Skills">Trainer: Spoken English &amp; Soft Skills</option>
                            <option value="Mentor: Career Guidance & Placement">Mentor: Career Guidance &amp; Placement</option>
                            <option value="Academic Partner / Collaboration">Academic Partner / Institutional Collaboration</option>
                          </>
                        )}
                      </select>
                    </div>
                    {errors.program && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.program}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'Phone', label: 'Phone Call', icon: Phone },
                      { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
                      { id: 'Email', label: 'Email', icon: Mail }
                    ].map((method) => {
                      const Icon = method.icon;
                      const isSelected = formData.contactMethod === method.id;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                            isSelected
                              ? 'bg-brand-navy-900 text-white border-brand-navy-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.id}
                            checked={isSelected}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-teal-300' : 'text-slate-400'}`} />
                          <span>{method.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {inquiryType === 'faculty' ? 'Brief Teaching Experience / Subjects (Optional)' : 'Your Requirements / Desired Batch Timings (Optional)'}
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      inquiryType === 'faculty'
                        ? "Mention your subjects, teaching experience, qualification, or available hours..."
                        : "Tell us about your subject needs, class/year, upcoming exams, or questions regarding SILT Hub..."
                    }
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-enquiry-button"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-brand-navy-900 hover:bg-brand-navy-800 active:scale-[0.99] transition-all shadow-md shadow-brand-navy-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-teal-300" />
                        <span>{inquiryType === 'faculty' ? 'Submit Faculty Application' : 'Submit Course Enquiry'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy & Direct Call Hint */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 border-t border-slate-200">
                  <span>🔒 Your information is confidential and will only be used to respond to your inquiry.</span>
                  <span>Instant queries? <a href={businessInfo.phoneTel} className="text-brand-teal-700 font-bold hover:underline">Call {businessInfo.phone}</a></span>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
