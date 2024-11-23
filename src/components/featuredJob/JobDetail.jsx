import { useLoaderData, useParams } from "react-router-dom";
import { SetLocalStorageData } from "../../utils/GetLocalStorageData";

// for toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobDetail = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const detail = data.find(item => item.id == id)
    let { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = detail

    // for toast 
    const notify = () => toast.success('added to applied list', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
    });

    return (
        <div className="grid grid-cols-4 max-w-6xl mx-auto mt-10">
            <div className="col-span-3">
                <p className="my-5 text-balance"><span className="font-extrabold">Job Description: </span>{job_description}</p>
                <p className="my-5 text-balance"><span className="font-extrabold">Job Responsibility: </span>{job_responsibility}</p>
                <p className="font-extrabold">Educational Requirements: </p>
                <p className="my-5 text-balance">{educational_requirements}</p>
                <p className="my-5 font-extrabold">Experiences: </p>
                <p className="my-5 text-balance">{experiences}</p>
            </div>
            <div>
                <div className="bg-[#F4F1FF] p-5">
                    <h3 className="font-extrabold text-xl mb-5">Job Details</h3>
                    <hr className="my-5 border-t border-dashed border-slate-400" />
                    <p className="font-bold text-xl">Salary : <span className="font-medium text-[#757575]">{salary} (Per Month)</span></p>
                    <p className="font-bold text-xl">Job Title : <span className="font-medium text-[#757575]">{job_title}</span></p>
                    <h3 className="font-extrabold text-xl my-5">Contact Information</h3>
                    <hr className="my-5 border-t border-dashed border-slate-400" />
                    <p className="font-bold text-xl">Phone : <span className="font-medium text-[#757575]">{contact_information.phone}</span></p>
                    <p className="font-bold text-xl">Email : <span className="font-medium text-[#757575]">{contact_information.email}</span></p>
                    <p className="font-bold text-xl">Address : <span className="font-medium text-[#757575]">{contact_information.address}</span></p>

                </div>
                <button onClick={() => { SetLocalStorageData(id); notify()}} className="btn btn-primary w-full mt-5">Apply Now</button>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
/>
            </div>
        </div>
    );
};

export default JobDetail;