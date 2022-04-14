const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

app.use(cors())

app.use(express.static(__dirname + '/dist/siemens-Project'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/siemens-Project/index.html'));
});


app.listen(process.env.PORT || 8080);