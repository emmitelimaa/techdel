import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../constants";
export default function CompanyView(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      console.log("id", id);
      let response = await fetch(`/api/companies/${id}`);
      if (response.ok) {
        let listItem = await response.json();
        setData(listItem);
        console.log(listItem);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`);
    }
  };
  useEffect(() => {
    console.log(id);
    getData();
  }, [id]);
  return (
    <>
      <h2>{data.company_name}</h2>
    </>
  );
}
