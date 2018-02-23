import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Header from '../imports/ui/Header.js';
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<Header />, document.getElementById('header'));
  render(<App />, document.getElementById('root'));
});