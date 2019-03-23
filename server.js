const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

var port = process.env.PORT|| 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
// exports.detect = function () {

    app.get('/', function (req, res) {
        res.render('index', { results: null, error: null });
    })

    app.post('/', function (req, res) {
        let search = req.body.search;
        let year_start = req.body.year_start;
        let year_end = req.body.year_end;
        let location = req.body.location;
        const url = `https://images-api.nasa.gov/search`;

        let params = {
            q: search,
            year_start: year_start,
            year_end: year_end,
            location: location
        }

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
                    // console.log(response.request.uri)
                    let results = JSON.parse(body)
                    if (results.collection == undefined) {
                        res.render('index', { results: null, error: 'Error, please try again' });
                    } else {
                        res.render('index', { results: results, error: null })
                        // module.exports.results = results;
                    }
                }
        });
    // })
    })
// }

app.listen(port, function () {
    console.log('NASA app listening on port ' + port)
})

//DONT FORGET
//num of search results
//no results returned
//media type selecter