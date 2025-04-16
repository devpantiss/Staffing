import React, { memo, useMemo, useEffect, useRef, useState } from "react";

// Interfaces
interface Stat {
  value: string;
  description: string;
}

interface Company {
  name: string;
  logo: string;
}

interface Student {
  name: string;
  batch: string;
  package: string;
  image: string;
}

// Static Data
const statsData: Stat[] = [
  { value: "2225+", description: "Recruiters hired LPU students" },
  { value: "6000+", description: "Offers from Fortune 500 companies" },
  { value: "₹10.23 Lac", description: "Average salary of top 25% placed students" },
  { value: "400+", description: "Recruiters of IITs/IIMs/NITs also hire from LPU" },
  { value: "1700+", description: "LPU students selected at packages of ₹10 Lakh–₹2.5 Crore*" },
];

const companiesData: Company[] = [
  { name: "Google", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743255049/ffsclogo_txufun.svg" },
  { name: "Bosch", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/Tata_Power_piq2vv.png" },
  { name: "Adobe", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/bhel_dmv4uz.avif" },
  { name: "Microsoft", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/SIS_ddr1kn.png" },
  { name: "Cisco", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/tata_steel_eh81pq.jpg" },
  { name: "Autodesk", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/HZL_Logo_xx77ym.png" },
  { name: "Cognizant", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/G4S__logo_.svg_vcz6im.png" },
  { name: "Amazon", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/lt_vtduty.jpg" },
];

const studentsData: Student[] = [
  {
    name: "Sri Sarvesh Vishnu",
    batch: "Batch 2025",
    package: "₹2.5 Crore",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Bettireddy Naga Vamsi Reddy",
    batch: "Batch 2025",
    package: "₹1.03 Crore",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Pavan Kunchala",
    batch: "Batch 2025",
    package: "₹1 Crore",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Arjun S",
    batch: "Batch 2025",
    package: "₹63 Lakh",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Anjali",
    batch: "Batch 2025",
    package: "₹55 Lakh",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Nukavarapu Yami",
    batch: "Batch 2025",
    package: "₹51 Lakh",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
  {
    name: "Nasia Parveen",
    batch: "Batch 2025",
    package: "₹51 Lakh",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820290/77fa4648-d847-4c4a-81df-8054b0082324_op7skq.jpg",
  },
];

// Components
const StatCard = memo(({ stat }: { stat: Stat }) => (
  <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
    <p className="text-gray-100 mt-2">{stat.description}</p>
  </div>
));

const CompanyLogo = memo(({ company }: { company: Company }) => (
  <div className="flex-shrink-0 w-44 h-44 flex items-center justify-center p-4">
    <img
      src={company.logo}
      alt={company.name}
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  </div>
));

const StudentCard = memo(({ student }: { student: Student }) => (
  <div className="flex-shrink-0 w-64 bg-transparent rounded-lg text-center">
    <img
      src={student.image}
      alt={student.name}
      className="w-44 h-44 rounded-full object-cover mx-auto mb-4 border-2 border-orange-500"
      loading="lazy"
      decoding="async"
    />
    <h4 className="text-lg font-semibold text-gray-100">{student.name}</h4>
    <p className="text-sm text-gray-50">{student.batch}</p>
    <p className="text-orange-600 font-bold mt-2">{student.package}</p>
  </div>
));

// Main Section
const PlacementsSection: React.FC = () => {
  const [isPausedCompanies, setIsPausedCompanies] = useState(false);
  const [isPausedStudents, setIsPausedStudents] = useState(false);
  const companiesScrollRef = useRef<HTMLDivElement>(null);
  const studentsScrollRef = useRef<HTMLDivElement>(null);

  const companiesList = useMemo(() => [...companiesData, ...companiesData], []);
  const studentsList = useMemo(() => [...studentsData, ...studentsData], []);

  useEffect(() => {
    const container = companiesScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPausedCompanies) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;
        const totalWidth = companiesData.length * 192;
        if (scrollPosition >= totalWidth) scrollPosition = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPausedCompanies]);

  useEffect(() => {
    const container = studentsScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPausedStudents) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;
        const totalWidth = studentsData.length * 272;
        if (scrollPosition >= totalWidth) scrollPosition = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPausedStudents]);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490663/12266398_1920_1080_30fps_njenhk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/60 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-300 uppercase">Placements & Careers</h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Glance at the <span className="text-orange-500">Top Companies</span> Hiring from Us
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Skilling Revolution Starts at Us: Exceptional Placements for 2021-2025 Batches
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stats */}
          <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">{statsData.map((stat, i) => <StatCard key={i} stat={stat} />)}</div>

          {/* Scrolling Content */}
          <div className="lg:w-2/3">
            <div
              ref={companiesScrollRef}
              className="flex overflow-x-hidden gap-4 mb-12"
              onMouseEnter={() => setIsPausedCompanies(true)}
              onMouseLeave={() => setIsPausedCompanies(false)}
            >
              {companiesList.map((company, i) => (
                <CompanyLogo key={`${company.name}-${i}`} company={company} />
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-50">Students Getting Highest Packages</h3>
            </div>

            <div
              ref={studentsScrollRef}
              className="flex overflow-x-hidden gap-6 p-4"
              onMouseEnter={() => setIsPausedStudents(true)}
              onMouseLeave={() => setIsPausedStudents(false)}
            >
              {studentsList.map((student, i) => (
                <StudentCard key={`${student.name}-${i}`} student={student} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
            View Placements
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(PlacementsSection);