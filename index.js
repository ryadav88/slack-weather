var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var format = ".json";
var host = 'http://api.wunderground.com/api/' + apikey;
console.log('Host: ' + host);
var path = "/conditions/q/" + query + format;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.post('/post', function(req, res){
  var parsed_url = host + path;
  console.log(parsed_url);

  request(parsed_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var first_url = data.response.current_observation.station_id;

      var body = {
        response_type: "in_channel",
        text: first_url
      };

      res.send(body);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
