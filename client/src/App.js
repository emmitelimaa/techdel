import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import UserView from "./views/UserView";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("/api");
      // convert the data to json
      const json = await data.json();
      console.log(json);
      // set state with the result
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
