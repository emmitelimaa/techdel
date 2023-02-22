import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import UserView from "./views/UserView";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
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
      <span>Hello, welcome to React</span>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/users" element={<UsersView />}>
          <Route path=":id" element={<UserView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
