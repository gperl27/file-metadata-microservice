var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    res.render('index');
});

app.post('/fileData', upload.single('upload'), function(req, res){
    //console.log(req.file);
    res.json({
        filesize: req.file.size + ' bytes'
    });
});

app.listen(port, function(){
    console.log("Listening on port: " + port);
});