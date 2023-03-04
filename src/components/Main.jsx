import React, { useState } from "react";
import axios from "axios";
import date from "date-and-time";
import { sections } from "./sections";



const Main = () => {
  const [inputPub, setInputPub] = useState("");
  const [inputSec, setInputSec] = useState("");
  const [inputStart, setInputStart] = useState("");
  const [inputEnd, setInputEnd] = useState("");
  const [allData, setAllData] = useState([]);

  const pubHandleChange = (e) => {
    setInputPub(e.target.value);
  };

  const secHandleChange = (e) => {
    setInputSec(e.target.value);
  };

  const startHandleChange = (e) => {
    let date1 = new Date(e.target.value);
    let timeformat1 = date.format(date1, "DD-MM-YYYY [GMT]Z", true);
    let timetrim1 = timeformat1.slice(0, 10);
    setInputStart(timetrim1);
  };

  const endHandleChange = (e) => {
    let date2 = new Date(e.target.value);
    let timeformat2 = date.format(date2, "DD-MM-YYYY [GMT]Z", true);
    let timetrim2 = timeformat2.slice(0, 10);
    setInputEnd(timetrim2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(
        `http://localhost:3000/stories/?from=${inputStart}&to=${inputEnd}&id=${inputSec}&pub=${inputPub}`
      )
      .then((response) => setAllData(response.data[0].data))

    setInputPub("");
    setInputSec("");
    setInputStart("");
    setInputEnd("");
  };

  return (
    <div>
      <div className="row pb-3 pt-3">
        <div className="col-12 text-center">
          <h1>bdnews24.com</h1>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-1"></div>

        <div className="col-2 text-center">
          <select className="w-100" value={inputPub} onChange={pubHandleChange}>
            <option>Select Publication</option>
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
        <div className="col-2  text-center ">
          <select className="w-100" value={inputSec} onChange={secHandleChange}>

            {sections.map((r)=>(
              <option value={r.sectionID}>{r.sectionName}</option>
            ))}
     
          </select>
        </div>

        <div className="col-2   text-center ">
          <input type="date" onChange={startHandleChange} />
        </div>

        <div className="col-2  text-center ">
          <input type="date" onChange={endHandleChange} />
        </div>

        <div className="col-2  ">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="col-1"></div>
      </div>

      <table className="table ">
        <thead>
          <tr >
            <th >No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">URL</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((a) => (
            <tr>
              <th scope="row">{a.no}</th>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>
                <a href={a.URL} target="_blank">
                  {a.URL}
                </a>
              </td>
              <td>{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
