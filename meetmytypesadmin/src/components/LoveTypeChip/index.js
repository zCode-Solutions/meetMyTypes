import React,{Fragment} from 'react'
import "./style.css";


export default props => {
    return (
        <Fragment>
        <div className=" col-md-6 col-lg-3 ">
        <div className="chip d-flex justify-content-between">
            <p>{props.loveType}</p>
            <p style={{fontSize: "25px"}}>{props.numOfType}</p>
          </div>
      </div>
        </Fragment>
    )
}
