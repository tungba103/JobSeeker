const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./app/routes/account')(app);
require('./app/routes/candidate')(app);
require('./app/routes/company')(app);
require('./app/routes/job')(app);
require('./app/routes/tag')(app);

app.listen(5000, () => console.log('Server listening on http://localhost:5000'));
