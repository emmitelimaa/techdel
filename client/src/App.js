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
      <CompanyContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/companies" element={<CompaniesView companies={data} />}>
            <Route path=":id" element={<CompanyView companies={data} />} />
          </Route>
        </Routes>
      </CompanyContext.Provider>
    </div>
  );
}

export default App;
