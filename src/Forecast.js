import React from "react";

export default function Forecast() {
  return (
    <div className="row App">
      <div className="col-sm-1"></div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Mon</h5>
            <i className="fa-solid fa-sun"></i>
            <p className="card-text">32°</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tue</h5>
            <i className="fa-solid fa-sun"></i>
            <p className="card-text">32°</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Wed</h5>
            <i className="fa-solid fa-sun"></i>
            <p className="card-text">33°</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Thu</h5>
            <i className="fa-solid fa-cloud"></i>
            <p className="card-text">33°</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Fri</h5>
            <i className="fa-solid fa-cloud"></i>
            <p className="card-text">32°</p>
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
}
