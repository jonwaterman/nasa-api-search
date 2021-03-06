const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

var port = process.env.PORT|| 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { results: null, error: null });
})

app.post('/', function (req, res) {
    //Gets values from the inputs in ejs file
    let search = req.body.search;
    let year_start = req.body.year_start;
    let year_end = req.body.year_end;
    let location = req.body.location;
    
    let include_image = req.body.include_image == 'on';
    let include_video = req.body.include_video == 'on';
    let include_audio = req.body.include_audio == 'on';

    let media_type = "";

    //Adds on a media type to search for if the corresponding box is checked
    if(include_image) {
        media_type += "image,";
    }
    if(include_video) {
        media_type += "video,";
    }
    if(include_audio) {
        media_type += "audio,";
    }
    
    const url = `https://images-api.nasa.gov/search`;

    let params = {
        q: search,
        year_start: year_start,
        year_end: year_end,
        location: location,
        media_type: media_type
    }

    //If a certain parameter is not entered, the corresponding key is deleated from the dictionary so it is not put in the url
    if(params["year_start"] == ""){
        delete params["year_start"];
    }
    if(params["year_end"] == ""){
        delete params["year_end"];
    }
    if(params["location"] == ""){
        delete params["location"];
    }

    const options = {
        uri: url,
        qs: params
    };

    request(options, function (err, response, body) {
        if (err) {
            res.render('index', { results: null, error: 'Error, please try again' });
        } else {
            let results = JSON.parse(body)
            if (results.collection == undefined) {
                res.render('index', { results: null, error: 'Error, please try again' });
            } else {
                res.render('index', { results: results, error: null })
            }
        }
    });
})

app.listen(port, function () {
    console.log('NASA app listening on port ' + port)
})