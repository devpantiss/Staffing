import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  'https://www.amity.edu/backoffice/uploads/HomeBanner/2fblg_lucknow.jpg',
  'https://www.amity.edu/backoffice/uploads/HomeBanner/6fblg_mumbai.jpg',
  'https://www.amity.edu/backoffice/uploads/HomeBanner/10fblg_ranchi.jpg',
];

const stats = [
  { label: 'Institution & Centers', value: '150+' },
  { label: 'Students on Scholarship', value: '25,000' },
  { label: 'On-Campus Placement in Last year', value: '27,000' },
  { label: 'Patents by Faculty', value: '2210' },
  { label: 'Case Studies', value: '4500' },
  { label: 'Government Funded Research Projects', value: '300' },
];

const campuses = [
  'Noida', 'Lucknow', 'Jaipur', 'Gurgaon', 'Gwalior', 'Mumbai',
  'Greater Noida', 'Raipur', 'Ranchi', 'Patna', 'Kolkata', 'Mohali', 'Bangalore'
];

export default function Why() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Slide ${idx}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === idx ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white px-8 pt-20 max-w-7xl h-full mx-auto">
        <div className="mb-10 max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">WHY AMITY</h2>
          <p className="text-lg mb-4">
            Grooming leaders who are not only thorough professionals but also good human beings with values.
          </p>
          <p className="text-xl font-semibold">This is why we are consistently ranked <span className="text-blue-400">No.1</span></p>
          <button className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all">Read More About Amity</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
          <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>
            <FiChevronLeft size={32} />
          </button>
        </div>
        <div className="absolute top-1/2 right-[500px] transform -translate-y-1/2 z-30">
          <button onClick={() => setCurrent((current + 1) % slides.length)}>
            <FiChevronRight size={32} />
          </button>
        </div>

        {/* Campus Bar */}
        <div className="absolute bottom-0 max-w-5xl left-0 w-full bg-yellow-600 py-4 px-4 flex flex-wrap justify-center gap-4 text-black font-semibold z-20">
          {campuses.map((campus, idx) => (
            <span key={idx}>{campus}</span>
          ))}
        </div>

        {/* Side Info Panel */}
        <div className="absolute right-0 top-0 bg-black bg-opacity-50 p-6 text-center h-[700px] text-white space-y-6 z-30 w-52">
          <div>
            <p className="text-sm">#1 RANK</p>
            <p className="text-xs">in Not-For-Profit</p>
          </div>
          <div>
            <p className="text-sm">Top Placement</p>
            <p className="text-xs">in all Streams</p>
          </div>
          <div>
            <p className="text-sm">25,000</p>
            <p className="text-xs">Scholarships given</p>
          </div>
          <div>
            <p className="text-sm">80</p>
            <p className="text-xs">International Universities as Research Partners</p>
          </div>
        </div>

        {/* Subscribe Tag */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-yellow-500 text-black px-2 py-1 rotate-90 origin-bottom-right font-bold">
          SUBSCRIBE
        </div>
      </div>
    </div>
  );
}
