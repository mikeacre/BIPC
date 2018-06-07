import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Users } from '../api/users.js';

export default class User extends Component{

  render() {
    return(
      <option>this.props.user.username</option>
    );
  }

}
