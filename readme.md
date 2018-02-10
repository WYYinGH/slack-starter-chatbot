# Reference
This repo extended "Botkit Starter Kit for Slack Bots"
https://github.com/chatbot-tutorials/slack-starter-chatbot

# Resource
Tutorial video: https://www.youtube.com/watch?time_continue=1&v=jTaoU6u1Fcg

Botkit middleware(for NLP): https://github.com/howdyai/botkit/blob/master/docs/readme-middlewares.md

Official Botkit documentation repo: https://github.com/howdyai/botkit

    - Examples: https://glitch.com/edit/#!/magical-hole?path=skills/sample_conversations.js:27:7

# Setup
Watch tutorial video to see how to setup

After first setup, you need to do few things every time you start coding

1. start ngrok(ngrok http 3000) and npm(npm start)
2. copy "https..." from ngrok
3. Go to "api.slack.com", click your slack app, find your bot
4. paste the link + "/oauth" on "OAuth & Permission"
5. go to "Event Subscription" and "Interactive component" paste the link + "/slack/receive"
 
If you want to test after changed, you should restart npm