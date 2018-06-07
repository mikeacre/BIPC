import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


export default class User extends Component{

  render() {
    return(
      <option>this.props.user.username</option>
    );
  }

}
