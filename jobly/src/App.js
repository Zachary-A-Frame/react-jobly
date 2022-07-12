import './App.css';
import { useEffect, useState } from "react"
import JoblyApi from "./api"

import CompanyContext from './CompanyContext';

import Companies from './Components/Companies';

function App() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies)
    }
    getCompanies()
  }, [])

  return (
    <div className="App">
      <CompanyContext.Provider value={{ companies }}>
        <Companies  />
      </CompanyContext.Provider>
    </div>
  );
}

export default App;
