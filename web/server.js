const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Containers = require('./models/Container.js')
const Regions = require('./models/Region.js')
const Keywords = require('./models/Keyword.js')

const developmrent = process.env.NODE_ENV == 'development'

const port = process.env.PORT || (developmrent ? 6000 : 5000);
mongoose.set('useFindAndModify', false);


let MONGO_CONNECT_COUNT = 0
const MONGO_CONNECTION = `mongodb://${developmrent ? 'localhost:27018' : 'mongo'}/conterdb_v2`
mongoose.connect(MONGO_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'build')));
app.get('/app/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const animationsController = require('./controllers/animations');
const groupsController = require('./controllers/groups');
const devicesController = require('./controllers/devices');
const keywordsController = require('./controllers/keywords');
const containersController = require('./controllers/containers');

app.use('/api/animations', animationsController);
app.use('/api/groups', groupsController);
app.use('/api/devices', devicesController);
app.use('/api/keywords', keywordsController);
app.use('/api/containers', containersController);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  if (!developmrent) {
    await Keywords.updateMany({ reserved: true }, { reserved: false, running: false });
    if (MONGO_CONNECT_COUNT == 0) {
      await Regions.find().deleteMany().exec()
      await Containers.find().deleteMany().exec()
    }
  }
  console.log(`mongoose connected : ${MONGO_CONNECT_COUNT}`)
  MONGO_CONNECT_COUNT++
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => console.log(`Listening on port ${port}`));




