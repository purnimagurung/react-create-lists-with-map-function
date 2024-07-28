import JobCards from '../components/HomeCards/JobCards';
import JobListings from '../components/Jobs/JobListings';
import ViewAllJobs from '../components/Jobs/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <JobCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </>
 );
}

export default HomePage