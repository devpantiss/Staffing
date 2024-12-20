import React from "react";

const WorkSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-purple-900 md:text-3xl">
            Find more <span className="text-orange-500">work</span> with <br />
            better companies
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img
              src="https://labournet.in/wp-content/uploads/2021/12/Group-162.png"
              alt="Find Opportunities Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold text-orange-500">
                Find Opportunities
              </h3>
              <p className="mt-2 text-gray-700">
                Access and bid on hundreds of projects in your line of work, in
                your industry, and your locations. Experience easier onboarding,
                improved cash flow, and less paperwork.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img
              src="https://labournet.in/wp-content/uploads/2021/12/Group-164.png"
              alt="Improve Performance Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold text-orange-500">
                Improve Performance
              </h3>
              <p className="mt-2 text-gray-700">
                Leverage digital tools to track and report on task completion,
                project milestones, and real-time performance. Launch KPI-based
                skilling initiatives to improve productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading 2 */}
        <div className="text-center lg:text-left mt-12">
          <h2 className="text-2xl font-bold text-purple-900 md:text-3xl">
            And <span className="text-orange-500">better workers</span> <br />
            to <span className="text-orange-500">deliver projects</span>
          </h2>
        </div>

        {/* Feature Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <img
              src="https://labournet.in/wp-content/uploads/2021/12/Group-299.png"
              alt="Find Workers Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold text-orange-500">
                Find Workers
              </h3>
              <p className="mt-2 text-gray-700">
                Hire from India's largest verified base of skilled workers on
                gig, contract, or task-based models. Improve time-to-productivity
                with low-touch, high-scale onboarding.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <img
              src="https://labournet.in/wp-content/uploads/2021/12/Group-164.png"
              alt="Improve Productivity Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold text-orange-500">
                Improve Productivity
              </h3>
              <p className="mt-2 text-gray-700">
                Leverage digital tools to monitor attendance and performance.
                Launch hyper-personalized skilling pathways. Automate PF, ESI,
                Labour Law compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
