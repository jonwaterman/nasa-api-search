// const express = require('express');
// const bodyParser = require('body-parser');
// const request = require('request');
// var sourceFile = require('./server.js')
// const app = express()

// sourceFile.detect().then(results => {

//     app.use(express.static('public'));
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.set('view engine', 'ejs')

//     app.post('/', function (req, res) {
        
//         let url = `https://images-api.nasa.gov/metadata/`;

//         url += sourceFile.results.collection.items[0].data[0].nasa_id;
//         const options = {
//             uri: url
//         };
//         console.log(sourceFile.results.collection.items[0])
        
//         request(options, function (err, response, body) {
//             if (err) {
//             } else {
//                 // console.log(response.request.uri)
//                 if(!err){
//                     let metadata_location = JSON.parse(body)
//                     console.log(metadata_location)
//                         }
//             }
//         });
// })})


//             // url2 += results.collection.items[0].data[0].nasa_id;
//             // const options2 = {
//             //     uri: url2
//             // }
//             // request(options2, function (err, response, body) {
//             //     if(!err){
//             //         let metadata_location = JSON.parse(body)
//             //         console.log(metadata_location)
//             //     }

//             // });

//             // const url3 = metadata_location;
//             // const options3 = {
//             //     uri: url3
//             // }
//             // request2(options2, function (err, response, body) {
//             //     // if (err) {
//             //     //     res.render('index', { metadata: null, error: 'Error, please try again' });
//             //     // } else {
                    
//             //         let metadata = JSON.parse(body)
//             //         console.log(metadata)
//             //         // if (results.collection == undefined) {
//             //         //     res.render('index', { metadata: null, error: 'Error, please try again' });
//             //         // } else {
//             //         //     res.render('index', { metadata: metadata, error: null })
//             //         // }
//             //     // }
//             // });
        

//     // })

//     // app.listen(port, function () {
//     //     console.log('NASA app listening on port ' + port)
//     // })

//     //DONT FORGET
//     //num of search results
//     //no results returned
//     //media type selecter