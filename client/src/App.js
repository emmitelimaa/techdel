import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeView from "./components/HomeView";
import UsersView from "./components/UsersView";
import UserView from "./components/UserView";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (value) => {
    console.log(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api");
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
        <Route path="/" element={<HomeView addCompany={handleSubmit} />} />
        <Route path="/users" element={<UsersView />}>
          <Route path=":id" element={<UserView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
