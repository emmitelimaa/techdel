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
  const [data, setData] = useState([]);

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
        console.log(listItem);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API.GET_ALL}`);
      const results = await data.json();
      setData(results);
    };
    // call the function
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <CompanyContext.Provider value={(data, setData)}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/companies" element={<CompaniesView />}>
            <Route path=":id" element={<CompanyView companies={data} />} />
          </Route>
        </Routes>
      </CompanyContext.Provider>
    </div>
  );
}

export default App;
