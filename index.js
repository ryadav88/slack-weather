var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var format = ".json";
var apikey = process.env.WU_ACCESS

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.post('/post', function(req, res){
  var query = req.body.text
  var parsed_url = url.format({
    pathname: 'http://api.wunderground.com/api/' + apikey + '/conditions/q/' + req.body.text + format,
  });


  console.log(parsed_url);

  request(parsed_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var first_url = data.current_observation.temperature_string;
      var weatherC = data.current_observation.weather
      var icon_url = data.current_observation.icon_url
      var location = data.current_observation.display_location.full

      var body = {
        response_type: "in_channel",
        "attachments": [
          {
        "text": "Location: " + location + "\n" + "Temperature: " + first_url + "\n" + "Condition: " + weatherC,
        "image_url": icon_url,
          }
        ]
      };

      res.send(body);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
