// deleteJob.js
import axios from 'axios';

export const deleteJob = async (id) => {
    const res = await axios.delete(`/api/jobs/${id}`);
    return res.data;
};
