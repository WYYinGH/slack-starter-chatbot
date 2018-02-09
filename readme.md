# Botkit Starter Kit for Slack Bots


This repo is a stripped down version of the official Botkit starter kit. 

Check out the full repo here: (https://github.com/howdyai/botkit-starter-slack)

Also checkout the official Botkit documentation repo here: (https://github.com/howdyai/botkit/blob/master/docs/readme.md#developing-with-botkit)


# Resource
Tutorial vedio: https://www.youtube.com/watch?time_continue=1&v=jTaoU6u1Fcg

botkit middleware(for NLP): https://github.com/howdyai/botkit/blob/master/docs/readme-middlewares.md



After setup, every time start coding you need to

1. start ngrok(ngrok http 3000) and npm(npm start)
2. copy "https..." from ngrok
3. Go to "api.slack.com", click your slack app, find your bot
4. paste the link + "/oauth" on "OAuth & Permission"
5. go to "Event Subscription" paste the link + "/slack/receive"
 
when you want to test after change, you should restart npm