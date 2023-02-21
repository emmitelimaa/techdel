import { Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import UserView from "./views/UserView";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello, welcome to React
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
