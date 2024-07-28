import JobList from "./JobList"; 
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import jobs from "../../jobs.json";

/* Fetch function for fetching data */
const fetchJobs = async () => {
  try {
    const response = await axios.get('http://localhost:1000/jobs');
    // console.log(response.data);
    return response.data; // Ensure this is returned
  } catch (error) {
    throw new Error('Network error: ' + error.message); // Handle error
  }
};


const JobListings = ({isHome = false}) => {

  // Use react-query's use query hook to fetch data
  const { data:jobs = [], isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome ? 'Recent Jobs' : 'Browser Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job)=> (
            <JobList  key = {job.id} job = {job} />
          ))}
         
        </div>
      </div>
    </section>

  )
}

export default JobListings