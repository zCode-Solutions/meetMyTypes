import React, { Component, Fragment } from 'react';
import './style.css';
import UserSearchResults from '../../containers/UserSearchResults';

class SearchBar extends Component {
  state = {
    users: [],
    searchQuery: '',
    searchResults: [],
    searching: false,
  };

  componentDidMount() {
    fetch(
      'https://qj87hoxzmk.execute-api.us-east-1.amazonaws.com/Dev/currentUsers'
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }

  onSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.getSearchResults(this.state.users, this.state.searchQuery);
    this.setState({
      searchQuery: '',
    });
  };

  getSearchResults = (usersData, query) => {
    const results = usersData.find((user) => user.email === query);
    this.setState({
      searchResults: [results],
      searching: true,
    });
  };

  render() {
    const { searchQuery, searchResults, searching } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4 text-center">
              <form className="mt-4">
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Enter User Email ...."
                    className="form-control"
                    value={searchQuery}
                    onChange={this.onSearchChange}
                  />
                  <div className="input-group-append">
                    <button
                      onClick={this.onSearchSubmit}
                      className="input-group-text bg-danger text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        {!searching ? null : (
          <UserSearchResults searchResults={searchResults} />
        )}
      </Fragment>
    );
  }
}

export default SearchBar;
