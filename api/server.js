const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('./auth/register/register-router.js');
const usersRouter = require('./users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'success' });
});

server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);

module.exports = server;
