var express = require('express');
var app = express();
const cors = require('cors');
//most importtent thing using express json
app.use(cors());
app.use(express.json());

// imports and intialization
const Additem = require('./routes/add_items')
app.use('/add_item', Additem);



app.listen(2001);