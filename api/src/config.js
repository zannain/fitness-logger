require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {
    DEVDBCLUSTER,
    DEVDBUSER,
    DEVDBPASSWORD,
    DEVDBNAME
} = process.env;

const url =`mongodb+srv://${DEVDBUSER}:${DEVDBPASSWORD}@${DEVDBCLUSTER}/${DEVDBNAME}`;
const db = mongoose.connection;

mongoose.connect(url, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${DEVDBNAME}`));
//Bind connection to error event (to get notification of connection errors)