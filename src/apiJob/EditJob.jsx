import axios from 'axios';

export const editJob = async (job) => {
    const res = await axios.put('/api/jobs', job, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data;
};
