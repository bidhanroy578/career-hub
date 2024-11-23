import { useEffect, useState } from "react";
import { data } from "../../utils/GetList";
import AppliedList from "./AppliedList";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    let [clearAll , setClearAll] = useState('')

    let fullList = useLoaderData()
    let [jobList, setJobList] = useState([])

    useEffect(() => {
        let list = data()
        setJobList(list)

    }, [clearAll])
    console.log(clearAll)
    return (

        <div>
            <button onClick={()=>{localStorage.setItem('jobID' , []);setClearAll(Math.random()) }} className="btn btn-primary font-extrabold text-white bg-gradient-to-r from-[#8D80FE] to-[#BC71FF]">
                clear all 
                </button>
            {
                jobList.length?
                 
                <div>
                    {jobList.map((list,idx) => <AppliedList key={idx} list={list} fullList={fullList}></AppliedList>)}
                </div>
                :
                <div className="font-extrabold text-2xl text-center">
                    <h3>No Data Found</h3>
                </div>
            }


        </div>
    );
};

export default AppliedJobs;