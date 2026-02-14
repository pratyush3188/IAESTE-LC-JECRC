import React from 'react';
import { Link } from 'react-router-dom';

const BRAND_COLOR = '#003F68';

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3">
          The journey ends here.{' '}
          <span className="text-[#003F68]">Your internship begins now.</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 mt-10 sm:mt-12 text-base sm:text-lg text-gray-700">
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label="International Opportunities">🌐</span>
            <span>International Opportunities</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label="Professional Growth">🎓</span>
            <span>Professional Growth</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label="Global Network">🤝</span>
            <span>Global Network</span>
          </div>
        </div>
      </header>

      {/* Main: Two cards */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-14 items-stretch justify-center min-h-0">
          {/* Left card: Already a Member */}
          <div
            className="flex-1 min-w-0 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center text-center bg-[#003F68] text-white p-10 sm:p-12 lg:p-16"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Already a Member?</h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed max-w-lg">
              Log in to access your dashboard, applications, and IAESTE member resources.
            </p>
            <Link
              to="#"
              className="inline-flex justify-center items-center px-10 py-3 rounded-full bg-white text-[#003F68] font-bold text-sm uppercase tracking-wider hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              LOG IN
            </Link>
          </div>

          {/* Right card: New to IAESTE */}
          <div className="flex-1 min-w-0 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center text-center bg-white text-[#003F68] p-10 sm:p-12 lg:p-16 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">New to IAESTE?</h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed max-w-lg">
              Register now and take your first step toward an international internship journey.
            </p>
            <Link
              to="/register"
              className="inline-flex justify-center items-center px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              REGISTER
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
