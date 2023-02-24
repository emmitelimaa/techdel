import { Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import HomeView from "./components/HomeView";
import CompaniesView from "./components/CompaniesView";
import CompanyView from "./components/CompanyView";
import Header from "./components/Header";
import { URL, API } from "./constants";
import "./App.scss";
export const CompanyContext = createContext();
function App() {
  const addCompany = async (input) => {
    const { company_name, repo_name, team_name, technology } = input;
    const formatInput = {
      company_name,
      repo: [
        {
          repo_name,
          team_name,
          technology,
        },
      ],
    };

    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formatInput),
      };

      let response = await fetch(`${API.POST_ALL}`, options);
      if (response.ok) {
        let listItem = await response.json();
        //setData((state) => ({ ...state, listItem }));
        console.log(listItem);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`);
    }
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/companies");
      const json = await data.json();
      setData(json);
    };
    // call the function
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView addCompany={addCompany} />} />
        <Route path="/companies" element={<CompaniesView companies={data} />}>
          <Route path=":id" element={<CompanyView companies={data} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
