'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.use(require('connect-nocache')());

var notes = [
    {id: 1, title: 'note 1', description: 'description 1', content: 'content 1', category: {id: 1}},
    {id: 2, title: 'note 2', description: 'description 2', content: 'content 2', category: {id: 2}},
    {id: 3, title: 'note 3', description: 'description 3', content: 'content 3', category: {id: 2}},
    {id: 4, title: 'note 4', description: 'description 4', content: 'content 4', category: {id: 3}}
];

app.get('/api/notes', function(req, res) {
  res.json(200, notes);
});