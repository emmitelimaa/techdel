import "./App.css";
import { useEffect } from "react";
import Hello from "./components/Hello";

function App() {
  useEffect(() => {
    async function foo() {
      const data = await fetch("/");
      console.log(data);
    }
    foo();
  }, []);
  return <Hello />;
}

export default App;
