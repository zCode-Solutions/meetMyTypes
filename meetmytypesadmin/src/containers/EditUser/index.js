import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import "./style.css";

export default class extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const url = "http://localhost:3004/users";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    // const newUser = this.state.users.map(user => {
    //   return <NewUserList key={user.id} user={user}/>;
    // });
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Edit User"
            detail="Below you can edit a user's profile information"
          />
          <div className="row">
            <form className=" col-6 mx-auto border border-light p-2" action="#!">

            <label for="defaultContactFormName">Name</label>
              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
              />

              <label for="defaultContactFormEmail">Email</label>
              <input
                type="email"
                id="defaultContactFormEmail"
                className="form-control mb-4"
                placeholder="@"
              />
              <label for="defaultContactFormLoveType">Love Type</label>
              <select className="browser-default custom-select mb-4">
                <option value="" disabled>
                  Choose option
                </option>
                <option value="1" selected>
                Chameleon
                </option>
                <option value="2">Chameleon</option>
                <option value="3">Chameleon</option>
                <option value="4">Chameleon</option>
              </select>

              <div className="form-group">
              <label for="exampleFormControlTextarea2">Personality Profile</label>

                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-flex justify-content-around">
              <button className="btn btn-primary btn-lg" type="submit">
                Submit
              </button>
              <button className="btn btn-primary btn-lg" type="cancel">
              Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
