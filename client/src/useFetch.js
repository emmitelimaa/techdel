import { useState, useEffect } from "react";

export default function useFetch(url, updater = [], options = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (url, options) => {
      console.log("UseFetch Called", url);
      try {
        setLoading(true);

        const response = await fetch(url, options);
        if (response.ok) {
          const results = await response.json();
          setData(results);
        } else {
          setError(`Server error: ${response.status} ${response.statusText}`);
          console.log(
            `Server error: ${response.status} ${response.statusText}`
          );
        }
      } catch (err) {
        setError(`${err}`);
      } finally {
        setLoading(false);
      }
    };
    // call the function
    fetchData(url, options);
  }, updater);

  return { data, loading, error };
}
