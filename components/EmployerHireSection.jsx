import React from 'react';
import { motion } from 'framer-motion';

const EmployerStepCard = ({ number, title, description, icon, isReverse, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 mb-12 group`}
        >
            {/* Image/Icon Container */}
            <div className="w-full md:w-[40%] relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 flex items-center justify-center min-h-[250px] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl -ml-12 -mb-12 group-hover:bg-indigo-500/10 transition-colors" />

                <div className="z-10 w-full max-w-[120px] transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    {icon}
                </div>

                {/* Massive Watermark Number */}
                <div className="absolute top-6 left-6 text-[80px] font-black text-gray-100/50 leading-none select-none -z-0">
                    {number}
                </div>
            </div>

            {/* Content Container */}
            <div className={`w-full md:w-[60%] flex flex-col justify-center ${isReverse ? 'md:pr-8' : 'md:pl-8'} py-4`}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.3 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[3px] bg-blue-500 rounded-full" />
                        <span className="text-blue-500 font-bold text-sm uppercase tracking-[0.3em]">Step {number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#003F68] mb-4 leading-tight tracking-tighter uppercase transition-colors group-hover:text-blue-600">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-medium mb-6">
                        {description}
                    </p>

                    <button className="flex items-center gap-3 text-[#003F68] font-black uppercase tracking-widest text-xs group/btn">
                        <span>Learn More</span>
                        <div className="w-8 h-8 rounded-full bg-[#003F68]/5 flex items-center justify-center group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

const EmployerHireSection = () => {
    const steps = [
        {
            number: "01",
            title: "Be a part of the IAESTE family",
            description: "IAESTE India enables organisations to host highly skilled international students for technical and professional internships. Employers gain access to a global talent pool of motivated undergraduate and postgraduate students from leading universities across 100+ countries, bringing fresh perspectives and global exposure to the workplace.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
                    <rect x="25" y="20" width="70" height="85" rx="12" fill="white" stroke="#003F68" strokeWidth="2" />
                    <circle cx="60" cy="50" r="12" fill="#3B82F6" opacity="0.1" />
                    <path d="M45 45 Q60 35 75 45" stroke="#3B82F6" strokeWidth="3" fill="none" />
                    <line x1="40" y1="75" x2="80" y2="75" stroke="#003F68" strokeWidth="2" strokeLinecap="round" />
                    <line x1="40" y1="85" x2="70" y2="85" stroke="#003F68" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="85" cy="35" r="10" fill="#3B82F6" />
                    <path d="M82 35 L85 38 L88 32" stroke="white" strokeWidth="2" fill="none" />
                </svg>
            ),
            isReverse: false
        },
        {
            number: "02",
            title: "Select suitable candidate",
            description: "IAESTE India supports you through the entire process, from documentation guidance and candidate shortlisting to onboarding and coordination with local committees. Internships typically range from 4 weeks up to 12 months with flexibility based on project needs, and employers are expected to provide a fair stipend that covers intern's basic living and lodging costs. This ensures interns can work comfortably and focus on contributing meaningfully to your organisation.",
            icon: (
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
                    <circle cx="60" cy="60" r="45" fill="#3B82F6" opacity="0.05" />
                    <path d="M40 90 Q60 70 80 90" stroke="#003F68" strokeWidth="4" fill="none" />
                    <circle cx="60" cy="50" r="18" fill="white" stroke="#003F68" strokeWidth="3" />
                    <path d="M55 50 Q60 55 65 50" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <rect x="75" y="70" width="30" height="35" rx="6" fill="#3B82F6" />
                    <path d="M82 85 L98 85 M82 95 L92 95" stroke="white" strokeWidth="2" />
                </svg>
            ),
            isReverse: true
        }
    ];

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-[#003F68] uppercase tracking-tighter mb-3">
                        Seamless <span className="text-blue-500">Onboarding</span>
                    </h2>
                    <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                        Your gateway to global expertise
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <EmployerStepCard key={index} {...step} delay={index * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployerHireSection;
