import './exit';
import config from './config';
import Botkit from 'botkit';
//console.log(process.env.test);

let token = config.slackToken || process.env.slack_token;

let controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: token
}).startRTM();

controller.hears(['test', 'hey memebot'], ['ambient', 'message_received', 'direct_mention', 'direct_message'], function(bot, message) {    
    console.log(message);
    bot.reply(message, 'what the fuck u want');
});

process.on("SIGINT", function () {
  //graceful shutdown
  process.exit();
});