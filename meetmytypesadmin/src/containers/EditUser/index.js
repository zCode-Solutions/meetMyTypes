
import React, { Component } from 'react';
import Title from '../../components/Title';
import LoveTypesDropDown from '../../components/LoveTypesDropDown';
import spinner from '../Spinner-1s-200px.svg';
import "./style.css";

export default class extends Component {
    state = {
        user: {},
        userLoading: true,
        mainLoveType: '',
        top4LoveTypes: [],
        personalityProfile: ''
    }
    componentDidMount() {
        fetch(
            'https://qj87hoxzmk.execute-api.us-east-1.amazonaws.com/Dev/currentUsers/' + this.props.match.params.uid 
          )
            .then(res => res.json())
            .then(data => {
              this.setState({ user: data});
              this.setState({mainLoveType: data.LoveType});
              this.setState({personalityProfile: data.Description});
              this.setState({top4LoveTypes: data.Top4LoveTypes});
              this.setState({ userLoading: false });
            })
            .catch(err => console.log(err));
    }

    onSelectMainLoveTypeHandler = type => {
        this.setState({mainLoveType: type});
    }

    onSelectTop4LoveTypeHandler = types => {
           this.setState({top4LoveTypes: types});
    }

    onSubmit = e => {
        e.preventDefault();
        const userInfo = {
            Top4LoveTypes: this.state.top4LoveTypes,
            LoveType: this.state.mainLoveType,
            Description: this.state.personalityProfile,
        }
        fetch('https://qj87hoxzmk.execute-api.us-east-1.amazonaws.com/Dev/currentUsers/' + this.state.user.UID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
        .then(data => this.props.history.push('current-users'))
        .catch(err => console.error(err));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="main">
                    <Title
                        title="Edit User"
                        detail="Below you can edit a user's profile information"
                    />
                    {this.state.userLoading ? (
                        <div className="loading"><img src={spinner} alt="loading" /></div>
                    ) : (
                    <div className="edit-user">
                        <div><span>Name:</span><span>{this.state.user.Nickname}</span></div>
                        <div><span>Love Type:</span><span><LoveTypesDropDown onSelectLoveType={this.onSelectMainLoveTypeHandler} selectedTypes={[this.state.mainLoveType]} multiple={false} /></span></div>
                        <div><span>Top 4 Love Types:</span><span><LoveTypesDropDown onSelectLoveType={this.onSelectTop4LoveTypeHandler} selectedTypes={this.state.top4LoveTypes} multiple={true} /></span></div>
                        <div><span>Personality Profile:</span><span><textarea value={this.state.personalityProfile} onChange={(e) => {this.setState({personalityProfile: e.target.value})}} onKeyUp={(e) => {this.setState({personalityProfile: e.target.value})}} /></span></div>
                    </div>)}
                    <div className="input-group">
                        <button
                            type="submit"
                            className="input-group-text bg-primary text-white m-4"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="input-group-text bg-primary text-white m-4"
                            onClick={() => this.props.history.push('/current-users')}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
