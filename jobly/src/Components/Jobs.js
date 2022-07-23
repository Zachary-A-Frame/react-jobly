import { useContext } from "react"
import CompanyContext from "../CompanyContext"
import "./companies.css"

const Jobs = () => {
    const { jobs } = useContext(CompanyContext)

    return (
        <div >
            {/* {console.log(jobs)} */}

            {jobs.map(job =>
                <button key={job.id + ' ' + job.title} className="company">
                    <div>
                        <h4>
                            <div style={{ float: 'left', textAlign: "center" }}>Title: {job.title}</div>
                            <p>{job.companyHandle}</p>
                        </h4>
                    </div>
                    <br></br>
                    <p style={{ marginTop: "3%", textAlign: "left" }}>Salary: {job.salary}</p>
                </button>
            )}
        </div>
    )
}

export default Jobs