import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage, translations } from '../context/LanguageContext';

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    experience: '5+ years',
    postedDate: '2024-03-15',
    salary: '₹18-25 LPA',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote',
    type: 'Internship',
    experience: '0-1 years',
    postedDate: '2024-03-14',
    salary: '₹25,000/month',
  },
  // Add more job listings as needed
];

const JobCard = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <FaBriefcase className="mr-2" />
              {job.department} • {job.type}
            </div>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-600">
              <FaClock className="mr-2" />
              {job.experience}
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-primary-600 font-semibold">{job.salary}</span>
          <p className="text-sm text-gray-500 mt-1">
            Posted: {new Date(job.postedDate).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          View Details
        </button>
        <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    type: '',
    experience: '',
    location: '',
  });
  const { language } = useLanguage();

  const filterOptions = {
    department: ['All', 'Engineering', 'Marketing', 'Sales', 'Design'],
    type: ['All', 'Full-time', 'Part-time', 'Internship', 'Contract'],
    experience: ['All', '0-1 years', '1-3 years', '3-5 years', '5+ years'],
    location: ['All', 'Jaipur', 'Remote', 'Hybrid'],
  };

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const filteredJobs = jobListings.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.department === '' || filters.department === 'All' || job.department === filters.department) &&
      (filters.type === '' || filters.type === 'All' || job.type === filters.type) &&
      (filters.experience === '' || filters.experience === 'All' || job.experience === filters.experience) &&
      (filters.location === '' || filters.location === 'All' || job.location.includes(filters.location))
    );
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Build your career with AgroPulse and help transform agricultural commerce
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <FaFilter className="text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold">Filters</h2>
              </div>
              
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3 capitalize">
                    {category}
                  </h3>
                  <select
                    value={filters[category]}
                    onChange={(e) => handleFilterChange(category, e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {options.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredJobs.length} Positions Available
                </h2>
                <select
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  defaultValue="newest"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="salary-high">Highest Salary</option>
                  <option value="salary-low">Lowest Salary</option>
                </select>
              </div>

              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;