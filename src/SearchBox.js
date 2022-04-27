import React from "react";

export default function SearchBox() {
  return (
    <section className="App">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="Search for a city"
              id="city"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="search"
            >
              Search
            </button>
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-success btn-block"
              id="geoTarget"
            >
              Current City
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
