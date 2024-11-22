import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-center font-extrabold text-5xl">Featured Jobs</h3>
            <p className="text-center font-medium ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;