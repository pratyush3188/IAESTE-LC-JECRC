import React, { useState } from 'react';

export default function DepartmentCard({ department }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(v => !v);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  };

  return (
    <article className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <div className="flex items-start gap-6">
        <div className="flex-1 pr-2">
          <h3 className="text-base font-bold text-[#003F68] mb-2">{department.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{department.summary}</p>
        </div>

        <div className="w-20 h-16 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
          {/* placeholder image/icon box */}
          <div className="w-12 h-10 bg-gray-200 rounded-sm" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4">
        <div
          id={`department-${department.id}-description`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isExpanded}
        >
          <p className="text-gray-700 text-sm leading-relaxed pt-2">
            {department.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={toggleExpand}
          onKeyDown={handleKeyDown}
          aria-expanded={isExpanded}
          aria-controls={`department-${department.id}-description`}
          className="flex items-center gap-2 text-[#003F68] hover:text-[#005a8f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#003F68] focus:ring-offset-2 rounded"
        >
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </article>
  );
}

