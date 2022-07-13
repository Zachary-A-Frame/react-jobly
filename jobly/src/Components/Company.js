import "./companies.css"
import JoblyApi from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./companies.css"

const Company = () => {
    const { handle } = useParams()
    const [company, setCompany] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function getCompany() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setJobs(company.jobs)
        }
        getCompany()
    }, [handle])

    return (
        <div>
            {console.log(company.jobs)}
            {<h1>{company.handle}</h1>}
            {<h2>{company.name}</h2>}
            {<p>{company.description}</p>}
            {jobs.map(job =>
                <button className="company" key={job.handle + '_' + job.title}>
                    <h3>{job.title}</h3>
                    {(job.salary === null) ? <p>Salary not listed</p> : <>Salary {job.salary}</>}
                    <p>Equity: {job.equity}</p>
                    <button>Apply</button>
                </button>
            )}
        </div>
    )

}

export default Company