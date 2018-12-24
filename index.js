const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
require('./services/passport');

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());


require('./routes/googleAuth')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);