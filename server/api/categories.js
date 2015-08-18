'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.use(require('connect-nocache')());

var categories = [
    {id: 1, icon: '../images/testing.png', name: 'Testing'},
    {id: 2, icon: '', name: 'Bash'},
    {id: 3, icon: '', name: 'Idea'},
    {id: 4, icon: '', name: 'Personal Note'},
    {id: 5, icon: '', name: 'Question'},
    {id: 6, name: 'Best Practice'}
];

app.get('/api/categories', function(req, res) {
  res.json(200, categories);
});