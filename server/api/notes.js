'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.use(require('connect-nocache')());

var notes = [
    {id: 1, title: 'note 1', description: 'description 1', content: 'content 1'},
    {id: 2, title: 'note 2', description: 'description 2', content: 'content 2'}
];

app.get('/api/notes', function(req, res) {
  res.json(200, notes);
});