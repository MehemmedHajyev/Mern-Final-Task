const express = require('express');
const router = require('./Routing/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const bcript = require("bcrypt")


console.log(bcript.genSaltSync());
