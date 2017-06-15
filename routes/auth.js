const express = require('express');
const router = express.Router();

const localAuth = require('../src/server/auth/local');
const authHelpers = require('../src/server/auth/_helpers');

router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req)
  .then((user) => { return localAuth.encodeToken(user[0]); })
  .then((token) => {
    res.status(200).json({
      status: 'success',
      token: token
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error'
    });
  });
});

router.post('/login', (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
    console.log('pobeda: ' + username + " " + password);
  return authHelpers.getUser(username)
  .then((response) => {
    authHelpers.comparePass(password, response.password);
    return response;
  })
  .then((response) => {
    return localAuth.encodeToken(response);
  })
  .then((token) => {
    res.status(200).json({
      status: 'success',
      token: token
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error'
    });
  });
});

module.exports = router;
