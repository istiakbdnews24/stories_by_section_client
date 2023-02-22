import React from "react";

const navbar = () => {
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
          <input placeholder="Enter Publicaton" />
        </div>
        <div className="col-2  text-center m-2">
          <input placeholder="Enter Sec ID" />
        </div>
        <div className="col-2  text-center m-2">
          <input placeholder="Enter Start Date" />
        </div>
        <div className="col-2 text-center m-2">
          <input placeholder="Enter End Date" />
        </div>
        <div className="col-2 m-2">
          <button type="button">Submit</button>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@ppp</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@ppp</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@ppp</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@ppp</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default navbar;
