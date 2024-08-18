// addJob.js
import axios from 'axios';

export const addJob = async (newJob) => {
    const res = await axios.post('/api/jobs', newJob, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data;
};
