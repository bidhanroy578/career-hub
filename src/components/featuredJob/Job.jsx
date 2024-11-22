import PropTypes from 'prop-types';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    let { logo, job_title, company_name, job_type, remote_or_onsite, location, salary, id } = job
    return (
        <div className="card bg-slate-100 shadow-xl">
            <div className='justify-start'>
                <img src={logo} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <button>{job_type}</button> <button>{remote_or_onsite}</button>
                <h3>
                    <p><HiOutlineLocationMarker />{location}</p>
                    <p><AiOutlineDollar />{salary}</p>
                </h3>

                <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>

            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object
};
export default Job;