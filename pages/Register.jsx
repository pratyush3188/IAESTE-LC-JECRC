import React from 'react';
import logo from '../src/assets/logos/Iaeste Logo Standard.png';

const BRAND_COLOR = '#003F68';

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - no backend
  };

  return (
    <div
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: BRAND_COLOR }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          {/* Header: logo + title */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="IAESTE LC JECRC"
              className="w-48 sm:w-64 lg:w-80 h-auto mx-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-500">Membership Registration</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="rollNumber" className="block text-sm font-semibold text-gray-800 mb-1">
                Registration / Roll Number
              </label>
              <input
                id="rollNumber"
                type="text"
                placeholder="Enter registration / roll number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-800 mb-1">
                WhatsApp Number
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="Enter WhatsApp number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-semibold text-gray-800 mb-1">
                Course
              </label>
              <input
                id="course"
                type="text"
                placeholder="Enter your course"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="branchSection" className="block text-sm font-semibold text-gray-800 mb-1">
                Branch & Section
              </label>
              <input
                id="branchSection"
                type="text"
                placeholder="Enter branch and section"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="semester" className="block text-sm font-semibold text-gray-800 mb-1">
                Semester
              </label>
              <input
                id="semester"
                type="text"
                placeholder="Enter current semester"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003F68] focus:border-[#003F68] outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
