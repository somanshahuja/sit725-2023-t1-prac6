// var express = require('express');
// var app = express();
// var port = process.env.port || 3000;
// require('./dbConnect');

// app.use(express.static(__dirname+'/public'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// let router = require('./routes/routes');

// app.use('/api/projects', router);

// app.listen(port, () => {
//     console.log('App listening to: ' + port);
// });


var express = require('express');
var app = express();
require('./dbConnect');
let router = require('./routes/routes');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App listening to: ' + port);
});