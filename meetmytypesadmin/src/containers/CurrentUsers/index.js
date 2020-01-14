import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import UserCard from "../../components/UserCard";
import {jason_keys} from '../../config/aws_keys';
import * as AWS from 'aws-sdk';

export default class extends Component {
  loveTypes = ['Chameleon', 'Blank 1', 'Blank 2'];
  state = {
    users: [],
    loading: true
  }

  componentDidMount() {
    let awsConfig = {
        "region": "us-east-1",
        "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
        "accessKeyId": jason_keys.accessKeyId, "secretAccessKey": jason_keys.secretAccessKey
    };
    AWS.config.update(awsConfig);

    let docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName : 'Users',
      //FilterExpression : 'Year = :this_year',
      //ExpressionAttributeValues : {':this_year' : 2015}
    };
    docClient.scan(params, (err, data) => {
        if (err) {
            console.log("componentDidMount()::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("componentDidMount()::success - " + JSON.stringify(data, null, 2));
            this.setState({users: data.Items});
            this.setState({loading: false});
            setTimeout(() => {console.log(this.state.users)}, 2000);
        }
    })
  }
  render() {
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Current Users"
            detail="Below is a list of current users"
          />
          <div>
            {!this.state.loading && this.state.users.map(user => {
              console.dir(user);
              return <UserCard key={user.UID} name={user.Nickname} loveType={this.loveTypes[user.LoveType]} />
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
