import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addJob } from '../../apiJob/AddNewJob';

const AddJobPage = () => {
  // State object to hold all form fields
  const [jobData, setJobData] = useState({
    title: '',
    type: 'Full-Time',
    location: '',
    description: '',
    salary: 'Under $50K',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const navigate = useNavigate(); // Hook to navigate programmatically
  const queryClient = useQueryClient(); // Hook to access and manage query cache

  // Mutation hook to handle the addJob API call
  const mutation = useMutation({
    mutationFn: addJob, // Function to run when mutation is triggered
    onSuccess: () => {
      // Show success notification and redirect on successful job addition
      toast.success('Job added successfully');
      queryClient.invalidateQueries('jobs'); // Invalidate 'jobs' query to refetch data
      navigate('/jobs'); // Redirect to the jobs page
    },
    onError: () => {
      toast.error('Failed to add job');
    }
  });

  // Handler function to update jobData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update nested fields in the company object if necessary
    if (name.includes('company.')) {
      const companyField = name.split('.')[1];
      setJobData(prevState => ({
        ...prevState,
        company: {
          ...prevState.company,
          [companyField]: value
        }
      }));
    } else {
      // Update top-level fields
      setJobData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    mutation.mutate(jobData); // Trigger the mutation to add the new job
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={jobData.type}
                onChange={handleInputChange}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={jobData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={jobData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={jobData.salary}
                onChange={handleInputChange}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={jobData.location}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company.name" className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input
                type="text"
                id="company.name"
                name="company.name"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={jobData.company.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company.description" className="block text-gray-700 font-bold mb-2">Company Description</label>
              <textarea
                id="company.description"
                name="company.description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={jobData.company.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="company.contactEmail" className="block text-gray-700 font-bold mb-2">Contact Email</label>
              <input
                type="email"
                id="company.contactEmail"
                name="company.contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={jobData.company.contactEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company.contactPhone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
              <input
                type="tel"
                id="company.contactPhone"
                name="company.contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={jobData.company.contactPhone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button
                className="bg-sky-500/100 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
