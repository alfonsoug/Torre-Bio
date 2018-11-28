const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({miApi:'works!'});
});

var http = require('http');



function getLinkedinProfile(cb){
    //https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=44&redirect_uri=www.raddarstudios.com&state=DCEeFWf45A53sdfKef424

    var options = {
        host:'https://api.linkedin.com/',
        port:'990',
        path: 'v1/people/~?format=json',
        method:'GET'
    }

    http.request(options, function(res){
        var body ='';

        res.on('data', function(chunk){
            body+=chunk;
        });

        res.on('end', function(){
            var profile = JSON.parse(body);
            console.log(profile);
        })
    }).end();
}

function getLinkedinLogin(cb){
    

    var options = {
        host:'https://www.linkedin.com/',
        port:'990',
        path: 'oauth/v2/authorization?response_type=code&client_id=44&redirect_uri=www.raddarstudios.com&state=DCEeFWf45A53sdfKef424',
        method:'GET'
    }

    http.request(options, function(res){
        var body ='';

        res.on('data', function(chunk){
            body+=chunk;
        });

        res.on('end', function(){
            var login = JSON.parse(body);
            console.log(loogin);
        })
    }).end();
}

module.exports = router;