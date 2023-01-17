global.__basedir = __dirname;
// const dbConnector = require('./config/database');
require('dotenv').config()
const apiRouter = require('./router');
const cors = require('cors')
const { errorHandler } = require('./utils');
const express = require('express');

// dbConnector()
//   .then(() => {
    const config = require('./config');

    const app = express();
    require('./config/express')(app);

    app.use('/uploads', express.static('uploads'))

    app.use(cors({
      origin: config.origin,
      // credentials: true
    }));

    app.use((req, res, next) => {
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
      next();
    })

    app.use('/api', apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));