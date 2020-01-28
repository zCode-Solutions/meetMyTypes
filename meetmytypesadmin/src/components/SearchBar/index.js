import React, { Fragment } from "react";
import "./style.css";

export default () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 text-center">
            <form className="mt-4" >
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Enter User Email ...."
                  className="form-control"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
