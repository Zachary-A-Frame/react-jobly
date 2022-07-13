import { useContext } from "react"
import CompanyContext from "../CompanyContext"
import "./companies.css"
import { Link } from "react-router-dom"

const Companies = () => {
    const { companies } = useContext(CompanyContext)

    return (
        <div >
            {console.log(companies)}
            {companies.map(company =>
                <Link to={`/companies/${company.handle}`} >
                    <button key={company.handle + '_' + company.name} className="company">
                        <div>
                            <h4>
                                <div style={{ float: 'left', textAlign: "center" }}>{company.handle}</div>
                                <img
                                    src={"http://joelburton-jobly.surge.sh" + company.logoUrl}
                                    alt={company.logoUrl}
                                    style={{ float: 'right', marginRight: "15%", width: "5%" }}
                                />
                            </h4>
                        </div>
                        <br></br>
                        <p style={{ marginTop: "3%", textAlign: "center" }}>{company.description}</p>
                    </button>
                </Link>
            )
            }
        </div>
    )
}

export default Companies