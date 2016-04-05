A slackbot which takes in a zip code and displays the conditions for that location.

## Prerequisites:
* Create an account on [Heroku](https://signup.heroku.com/).
* Create a developer API key on [Weather Underground](http://api.wunderground.com/api).
* Make sure you have Node and Git installed. You can use [Homebrew](http://brew.sh/) to install them.

```
brew install node git
```

## Installation and running
Once you have the 3 files setup, jump to weather-slackbot folder and install all the dependencies.

```
npm i
```

After npm is finished installing dependencies, run:

```
node index.js
```

The app is running. Visit http://localhost:9001. You should see “Running!!”. It is now listening for requests at port 9001.


## Deploying to Heroku
Now we have to deploy this code to Heroku where Slack can send requests. If you haven’t signed up for a Heroku account yet, do it now. Then install the heroku toolbelt, login, create the app, and finally push it. Follow and run these commands:

```
brew install heroku-toolbelt
heroku login
heroku create
git push heroku master
```
To check if it is working, type:

```
heroku open
```
and you see see the “Running!!” message. Now go ahead and add the Weather Underground API key under WU_ACCESS
```
heroku config:add WU_ACCESS=[your API key]
```
Check the Heroku dashboard to see if your app is there.

## Slack setup
Open slack, go to your team’s [custom integration page](https://my.slack.com/services/new/slash-commands) and add a slash command.

Read this [blog post](http://www.yravi.com) for a better understanding
