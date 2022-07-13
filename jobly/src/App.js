import './App.css';
import { useEffect, useState } from "react"
import JoblyApi from "./api"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import CompanyContext from './CompanyContext';

import Companies from './Components/Companies';
import Jobs from "./Components/Jobs"
import Navbar from "./Components/Navbar";
import Company from "./Components/Company"

function App() {
  const [companies, setCompanies] = useState([])
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies)
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs)
    }
    getCompanies()
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <CompanyContext.Provider value={{ companies, jobs }}>
          <Switch>
            <Route exact path="/" element={<h1>Home</h1>} />
            <Route exact path="/companies" element={<Companies />} />
            <Route path="companies/:handle" element={<Company />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Switch>
        </CompanyContext.Provider>

      </Router>
    </div>
  );
}

export default App;
