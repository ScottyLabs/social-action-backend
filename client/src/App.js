import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import api from './api'

import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import "./App.css";
// import { getRandomPhotoURL } from "./unsplash.js";

import Table from "./Table";
//import "./App.css";

const Categories = ({ values }) => {
  return (
    <>
      {values.map((category, idx) => {
        return (
          <span key={idx} className="badge">
            {category}
          </span>
        );
      })}
    </>
  );
};


function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Business Details",
        columns: [
          {
            Header: "Name",
            accessor: "firm_name"
          },
          {
            Header: "Categories",
            accessor: "categories",
            Cell: ({ cell: { value } }) => <Categories values={value} />
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Products",
            accessor: "work_description"
          },
          {
            Header: "Phone #",
            accessor: "phone_number"
          },
          {
            Header: "Address",
            accessor: "physical_address"
          },
          {
            Header: "Website",
            accessor: "website"
            //Cell: ({ cell: { value } }) => <Genres values={value} />
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result =  await api.pipeAllBis()//await axios("https://api.tvmaze.com/search/shows?q=snow");
      console.log(result)
     // console.log(result.data)
      setData(result.data.data);
    })();
  }, []);

  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>PGH Keeps Tabs</h2>
      </header>
    );
  };

  return (
    <>
    <HomePageHeader />
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
    </>
  );
}

export default App;
