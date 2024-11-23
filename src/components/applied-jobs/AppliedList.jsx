import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppliedList = ({ list, fullList }) => {
    let { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = fullList.find(singleList => singleList.id == list)
    return (

        <div className='grid grid-cols-5 items-center my-5'>
            <div className='bg-[#F4F4F4] '><img src={logo} alt="logo" /></div>
            <div className='col-span-3'>
                <h3>{job_title}</h3>
                <h3>{company_name}</h3>
                <button>{remote_or_onsite}</button> <button>{job_type}</button>
                <p>
                    <span>{location}</span>
                    <span>{salary}</span>
                </p>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn btn-primary font-extrabold text-white bg-gradient-to-r from-[#8D80FE] to-[#BC71FF]'>View Details</button>
            </Link>
        </div>
    );
};

AppliedList.propTypes = {
    list: PropTypes.string,
    fullList: PropTypes.array,
};
export default AppliedList;