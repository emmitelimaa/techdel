import { Routes, Route } from "react-router-dom";

import HomeView from "./components/HomeView";
import CompaniesView from "./components/CompaniesView";
import CompanyView from "./components/CompanyView";
import Header from "./components/Header";
import { API } from "./constants";
import useFetch from "./useFetch";
import "./App.scss";
function App() {
  const { data, loading, error } = useFetch(`${API.GET_ALL}`);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/companies" element={<CompaniesView />}>
          <Route path=":id" element={<CompanyView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
