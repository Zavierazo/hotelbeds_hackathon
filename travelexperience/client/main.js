import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Header from '../imports/ui/Header.js';
import Main from '../imports/ui/Main.js';
 
Meteor.startup(() => {
  render(<Header />, document.getElementById('header'));
  render(<Main />, document.getElementById('root'));
});