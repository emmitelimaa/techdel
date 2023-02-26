import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const results = await response.json();
          setData(results);
        } else {
          console.log(
            `Server error: ${response.status} ${response.statusText}`
          );
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    // call the function
    fetchData(url);
  }, []);

  return { data, loading, error };
}
