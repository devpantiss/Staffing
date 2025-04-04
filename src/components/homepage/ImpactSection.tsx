import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const ImpactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black text-white py-16 px-8" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Header Section */}
        <div className="lg:col-span-1 flex items-center">
          <h2 className="text-5xl font-semibold leading-snug">
            Making markets.<br />
            <span className="text-orange-400">Lifting Livelihoods.</span>
          </h2>
        </div>

        {/* Metrics Section */}
        <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-2 gap-8">
          {[
            { value: 7500, label: 'Counselled for TVET Program' },
            { value: 9500, label: 'Trained & Certified' },
            { value: 5000, label: 'Placed', suffix: '+' },
            { value: 300, label: 'Mega Industries Connected', suffix: '+' },
            { value: 1500, label: 'Nano Contractors Onboarded', suffix: '+' },
            { value: 50, label: 'Revenue Generated', suffix: 'Cr+' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-orange-400">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </h3>
              <p className="text-lg mt-3 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
