import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReposList from "../ReposList";
import { API } from "../../constants";
import CompanyDrawer from "../CompanyDrawer";
import useFetch from "../../useFetch";
export default function CompanyView() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);

  const { data } = useFetch(API.GET_COMPANY(id), [id]);
  document.addEventListener("onDrawerOpen", (e) => {
    setIsOpen(!isOpen);
  });
  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data && (
        <CompanyDrawer
          isOpen={isOpen}
          company={data}
          onClose={toggleDrawer(isOpen)}
        >
          {data.repos && <ReposList repos={data.repos} />}
        </CompanyDrawer>
      )}
    </>
  );
}
