// src/api/jobApi.js
import axios from 'axios';

export const editJob = async (id, job) => {
    const res = await axios.put(`/api/jobs/${id}`, job, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.data;
};
