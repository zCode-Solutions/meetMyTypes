import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
import "./style.css";

export default () => {
  return (
    <Fragment>
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            
          >
            <Link to="/details">
              <img src={faker.image.avatar()} alt={faker.name.findName()} className="card-img-top" />
            </Link>
          </div>

          <div className="card-footer ">
            <p className=" mb-0 ">{faker.name.findName()}</p>
            <h5 className="text-blue font-italic mb-3">
              <span className="mr-1">Chameleon</span>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
