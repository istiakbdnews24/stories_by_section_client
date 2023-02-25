import React, { useState } from "react";
import axios from "axios";


const Main = () => {
  const [inputPub, setInputPub] = useState("");
  const [inputSec, setInputSec] = useState("");
  const [inputStart, setInputStart] = useState();
  const [inputEnd, setInputEnd] = useState();
  const [allData, setAllData] = useState([]);

  const pubHandleChange = (e) => {
    setInputPub(e.target.value);
  };

  const secHandleChange = (e) => {
    setInputSec(e.target.value);
  };

  const startHandleChange = (e) => {

    let date1 = new Date(e.target.value);
    console.log(date1);

    const timeformat = date.format(date1, "DD-MM-YYYY");
    setInputStart(timeformat);
   
  };

  const endHandleChange = (e) => {

    let date2 = new Date(e.target.value);
    console.log(date2);

    setInputEnd(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await axios
      .get(
        `http://localhost:3000/stories/?from=${inputStart}&to=${inputEnd}&id=${inputSec}&pub=${inputPub}`
      )
      .then((response) => setAllData(response.data[0].data));

    setInputPub("");
    setInputSec("");
    setInputStart("");
    setInputEnd("");
  };


 console.log(inputStart); 

  return (
    <div>
      <div className="row pb-3 pt-3">
        <div className="col-12 text-center">
          <h1>bdnews24.com</h1>
        </div>
      </div>
      <div className="row  pb-4">
        <div className="col-1"></div>

        <div className="col-2 text-center m-2">
          <select className="w-100" value={inputPub} onChange={pubHandleChange}>
            <option>Select Publication</option>
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
        <div className="col-2  text-center m-2">
          <select className="w-100" value={inputSec} onChange={secHandleChange}>
            <option>Select Section</option>
            <option value="39267">Arts (Bangla)</option>
            <option value="38864">Sports (English)</option>
          </select>
        </div>
        <div className="col-2  text-center m-2">
          <input
            type="date"
            // type="text"
            value={inputStart}
            onChange={startHandleChange}
            placeholder="Enter start time"
          />

        </div>
        <div className="col-2 text-center m-2">
          <input
            // type="date"
            type='date'
            value={inputEnd}
            onChange={endHandleChange}   
            placeholder="Enter end time"
          />
        </div>
        <div className="col-2 m-2">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="col-1"></div>
      </div>

      <table class="table  m-5 ">
        <thead>
          <tr>
            <th scope="col">No</th>
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
