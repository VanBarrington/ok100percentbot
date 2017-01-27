require('./app/exit.js');

var Slackbot = require('slackbots');

var bot = new Slackbot({
    token: ,
    name: 'memebot'
});

bot.on('start', () => {
    var params = {
        icon_emoji: ':100:'
    };

    //bot.postMessageToChannel('programming', 'what the fuck did you just say to me', params);
});

bot.on('message', data => {
    var {type, channel, text} = data;
    if (type === 'message' && text.includes('test')) {
        bot.postMessage(channel, 'test');
    } 
});

// bot.getChannel('programming').then(o => {
//     console.log(o);
// });