'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.use(require('connect-nocache')());

var userRoles = {
  'public': 1, // 001
  user: 2, // 010
  admin: 4 // 100
};

var users = {
  'joe.black': {
    password: 'death',
    role: userRoles.user
  },
  'admin': {
    password: 'super',
    role: userRoles.admin
  }
};

app.post('/api/auth', function(req, res) {
  var login = req.body.login,
      password = req.body.password;

  if (users[login] && users[login].password == password) {
    res.setHeader("Authorization", "ZG9cddlfSDDf3rf=");
    res.json(200, {role: users[login].role});
  }
  else
    res.send(401);
});